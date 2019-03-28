import React from "react"
import ReactDOM from "react-dom"
//MyApp is a component that renders JSX elements
function MyApp() {
   return (
       //JSX elements
       <ul>
           <li>Be Proactive</li>
           <li>Think Win-Win</li>
           <li>Synergize</li>
       </ul>
   )
}
ReactDOM.render(
    <MyApp />,
    document.getElementById("root")
)
