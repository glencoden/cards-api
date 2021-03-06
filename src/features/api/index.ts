import 'dotenv/config';
import ApiOrm from './ApiOrm';

const { DB_USER, DB_PASSWORD, DB_HOST, API_DB_NAME } = process.env;

const databaseName = API_DB_NAME || 'cards';
const databaseUrl = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${databaseName}`;

export const apiOrm = new ApiOrm({ databaseUrl });