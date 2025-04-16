// server.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/appointments', require('./routes/appointments'));

app.get('/', (req, res) => {
    res.send('Hello from the Salon backend!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
