// controllers/omikuji.controller.js

import { getJanken } from "../services/janken.service.js";

export const getResult = async (req, res, next) => {
    console.log(req.body);  //ユーザーからのグーチョキパーのデータをもらえているかをチェック
    try {
        const result = await getJanken(req.body);
        return res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully get Janken!",
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
