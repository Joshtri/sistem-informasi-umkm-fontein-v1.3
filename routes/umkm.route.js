import express from "express";
const router = express.Router();

import * as umkmController from '../controllers/umkm.controller.js';

router.get('/umkm', umkmController.umkmPage);

router.get('/add_umkm', umkmController.addUmkmPage);


export default router;