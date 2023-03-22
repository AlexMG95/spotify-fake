import './Superior.css'
import { spotify } from './../../bbdd'
const {superior} = spotify
const {premium, session, flechas} = superior

export const Superior=()=>{
    return(
        <div className='Superior'>
            <div className='Superior-col Arrows'>
                {flechas.map(eachFlechas=>
                    <img 
                    key={eachFlechas.id}
                    src={eachFlechas.src}
                    texto={eachFlechas.texto}
                    dsdgd
                    className='Superior-svg'>
                        
                    </img>
                    )}
            </div>
            <div className='Superior-col Right'>
                <ul className='Superior-ul Premium'>
                    {premium.map(eachPremium=>
                       <li 
                       key={eachPremium.id}
                       className='Premium-li'>
                         <a href={eachPremium.href} className='Premium-a'>
                            {eachPremium.texto}
                         </a>
                        </li> 
                        )}
                    
                </ul>
                <ul className='Superior-ul Session'>
                    {session.map ( eachSession=>
                    <li key={eachSession.id} className='Session-li'>
                        <a href={eachSession.href} className='Session-a'>
                                {eachSession.texto}
                        </a>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}