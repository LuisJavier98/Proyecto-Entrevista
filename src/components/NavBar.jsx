import React from 'react'

const NavBar = () => {
  return (
    <div className=" md:w-1/4 p-4 md:h-full w-full bg-red-700">
    <img className="my-5" src="/src/img/foxbel-music@3x.png" alt="" />
    <div className="flex my-5 md:flex-col justify-around md:gap-6">
      <div>
        <p className="font-bold text-xl text-white font-serif">Mi Libreria</p>
        <ul className="text-white font-extralight">
          <li className="cursor-pointer hover:text-red-400 " >Recientes</li>
          <li className="cursor-pointer hover:text-red-400 ">Artistas</li>
          <li className="cursor-pointer hover:text-red-400 ">Albums</li>
          <li className="cursor-pointer hover:text-red-400 ">Canciones</li>
          <li className="cursor-pointer hover:text-red-400  ">Estaciones</li>
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
