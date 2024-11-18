const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const projetosController = require('../controllers/projetosController');

router.post('/', upload.single('foto'), projetosController.createProjeto);
router.put('/:id', upload.single('foto'), projetosController.updateProjeto);
router.get('/', projetosController.getAllProjeto);
router.get('/:id', projetosController.getProjetoByID);
router.delete('/:id', projetosController.deleteProjeto);

module.exports = router;
