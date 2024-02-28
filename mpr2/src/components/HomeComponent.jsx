import React from 'react'
import Topbar from './common/Topbar'
import './HomeComp.scss'
import PostStatus from './postupdate'
import Lander from '../pages/Lander'
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css" 
import NavTop from './Topbar/navbartop'
import Search from './Topbar/SearchBar'
import JobCard from "../components/jobCard/index"
import JobDescription from './jobDetails'
function HomeComponent() {
  return (
    <div>
      {/* <Topbar/> */}
      <NavTop/>
      <Search></Search>
       {/* <JobCard/> */}
       {/* <div className='home-component'>
           <PostStatus />
       </div> */}
       {/* <JobDescription/> */}
    </div>
  )
}

export default HomeComponent
