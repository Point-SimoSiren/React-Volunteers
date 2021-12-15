import React, {useState, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import Phone from './Phone'

function App() {


const [volunteers, setVolunteers] = useState([])
const [idShowPhone, setIdShowPhone] = useState("")


useEffect(() => {
  fetch("http://localhost:8000/api/volunteers")
  .then(res => res.json())
  .then(vastaus => setVolunteers(vastaus))
}
  , []
)


  return (
    <div className="App">
     {
       volunteers && volunteers.map(v => 

          <div key={v.id}>

            <h4>{v.name}</h4>

            <Phone volunteer={v} idShowPhone={idShowPhone} />

          </div>
        )
     }
    </div>
  )
}

export default App
