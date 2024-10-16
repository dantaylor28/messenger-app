import React from 'react'
import useLogout from '../hooks/useLogout'

const LogoutBtn = () => {
  const {sendingData, logoutUser} = useLogout()
  return (
    <div className='mt-auto cursor-pointer' onClick={logoutUser}>
        Logout
    </div>
  )
}

export default LogoutBtn