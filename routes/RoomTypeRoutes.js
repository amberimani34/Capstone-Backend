
const express = require('express');
const RoomType = require('../data/roomtype'); // Import the RoomType model
const router = express.Router();

// Get all room types
router.get('/api/roomtypes', async (req, res) => {
  try {
    const roomTypes = await RoomType.find();
    res.json(roomTypes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching room types' });
  }
});

// Create a new room type
router.post('/api/roomtypes', async (req, res) => {
  try {
    const newRoomType = new RoomType(req.body);
    await newRoomType.save();
    res.status(201).json(newRoomType);
  } catch (error) {
    res.status(400).json({ message: 'Error creating room type' });
  }
});

// Update a room type
router.put('/api/roomtypes/:id', async (req, res) => {
  try {
    const updatedRoomType = await RoomType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRoomType) {
      return res.status(404).json({ message: 'Room type not found' });
    }
    res.json(updatedRoomType);
  } catch (error) {
    res.status(400).json({ message: 'Error updating room type' });
  }
});

// Delete a room type
router.delete('/api/roomtypes/:id', async (req, res) => {
  try {
    const deletedRoomType = await RoomType.findByIdAndDelete(req.params.id);
    if (!deletedRoomType) {
      return res.status(404).json({ message: 'Room type not found' });
    }
    res.json({ message: 'Room type deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting room type' });
  }
});

module.exports = router;