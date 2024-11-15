using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Conexion_BD
{
    public class Registro
    {
        public string name { get; set; }
        public string apellido { get; set; }
        public string email { get; set; }
        public string telefono { get; set; }
        public string nameGerente { get; set; }
        public string emailGerente { get; set; }
        public DateTime fech_inicio { get; set; }
        public DateTime fech_fin {  get; set; }
        public string descripcion   { get; set; }

    }
}
