import React from 'react'
import SearchBar from './SearchBar'
import Chats from './Chats'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='flex flex-col min-w-[400px] border border-black/10 rounded-sm p-5'>
        <SearchBar />
        <Chats />
        <LogoutBtn />
    </div>
  )
}

export default Sidebar