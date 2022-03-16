# REACT

#### Como se crea un proyecyo en react?

react tiene un comand line interface que nos provee un comando para poder crear nuestro proyecto

`npx create-react-app nomber-app`

> El nombre del proyecto debe de estar separado por guiones

Crear un componente desde 0
*No es necesario importar react*
import React from "react";

React solo retorna un elemento padre, dentro de este puede haber n elementos hijos, 
es decir solo puede haber un select, header, div, etc


*CARPETAS*

Las siguientes carpetas son obligatorias en un proyecto

- *assets =>* Se guardan archivos, img, videos, logos, svg, etc
- *component =>* archivos reutilizables
- *pages =>*paginas, vistas
- *router =>* Rutas de un proyecto
- *service =>*Servicios, API, UTL, GET, POST, PUT, DELET