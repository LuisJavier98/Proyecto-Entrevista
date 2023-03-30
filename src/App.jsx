
import { Pagination } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import Albumnes from "./components/Albumnes"
import Formulario from "./components/Formulario"
import Modal from "./components/Modal"
import NavBar from "./components/NavBar"
import { DzApi } from "./helpers/deezerApi"

function App() {

  const [dato, setdato] = useState('')
  const [cantidad, setcantidad] = useState({
    total: 0,
    limite: 0,
    move: 0
  })
  const [mensaje, setmensaje] = useState('')
  const [albumData, setAlbumData] = useState([]);
  const [cancion, setcancion] = useState({
    url: '',
    nombre: '',
    grupo: ''
  })

  const buscar = e => {
    e.preventDefault()
    if (dato) {
      DzApi.get(`/search?q=${dato}&index=${cantidad.limite + cantidad.move}`)
        .then(res => {
          setcantidad({ ...cantidad, total: res.data.total, move: 0 })
          setAlbumData(res.data)
        })
        .catch(err => setmensaje(err.response.data.msg))
    }
    else {
      setmensaje('Debes introducir un dato')
    }
    setTimeout(() => {
      setmensaje('')
    }, 1500);
  }

  const mostrarAudio = (audio, artist, title) => {
    setcancion({ ...cancion, url: audio, nombre: title, grupo: artist.name })
  }
  const handleChange = (event, value) => {
    setcantidad({ ...cantidad, move: (+value - 1) * 25 })
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  useEffect(() => {
    if (dato) {
      DzApi.get(`/search?q=${dato}&index=${cantidad.limite + cantidad.move}`)
        .then(res => {
          setAlbumData(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [cantidad])

  return (

    <div className=" md:flex h-full relative  " >
      <NavBar />
      <div className="flex-1  w-full pb-52 overflow-auto md:w-11/12 p-8">
        <Formulario dato={dato} setdato={setdato} buscar={buscar} mensaje={mensaje} />
        <div className="md:grid md:grid-cols-2">
          {albumData?.data?.map(
            album => (
              <Albumnes albumDes={album} key={album.preview} mostrarAudio={mostrarAudio} >{dato}</Albumnes>
            )
          )}
        </div>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Pagination count={Math.ceil(+cantidad.total / 25)} onChange={handleChange} />
        </div>
      </div>
      <Modal cancion={cancion} setcancion={setcancion} />
    </div>
  )
}

export default App