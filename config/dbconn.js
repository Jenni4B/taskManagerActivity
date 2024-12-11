// dbconn.js
// sequelizeConnection
import { Sequelize } from 'sequelize';
import 'dotenv/config';

// add SEQUELIZE CONNECTION
const sequelizeConnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

console.log("DATABASE is connected?", true);

export default sequelizeConnection;
