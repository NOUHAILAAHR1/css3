import React from 'react'
import './DetailUser.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
    const { id } = useParams()
    const { data } = useSelector(state => state.user)
    const selectedUser = data.users.filter(user => user.id == id)
    return (
        <div>
            {
                selectedUser.map(user => <div className='det' key={user.id}>
                    <div className='image'>
                        <img src={user.image} alt="Profile Picture" />
                    </div>
                    <div>
                        <div className='Nom'>
                            <label>Nom & Prenom: </label>
                            <span>{`${user.firstName} ${user.lastName}`}</span>
                        </div>
                        <div className='detail'>
                            <label>Age: </label>
                            <span>{user.age}</span>
                        </div>
                        <div className='detail'>
                            <label><Genre></Genre>: </label>
                            <span>{user.gender}</span>
                        </div>
                        <div className='detail'>
                            <label>Date de naissance: </label>
                            <span>{user.birthDate}</span>
                        </div>
                        <div className='detail'>
                            <label>Email: </label>
                            <span>{user.email}</span>
                        </div>
                        <div className='detail'>
                            <label>Numero de Tele: </label>
                            <span>{user.phone}</span>
                        </div>
                        <div className='detail'>
                            <label>Poid: </label>
                            <span>{user.weight}</span>
                        </div>
                        <div className='detail'>
                            <label>La Heteur: </label>
                            <span>{user.height}</span>
                        </div>
                        
                        <div className='detail'>
                            <label>Groupe Sanguin : </label>
                            <span>{user.bloodGroup}</span>
                        </div>
                        <div className='detail'>
                            <label>La coleur des yeux: </label>
                            <span>{user.eyeColor}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
