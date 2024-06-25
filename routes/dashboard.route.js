import express from "express";
const router = express.Router();
import * as dashboardController from "../controllers/dashboard.controller.js";

import protect from "../config/auth/protect.js";


router.get('/main/dashboard', protect, dashboardController.dashboardPage);

router.get('/main/informasi_akun', protect,dashboardController.informasiAkunPage);

router.get('/logout', protect, dashboardController.logoutUser);

export default router;