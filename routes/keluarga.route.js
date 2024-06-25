import express from "express";
import * as keluargaController from '../controllers/keluarga.controller.js'
const router = express.Router();


router.get('/keluarga', keluargaController.keluargaPage);
router.post('/keluarga', keluargaController.createKeluarga);



router.get('/keluarga/:id', keluargaController.getKeluargaDetailById)

router.delete('/keluarga/:id', keluargaController.deleteKeluarga);

router.get('/keluarga_edit/:id', keluargaController.getKeluargaByIdEdit)

router.put('/keluarga/:id', keluargaController.updateKeluarga);
export default router;