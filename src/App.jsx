import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { HashRouter } from "react-router-dom"
import Alerta from "./components/Alerta"
import NavBar from "./components/NavBar"

function App() {

  const [dato, setdato] = useState('')
  const [mensaje, setmensaje] = useState('')
  const [albumData, setAlbumData] = useState(null);

  // const buscar = e => {
  //   e.preventDefault()
  //   if (dato) {
  //     const url = `https://api.deezer.com/album/302127`
  //     const accessToken = 'frVOSAEayyBAMPJd47lF4F6DpXMRs7kehzO4T5Fl0INE3hhJGGl&expires=3600'
  //     axios.get(url, {
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`
  //       }
  //     })
  //       .then((data) => console.log(data))
  //       .catch((error) => console.log(error));

  //   }
  //   else {
  //     setmensaje('Debes introducir un dato')
  //   }
  //   setTimeout(() => {
  //     setmensaje('')
  //   }, 1500);
  // }

  useEffect(() => {
    async function fetchAlbum() {
      try {
        const response = await axios.get('https://api.deezer.com/genre');
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchAlbum();
  }, []);


  return (
    <HashRouter>
      <div className=" md:flex h-full " >
        <NavBar />
        <div className="flex-1 w-full  md:w-11/12 p-8">
          <form className=" mx-auto flex justify-between " action="">
            {mensaje && <Alerta>{mensaje}</Alerta>}
            <div className="relative flex  justify-start flex-1 w-full md:w-2/3  ">
              <input value={dato} onChange={e => setdato(e.target.value)} className="w-2/3 p-2 rounded-xl mt-3 flex-1 md:flex-none font-bold h-7" placeholder="BUSCAR" type="text" />
              <button type="submit" className="-translate-x-6 translate-y-1">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <a href={`https://connect.deezer.com/oauth/auth.php?app_id=${import.meta.env.VITE_APP_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=token`} className=' flex items-center hover:text-red-900 font-bold text-red-700' >Iniciar Sesión</a>
          </form>
          <div>
            Canciones
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default App