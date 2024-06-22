import express from "express";
const router = express.Router();
import * as kbliController from "../controllers/kbli.controller.js";


router.get('/kbli', kbliController.kbliPage);
router.get('/kbli_test', kbliController.getKbliPageController)


router.post('/kbli', kbliController.createKbliController)

export default router;