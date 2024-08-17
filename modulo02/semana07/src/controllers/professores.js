const Professor = require('../models/Professores')

class ProfessorController {
  async cadastra(req, res) {
    try {
      const { nome, descricao, duracao, online } = req.body
        if (!nome || !descricao || !duracao) {
          return res.status(400).json({ error: 'Nome, descrição e duração são obrigatórios.' })
        }

        const profe = await Professor.create({ nome, descricao, duracao, online })
        return res.status(201).json(profe)
    } catch (error) {
      console.error('Erro ao cadastrar professor:', error)
      return res.status(500).json({ error: 'Erro ao cadastrar o professor.' })
    }
  }

  async lista(req, res) {
    try {
      const profes = await Professor.findAll()
      return res.status(200).json(profes)
    } catch (error) {
      console.error('Erro ao listar professores:', error)
      return res.status(500).json({ error: 'Erro ao listar os professores.' })
    }
  }

  async listaId(req, res) {
    try {
      const { id } = req.params
      const profe = await Professor.findByPk(id)
        if (!profe) {
        return res.status(404).json({ error: 'Professor não encontrado.' })
        }
      return res.status(200).json(profe)
    } catch (error) {
      console.error('Erro ao buscar professor:', error)
      return res.status(500).json({ error: 'Erro ao buscar professor.' })
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params
      const { nome, descricao, duracao, online } = req.body
      const profe = await Professor.findByPk(id)
        if (!profe) {
          return res.status(404).json({ error: 'Professor não encontrado.' })
        }
      await profe.update({ nome, descricao, duracao, online })
      return res.status(200).json(profe)
    } catch (error) {
      console.error('Erro ao atualizar professor:', error)
      return res.status(500).json({ error: 'Erro ao atualizar professor.' })
    }
  }

  async deleta(req, res) {
    try {
      const { id } = req.params
      const profe = await Professor.findByPk(id)
        if (!curso) {
        return res.status(404).json({ error: 'Professor não encontrado.' })
        }
      await profe.destroy()
      return res.status(200).json({ message: 'Professor deletado com sucesso.' })
    } catch (error) {
      console.error('Erro ao deletar professor:', error)
      return res.status(500).json({ error: 'Erro ao deletar o professor.' })
    }
  }
}

module.exports = new ProfessorController()