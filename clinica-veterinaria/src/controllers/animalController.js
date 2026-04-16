const { AnimalMV, ConsultaMV } = require('../models/models');

const listarAnimaisMV = async (req, res) => {
  try {
    const animais = await AnimalMV.findAll();
    res.json(animais);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterAnimalPorIdMV = async (req, res) => {
  try {
    const animal = await AnimalMV.findByPk(req.params.id);
    if (!animal) return res.status(404).json({ message: 'Animal não encontrado' });
    res.json(animal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const criarAnimalMV = async (req, res) => {
  try {
    const novoAnimal = await AnimalMV.create(req.body);
    res.status(201).json(novoAnimal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const atualizarAnimalMV = async (req, res) => {
  try {
    const animal = await AnimalMV.findByPk(req.params.id);
    if (!animal) return res.status(404).json({ message: 'Animal não encontrado' });
    await animal.update(req.body);
    res.json(animal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removerAnimalMV = async (req, res) => {
  try {
    const animal = await AnimalMV.findByPk(req.params.id);
    if (!animal) return res.status(404).json({ message: 'Animal não encontrado' });
    await animal.destroy();
    res.json({ message: 'Animal removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listarConsultasPorAnimalMV = async (req, res) => {
  try {
    const consultas = await ConsultaMV.findAll({
      where: { animal_id: req.params.id },
      include: [{ model: AnimalMV, required: true }]
    });
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listarAnimaisMV, obterAnimalPorIdMV, criarAnimalMV, atualizarAnimalMV, removerAnimalMV, listarConsultasPorAnimalMV
};
