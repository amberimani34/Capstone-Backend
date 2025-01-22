
const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const roomTypeRoutes = require('./routes/RoomTypeRoutes');
const roomItemRoutes = require('./routes/RoomItemRoutes');

// Enabling CORS 
app.use(cors());

// Middleware 
app.use(express.json());
app.use(roomTypeRoutes);  
app.use(roomItemRoutes);

// Get Route 
app.get('/api/roomtypes', (req, res) => {
  res.json({ message: 'Need this to be data from each model!' });
});

app.get('/api/roomitems', (req, res) => {
    res.json({message: 'Room items!'});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


