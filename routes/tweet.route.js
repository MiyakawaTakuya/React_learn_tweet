// routes/tweet.route.js

import express from 'express';
import { readAllTweetData, readOneTweetData, createTweetData, editTweetData, deleteTweetData   } from '../controllers/tweet.controller.js';

export const tweetRouter = express.Router();

tweetRouter.get('/', (req, res) => readAllTweetData(req, res));
tweetRouter.get('/:id', (req, res) => readOneTweetData(req, res));
tweetRouter.post('/', (req, res) => createTweetData(req, res));
tweetRouter.put('/:id', (req, res) => editTweetData(req, res));
tweetRouter.delete('/:id', (req, res) => deleteTweetData(req, res));