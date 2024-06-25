import express from "express";
import * as pendudukController from '../controllers/penduduk.controller.js';
const router = express.Router();


router.get('/penduduk', pendudukController.pendudukPage);
router.post('/penduduk', pendudukController.createPenduduk);



router.get('/penduduk/:id', pendudukController.getPendudukDetailById);

router.delete('/penduduk/:id', pendudukController.deletePenduduk);

router.get('/penduduk_edit/:id', pendudukController.getPendudukByIdEdit);


router.put('/penduduk/:id', pendudukController.updatePenduduk)
export default router;