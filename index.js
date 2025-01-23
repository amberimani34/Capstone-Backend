
const express = require('express');
const app = express();
const port = 5001;
// const mongoose = require('mongoose'); - could not get mongodb db to connect
const cors = require('cors');

// connect to routes folders
// const RoomTypes = require("./routes/RoomTypeRoutes");
// const RoomItems = require("./routes/RoomItemRoutes");
const roomTypes = require("./data/roomtype")
const roomItems = require("./data/roomitem")





// Middleware 
app.use(express.json());


// Enable CORS to allow frontend access
app.use(cors());

// use routes - could not get to work to connect to frontend
// app.use(RoomTypes);
// app.use(RoomItems);

// Get Routes
app.get('/api/roomtypes', (req, res) => {
  res.json(roomTypes);
});



app.get('/api/roomitems', (req, res) => {
    res.json(roomItems);
});

// Homepage route
app.get('/', (req, res) => {
  res.send(
      '<div>this is my home</div>'
  );
})

// Create
app.post('/api/roomtypes', async (req, res) => {
  try {
    const newRoomType = new roomTypes(req.body);
    await newRoomType.save();
    res.status(201).json(newRoomType);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update
app.put('/api/roomtypes/:id', async (req, res) => {
  try {
    const updatedRoomType = await roomTypes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRoomType) {
      return res.status(404).json({ message: 'RoomType not found' });
    }
    res.status(200).json(updatedRoomType);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete
app.delete('/api/roomtypes/:id', async (req, res) => {
  try {
    const deletedRoomType = await roomTypes.findByIdAndDelete(req.params.id);
    if (!deletedRoomType) {
      return res.status(404).json({ message: 'RoomType not found' });
    }
    res.status(200).json({ message: 'RoomType deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create
app.post('/api/roomitems', async (req, res) => {
  try {
    const newRoomItem = new roomItems(req.body);
    await newRoomItem.save();
    res.status(201).json(newRoomItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update
app.put('/api/roomitems/:id', async (req, res) => {
  try {
    const updatedRoomItem = await roomItems.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRoomItem) {
      return res.status(404).json({ message: 'RoomItem not found' });
    }
    res.status(200).json(updatedRoomItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete 
app.delete('/api/roomitems/:id', async (req, res) => {
  try {
    const deletedRoomItem = await roomItems.findByIdAndDelete(req.params.id);
    if (!deletedRoomItem) {
      return res.status(404).json({ message: 'RoomItem not found' });
    }
    res.status(200).json({ message: 'RoomItem deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


