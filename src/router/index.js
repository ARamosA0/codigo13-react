/**
 * Para poder crear nuestras rutas debemos importar lo siguiente
 * BrowsRouter: Va a envolver todas las rutas que creemos 
 * Routes: Es el child de BrowsRouter el cual permite crear las rutas por componente
 * Route: Es el encargado de recibir el path y el element y renderizar el element
 * el path creado
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Flags from "../pages/Flags"

// Nuestro Router va a ser un componente, el cual se encargue de retornar
// las rutas con su respectiva vista

const Router = () =>{
    // como esto es un componente, tenemos que usar return para poder crear las rutas 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pokemon" element={<Home />} />
                <Route path="/flags" element={<Flags />} />
            </Routes>
        </BrowserRouter>
    );
};

/**
 * Router es el encargado de crear las rutas 
 * Una buena practica es que el Router debe estar importado en App.js
 * y en el index.js principal debe importar y mostrar lo que este en el App.js
 */

export default Router;


