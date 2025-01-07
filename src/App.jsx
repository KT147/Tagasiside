import { Route, Routes, Link } from "react-router-dom";
import './App.css'
import "./pages/Tagasiside"
import Tagasiside from "./pages/Tagasiside";
import TagasisideAndjad from "./pages/TagasisideAndjad";

function App() {


  return (
    <>

      <Link to= "/"><button>Avalehele</button></Link>
      <Link to= "/Tagasiside"><button>Tagasiside lehele</button></Link>
      <Link to="/TagasisideAndjad"><button>Tagasiside andjate lehele</button></Link>
      
      <Routes>
        <Route path="/" exact element = { <div>Tere</div> }/>
        <Route path="/Tagasiside" exact element = { <Tagasiside/> }/>
        <Route path="/TagasisideAndjad" exact element= {<TagasisideAndjad/>}/>
      </Routes>
    </>
  )
}

export default App
