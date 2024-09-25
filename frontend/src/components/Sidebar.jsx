import React from 'react'
import SearchBar from './SearchBar'
import Chats from './Chats'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='border-r-4 border-gray-200 p-5 flex flex-col'>
        <SearchBar />
        <Chats />
        <LogoutBtn />
    </div>
  )
}

export default Sidebar