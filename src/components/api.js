import axios from 'axios' 

const api = axios.create({
    baseURL: 'https://pokedex20201.herokuapp.com/' 
})

export const getPokemon = (pokemon) =>  api.get('pokemons/' + pokemon)
export const getPage = (page) => api.get('pokemons?page=' + page.toString())

export const createUser = (username) => {
    api.post('users', {
      username: username.toString()
    })
    .then(function (response){
    })
    .catch(function (err){
        //console.log('usuario ja existente')
        getUser(username)
        .then(function (response) {
            console.log("usuario existente recebido")
        })
        .catch(function (err){
            console.log("Espero que nunca chegue aqui :/")
        })
    })
}

export const getUser = (username) => api.get('users/' + username)
export const createFav = (username, pokemon) => api.post('users/' + username + '/starred/' + pokemon)
export const deleteFav = (username, pokemon) => api.delete('users/' + username + '/starred/' + pokemon)