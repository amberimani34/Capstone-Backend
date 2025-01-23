const { Router } = require("express");
// const mongoose = require('mongoose');

// // Schema
// const roomTypeSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true, 
//     unique: true,   
//     trim: true,     
//   },
//   description: {
//     type: String,
//     required: true, 
//     trim: true,
//   },
//   dimensions: {
//     length: {
//       type: Number, 
//       required: true,
//     },
//     width: {
//       type: Number, 
//       required: true,
//     },
//     height: {
//       type: Number, 
//       required: false,
//     },
//   },
//   features: {
//     type: [String], 
//     default: [],
//   },
//   image: {
//     type: String,  
//     required: false,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now, 
//   },
// });


// const RoomType = mongoose.model('RoomType', roomTypeSchema);

const roomTypes = [
    {
      name: "Living Room",
      description: "A spacious room for relaxation and entertaining guests, often with comfortable seating and a focal point like a fireplace or TV.",
      dimensions: {
        length: 20,
        width: 15,
        height: 10
      },
      features: ["fireplace", "large windows", "sofa", "TV", "coffee table"],
      image: "https://images.pexels.com/photos/12742348/pexels-photo-12742348.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Bedroom",
      description: "A private space for sleeping, usually with a bed, nightstands, and wardrobe or closet.",
      dimensions: {
        length: 14,
        width: 12,
        height: 10
      },
      features: ["queen bed", "nightstand", "wardrobe", "lamp", "closet"],
      image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Kitchen",
      description: "A room for preparing and cooking food, usually equipped with appliances like a stove, refrigerator, sink, and ample counter space.",
      dimensions: {
        length: 18,
        width: 12,
        height: 9
      },
      features: ["stove", "refrigerator", "sink", "counter space", "microwave", "kitchen island"],
      image: "https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Bathroom",
      description: "A room for personal hygiene, typically containing a shower or bathtub, toilet, and sink.",
      dimensions: {
        length: 10,
        width: 8,
        height: 9
      },
      features: ["shower", "bathtub", "toilet", "sink", "mirror"],
      image: "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Dining Room",
      description: "A room used for dining, typically featuring a table and chairs for eating meals, often adjacent to the kitchen.",
      dimensions: {
        length: 16,
        width: 12,
        height: 10
      },
      features: ["dining table", "chairs", "sideboard", "chandelier"],
      image: "https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Home Office",
      description: "A room or space designated for work, usually equipped with a desk, computer, and office supplies.",
      dimensions: {
        length: 12,
        width: 10,
        height: 9
      },
      features: ["desk", "office chair", "computer", "bookshelf", "lamp"],
      image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Closet",
      description: "A small or large space to store clothing, shoes, and accessories. ",
      dimensions: {
        length: 10,
        width: 4,
        height: 9
      },
      features: ["built-in shelves", "storage"],
      image: "https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Playroom",
      description: "A room used for kids to play, do homework, and store toys.",
      dimensions: {
        length: 16,
        width: 12,
        height: 10
      },
      features: ["kids desk", "kids chairs", "storage shelves", "artwork", "rug"],
      image: "https://delivery.gettyimages.com/downloads/483097318?k=20&e=5RrSbTFIWN_jQzCcjCnMci-jes-Bmqij7njIO_XnXN_gygXXhj4MaHmcy_-cFrVd2FJ9eAtpZacIpi-k068MgyUuE66xDZk7FmYDS8cU-cQ=",
    },
  ];

module.exports = roomTypes;