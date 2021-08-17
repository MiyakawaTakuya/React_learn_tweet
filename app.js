// app.js

import express from "express";  //package.jsonにかかレテいるライブラリ名を記載する
import cors from 'cors';

// おみくじのrouterを読み込む
import { omikujiRouter } from "./routes/omikuji.route.js";
import { jankenRouter } from "./routes/janken.route.js";
import { tweetRouter } from './routes/tweet.route.js';

const app = express();
// ↓POSTでデータを受け取るために必要
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3001;

// 編集 // 「/」のところにgetでリクエストを送るとレスポンスがくる
app.get("/", (req, res) => {
    res.json({  //json{:,;}の形式で書くとオブジェクトで返してくれる
        uri: "/",
        message: "Hello Node.js & Takuya!!",
    });
});

//ファイルを分けずに実装する場合のもの
// app.get("/omikuji", (req, res) => {
//     const omikuji = ["大吉", "中吉", "小吉", "凶", "大凶"];
//     const min = 0;
//     const max = omikuji.length - 1;
//     const index = Math.floor(Math.random() * (max - min + 1)) + min;
//     res.json({
//         uri: "/omikuji",
//         message: omikuji[index],
//     });
// });

//別ファイルを用意して実行する場合のコード
// おみくじのルーティングを変更
app.use("/omikuji", (req, res) => omikujiRouter(req, res));
app.use("/janken", (req, res) => jankenRouter(req, res));
app.use('/tweet', (req, res) => tweetRouter(req, res));

//  追加
// app.get("/janken", (req, res) => {
//     res.json({
//         uri: "/janken",
//         message: "This is Janken URI!",
//     });
// });

app.listen(port, () => { //localhostの3001サーバーが起動する
    console.log(`Example app listening at http://localhost:${port}`);
});