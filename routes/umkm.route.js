import express from "express";
const router = express.Router();

import * as umkmController from '../controllers/umkm.controller.js';

router.get('/umkm', umkmController.umkmPage);




export default router;