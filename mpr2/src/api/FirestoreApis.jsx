import { firestore } from "../firebaseConfig"
import {addDoc,collection,} from "firebase/firestore"
let dbRef=collection(fi,"posts")
export const PostStatus=(data)=>{
addDoc(dbRef);
}