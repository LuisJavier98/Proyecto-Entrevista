import React from 'react'
import { useParams } from 'react-router-dom'

export const GetToken = () => {
  const {token} = useParams()
  console.log(token)
  return (
    <div>GetToken {token}</div>
  )
}
