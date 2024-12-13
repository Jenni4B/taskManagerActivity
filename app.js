import express from'express';
import path from 'path';
import taskRoutes from './routes/tasks.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set the views directory
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

// When processing forms with the server, there are white spaces that may be encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// Set the public directory and expected json data response 
app.use(express.static('public'));
app.use('/api', taskRoutes); // do /api to get to the route and run TaskRoutes

const PORT = process.env.APP_PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});