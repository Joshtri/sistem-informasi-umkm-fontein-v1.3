import express from "express";
const router = express.Router();
import * as kbliController from "../controllers/kbli.controller.js";


router.get('/kbli', kbliController.kbliPage);
router.get('/kbli_test', kbliController.getKbliPageController)


router.post('/kbli', kbliController.createKbliController)

router.get('/kbli/:id', kbliController.getKbliDetailById);

router.delete('/kbli/:id', kbliController.deleteKbli);

router.get('/kbli_edit/:id', kbliController.getKbliByIdEdit)


router.put('/kbli/:id', kbliController.updateKbli);


export default router;