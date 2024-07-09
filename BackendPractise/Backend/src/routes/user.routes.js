import { Router } from "express";
import { HealthLogin, registerPateint } from "../controllers/user.controller.js";

const router=Router()

router.route("/registerdemo").post(registerPateint)
router.route("/logindemo").post(HealthLogin)

export default router