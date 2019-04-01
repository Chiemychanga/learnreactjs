import React from "react"
import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke
                question="Why does Rajeev love to karaoke?"
                punchLine="Because he loves to Singh"
            />
            <Joke
                punchLine="Rawan is a diva"
            />
            {/*<Joke />*/}
            {/*<Joke />*/}
            {/*<Joke />*/}
        </div>
    )
}

export default App
