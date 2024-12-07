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
                    return Ok("Book registered successfully.");
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
                    return Ok("User updated successfully.");
                }
                else
                {
                    return NotFound("User not found.");
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
                    return Ok(new { message = "User deleted successfully" });
                }
                else
                {
                    return NotFound("User Not found.");
                }

            }
        }
    }
}
