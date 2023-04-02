import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const { pathname } = useLocation()
  return (
    <div className=" md:w-1/4 p-4 md:h-full w-full bg-gray-700 border-r-1 border-gray-600 ">
      <img className="my-5" src="/logo.png" alt="Imagen Logo" />
      <div className="flex my-5 md:flex-col justify-around md:gap-6">
        <div>
          <p className="font-bold text-xl text-white font-serif"  >Mi Libreria</p>
          <ul className="text-white font-extralight flex flex-col">
            <Link to={'/'}  className={`cursor-pointer ${pathname === '/' && 'text-red-400'} hover:text-red-400 `} >Buscador</Link>
            <Link to={'/recientes'} className={`cursor-pointer ${pathname === '/recientes' && 'text-red-400'} hover:text-red-400 `}>Recientes</Link>
            <Link className={`cursor-pointer ${pathname === '/recientes' && 'text-red-400'} hover:text-red-400 `}>Canciones</Link>
            <Link className={`cursor-pointer ${pathname === '/radio' && 'text-red-400'} hover:text-red-400 `}>Radio</Link>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl text-white font-serif">Playlist</p>
          <ul className="text-white font-extralight">
            <li className="cursor-pointer hover:text-red-400  " >Metal</li>
            <li className="cursor-pointer hover:text-red-400 " >Para bailar</li>
            <li className="cursor-pointer hover:text-red-400 " >Rock 90s</li>
            <li className="cursor-pointer hover:text-red-400 " >Baladas</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
