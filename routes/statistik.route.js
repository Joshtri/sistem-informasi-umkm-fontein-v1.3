import express from "express";
const router = express.Router();
import * as statistikController from "../controllers/statistik.controller.js";
import protect from "../config/auth/protect.js";

router.get('/main_stats', protect, statistikController.statisticPage);

// router.post('/login', loginController.loginUser);


export default router;