const express = require('express')
const rotas = express()
const app = require('./servidor')
const { listarPokemons, detalharPokemon } = require('utils-playground')
const mostrarPokemon = require('../controladores/mostrarPokemons')
const Pokemon = require('../controladores/buscarPokemons')

rotas.get('/pokemon', mostrarPokemon)
rotas.get('/pokemon/:id', detalhesPokemon)


module.exports = rotas