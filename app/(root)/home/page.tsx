import Header from '@/components/ui/kimmo/Header'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const HomeApp = async () => {
    const loggedIn = await getLoggedInUser(); 
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <Header 
                  type='greeting'
                  title='Welcome'
                  user={loggedIn?.name || 'Guest'}
                  subtext='Get your Ideal home with us '
                />
            </header>
        </div>
    </section>
  )
}

export default HomeApp