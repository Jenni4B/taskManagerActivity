import { DataTypes } from "sequelize";
import sequelize from "../config/dbconn.js";

const Task = sequelize.define('Tasks', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

export default Task