import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <main className = "wrapper page">
      <Header title='All Videos' subHeader='Public Library' />
      <h1 className='text-2xl font-karla'>
        Welcome to Snapcast! 
      </h1>

    </main>
  )
}

export default page