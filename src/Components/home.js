import * as api from './api.js'


function Home(){

    function pokemon(pokemon, user){
        api.getPokemon(pokemon)
        .then(function (response){
            console.log(response.data);
        })
        .catch(function (err){
            console.log(err)
        })
    }

    function removeFav(pokemon, user){
        api.deleteFav('cadu1', 'pikachu')
        .then(function (response){
            //console.log(response.data);
        })
        .catch(function (err){
            console.log(err)
        })
    }

    function cadastro(user){
        api.createUser(user)
    }

    return (
        <div className="App">
        <header className="App-header">
          <button onClick = {() => pokemon('pikachu', 'cadu1')}> pikachuuuu </button> 
          <button onClick = {() => removeFav('pikachu', 'cadu1')}> delete </button> 
          <button onClick = {() => cadastro('cadu3')}> criar usuário </button> 
        </header>
      </div>
    )
}

export default Home;