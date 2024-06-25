import express from "express";
const router = express.Router();

import * as umkmController from '../controllers/umkm.controller.js';

router.get('/umkm', umkmController.umkmPage);

router.get('/add_umkm', umkmController.addUmkmPage);

router.post('/umkm', umkmController.createdUmkm);


router.get('/umkm/:id', umkmController.getUmkmDetailById);

router.delete('/umkm/:id', umkmController.deleteUmkm);

router.get('/umkm_edit/:id', umkmController.getUmkmByIdEdit);

router.put('/umkm/:id', umkmController.updateUmkm);

export default router;