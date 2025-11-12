import Header from "../components/Header"
import Main from "..//components/Main"
import React from "react"

export default function App() {

  // const [starWarsData, setStarWarsData] = React.useState(null)
  // const [count, setCount] = React.useState(1)
    
  //   React.useEffect(function(){
  //     fetch(`https://swapi.dev/api/people/${count}`)
  //       .then(res => res.json())
  //       .then(data => setStarWarsData(data))
  //   },[count])
    
    
    
    return (
        <>
            <Header />
            <Main />
        </>

        // <div>
        //     <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        // </div>
    )
}