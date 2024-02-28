import { firestore } from "../firebaseConfig"
import {addDoc,collection, onSnapshot,} from "firebase/firestore"
import {toast} from "react-toastify"

let dbRef=collection(firestore,"posts");

export const postStatus=(object)=>{
   
addDoc(dbRef,object)
.then((res)=>{
    toast.success("Your post is added!");
})
.catch((err)=>{
    toast.error(err);
})
}

export const getStatus = (setAllStatus) => {
    onSnapshot(dbRef,(response)=>{
        setAllStatus(response.docs.map((docs)=>{
        return{...docs.data(),id:docs.id}
    }))
    }
    );
}
