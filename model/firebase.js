import admin from 'firebase-admin';
import { createRequire } from 'module';

const require = createRequire(import.meta.url)
const serviceAccount = require('./nodejs-twitter-95cbb-firebase-adminsdk-g3afr-2334bc20de.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin;