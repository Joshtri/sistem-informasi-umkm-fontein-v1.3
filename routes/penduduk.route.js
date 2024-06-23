import express from "express";
import * as pendudukController from '../controllers/penduduk.controller.js';
const router = express.Router();


router.get('/penduduk', pendudukController.pendudukPage);
router.post('/penduduk', pendudukController.createPenduduk);


export default router;