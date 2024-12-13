// dbconn.js
// sequelizeConnection
import { Sequelize } from 'sequelize';
import 'dotenv/config';

// add SEQUELIZE CONNECTION
const sequelizeConnection = new Sequelize(
    process.env.DB_NAME,  // retrieves the name, user, and password from the env file
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

console.log("DATABASE:: connected? ", true); // Confirms the task_manager database is connected to the app

export default sequelizeConnection;
