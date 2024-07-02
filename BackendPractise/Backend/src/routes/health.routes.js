import { Router } from "express";
import { PatientHealthRegister } from "../controllers/health.controller.js";

const router=Router()

router.route("/registerdemo").post(PatientHealthRegister)

export default router