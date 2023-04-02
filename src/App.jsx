import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Index from "./components/Index"
import { GetToken } from "./components/GetToken"
function App() {
  const hash = window.location.hash
  if (hash) {
    localStorage.setItem('token', hash.split('=')[1].split('&')[0])
  }
  return (


    <BrowserRouter>
      <div className=" md:flex h-full relative  " >
        <NavBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:token" element={<GetToken />} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App