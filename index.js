const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors'); 
const todosRouter = require('./todo.route');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from the Todo API!');
});
app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
