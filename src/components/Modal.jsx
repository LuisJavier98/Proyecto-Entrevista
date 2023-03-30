import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Typewriter from 'typewriter-effect';

const Modal = ({ cancion, setcancion }) => {
  const modal = (dato = '') => (
    <div className={` bg-red-700 border-red-900 border-t-2 shadow-2xl flex justify-center flex-col items-center w-full fixed bottom-0 left-0 ${dato} h-28 transition-all p-4  `}>
      <div className='font-bold mb-2 text-xl'>
        <Typewriter
          options={{
            strings: [`${cancion.nombre}`, `${cancion.grupo}`],
            autoStart: true,
            loop: true,
            pauseFor: 200
          }}
        />
      </div>
      <audio autoPlay className="md:w-3/5  w-full shadow-2xl " src={cancion.url} controls ></audio >
      <button className=" text-white absolute top-3 -scale-y-125 right-5" onClick={() => setcancion('')} ><FontAwesomeIcon icon={faXmark} /> </button>
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
