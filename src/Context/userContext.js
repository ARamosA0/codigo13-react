import { createContext,useState } from "react";
import { PermPhoneMsg } from "@mui/icons-material";


export const UserContext = createContext();

// TODO Context necesita un Provider el cual se encargue de poder
// TODO guardar y retornar la informacion que guardemos en context
export const UserProvider = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const storeUser = (dataUser) => {
      localStorage.setItem("user", JSON.stringify(dataUser));
      setUser(dataUser);
    };

  // Provider nos permite enviar la informacion
  // en value se pondran los datos que quremos que sean globales
  return (
    <UserContext.Provider value={{ user, storeUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
