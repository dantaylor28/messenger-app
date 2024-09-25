import React from 'react'

const SearchBar = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search for a user' className='border border-black'/>
        <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar