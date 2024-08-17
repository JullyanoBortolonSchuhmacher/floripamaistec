const Curso = require('../models/Cursos.js')

class CursoController {
  async cadastra(req, res) {
    try {
      const { nome, descricao, duracao, online } = req.body
        if (!nome || !descricao || !duracao) {
          return res.status(400).json({ error: 'Nome, descrição e duração são obrigatórios.' })
        }

        const curso = await Curso.create({ nome, descricao, duracao, online })
        return res.status(201).json(curso)
    } catch (error) {
      console.error('Erro ao cadastrar curso:', error)
      return res.status(500).json({ error: 'Erro ao cadastrar o curso.' })
    }
  }

  async lista(req, res) {
    try {
      const cursos = await Curso.findAll()
      return res.status(200).json(cursos)
    } catch (error) {
      console.error('Erro ao listar cursos:', error)
      return res.status(500).json({ error: 'Erro ao listar os cursos.' })
    }
  }

  async listaId(req, res) {
    try {
      const { id } = req.params
      const curso = await Curso.findByPk(id)
        if (!curso) {
        return res.status(404).json({ error: 'Curso não encontrado.' })
        }
      return res.status(200).json(curso)
    } catch (error) {
      console.error('Erro ao buscar curso:', error)
      return res.status(500).json({ error: 'Erro ao buscar o curso.' })
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params
      const { nome, descricao, duracao, online } = req.body
      const curso = await Curso.findByPk(id)
        if (!curso) {
          return res.status(404).json({ error: 'Curso não encontrado.' })
        }
      await curso.update({ nome, descricao, duracao, online })
      return res.status(200).json(curso)
    } catch (error) {
      console.error('Erro ao atualizar curso:', error)
      return res.status(500).json({ error: 'Erro ao atualizar o curso.' })
    }
  }

  async deleta(req, res) {
    try {
      const { id } = req.params
      const curso = await Curso.findByPk(id)
        if (!curso) {
        return res.status(404).json({ error: 'Curso não encontrado.' })
        }
      await curso.destroy()
      return res.status(200).json({ message: 'Curso deletado com sucesso.' })
    } catch (error) {
      console.error('Erro ao deletar curso:', error)
      return res.status(500).json({ error: 'Erro ao deletar o curso.' })
    }
  }
}

module.exports = new CursoController()