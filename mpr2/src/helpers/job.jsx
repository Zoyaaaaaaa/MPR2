// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const JobSearch = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://indeed-indeed.p.rapidapi.com/apisearch',
//         params: {
//           publisher: '<REQUIRED>',
//           v: '2',
//           format: 'json',
//           callback: '<REQUIRED>',
//           q: 'java',
//           l: 'austin, tx',
//           sort: '<REQUIRED>',
//           radius: '25',
//           st: '<REQUIRED>',
//           jt: '<REQUIRED>',
//           start: '<REQUIRED>',
//           limit: '<REQUIRED>',
//           fromage: '<REQUIRED>',
//           highlight: '<REQUIRED>',
//           filter: '<REQUIRED>',
//           latlong: '<REQUIRED>',
//           co: '<REQUIRED>',
//           chnl: '<REQUIRED>',
//           userip: '<REQUIRED>',
//           useragent: '<REQUIRED>'
//         },
//         headers: {
//           'X-RapidAPI-Key': '78bc0554aamsh6ca09eee3c0735cp1f3903jsna2c37ae8a898',
//           'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         setJobs(response.data); // Update state with job search results
//         setLoading(false); // Set loading to false after fetching data
//       } catch (error) {
//         console.error(error);
//         setLoading(false); // Set loading to false in case of error
//       }
//     };

//     fetchJobs(); // Call the fetchJobs function when the component mounts
//   }, []);

//   return (
//     <div>
//       <h1>Job Search</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {jobs.map((job) => (
//             <li key={job.id}>
//               <h3>{job.title}</h3>
//               <p>{job.company}</p>
//               <p>{job.location}</p>
//               {/* Add more job details here */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default JobSearch;
