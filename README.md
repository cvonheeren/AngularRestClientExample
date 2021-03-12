# Noticias-Cliente

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) versión 11.2.1.

## Servidor en desarrollo

Usa `ng serve` para desplegar la app en un servidor durante el desarrollo. Se servirá en `http://localhost:4200/`. 

## Servicio REST en desarrollo

La app escucha en desarrollo servicios REST de una API json-server (https://github.com/typicode/json-server). Usa `json-server --watch db.json` en el directorio json para desplegarlo. El fichero db.json contiene los datos para la app. Se servirá en `http://localhost:3000/`

## Build

Usa `ng build` para preparar el proyecto para ser desplegado en producción. Los ficheros necesarios se almacenarán en `dist/`. 

## Despliega

Copia los ficheros generados en los directorio estáticos de un servidor web para desplegarlo. Se necesitará un servicio REST que provea los datos a la app.
