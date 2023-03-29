import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Modal = ({ cancion,setcancion }) => {
  return (
    <>
      {
        cancion ?
          <div className="bg-red-700 border-red-900 border-2 shadow-2xl flex justify-center items-center w-full fixed bottom-0 left-0 h-28 transition-all p-7  ">
            <audio autoPlay className="md:w-3/5 w-full shadow-2xl " src={cancion} controls ></audio >
            <button className=" text-white absolute top-3 -scale-y-125 right-5" onClick={() => setcancion('')} ><FontAwesomeIcon icon={faXmark} /> </button>
          </div > :
          <div className='bg-red-700 flex justify-center items-center w-full  fixed bottom-0 left-0 h-28 translate-y-36 transition-all'>
            <audio className="md:w-3/5 w-full" src={cancion} controls></audio>
            <button className="absolute top-3 -scale-y-125 right-5 " onClick={() => setcancion('')} ><FontAwesomeIcon icon={faXmark} /> </button>
          </div>
      }
    </>
  )
}

export default Modal
