import * as api from './api.js'
import './home.css'

import pokebola from '../assets/Pokebola.png'
import pokelogo from '../assets/Logo_do_Pokemon.png'
import { useState } from 'react'


function Home(){

    const [name, setName] = useState(" ")

    const handleInput = event => {
        setName(event.target.value)
    }

    const createUser = () => {
        console.log(name)
        api.createUser(name)
    }

    return (
       <div>
            <div class="container">
                <div class="content">
                    <div class="first-column">
                        <h2 class="title title-welcome">Welcome!</h2>
                        <img class="imagem1" src = {pokebola}/>
                    </div>
                    <div class="second-column">
                        <h2 class="title title-account">Create your</h2>
                        <img class="imagem2" src={pokelogo}/>
                        <h2 class="title title-account">Pokedex account</h2>
                        <p class="description">Insert username to continue your journey:</p>
                        <input onChange={handleInput} type="text" placeholder="Username"/>
                        <button class="btn" onClick={createUser} >Catch them all!</button>
                    </div>
                </div>
            </div>
       </div> 

    )
}

export default Home;