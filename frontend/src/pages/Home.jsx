import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageBox from '../components/MessageBox'

const Home = () => {
  return (
    <div className='flex h-[550px]'>
        <Sidebar />
        <MessageBox />
    </div>
  )
}

export default Home