import React, {useState, useEffect} from 'react'
import './App.css'

function App() {

const [volunteers, setVolunteers] = useState([{id:1, name: "Jannika", phone: "12312312"}, {id:2, name: "Anselmi", phone: "333444333"}])
const [idShowPhone, setIdShowPhone] = useState(0)
/*
useEffect(() => {
  fetch("http://localhost:8000/api/volunteers")
  .then(res => res.json())
  .then(vastaus => setVolunteers(vastaus))
}
  , []
)
*/

console.log(idShowPhone)
console.log(volunteers)

  return (
    <div className="App">
        {
          volunteers && volunteers.map(v => 

              <div key={v.id}>

                <h4 onClick={() => setIdShowPhone(v.id)}> {v.name} </h4>

                {idShowPhone === v.id ? <p>{v.name}n puhelinnumero: {v.phone}</p> : null}

                <p>_____________________________________________________________________</p>

              </div>
            )
        }
    </div>
  )
}

export default App
