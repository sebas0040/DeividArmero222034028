# Clase3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

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

# 1. Verifica el estado del repositorio y la advertencia del repositorio anidado
git status

# 2. Elimina el repositorio anidado del índice de Git (pero no del sistema de archivos)
git rm --cached -r -f ProyectosAngular/clase3  # Forzar la eliminación del repositorio anidado del índice

# 3. Verifica que la carpeta ahora esté marcada como untracked
git status

# 4. Elimina la carpeta .git interna dentro de la carpeta ProyectosAngular/clase3
rm -rf ProyectosAngular/clase3/.git  # Esto elimina el repositorio Git dentro de la carpeta

# 5. Añade de nuevo la carpeta sin el repositorio anidado
git add ProyectosAngular/clase3  # Añade la carpeta sin su repositorio .git

# 6. Realiza el commit con la carpeta actualizada
git commit -m "Added ProyectosAngular/clase3 without nested repository"

# 7. Sube los cambios al repositorio remoto
git push origin CGPracticas

# 8. Verifica el estado final del repositorio para asegurarte de que todo está en orden
git status