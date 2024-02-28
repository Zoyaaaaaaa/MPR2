import React, { useState } from 'react';
import './SearchBar.scss'; // Import your SCSS file for styling

function SearchBar() {
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search based on location and job type
    console.log('Searching for', location, jobType);
  };

  return (
    <>
    <div className='hero'>
      </div>
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={handleLocationChange}
        className="input-location"
      />
      <input
        type="text"
        placeholder="Job Type"
        value={jobType}
        onChange={handleJobTypeChange}
        className="input-job-type"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
    </>
  );
}

export default SearchBar;
