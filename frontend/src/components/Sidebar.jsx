import React from 'react'
import SearchBar from './SearchBar'
import Chats from './Chats'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='hidden md:flex flex-col md:min-w-[300px] lg:min-w-[350px] xl:min-w-[400px] border border-black/10 rounded-sm p-5'>
        <SearchBar />
        <Chats />
        <LogoutBtn />
    </div>
  )
}

export default Sidebar