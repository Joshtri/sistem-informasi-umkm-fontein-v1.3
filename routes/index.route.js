import express from "express";
const router = express.Router();
import * as loginController from "../controllers/index.controller.js";


router.get('/', loginController.loginPage);



export default router;