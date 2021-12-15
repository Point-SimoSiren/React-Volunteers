import React from 'react'
import './App.css'

function Phone(props) {

    if (props.volunteer.id === props.idToShowPhone)
        return (
            <p>{props.phone}</p>
        )

    else {
        return(null)
    }

}

export default Phone
