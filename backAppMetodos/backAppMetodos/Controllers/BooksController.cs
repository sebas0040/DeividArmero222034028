using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using backAppMetodos;
using Dapper;
using Microsoft.AspNetCore.Http;

namespace backAppMetodos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly string _connectionString = "Server=DESKTOP-SSEIQRS\\MSSQLSERVER01;Database=bookstore;User Id=sa;Password=12345678;TrustServerCertificate=true;";
        [HttpPost("register")]
        public IActionResult Register([FromBody] Books book)
        {
            if (book == null)
            {
                return BadRequest("Invalid user data.");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "INSERT INTO libros (titulo, autor, editorial, anoPublicacion,precio,stock,categoria) VALUES (@titulo, @autor, @editorial, @anoPublicacion,@precio,@stock,@categoria)";
                var rowsAffected = connection.Execute(sql, new { book.titulo, book.autor, book.editorial, book.anoPublicacion, book.precio, book.stock, book.categoria });
                if (rowsAffected > 0)
                {
                    return Ok(new { message = "Book updated successfully" });
                }
                else
                {
                    return StatusCode(500, "An error occurred while registering the Book.");
                }
            }

        }

        [HttpPut("update/{id}")]
        public IActionResult Update(int id, [FromBody] Books book)
        {
            if (book == null)
            {
                return BadRequest("Invalid user data.");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "UPDATE libros SET titulo = @titulo, autor = @autor, editorial=@editorial, anoPublicacion=@anoPublicacion, precio=@precio, stock=@stock, categoria=@categoria WHERE id = @Id";
                var rowsAffected = connection.Execute(sql, new { Id = id, book.titulo,book.autor,book.editorial,book.anoPublicacion,book.precio,book.stock,book.categoria });

                if (rowsAffected > 0)
                {
                    return Ok(new { message = "Book updated successfully" });
                }
                else
                {
                    return NotFound("Book not found.");
                }
            }
        }
        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "DELETE FROM libros WHERE id = @id";
                var rowsAffected = connection.Execute(sql, new { id });
                if (rowsAffected > 0)
                {
                    return Ok(new { message = "Book deleted successfully" });
                }
                else
                {
                    return NotFound("User Not found.");
                }

            }
        }

        [HttpGet("getBooks")]
        public IActionResult GetBook()
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    var sql = "SELECT * FROM libros";
                    var books = connection.Query<Books>(sql).ToList();

                    if (books == null || books.Count == 0)
                    {
                        return NotFound("Users Not Found");
                    }

                    return Ok(books);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        //// Método para obtener un usuario por su ID
        [HttpGet("getBookById/{id}")]
        public IActionResult GetUserById(int id)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    // Consulta SQL para obtener el usuario por ID
                    var sql = "SELECT * FROM libros WHERE Id = @Id";

                    // Usamos Dapper para ejecutar la consulta
                    var book = connection.QuerySingleOrDefault<Books>(sql, new { Id = id });

                    // Si no se encuentra el usuario
                    if (book == null)
                    {
                        return NotFound($"User with ID {id} not found.");
                    }

                    // Devolvemos el usuario encontrado
                    return Ok(book);
                }
            }
            catch (Exception ex)
            {
                // Si hay un error, devolvemos un mensaje de error
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

    }
}
