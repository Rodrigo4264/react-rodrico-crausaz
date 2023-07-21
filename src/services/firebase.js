import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, getDoc,addDoc, doc , query, where,writeBatch} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDPllXP4BaZNFvv3iDMk1Vm7swI56nu41c",
  authDomain: "fox-optical-react.firebaseapp.com",
  projectId: "fox-optical-react",
  storageBucket: "fox-optical-react.appspot.com",
  messagingSenderId: "1088174909600",
  appId: "1:1088174909600:web:5e0cf82f60d8fbf9ebc1c5",
  measurementId: "G-1VN1T5WWK7"
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);

//console.log(db)

export async function getData(){
const prductsCollectionRef=collection(db,"products")
const productsSnapshot = await getDocs(prductsCollectionRef);
const arrayDocs = productsSnapshot.docs;
const dataDocs = arrayDocs.map(doc =>{
    return {...doc.data(), id: doc.id}
}); 
return dataDocs;
}


export async function getItemData(idurl){ 
    const docRef = doc(db, "products", idurl);
    const docSnap = await getDoc(docRef);
    return {id: docSnap.id, ...docSnap.data()} 
   
   //hacer validacion de datos
}

export async function getCategoryData(categoryfer){ 
    const productsCollectionRef = collection(db, 'products');
const q = query(productsCollectionRef, where('category', '==', categoryfer));
const productsSnapshot = await getDocs(q);
const arrayDocs = productsSnapshot.docs;
const dataDocs = arrayDocs.map(doc =>{
    return {...doc.data(), id: doc.id}
    });
    return dataDocs
}
//-------------------------------------------------------------------------------------
// export async function createOrder(data) {
//     const ordersCollectionRef = collection(db, "orders");
  
//     const response = await addDoc(ordersCollectionRef, data);
//     return response.id;
  
    
//   }


export async function getOrder(idurl){ 
    const docRef = doc(db, "orders", idurl);
    const docSnap = await getDoc(docRef);
    return {id: docSnap.id, ...docSnap.data()} 
   
   
}



  export async function createOrderWithStockUpdate(data) {
    const ordersCollectionRef = collection(db, "orders");
    const batch = writeBatch(db);
    const { items } = data;
  
    for (let itemInCart of items) {
      const refDoc = doc(db, "products", itemInCart.id);
      const docSnap = await getDoc(refDoc);
  
      const { stock } = docSnap.data();
      console.log(stock);
  
      const stockToUpdate = stock - itemInCart.contador;
      if (stockToUpdate < 0) {
        throw new Error(`No hay stock suficiente del producto: ${itemInCart.id}`);
      } else {
        const docRef = doc(db, "products", itemInCart.id);
        batch.update(docRef, { stock: stockToUpdate });
      }
    }
  
    await batch.commit();
    const response = await addDoc(ordersCollectionRef, data);
  
    return response.id;
  }