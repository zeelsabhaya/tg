import React from 'react'
import Card from './Card'
import Loreams from './Loreams'
import HowItWorks from './Steps'
import Disclaimer from './Disclaimer'

const Home = () => {
  return (
    <>

      <div className="bg-[#f4f4fb] dark:bg-[#1a1a2a]">
        <Card />
        <Loreams />
        <HowItWorks />
        <Disclaimer />
      </div>
    </>
  )
}

export default Home