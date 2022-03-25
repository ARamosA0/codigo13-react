import { createContext,useState } from "react";
import { PermPhoneMsg } from "@mui/icons-material";


export const UserContext = createContext();

// TODO Context necesita un Provider el cual se encargue de poder
// TODO guardar y retornar la informacion que guardemos en context
export const UserProvider = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const [basket, setBasket] = useState(
      JSON.parse(localStorage.getItem("basket")) ?? []
    );
  

    const storeUser = (dataUser) => {
      localStorage.setItem("user", JSON.stringify(dataUser));
      setUser(dataUser);
    };

  // Vamos a guardar el onjeto de cada producto
  // vamos a guardar el objeto de cada producto
  const storeBasket = (product) => {
    // basket sera un array de objetos
    setBasket([...basket, product]);
    localStorage.setItem("basket", JSON.stringify([...basket, product]));
    // if (basket === null) {
    //   const dataToStorage = [product];
    //   setBasket(dataToStorage);
    //   localStorage.setItem("basket", JSON.stringify(dataToStorage));
    // } else {
    //   const dataToStorage = [...basket, product];
    //   setBasket(dataToStorage);
    //   localStorage.setItem("basket", JSON.stringify(dataToStorage));
    // }
  };

  const deleteElementFrombasket = (id) =>{
    const product = basket.findIndex((bas)=>bas.id===id);
    const newbasket = basket.splice(productIndex, 1);
  }


  // Provider nos permite enviar la informacion
  // en value se pondran los datos que quremos que sean globales
  return (
    <UserContext.Provider value={{ user, storeUser, basket, storeBasket }}>
      {props.children}
    </UserContext.Provider>
  );
};
