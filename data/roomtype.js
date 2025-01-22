const { Router } = require("express");
const mongoose = require('mongoose');

// Schema
const roomTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
    unique: true,   
    trim: true,     
  },
  description: {
    type: String,
    required: true, 
    trim: true,
  },
  dimensions: {
    length: {
      type: Number, 
      required: true,
    },
    width: {
      type: Number, 
      required: true,
    },
    height: {
      type: Number, 
      required: false,
    },
  },
  features: {
    type: [String], 
    default: [],
  },
  image: {
    type: String,  
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});


const RoomType = mongoose.model('RoomType', roomTypeSchema);

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
      image: "https://example.com/images/living-room.jpg",
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
      image: "https://delivery.gettyimages.com/downloads/503738516?k=20&e=svXV3FHIYsHYLjD0kG0mLxAToi8FviDA8uFoonrM2vwS6pU_8SVT_WS4l2V6-BU48AEWLmEJiLKHZ-5YASkgnC_TRoZqPmWD2UpA6HugXXs=",
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
      image: "https://delivery.gettyimages.com/downloads/2053961830?k=20&e=jgnpZH4AIjlF899JTmjD7wE4WBL-WdPB9lIOcNK58Y2IdORI-X0B-JgLol5Dd8UFzPakMdQhM5i7PsT1a-eduljn3mlqHE7LhGhGi8QWNlw=",
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
      image: "https://example.com/images/bathroom.jpg",
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
      image: "https://example.com/images/dining-room.jpg",
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
      image: "https://example.com/images/home-office.jpg",
    },
    {
      name: "Hallway",
      description: "A narrow passage that connects rooms within a building, often used for circulation between spaces.",
      dimensions: {
        length: 10,
        width: 4,
        height: 9
      },
      features: ["light fixtures", "wall decor", "runner rug"],
      image: "https://example.com/images/hallway.jpg",
    }
  ];

module.exports = RoomType;