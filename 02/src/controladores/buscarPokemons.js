const { detalharPokemon } = require('utils-playground')

let Pokemon = async function (req, res) {
    let pokemonPesquisado = await detalharPokemon(req.params.id)

    let detalhes = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species

    }
    return res.json(detalhes)
}

module.exports = Pokemon

