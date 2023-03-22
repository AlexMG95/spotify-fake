import './Main.css'
import {spotify} from './../../bbdd'
import { NavLink } from 'react-router-dom'
const { main } = spotify


export const Main =()=>{
    return(
        <div className='Main'>
            {main.map( (eachCarrusel)=>
                <Carrusel key={eachCarrusel.id} {...eachCarrusel}/>
                )}
        </div>
    )
}


const Carrusel = ( { titulo , listas } ) => {
    return (
        <div className="Carrusel">
            <h2 className="Carrusel-h2">{ titulo }</h2>
            <div className="Carrusel-grid">
                { listas.map( eachLista => 
                    <Playlist key={ eachLista.id } {...eachLista }/>
                )}
            </div>
        </div>
    )
}

const Playlist = ( { titulo , img , parrafo , a , id  } ) => {
    return (
        <div className="Playlist">
            <NavLink to={`/playlist${id}`} className="Playlist-mask">
                <img src={ img.src } alt={ img.alt } className="Playlist-img" />
                <div className="Playlist-play">
                    <img src='/assets/play.svg' alt=''/>
                </div>
            </NavLink>
            <h2 className="Playlist-h2">{ titulo }</h2>
            <p className="Playlist-p">{parrafo }</p>
        </div>
    )
}

