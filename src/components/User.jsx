import React from 'react'

const User = ({elem}) => {
  return (
    <div className='bg-black text-white'>
        {elem.fullName}
    </div>
  )
}

export default User