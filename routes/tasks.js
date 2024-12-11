import express from 'express';
import Task from '/task.js';
import sequelize from '../config/dbconn.js'

const router = express.Router();
router.get('/', async (req, res) => {

    try {
        await sequelize.authenticate();
        await sequelize.sync();
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        console.error(error.message);
    }
})

