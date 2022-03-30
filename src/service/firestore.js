import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXywwETVCU6ZzjAbM0NPaHn9P8ypndUe8",
  authDomain: "codigo13-a50c6.firebaseapp.com",
  projectId: "codigo13-a50c6",
  storageBucket: "codigo13-a50c6.appspot.com",
  messagingSenderId: "74636091766",
  appId: "1:74636091766:web:21a812d5c44fe465e19a57",
  measurementId: "G-XNPN7GJDYD",
};

const app = initializeApp(firebaseConfig);
// Iniciar firestore
// database : base de datos
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getProductClothes = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionClothes = collection(db, "product_clothes");
  // paso 2: Traer los documentos
  const documentClothes = await getDocs(collectionClothes);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const clothes = documentClothes.docs.map((doc) => doc.data());
  return clothes;
};

// debemos crear una funcion que se encargue de poder crear
// elementos en nuestra base de datos
// ojo: vamos a recibir como parametro un objeto que contenga
// la informacion del producto que estamos creado
export const storeProductClothe = async (product) => {
  const id = uuidv4().replaceAll("-", "");
  product.id = id;
  await setDoc(doc(db, "product_clothes", id), product);
};

// actualizar un datos en firebase
export const updateProductClothe = async (product) => {
  const productRef = doc(db, "product_clothes", product.id);

  await updateDoc(productRef, product);
};

// eliminar un registros de la db
export const deleteProductClothe = async (id) => {
  await deleteDoc(doc(db, "product_clothes", id));
};

// vamos a crear una funcion qu reciba un email y password
// y cree un cuenta en firebase
export const auth = getAuth();

// Esta funcion enviara el correo de verificacion
export const sendEmail =async  () => {
  const send = await sendEmailVerification(auth.currentUser);
  return send;
}

// podemos crear una funcion que nos retorne el usuario actual
export const getUserFromFirebase = () => {
  onAuthStateChanged(auth, (user)=>{
    if(user){
      return user;
    }
  })
};

export const updateUserProfile = async (profile) => {
  try {
    await updateProfile(auth.currentUser, profile);
    return {
      ok: true,
      data: "success",
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};

export const storeUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    console.log(error.message);
    return {
      ok: false,
      data: error.message,
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};





