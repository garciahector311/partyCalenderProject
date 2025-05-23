import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
   <>
   <Hero title="Escandalo & Friends Events" subtitle="Local Las Vegas Parties brought to you by Escandalo & Friends"/>
   <HomeCards />
   <JobListings isHome={true} />
   <ViewAllJobs />
   </>
  )
}

export default HomePage
