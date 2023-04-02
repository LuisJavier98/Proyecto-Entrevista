import axios from "axios";

export const DzApi = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '27c6e24758mshee34114545ae43bp1a3a0cjsne84d6b94cea8',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
})

