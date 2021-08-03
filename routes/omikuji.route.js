// routes/omikuji.route.js

import express from "express";
import { getResult } from "../controllers/omikuji.controller.js"
import { getHardResult } from "../controllers/omikuji.controller.js"

export const omikujiRouter = express.Router();

omikujiRouter.get("/", (req, res) => getResult(req, res));
omikujiRouter.get("/hard", (req, res) => getHardResult(req, res));
