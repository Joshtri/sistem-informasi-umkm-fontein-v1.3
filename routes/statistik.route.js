import express from "express";
const router = express.Router();
import * as statistikController from "../controllers/statistik.controller.js";


router.get('/main_stats', statistikController.statisticPage);

// router.post('/login', loginController.loginUser);


export default router;