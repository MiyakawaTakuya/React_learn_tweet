// controllers/tweet.controller.js

import { getAllTweetData, getOneTweetData, insertTweetData, updateTweetData, destroyTweetData} from '../services/tweet.service.js';

export const readAllTweetData = async (req, res, next) => {
    try {
        const result = await getAllTweetData();
        return res.status(200).json({
            status: 200,
            result: result,
            message: 'Succesfully get All Tweet Data!',
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

export const readOneTweetData = async (req, res, next) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const result = await getOneTweetData({ id: id, });
        return res.status(200).json({
            status: 200,
            result: result,
            message: 'Succesfully get One Tweet Data!',
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

export const createTweetData = async (req, res, next) => {
    try {
        const { tweet, user_id } = req.body;
        if (!(tweet && user_id)) {
            throw new Error('something is blank');
        }
        const result = await insertTweetData({
            data: { tweet: tweet, user_id: user_id },
        });
        return res.status(200).json({
            status: 200,
            result: result,
            message: 'Succesfully post Tweet Data!',
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

export const editTweetData = async (req, res, next) => {
    try {
        const { id } = req.params; //idをパラメーターで受け取る
        const { tweet, user_id } = req.body; //bodyに書き込む
        if (!(id && tweet && user_id)) { //空欄がないことを確認
            throw new Error('something is blank');
        }
        const result = await updateTweetData({
            id: id,
            data: { tweet: tweet, user_id: user_id },
        });
        return res.status(200).json({
            status: 200,
            result: result,
            message: 'Succesfully edit Tweet Data!',
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

export const deleteTweetData = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            throw new Error('something is blank');
        }
        const result = await destroyTweetData({
            id: id,
        });
        return res.status(200).json({
            status: 200,
            result: result,
            message: 'Succesfully delete Tweet Data!',
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};