import { useState } from "react"
import tegevusedFailist from "./tegevused.json"

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusedFailist)

    const naitaKasutajaYks = () => {
        const vastus = tegevused.filter(tegevus => tegevus.userId === 1);
        uuendaTegevused(vastus)
    }

    const n2itaK6iki = () => {
        uuendaTegevused(tegevusedFailist);
    }

    const naitaKasutajaKaks = () => {
        const vastus = tegevused.filter(tegevus=> tegevus.userId === 2)
        uuendaTegevused(vastus)
    }

    const naitaKasutajaKolm = () => {
        const vastus = tegevused.filter(tegevus=> tegevus.userId === 3)
        uuendaTegevused(vastus)
    }

    const valmisTegevused = () => {
        const vastus = tegevused.filter(tegevus=> tegevus.completed === true)
        uuendaTegevused(vastus)
    }

    const mitteValmisTegevused = () => {
        const vastus = tegevused.filter(tegevus=> tegevus.completed === false)
        uuendaTegevused(vastus)
    }

    const tTahegaAlgavad = () => {
        const vastus = tegevused.filter(tegevus=> tegevus.title.startsWith ("t"))
        uuendaTegevused(vastus)
    }

    const rohkemKui20 = () => {
        const vastus = tegevused.filter(tegevus => tegevus.title.length >= 20)
        uuendaTegevused(vastus)
    }

  return (
    <div>
        <div>Tegevusi kokku {tegevused.length}</div>
        <button onClick={() => naitaKasutajaYks ()}>Kuva kõik kasutaja ID 1 tegevused</button>
        <button onClick={() => naitaKasutajaKaks ()}>Kuva kõik kasutaja ID 2 tegevused</button>
        <button onClick={() => naitaKasutajaKolm ()}>Kuva kõik kasutaja ID 3 tegevused</button>
        <button onClick={() => valmisTegevused ()}>Kuva kõik valmis tegevused</button>
        <button onClick={() => mitteValmisTegevused ()}>Kuva kõik mittevalmis tegevused</button>
        <button onClick={() => tTahegaAlgavad ()}>Kuva kõik t-tähega algavad tegevused</button>
        <button onClick={() => rohkemKui20 ()}>Kuva kõik tegevused, millel on tähemärke rohkem kui 20</button>
        <button onClick={() => n2itaK6iki()}>Kuva kõik tegevused tagasi</button>
        {tegevused.map (tegevus => 
        <div key = {tegevus}>
           <div> {tegevus.userId}</div>
           <div> {tegevus.id}</div>
           <div> {tegevus.title}</div>
           <div> {tegevus.completed}</div>
           <br />
            </div>
        )}
    </div>
  )
}

export default Tegevused