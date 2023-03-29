import React from 'react'

const Alerta = ({ children }) => {
  return (
    <div className='w-full bg-red-600 p-2 text-center font-black rounded-lg my-2'>
      {children}
    </div>
  )
}

export default Alerta
