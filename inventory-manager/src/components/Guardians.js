import React from 'react'
import {useParams} from "react-router-dom"
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Guardians = ({users, guardians}) => {
    
    
    console.log(guardians)
    const params = useParams()
    console.log(params)
    let currentUser = users.data.find((user) => parseInt(params.id) == user.id)
    let currentGuardians = guardians.data.filter((g) => g.user_id == currentUser.id)
    
    return (
        <div>
            <h2>{currentUser.username}</h2>
            {currentGuardians && currentGuardians.map((g) => {
                return(
                <>
                <h3>{g.class_name}</h3>
                <h3>{g.power}</h3>
                </>
            )})}
        </div>
    )
}

export default Guardians
