// services/tweet.service.js

import { findAll, find, store, update, destroy  } from '../repositories/tweet.repository.js';

export const getAllTweetData = async () => {
    try {
        return findAll();
    } catch (e) {
        throw Error('Error while getting All Tweet Data');
    }
};

export const getOneTweetData = async ({ id }) => {
    try {
        return find({ id: id });
    } catch (e) {
        throw Error('Error while getting One Tweet Data');
    }
};

export const insertTweetData = async ({ data }) => {
    try {
        const ref = await store({ data: data });
        return {
            id: ref.id,
            data: data,
        };
    } catch (e) {
        throw Error('Error while posting Tweet Data');
    }
};

export const updateTweetData = async ({ id, data }) => {
    try {
        return await update({ id, data });
    } catch (e) {
        throw Error('Error while updating Tweet Data');
    }
};

// ↓追加
export const destroyTweetData = async ({ id }) => {
    try {
        return await destroy({ id: id, });
    } catch (e) {
        throw Error('Error while deleting Tweet Data');
    }
};
