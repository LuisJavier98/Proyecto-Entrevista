import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { DzApi } from '../helpers/deezerApi'
import Alerta from './Alerta'
import { useNavigate } from 'react-router-dom'

const Formulario = ({ buscar, mensaje, dato, setdato }) => {

  const [usuario, setusuario] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')

    DzApi.get('https://users152.p.rapidapi.com/user/me', {
      params: { access_token: `${token}` },
      headers: {
        'X-RapidAPI-Key': '27c6e24758mshee34114545ae43bp1a3a0cjsne84d6b94cea8',
        'X-RapidAPI-Host': 'users152.p.rapidapi.com'
      }
    })
      .then(res => {
        setusuario(res.data)
        navigate('/')
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <form onSubmit={buscar} className=" mx-auto border-b-1 border-gray-600 flex items-center px-5 py-3 justify-between " action="">
      {mensaje && <Alerta>{mensaje}</Alerta>}
      <div className="relative flex justify-center flex-1 w-full md:w-2/3   ">
        <button type="submit"  className='text-white flex justify-center items-center '>
          <FontAwesomeIcon  icon={faMagnifyingGlass} />
        </button>
        <input value={dato} onChange={e => setdato(e.target.value)} className="bg-transparent placeholder:text-white focus:outline-none border-none  w-full p-2 rounded-xl text-white  flex-1 font-light h-11 border-2 border-gray-700" placeholder="Buscar" type="text" />
      </div>
      {usuario.name ?
        <p className=' flex items-center text-white font-black' >{usuario.name}</p> :
        <a href={`https://connect.deezer.com/oauth/auth.php?app_id=${import.meta.env.VITE_APP_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=token`} className=' flex items-center hover:text-red-900 font-bold text-red-700 text-white' >Iniciar Sesión</a>
      }
    </form>
  )
}

export default Formulario
