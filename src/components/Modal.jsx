
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee';


const Modal = ({ cancion }) => {


  const modal = (dato = '') => (
    <div className={` bg-gray-600 md:right-3 shadow-2xl border-t-1 border-gray-500 flex justify-center flex-col items-center w-full md:w-auto fixed bottom-0 left-0 ${dato} h-20 transition-all p-4  `}>
      <div className='font-bold mb-2 text-xl'>
        <Marquee gradientWidth={30} className='md:w-3/4 w-full text-sm  text-center mx-auto' gradientColor={[35, 35, 45]} direction='left' speed={5}>
          <p className='text-white font-light ' >{cancion.nombre} -</p>
          <p className='text-white font-light' >{cancion.grupo}</p>
        </Marquee>
      </div>
      <audio volume='0.0' autoPlay className="md:w-3/5  w-full shadow-2xl " src={cancion.url} controls ></audio >

    </div >
  )


  return (
    <>
      {
        cancion.url ?
          modal() :
          modal('translate-y-36')
      }
    </>
  )
}

export default Modal
