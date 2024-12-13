import express from 'express';
import Task from '../models/task.js';
// import sequelize from '../config/dbconn.js';

const router = express.Router();

// Get all tasks - Route for the home page
router.get('/', async (req, res) => {
    try {

        const tasks = await Task.findAll();

        res.render('index', { tasks }); // Render the index.ejs template with tasks data
        // Passes as an array through a for each loop to render on the index.ejs web page
        // and displays to the user

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new task
router.post('/add-task', async (req, res) => {

    const {title, desc,  } = req.body;
    console.log(`Server Side Task Title ${title, desc}`);
    res.status(201);

    try {

        const task = await Task.create({title, desc });
        res.status(201).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router // es6+