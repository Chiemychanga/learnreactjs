import React from "react"
// import Joke from "./Joke"
import Gym from "./Gym"
import mmaGymsData from "../mmaGymsData"

function App() {
    const gymComponents = mmaGymsData.map(gym => <Gym key={gym.id} name={gym.name} rating={gym.rating} />)

    return (
        <div>
            {gymComponents}
        </div>
    )
}

export default App
