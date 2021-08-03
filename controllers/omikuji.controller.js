// controllers/omikuji.controller.js

import { getOmikuji, getHardOmikuji } from "../services/omikuji.service.js";

export const getResult = async (req, res, next) => {
    try {
        const result = await getOmikuji({});
        return res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully get Omikuji!",
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

export const getHardResult = async (req, res, next) => {
    try {
        const result = await getHardOmikuji({});
        return res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully get Hard Omikuji!",
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};