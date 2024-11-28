import React from 'react'
import ExploreByCategory from '../ExploreByCategory/ExploreByCategory'
import InfoSection from '../InfoSection/InfoSection'
import JobListing from '../JobListing/JobListing'
import Testimonials from '../Testimonials/Testimonials'
import { CssBaseline } from '@mui/material'
import Banner from '../Banner/Banner'
import SearchBar from '../SearchBar/SearchBar'
import MyComponent from '../Test/Test'

const Home = () => {
  return (
    <div>
    <Banner/>
    <SearchBar/>
    <ExploreByCategory/>
    {/* <MyComponent/> */}
    <InfoSection/>
    <JobListing/>
    <CssBaseline />
    <Testimonials/>
    </div>
  )
}

export default Home