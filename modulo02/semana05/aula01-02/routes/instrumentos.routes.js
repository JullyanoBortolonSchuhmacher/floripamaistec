const {Router} = require('express')
const { Pool } = require('pg')

const InstrumentosRoutes = new Router()

const conexao = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'api_pets'
})

InstrumentosRoutes.post('/', async (request, response) => {
    try {

        const dados = request.body

        if (!dados.nome || !dados.tipo || !dados.dose) {
            return response.status(400).json({ mensagem: 'Nome,descricao e dose são obrigatorios' })
        }

        await conexao.query(`
        INSERT INTO vacinas 
                (
                    nome,
                    tipo,
                    estado
                )
                values
                (
                    $1,
                    $2,
                    $3
                )
    `, [dados.nome, dados.descricao, dados.dose])

        response.status(201).json({ mensagem: 'Vacina criada com sucesso' })
    } catch {
        response.status(500).json({ mensagem: 'Não possível cadastrar a vacina' })
    }
})

module.exports = InstrumentosRoutes