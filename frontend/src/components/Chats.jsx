import React from 'react'
import Chat from './Chat'

const Chats = () => {
  return (
    <div className='flex flex-col py-4 overflow-auto'>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
    </div>
  )
}

export default Chats