import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageBox from '../components/MessageBox'

const Home = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <MessageBox />
    </div>
  )
}

export default Home