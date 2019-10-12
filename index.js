const express = require('express') // basic express server
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

app.use(express.json({ extended: false })); // allows us to accept json data to API
const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
