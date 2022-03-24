import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { Navigate, Outlet } from "react-router-dom";
// Navigate nos permite navegar en el proyect
// Outlet nos permite renderizar los hijos dentro del Layout

const Private = () => {
  const { user } = useContext(UserContext);

// Estamos validando si el usuario no existe entonces hacemos
// que automaticamente la pagina lo redirija al login
  if(!user){
      return <Navigate to="/login" />;
  }
  return <Outlet />;
// Outlet retorna la vista que usamos actualmente
};

export default Private;
