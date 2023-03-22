
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

import {todasPlaylist} from './../../bbdd'



export const Playlist =()=>{

    const [playlist, setPlaylist]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        let buscar=todasPlaylist.find(eachPlaylist=>eachPlaylist,
            setPlaylist(buscar))

    } , [])


    return(

        <div className='Playlist'>

           Soy la Playlist {id}

        </div>
    )
}