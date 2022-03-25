import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyAs1QBy2I-XURWyxuxq87FKvDTw7Y8RsBE",
  authDomain: "ecomerce-bdb8b.firebaseapp.com",
  projectId: "ecomerce-bdb8b",
  storageBucket: "ecomerce-bdb8b.appspot.com",
  messagingSenderId: "954973638856",
  appId: "1:954973638856:web:7070a5d04c543c4b0d55fd",
  measurementId: "G-90WXFDPPBE"
};

const app = initializeApp(firebaseConfig);

// Iniciar Firestore
// database: base de datos 
const db = getFirestore(app);

// hacer la peticion para poder traer los productos
export const getProductClothes = async () =>{
  // Paso 1: Traer la coleccion de datos
  const collectionClothes = collection(db, "clothes");
  // Paso 2: Traer los documentos
  const documentClothes = await getDocs(collectionClothes);
  // Paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const clothes = documentClothes.docs.map(doc => doc.data());  // => Trae la informacion de la base de datos 
  return clothes;
}