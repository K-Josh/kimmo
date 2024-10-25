import Feature from '@/components/ui/landing_page/Feature'
import Footer from '@/components/ui/landing_page/Footer'
import Hero from '@/components/ui/landing_page/Hero'
import Listings from '@/components/ui/landing_page/Listings'
import React from 'react'

const Home = () => {
  return (
    <section>
        <Hero />
      <div className='container'>
        <Feature />
        <Listings />
      </div>
       <Footer />
    </section>
  )
}

export default Home
