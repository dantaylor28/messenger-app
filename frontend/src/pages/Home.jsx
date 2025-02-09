import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageBox from '../components/MessageBox'

const Home = () => {
  return (
    <div className='flex h-screen'>
        <Sidebar />
        <MessageBox />
    </div>
  )
}

export default Home