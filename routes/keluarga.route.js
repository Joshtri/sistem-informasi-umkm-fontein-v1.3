import express from "express";
import * as keluargaController from '../controllers/keluarga.controller.js'
const router = express.Router();


router.get('/keluarga', keluargaController.keluargaPage);
router.post('/keluarga', keluargaController.createKeluarga);


export default router;