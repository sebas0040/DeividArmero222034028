#Mi Proyecto



2/11/2024
vamos a instalar primero sql server https://www.microsoft.com/es-co/sql-server/sql-server-downloads utilizamos el de desarrollador

instalar visual studio 2022 https://visualstudio.microsoft.com/es/vs/ la version commyunity 2022

instalar https://learn.microsoft.com/es-es/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16



$ ng g s services/login para generar un servicio entonces debemos usar un modulo que se llama asi como usamos el ng module vamos a usar uno que se llama http module, entonces en app.config.ts el app.config.ts engloba lo que es la aplicacion como lo hacemos, escogemos la añadimos el modulo a esta linea:
importProvidersFrom(BrowserAnimationsModule, HttpClient) siendo este segundo el importante

lo primero para conectarnos a la api es tener en cuente que la api es una url, esa api se ejecuta en el mismo servidor donde se ejecuta en el servidor pero tambien puede ser util usar apis externas, esa api tiene unos metodos que puedo consumirlos, por ahora en el archivo login.service.ts en el servicio que se creo en el prinsipio añadimos esta linea para la url

 apiUrl = "https://localhost:7128/api/Users"  esta url es la url base,
 para el constructo hay que decirle que es lo que va a usar, primero queda asi private "http: HttpClient"

 Ahora vamos a definir el siguente metodo fuera del constructor 

 Observable es un objeto que se representa un flujo de datos que se puede manejar 
 de forma asincrona. los observables son parte de la biblioteca RxJS(R)
 y se utilizan principalmente para manejar eventos o fuljos de datos que pueden ocurrir en el futuro
 como respuesta de peticiones HTTP, eventos de usuario - se 

 login( username: string, password: string):Observable<any>{
    const body = {username,password};
    return this.http.post(`${this.apiUrl}/login`,{username, password})
    //lo que esta haciendo es tomar this.apiUrl   que va a llegar la va a concatenear con /login 
  }

  un formGroup permite calcular todo el formulario

  ahora en un componente como login-test.components.ts vamos a agregar en el constructor constructor(private fb : FormBuilder, private loginService: LoginService){ "private loginService: LoginService" esta es es la parte que agregamos ya que esta es la parte del servicio que creamos 

  revisar la arquitectura exagonal, los software de alta escala usan este tipo de software

  "node_modules/primeng/resources/themes/soho-dark/theme.css",