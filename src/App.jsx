
import './App.css'

import{BrowserRouter,Routes,Route} from 'react-router-dom'

import {Header} from './components/Header/Header'
import {Superior} from './components/Superior/Superior'
import {Main} from './components/Main/Main'
import {Playlist} from './components/Playlist/Playlist'




function App() {


    return (


<BrowserRouter>

        <div className='Spotify'>

          <Header/>

            <main className="Content">
              <Superior/>
             
              <Routes>

                <Route path='/' element={<Main/>}></Route>
                <Route path='/playlist/:id' element={<Playlist/>}></Route>

              </Routes>
            </main>
        </div>

        
</BrowserRouter>
  


    
       
  

    

)


    
}

export default App
