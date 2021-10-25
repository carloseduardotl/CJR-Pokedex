import * as api from './api.js'
import './home.css'

import pokebola from '../assets/Pokebola.png'
import pokelogo from '../assets/Logo_do_Pokemon.png'


function Home(){

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
                        <form class="form">
                            <input type="text" placeholder="Username"/>
                            <button class="btn">Catch them all!</button>
                        </form>
                    </div>
                </div>
            </div>
       </div> 

    )
}

export default Home;