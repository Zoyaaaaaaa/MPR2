import React,{useState,useMemo} from 'react'
import './index.scss'
import {postStatus,getStatus} from "../../api/FirestoreApis.jsx"
import ModalComponent from '../common/Modal.jsx'
import PostCard from"../PostCard"
import "./index.scss"

export default function PostStatus() {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState('');
    const[allStatus,setAllStatus]=useState([]);
    const sendStatus =()=>{
      postStatus(status);
      setModalOpen(false);
      setStatus(" ");
    } 
    useMemo(()=>{
    getStatus(setAllStatus);
    },[])
    return (
      <>
    <div className='post-status-main'>
      <div className='post-status'>
         <button className='open-post-modal' onClick={() => setModalOpen(true)}> Start a Post</button>
      </div>
      <ModalComponent 
      setStatus={setStatus} 
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen}
      status={status}
      sendStatus={sendStatus}
      ></ModalComponent>
     
    </div>
     {allStatus.map((posts)=>{
      return (
        <>
        
        <PostCard posts={posts}/>
        
        </>
      )
    })}
  
  </>
    )
}
