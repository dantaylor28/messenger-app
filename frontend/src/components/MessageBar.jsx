import React from 'react'

const MessageBar = () => {
  return (
    <form>
        <div className='w-full relative'>
            <input type="text" placeholder='Enter message' className='w-full border border-black' />
            <button type='submit' className='absolute inset-y-0 end-0 items-center pe-3'>Send</button>
        </div>
    </form>
  )
}

export default MessageBar