const { listarPokemons } = require('utils-playground')

let mostrarPokemons = async function (req, res) {
    let pokemons = await listarPokemons()

    return res.json(pokemons)
}

module.exports = mostrarPokemon