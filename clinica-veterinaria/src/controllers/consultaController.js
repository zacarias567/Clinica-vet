const { ConsultaMV } = require('../models/models');

const listarConsultasMV = async (req, res) => {
  try {
    const consultas = await ConsultaMV.findAll();
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obterConsultaPorIdMV = async (req, res) => {
  try {
    const consulta = await ConsultaMV.findByPk(req.params.id);
    if (!consulta) return res.status(404).json({ message: 'Consulta não encontrada' });
    res.json(consulta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const criarConsultaMV = async (req, res) => {
  try {
    const novaConsulta = await ConsultaMV.create(req.body);
    res.status(201).json(novaConsulta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const atualizarConsultaMV = async (req, res) => {
  try {
    const consulta = await ConsultaMV.findByPk(req.params.id);
    if (!consulta) return res.status(404).json({ message: 'Consulta não encontrada' });
    await consulta.update(req.body);
    res.json(consulta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removerConsultaMV = async (req, res) => {
  try {
    const consulta = await ConsultaMV.findByPk(req.params.id);
    if (!consulta) return res.status(404).json({ message: 'Consulta não encontrada' });
    await consulta.destroy();
    res.json({ message: 'Consulta removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listarConsultasMV, obterConsultaPorIdMV, criarConsultaMV, atualizarConsultaMV, removerConsultaMV
};
