import React from 'react'

const Albumnes = ({ albumDes,mostrarAudio }) => {
  const { title, artist, album, preview } = albumDes

  return (
    <div className='mt-8 flex flex-col justify-center items-center gap-3'>
      <h1 className='font-bold text-center text-2xl font-serif'>{title}</h1>
      <h2>{artist.name}</h2>
      <img className='rounded-3xl md:w-3/4 cursor-pointer' onClick={()=>mostrarAudio(preview)} src={album.cover_big} alt={title} />
      {/* <audio className='w-full md:w-3/4 ' src={preview} controls></audio> */}
    </div>
  )
}

export default Albumnes
