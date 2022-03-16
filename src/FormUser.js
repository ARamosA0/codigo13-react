import { useState } from "react";

const FormUser = () => {
    // La otra forma en la que podemos guardar los datos de los inputs es en un objeto
    // Para ello necesitamos que los inputs tengan un name
    // para que los name sirvan como un key y el valor sea lo que se obtenga de los inputs

    // Debemos crear una variable que tenga por default un objeto con los keys(name)
    // pero que los values esten vacios
    const [valorDeInputs, setValorinputs]=useState({
        nombre:"",
        apellido:"",
        correo:"",
        password:"",
    });

    // Ahora debemos construir una funcion que se encarge de almacenar los valores
    // de los inputs en los objetos 
    const handleInputValues = (event) =>{
        // debemos extraer dos cosas de event
        // 1. name de cada input
        // 2. el value de cada input
        // name = event.target.name
        // value = event.target.value
        const {name, value} = event.target;

        // ...valorDeInputs: Es para hacer una copia del objeto actual y 
        // estamos agregando el nuevo key y value que recibimos
        // [name]: es una variable, para poder usarla como key debemos colocarla entre []
        // value: El valor que estamos recibiendo de nuestro input
        setValorinputs({
            ...valorDeInputs,
            [name]:value,
        })
    }
    

    return (
      <div>
        <form action="">
        {/* En react la forma en la cual damos una clase es usando className */}
          <h4 className="title">Formualario de Usuarios</h4>
          <h5>Nombre {valorDeInputs.nombre}</h5>
          <h5>Nombre {valorDeInputs.apellido}</h5>
          <h5>Nombre {valorDeInputs.correo}</h5>
          <h5>Nombre {valorDeInputs.password}</h5>
          <p>
            <input type="text" onChange={handleInputValues} name="nombre" placeholder="Ingrese su nombre" />
          </p>
          <p>
            <input
              type="text"
              name="apellido"
              onChange={handleInputValues}
              placeholder="Ingrese su apellido"
            />
          </p>
          <p>
            <input type="email" onChange={handleInputValues} name="correo" placeholder="Ingrese su email" />
          </p>
          <p>
            <input
              type="password"
              name="password"
              onChange={handleInputValues}
              placeholder="Ingrese su password"
            />
          </p>
          <p>
            <button type="submit">Registar</button>
          </p>
        </form>
      </div>
    );
};

export default FormUser;
