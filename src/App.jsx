import { Route, Routes, Link } from "react-router-dom";
import './App.css'
import "./pages/Tagasiside"
import Tagasiside from "./pages/Tagasiside";

function App() {


  return (
    <>

      <Link to= "/"><button>Avalehele</button></Link>
      <Link to= "/Tagasiside"><button>Tagasiside lehele</button></Link>
      
      <Routes>
        <Route path="/" exact element = { <div>Tere</div> }/>
        <Route path="/Tagasiside" exact element = { <Tagasiside/> }/>
      </Routes>
    </>
  )
}

export default App
