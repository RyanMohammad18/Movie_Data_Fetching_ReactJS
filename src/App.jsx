import Home from "./Pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MovieInfo from "./Pages/MovieInfo"
import Error from "./Pages/Error"




function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="movie/:id" element={<MovieInfo/>} />
          <Route path="*" element={<Error/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
