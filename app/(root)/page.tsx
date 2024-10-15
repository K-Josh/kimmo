import Feature from '@/components/ui/Feature'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import Listings from '@/components/ui/Listings'
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
