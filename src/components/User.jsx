import React from 'react'
import './User.css'

export default function User(props) {
  return (
    <div className='util'>
        <img src={props.image} alt="image" />
        <div>
            <div className='nom'>{props.nom}</div>
            <button onClick={props.details}>Detail User</button>
            <button onClick={props.listeTaches}>Liste des taches</button>
        </div>
    </div>
  )
}
