// El primer paso para definir un componente es el nombre
// El nombre de un componente siempre debe iniciar en Mayuscula
// ahora el componente basicamente es una fincion finction, por ende podemos crearlo
// usando function o arrow function
const PrimerComponente = () => {
  // esta funcion lo que hara sera retornar una vista
  // esn react usamos return () para indicar que lo que este dentro de los parentesis
  // sera el objeto visual que vamos a retornar
  return (
    <div>
      <h1>Hola desde el componente</h1>
    </div>
  )
}

// Luego de crear el componente debemos exportarlo
//  Esto es como decir que este archivo unicamente esta exportando este componente
export default PrimerComponente;