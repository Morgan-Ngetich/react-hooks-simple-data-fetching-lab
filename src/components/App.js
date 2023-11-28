import React, {useEffect, useState} from "react"
//import { transactions } from "../data/db.json"

function App () {
  const [image, setImage] = useState(null)
  useEffect(() => {
    fetch(" https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then(data => setImage(data.message))  
  }, [])

  if(!image) return <p>Loading...</p>
    
  return <img src={image} alt="A Random Dog"/>
  
}

export default App
