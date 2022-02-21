import 'dotenv/config';
import AuthOrm from './AuthOrm';
import { oAuth2Router } from './oAuth2Router';

const { DB_USER, DB_PASSWORD, DB_HOST, AUTH_DB_NAME } = process.env;

const databaseName = AUTH_DB_NAME || 'cards';
const databaseUrl = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${databaseName}`;

export const authOrm = new AuthOrm({ databaseUrl });
export const authRouter = oAuth2Router;