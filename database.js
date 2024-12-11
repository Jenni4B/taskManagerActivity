
//create tasks
app.post('/tasks', (req,res) =>{
    const {title, description} = req.body;
    const query = "INSERT INTO tasks {title, description) VALUES (?, ?)";
    
    connection.query(query, [title, description], (err, resuslts)=>{
      if (err) throw (err);
      res.status(201).json({id: results.insertId});
      
    });

})

//read tasks

app.get('/tasks', (req, res)=>{
    connection.query('SELECT * FROM tasks', (err, results) =>{
        if (err) throw err;
        res.json(results);
    });
})

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Form validation middleware
const validateTask = (req, res, next) => {
    const { title } = req.body;
    if (!title || title.length < 3) {
        return res.status(400).json({ error: 'Title must be at least 3 characters' });
    }
    next();
};

// Using validation
app.post('/tasks', validateTask, (req, res) => {
    // Handle task creation
});
