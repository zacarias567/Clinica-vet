const { TutorMV } = require('../models/models');

const listarTutoresMV = async (req, res) => {
  try {
    const tutores = await TutorMV.findAll();
    res.json(tutores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterTutorPorIdMV = async (req, res) => {
  try {
    const tutor = await TutorMV.findByPk(req.params.id);
    if (!tutor) return res.status(404).json({ message: 'Tutor não encontrado' });
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const criarTutorMV = async (req, res) => {
  try {
    const novoTutor = await TutorMV.create(req.body);
    res.status(201).json(novoTutor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const atualizarTutorMV = async (req, res) => {
  try {
    const tutor = await TutorMV.findByPk(req.params.id);
    if (!tutor) return res.status(404).json({ message: 'Tutor não encontrado' });
    await tutor.update(req.body);
    res.json(tutor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removerTutorMV = async (req, res) => {
  try {
    const tutor = await TutorMV.findByPk(req.params.id);
    if (!tutor) return res.status(404).json({ message: 'Tutor não encontrado' });
    await tutor.destroy();
    res.json({ message: 'Tutor removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listarTutoresMV, obterTutorPorIdMV, criarTutorMV, atualizarTutorMV, removerTutorMV
};
