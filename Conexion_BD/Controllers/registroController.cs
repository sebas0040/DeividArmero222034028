using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace Conexion_BD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistroController : ControllerBase
    {
        private readonly string conexion_db = "Server=DESKTOP-SSEIQRS\\MSSQLSERVER01;Database=registroDB;User Id=sa;Password=12345678;TrustServerCertificate=true;";

        [HttpPost("register")]
        public IActionResult Register([FromBody] Registro registro)
        {
    
            if (registro == null) {
                return BadRequest("Invalid user data.");
            }

            using (var conection = new SqlConnection(conexion_db))
            {
                var sql = "insert into registro (name, apellido, email, telefono, nameGerente, emailGerente, fech_inicio, fech_fin, descripcion) values (@name, @apellido, @email, @telefono, @nameGerente, @emailGerente, @fech_inicio, @fech_fin, @descripcion)";
                var result = conection.Execute(sql, new { registro.name, registro.apellido, registro.email, registro.telefono, registro.nameGerente, registro.emailGerente, registro.fech_inicio, registro.fech_fin, registro.descripcion });
                Console.WriteLine(result.ToString());
                if (result > 0)
                {

                    return Ok("El usuario se registro correctamente");
                }
                else
                {
                    return StatusCode(500, "An error occurred while registering the user.");
                }

            }
        }

        [HttpPost("search")]
        public IActionResult Search([FromBody] Search registro)
        {
            if (registro == null)
            {
                return BadRequest("invalid user data");
            }

            using (var connection = new SqlConnection(conexion_db))
            {
                var sql = "SELECT * FROM registro WHERE LOWER(apellido) LIKE LOWER(@apellido) + '%' AND email=@email";
                var result = connection.QuerySingleOrDefault<Registro>(sql, new { registro.apellido, registro.email });
                if (result != null)
                {
                    return Ok("Search Successful");
                }
                else
                {
                    return Unauthorized("User not found");
                }
            }
        }
    }

}
