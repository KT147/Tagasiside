import { useState } from "react"
import tagasisideAndjad2Failist from "../pages/tagasiside.json"

function TagasisideAndjad2() {

    const [kasutajad, uuendaKasutajad] = useState (tagasisideAndjad2Failist);

    const taastaAlgne = () => {
        uuendaKasutajad(tagasisideAndjad2Failist)
    }

    const kymmeTahte = () => {
       const vastus= kasutajad.filter(kasutaja => kasutaja.username.length >= 10)
        uuendaKasutajad(vastus)
    }

    const kustuta = (kasutaja) => {
        const index= kasutajad.indexOf(kasutaja)
        kasutajad.splice(index,1)
        uuendaKasutajad(kasutajad.slice())
      
    }

    const lucio = () => {
        const vastus = kasutajad.findIndex(user => user.email === "Lucio_Hettinger@annie.ca")
        console.log(vastus)
    }

    const esimeneC = () => {
        const vastus= kasutajad.find(user=> user.name.substring(0,1) === "C")
        console.log(vastus)
    }

    const latV22rtus = () => {
        kasutajad.sort((a,b)=> a.address.geo.lat.localeCompare(b.address.geo.lat))
        uuendaKasutajad(kasutajad.slice())
    }

    const lngPositiivne = () => {
        const vastus = kasutajad.filter(kasutaja => kasutaja.address.geo.lng > 0)
        uuendaKasutajad(vastus)
    }

    const koikId = () => {
        let sum = 0
        kasutajad.forEach(kasutaja => {sum += kasutaja.id})
        console.log(sum)
    }

    const nullidAlguses = () => {
       const vastus= kasutajad.map(kasutaja => ({...kasutaja, phone:"000-"+ kasutaja.phone}))
        uuendaKasutajad(vastus)
    }

    const ainultMeilid = () => {
        const vastus = kasutajad.map(kasutaja => kasutaja.email)
        console.log(vastus)
    }

    const aJaE = () => {
        const vastus= kasutajad.map (kasutaja=> ({...kasutaja, company: {... kasutaja.company, catchPhrase:
            kasutaja.company.catchPhrase.replaceAll("a", "e")}}))
        console.log(vastus)
    }

  return (
    <div>
        <div>Aktiivseid kasutajaid: {kasutajad.length}</div>
        <button onClick={ () => taastaAlgne ()}>Taasta algne seis</button>
        <button onClick={ () => kymmeTahte ()}>Kuva vähemalt 10-tähega kasutajad</button>
        <button onClick={ () => lucio ()}>Lucio</button>
        <button onClick={ () => esimeneC ()}>Esimene C-nimega kasutaja</button>
        <button onClick={ () => latV22rtus ()}>Sorteeri kasutajad lat väärtuse järgi</button>
        <button onClick={ () => lngPositiivne ()}>Näita kasutajaid, kelle lng on positiivne</button>
        <button onClick={ () => koikId ()}>Liida kokku kõigi id-d</button>
        <button onClick={ () => nullidAlguses ()}>Lisa telefonile 000</button>
        <button onClick={ () => ainultMeilid() }>Jäta alles ainult emailid</button>
        <button onClick={ () => aJaE ()}>Asenda catchphrase a-d e-dega</button>
        {kasutajad.map(kasutaja =>
            <div key ={kasutaja.id}>
                <button onClick={() => kustuta (kasutaja)}>Kustuta</button>
                <div>{kasutaja.id}</div>
                <div>{kasutaja.name}</div>
                <div>{kasutaja.username}</div>
                <div>{kasutaja.email}</div>
                <div>{kasutaja.address.street}</div>
                <div>{kasutaja.address.suite}</div>
                <div>{kasutaja.address.city}</div>
                <div>{kasutaja.address.zipcode}</div>
                <div>{kasutaja.address.geo.lat}</div>
                <div>{kasutaja.address.geo.lng}</div>
                <div>{kasutaja.phone}</div>
                <div>{kasutaja.website}</div>
                <div>{kasutaja.company.name}</div>
                <div>{kasutaja.company.catchPhrase}</div>
                <div>{kasutaja.company.bs}</div>
            </div>
        )}
    </div>
  )
}

export default TagasisideAndjad2