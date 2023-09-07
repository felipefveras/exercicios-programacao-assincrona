const express = require('express')
const { getStateFromZipcode } = require('utils-playground')
const produtos = require('./bancodedados/produtos')

const app = express()

app.get('/produtos/:idProduto/frete/:cep', async function (req, res) {
    const estado = await getStateFromZipcode(req.params.cep)

    const produto = produtos.find(function (identificador) {
        return identificador.id === Number(req.params.idProduto)
    })

    if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
        return res.status(200).json({ produto: produto, estado: estado, frete: produto.valor * 0.1 })
    } else if (estado === 'RJ' || estado === 'SP') {
        return res.status(200).json({ produto: produto, estado: estado, frete: produto.valor * 0.15 })
    }

    return res.json(produto)
})

app.listen(3000)