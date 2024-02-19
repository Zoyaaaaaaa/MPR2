import React from 'react'
import Topbar from './common/Topbar'
import './HomeComp.scss'
import PostStatus from './postupdate'

function HomeComponent() {
  return (
    <div>
      <Topbar/>
       <div className='home-component'>
           <PostStatus />
       </div>
       

    </div>
  )
}

export default HomeComponent
