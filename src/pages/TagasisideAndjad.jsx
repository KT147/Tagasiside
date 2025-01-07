import { useState, useRef } from "react"
import nimedJSON from "../nimed.json"
import '../App.css'

function TagasisideAndjad() {

    const [nimed, setNimed] = useState(nimedJSON)

    const nimedRef= useRef()

    const lisaUus = () => {
        nimed.push(nimedRef.current.value)
        setNimed(nimed.slice())
        nimedRef.current.value = ""
    }


    const mTaht = () => {
        const vastus= nimed.filter(nimi => nimi.startsWith("M"))
        setNimed(vastus)
    }

    const kuueKohalised = () => {
        const vastus= nimed.filter(nimi=> nimi.length === 6)
        setNimed(vastus)
    }

    const ygaLoppevad = () => {
        const vastus = nimed.filter(nimi=> nimi.endsWith("y"))
        setNimed(vastus)
    }

    const sorteeriZA = () => {
        const vastus = nimed.toSorted((a,b) => b.localeCompare(a))
        setNimed(vastus)
    }

    const kirjutaEST = () =>{
        const vastus = nimed.map(nimi =>"EST-" + nimi)
        setNimed(vastus)
    }

    const kustutaNimi = (index) =>{
        nimed.splice(index,1)
        setNimed(nimed.slice())
    }




  return (
  <>
   <br /> <br />
   <div>Nimede arv kokku: {nimed.length} tk</div> <br />

    <label>Lisa uus nimi</label><br />
    <input ref={nimedRef} type="text" placeholder="Nimi..." /><br />
    <button onClick={lisaUus}>Sisesta</button> <br /><br />

   <button onClick={mTaht}>Filtreeri M-tähega algavad nimed</button>
   <button onClick={kuueKohalised}>Filtreeri 6-kohalised nimed</button>
   <button onClick={ygaLoppevad}>Filtreeri y-ga lõppevad nimed</button>
   <button onClick={sorteeriZA}>Sorteeri Z-A</button>
   <button onClick={kirjutaEST}>Kirjuta iga nime ette EST-</button>
   <div className="tulp">
   {nimed.map((nimi, index) =>
   <div key={nimi}>{nimi}
    <button onClick={ () => kustutaNimi(index)}>X</button>
    </div>
    )}
    </div>
    </>
  )
}

export default TagasisideAndjad