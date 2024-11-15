1. Crear una nueva rama que se llame IntegracionBackend.

2. Conectar el formulario con el backend y la base de datos para registrar toda la información, evidenciándola en la base de datos.

Respuesta: En el archivo data-service.service.ts dentro del servicio, se implementó el método updateFormData, encargado de recibir y consolidar los datos del formulario desde los diferentes componentes en un objeto formData.

Cuando el objeto formData está completo, el método register se encarga de enviar los datos al backend, específicamente al directorio Conexion_DB. Desde allí, el método register almacena los datos en la base de datos, asegurando que toda la información quede registrada correctamente.

3. hacer el commit
 
4. Recibir un código de estado 200 validando el correo electrónico y el apellido.

Respuesta: Se creó un componente llamado user-search. Este componente, mediante el método onSubmit() se conecta con el servicio DataService pasandole los datos ya validados. En el servicio, se implementó el método searchUser(), que se encarga de enviar los datos al backend, en el directorio Conexion_DB, en esta parte el método search se encarga de realizar la busqueda en la base de datos. 

Para el campo apellido, la consulta es insensible a mayúsculas y minúsculas, lo que permite flexibilidad en su búsqueda. Sin embargo, para el campo email, esta flexibilidad no aplica. Si los datos son válidos, el backend retorna un código de estado 200.


5. ¿ tiene alguna incidencia definir en la base de datos los campos de fecha como tipo DATE o como varchar al momento de enviar la peticion ?
Respuesta: Definir un campo como VARCHAR implica mayores desafíos, ya que se requiere validar manualmente que los datos cumplan con un formato de fecha válido. Esto incrementa la complejidad del código y limita las operaciones nativas entre fechas, como cálculos de intervalos. Además, los campos VARCHAR suelen ocupar más espacio en memoria que los de tipo DATE, lo que puede afectar el rendimiento.

Por otro lado, el tipo DATE está optimizado para almacenar fechas y permite realizar operaciones nativas con facilidad. Sin embargo, si también se necesita registrar horas, sería más adecuado utilizar tipos como DATETIME o TIMESTAMP en lugar de DATE. Por lo tanto, es fundamental evaluar las necesidades específicas del sistema para seleccionar el tipo de dato adecuado y garantizar un diseño eficiente.













































































# Componentes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
