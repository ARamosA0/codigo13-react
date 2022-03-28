import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyDXywwETVCU6ZzjAbM0NPaHn9P8ypndUe8",
  authDomain: "codigo13-a50c6.firebaseapp.com",
  projectId: "codigo13-a50c6",
  storageBucket: "codigo13-a50c6.appspot.com",
  messagingSenderId: "74636091766",
  appId: "1:74636091766:web:21a812d5c44fe465e19a57",
  measurementId: "G-XNPN7GJDYD"
};

const app = initializeApp(firebaseConfig);

// Iniciar Firestore
// database: base de datos 
const db = getFirestore(app);

// hacer la peticion para poder traer los productos
export const getProductClothes = async () =>{
  // Paso 1: Traer la coleccion de datos
  const collectionClothes = collection(db, "product_clothes");
  // Paso 2: Traer los documentos
  const documentClothes = await getDocs(collectionClothes);
  // Paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const clothes = documentClothes.docs.map(doc => doc.data());  // => Trae la informacion de la base de datos 
  return clothes;
}