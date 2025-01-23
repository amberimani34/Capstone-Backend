
const express = require('express');
const app = express();
const port = 5001;
// const mongoose = require('mongoose');
const cors = require('cors');

// connect to routes folders
// const RoomTypes = require("./routes/RoomTypeRoutes");
// const RoomItems = require("./routes/RoomItemRoutes");
const roomTypes = require("./data/roomtype")





// Middleware 
app.use(express.json());


// Enable CORS to allow frontend access
app.use(cors());

// use routes
// app.use(RoomTypes);
// app.use(RoomItems);

// Get Route 
app.get('/api/roomtypes', (req, res) => {
  res.json(roomTypes);
});

// app.get('/api/roomitems', (req, res) => {
//     res.json({message: 'Room items!'});
// });

app.get('/', (req, res) => {
  res.send(
      '<div>this is my home</div>'
  );
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


