import { Router } from "express";
import { HealthLogin, PatientHealthRegister } from "../controllers/health.controller.js";

const router=Router()

router.route("/registerdemo").post(PatientHealthRegister)
router.route("/logindemo").post(HealthLogin)

export default router