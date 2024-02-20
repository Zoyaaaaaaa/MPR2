import React from 'react'
import Topbar from './common/Topbar'
import './HomeComp.scss'
import PostStatus from './postupdate'
import Lander from '../pages/Lander'

function HomeComponent() {
  return (
    <div>
      <Topbar/>
       <div className='home-component'>
           <PostStatus />

       </div>
       {/**<Lander/>*/}

    </div>
  )
}

export default HomeComponent
