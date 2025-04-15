import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
    <>
      <NavBar />
      {/* Passing in a title & subtitle prop to make it changeable in Hero.jsx */}
      <Hero/>
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App;