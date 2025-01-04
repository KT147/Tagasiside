import { useState } from "react"


function Tagasiside() {
    const [tagasisidemed, muudaTagasisidemeid] = useState (["Oli hea", "Huvitav", "Teistsugune", "Põnev"])

    const tagasiside = () => {
        const vastus = tagasisidemed.toSorted((a, b) => a.localeCompare(b))
        muudaTagasisidemeid(vastus)

    }

  return (
    <div>
         <button onClick={tagasiside}>Näita tagasisidet tähestikulises järjekorras</button>
        {tagasisidemed.map(tagasiside => <div key={tagasiside}>{tagasiside}</div> )}
    </div>
  )
}

export default Tagasiside