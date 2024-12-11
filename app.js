import express from 'express';
import taskRoutes from './routes/task.js';

const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`)
});

