import { Router } from "express";
import {  patientdetailform ,searchPatientByOPD} from "../controllers/patientDetail.controller.js";

const router=Router()

router.route("/patientdetail").post(patientdetailform)
router.route("/searchPatientByOPD").post(searchPatientByOPD)



export default router