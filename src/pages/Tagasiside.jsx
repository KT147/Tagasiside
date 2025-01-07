import { useState, useRef } from "react"


function Tagasiside() {
    const [tagasisidemed, muudaTagasisidemeid] = useState (["Oli hea", "Huvitav", "Teistsugune", "Põnev"])

    const tagasisideRef = useRef ()

    const tagasiside = () => {
        const vastus = tagasisidemed.toSorted((a, b) => a.localeCompare(b))
        muudaTagasisidemeid(vastus)

    }

    const kustuta = (index) =>{
      tagasisidemed.splice(index,1)
      muudaTagasisidemeid(tagasisidemed.slice())
    }

    const lisaUusTagasiside = () => {
      tagasisidemed.push(tagasisideRef.current.value)
      muudaTagasisidemeid(tagasisidemed.slice())
      tagasisideRef.current.value = ""
    }

  return (
    <div>

    <br />

      <button onClick={tagasiside}>Näita tagasisidet tähestikulises järjekorras</button>

    <br /><br />

      {tagasisidemed.map((tagasiside, index) => 
        <div key={tagasiside}>{tagasiside}
        <button onClick={() => kustuta (index)}>x</button>
    </div> 
    )}

    <br /><br />

    <label>Lisa uus tagasiside:</label>
    <input ref={tagasisideRef} type="text" />
    <button onClick={lisaUusTagasiside}>Sisesta</button>

    </div>
  )
}

export default Tagasiside