import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageBox from '../components/MessageBox'
import MobileSidebar from '../components/MobileSidebar'

const Home = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <MessageBox />
    </div>
  )
}

export default Home