// routes/omikuji.route.js
//URI と対応するコントローラの処理を記述する．
//今回は POST で受け取る点と送信されてきたデータがreqに入っている点に注意．

import express from "express";
import { getResult } from "../controllers/janken.controller.js"

export const jankenRouter = express.Router();

jankenRouter.post("/", (req, res) => getResult(req, res));

