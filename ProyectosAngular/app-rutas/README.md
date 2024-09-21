# AppRutas

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


clase4 
sen an subido o creado estas rutas
<!-- ng generate component modules/home/views/home-page -->
<!-- ng generate component  modules/sidebar/views/sidebar-page -->

se va a descargar esta npm install primeng

el cambio de rutas en el local host
http://localhost:65331/sidebar


en este ling puedes cambiar los estilos en angular.json
https://primeng.org/theming#themes
esto lo que hace es cambiar los estilos y puedes cambiarlos colores de los componentes 
por defecto la linea que pegamos es esta 
"styles": [
              "src/styles.css",
              "node_modules/primeng/resources/themes/lara-light-blue/theme.css", <= ESTA DE AQUI
              "node_modules/primeng/resources/primeng.min.css"
            ],

En la pagina la podemos remmplazar por cualquiera de las siguientes lineas

primeng/resources/themes/bootstrap4-light-blue/theme.css
primeng/resources/themes/bootstrap4-light-purple/theme.css
primeng/resources/themes/bootstrap4-dark-blue/theme.css
primeng/resources/themes/bootstrap4-dark-purple/theme.css
primeng/resources/themes/md-light-indigo/theme.css
primeng/resources/themes/md-light-deeppurple/theme.css
primeng/resources/themes/md-dark-indigo/theme.css
primeng/resources/themes/md-dark-deeppurple/theme.css
primeng/resources/themes/mdc-light-indigo/theme.css
primeng/resources/themes/mdc-light-deeppurple/theme.css
primeng/resources/themes/mdc-dark-indigo/theme.css
primeng/resources/themes/mdc-dark-deeppurple/theme.css
primeng/resources/themes/fluent-light/theme.css
primeng/resources/themes/lara-light-blue/theme.css
primeng/resources/themes/lara-light-indigo/theme.css
primeng/resources/themes/lara-light-purple/theme.css
primeng/resources/themes/lara-light-teal/theme.css
primeng/resources/themes/lara-dark-blue/theme.css
primeng/resources/themes/lara-dark-indigo/theme.css
primeng/resources/themes/lara-dark-purple/theme.css
primeng/resources/themes/lara-dark-teal/theme.css
primeng/resources/themes/soho-light/theme.css
primeng/resources/themes/soho-dark/theme.css
primeng/resources/themes/viva-light/theme.css
primeng/resources/themes/viva-dark/theme.css
primeng/resources/themes/mira/theme.css
primeng/resources/themes/nano/theme.css
primeng/resources/themes/saga-blue/theme.css
primeng/resources/themes/saga-green/theme.css
primeng/resources/themes/saga-orange/theme.css
primeng/resources/themes/saga-purple/theme.css
primeng/resources/themes/vela-blue/theme.css
primeng/resources/themes/vela-green/theme.css
primeng/resources/themes/vela-orange/theme.css
primeng/resources/themes/vela-purple/theme.css
primeng/resources/themes/arya-blue/theme.css
primeng/resources/themes/arya-green/theme.css
primeng/resources/themes/arya-orange/theme.css
primeng/resources/themes/arya-purple/theme.css
primeng/resources/themes/nova/theme.css
primeng/resources/themes/nova-alt/theme.css
primeng/resources/themes/nova-accent/theme.css
primeng/resources/themes/luna-amber/theme.css
primeng/resources/themes/luna-blue/theme.css
primeng/resources/themes/luna-green/theme.css
primeng/resources/themes/luna-pink/theme.css
primeng/resources/themes/rhea/theme.css

Switch Themes
 
ejemplo de esto, lo puedes cambiar en el archivo angular.json

"styles": [
              "src/styles.css",
              "primeng/resources/themes/rhea/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ],