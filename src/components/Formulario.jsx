import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Alerta from './Alerta'

const Formulario = ({ buscar, mensaje, dato,setdato }) => {
  return (
    <form onSubmit={buscar} className=" mx-auto flex justify-between " action="">
      {mensaje && <Alerta>{mensaje}</Alerta>}
      <div className="relative flex  justify-start flex-1 w-full md:w-2/3  ">
        <input value={dato} onChange={e => setdato(e.target.value)} className="w-2/3 p-2 rounded-xl mt-3 flex-1  font-bold h-11 border-2 border-gray-700" placeholder="BUSCAR" type="text" />
        <button type="submit" className="-translate-x-6 translate-y-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {/* <a href={`https://connect.deezer.com/oauth/auth.php?app_id=${import.meta.env.VITE_APP_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=token`} className=' flex items-center hover:text-red-900 font-bold text-red-700' >Iniciar Sesión</a> */}
    </form>
  )
}

export default Formulario
