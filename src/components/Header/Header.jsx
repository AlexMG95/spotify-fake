import './Header.css'

import {NavLink} from 'react-router-dom'

import { spotify } from '../../bbdd'

const {header} = spotify
const { h1, menu, submenu, legal, } = header

export const Header =()=>{
    return ( 
        <div className='Header'>
            
            <div className='Header-row'>
                <h1 className='Header-h1'>
                    <a href={h1.href}className='Header-a'>
                        <img 
                        src={h1.src}
                        alt={h1.alt}
                        className='Header-svg'/>
                    </a>
                </h1>
        

                <nav className='Header-nav'>
                    <ul className='Header-ul'>
                        {menu.map(eachMenu =>
                             <li 
                                key={eachMenu.id}
                                className='Header-li'>
                             <NavLink to={eachMenu.href}
                                className='Header-link'>
                                 <img 
                                    src={eachMenu.icono}
                                    alt={eachMenu.texto}
                                    className='Header-icon'/>
                                 <span className='Header-span'>
                                     {eachMenu.texto}
                                 </span>
                             </NavLink>
                         </li>
                        )}
                    </ul>
                    
                    <ul className='Header-ul'> 
                            {submenu.map(eachMenu=>
                                <li key={eachMenu.id}
                                    className='Header-li'>
                                <a href={eachMenu.href} className='Header-link'>
                                    <img
                                        src={eachMenu.icono}
                                        alt={eachMenu.texto}
                                        className='Header-icon'/>
                                    <span className='Header-span'>
                                        {eachMenu.texto}
                                    </span>
                                </a>    
                                </li>
                                )}
                            
                    </ul>
                </nav>

                
            </div>


            <div className='Header-row'>
                <ul className='Header-legales'>
                    {legal.map(eachLegal=>
                        <li 
                            key={eachLegal.id} className='Header-legal'>
                                <a href={eachLegal.href}className='Header-a'> {eachLegal.texto} </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}