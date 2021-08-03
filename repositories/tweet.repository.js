// repositories/tweet.repository.js

// export const findAll = () => {
//     return { message: 'OK' };
// };

// repositories/tweet.repository.js

import admin from '../model/firebase.js';
const db = admin.firestore();

// export const findAll = () => {
//     return { message: 'OK' };
// };

export const findAll = async () => {
    try {
        // const tweetSnapshot = await db.collection('tweet').get();
        const tweetSnapshot = await db.collection('tweet').orderBy("created_at", "desc").get();
        const tweets = tweetSnapshot.docs.map((x) => {
            return {
                id: x.id,
                data: {
                    ...x.data(),
                    created_at: x.data().created_at.toDate(),
                    updated_at: x.data().updated_at.toDate(),
                },
            };
        });
        return tweets;
    } catch (e) {
        throw Error('Error while getting Tweet Data');
    }
};

//一件だけのデータの取り出し
export const find = async ({ id }) => {
    try {
        const tweetSnapshot = await db.collection('tweet').doc(id).get();
        return {
            id: tweetSnapshot.id,
            data: {
                ...tweetSnapshot.data(),
                created_at: tweetSnapshot.data().created_at.toDate(),
                updated_at: tweetSnapshot.data().updated_at.toDate(),
            }
        }
    } catch (e) {
        throw Error('Error while getting One tweet Data');
    }
};

export const store = async ({ data }) => {
    try {
        const postData = {
            ...data,
            created_at: admin.firestore.Timestamp.now(),
            updated_at: admin.firestore.Timestamp.now(),
        };
        const ref = await db.collection('tweet').add(postData);
        return ref;
    } catch (e) {
        throw Error('Error while store Tweet Data');
    }
};

export const update = async ({ id, data }) => {
    const updateData = {
        ...data,
        updated_at: admin.firestore.Timestamp.now(),
    };
    const ref = await db.collection('tweet').doc(id).update(updateData);
    return {
        id: id,
        data: updateData,
    };
};

export const destroy = async ({ id }) => {
    try {
        const ref = await db.collection('tweet').doc(id).delete();
        return { id: id, };
    } catch (e) {
        throw Error('Error while deleting Tweet Data');
    }
};