import React from 'react'
import SearchBar from './SearchBar'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className='border-r-4 border-gray-200 p-5 flex flex-col'>
        <SearchBar />
        <Chats />
    </div>
  )
}

export default Sidebar