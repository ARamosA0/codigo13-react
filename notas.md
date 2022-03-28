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

- **assets =>** Se guardan archivos, img, videos, logos, svg, etc
- **component =>** archivos reutilizables
- **pages =>** Paginas, vistas
- **router =>** Rutas de un proyecto
- **service =>** Servicios, API, UTL, GET, POST, PUT, DELT 


`props =>` Es la forma en la que podemos pasr uno o mas parametros entre componentes

`<Pokemondetail url="https://link.com" nombre="Pikachu">`
**=>**
```
const Pokemondetail = (props) => {
    console.log(props.url); // => https://link.com
    console.log(props.nombre); // => Pikachu
    }
```

## Layout

Estructura visual que envuekve a toda la app 

- Menu
- Sidebar
- Home, report, users
- Footer

Material tiene
- Navbar
- Drawer


## React Router

`<Outlet /> ` => Nos permite eredar componentes con un roat que contine el layout


`Context =>` Es la forma en la que podemos compartir datos de manera global, es decir crear un dato y poder obtener el valor de este en cualquier componente



## Firebase

Actuallizaciones sin nesecidad de refresh

Nos permite guarda informacion en la base de datos sin






 