import { Router } from "express";
import { createCard } from "../controllers/card.controller.js";

const router=Router()

router.route("/create-card").post(createCard)




export default router