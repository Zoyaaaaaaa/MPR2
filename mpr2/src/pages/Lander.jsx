import React from 'react';
import job3 from '../assets/job3.png';
import './LanderPage.scss';

export default function Lander() {
  return (
    <div className='lander'>
      <div className='image-container'>
        <img src={job3} alt='landerimg' className='landerimg' />
        <div className='slogan'>
          <h1>EasyLink</h1>
        </div>
      </div>
      <div className='slogan-text'>
        <h2>Connecting Professionals, Empowering Careers</h2>
        <h2>Your Network, Your Future</h2>
      </div>
    </div>
  );
}
