import React from 'react'
import { Pagination } from "@mui/material"
import { useEffect, useState } from "react"
import Albumnes from "./Albumnes"
import Formulario from "./Formulario"
import Modal from "./Modal"
import { DzApi } from "../helpers/deezerApi"
import { useRef } from 'react'
import '../App.css'

const Index = () => {
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
    grupo: '',
    imageUrl: ''
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

  const mostrarAudio = (audio, artist, title, image) => {
    setcancion({ ...cancion, url: audio, nombre: title, grupo: artist.name, imageUrl: image.cover_big })
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

  const scrollbarsRef = useRef();

  const handleScroll = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="flex-1 w-full pb-52 overflow-auto md:w-11/12 scroll">
        <Formulario dato={dato} setdato={setdato} buscar={buscar} mensaje={mensaje} />
        <div className="md:grid md:grid-cols-2">
          {albumData?.data?.map(
            album => (
              <Albumnes albumDes={album} key={album.rank} mostrarAudio={mostrarAudio} >{dato}</Albumnes>
            )
          )}
        </div>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Pagination count={Math.ceil(+cantidad.total / 25)} onChange={handleChange} />
        </div>
      </div>

      <Modal cancion={cancion} setcancion={setcancion} />
    </>
  )
}

export default Index
