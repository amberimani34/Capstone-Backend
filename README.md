Interior Design Backend
This is the backend for an Interior Design application built with Node.js, Express, and MongoDB. It provides API endpoints to manage room types used in the interior design process.


This backend uses the following technologies:

Node.js - JavaScript runtime for the server.
Express - Web framework for Node.js to handle routing and middleware.
MongoDB - NoSQL database to store room types.
Mongoose - ODM (Object Data Modeling) library for MongoDB and Node.js.
Cors - Middleware to handle Cross-Origin Resource Sharing (CORS).
Getting Started
Follow these steps to get the backend running locally.

Installation
Clone the repository to your local machine:


git clone https://github.com/yourusername/interior-design-backend.git
cd interior-design-backend
Install dependencies:

You need Node.js installed on your machine. You can install dependencies using npm:


npm install
Set up MongoDB:

Make sure you have a running instance of MongoDB. You can either set it up locally or use a cloud-based service like MongoDB Atlas.

If you are using MongoDB Atlas, make sure to replace the MongoDB URI in the .env file (see below).

Create a .env file:

Create a .env file in the root directory of your project and add the following (replace with your actual MongoDB URI):


MONGODB_URI=mongodb://localhost:27017/interior_design
PORT=5000
MONGODB_URI: The connection string to your MongoDB database.
PORT: The port your server will run on (default is 5000).
Run the application:

After completing the above steps, start the server using the following command:


npm start
The backend will start running on http://localhost:5000.

Testing the API
You can test the API using Postman or curl to make requests to the endpoints listed below.

API Endpoints
GET /api/roomtypes
Retrieve all room types in the database.

Response:

200 OK: Returns an array of all room types.

Example Response:


[
  {
    "_id": "605c72ef1532072bdc9bfa8d",
    "name": "Living Room",
    "description": "A spacious room for relaxation and entertaining guests, often with comfortable seating and a focal point like a fireplace or TV.",
    "dimensions": { "length": 20, "width": 15, "height": 10 },
    "features": ["fireplace", "large windows", "sofa", "TV", "coffee table"],
    "image": "https://example.com/images/living-room.jpg",
    "createdAt": "2021-03-24T12:00:00.000Z"
  },
  ...
]
POST /api/roomtypes
Create a new room type.

Request Body (JSON):


{
  "name": "Bedroom",
  "description": "A private space for sleeping, usually with a bed, nightstands, and wardrobe or closet.",
  "dimensions": { "length": 14, "width": 12, "height": 10 },
  "features": ["queen bed", "nightstand", "wardrobe", "lamp", "closet"],
  "image": "https://example.com/images/bedroom.jpg"
}
Response:

201 Created: Returns the created room type.

Example Response:


{
  "_id": "605c72ef1532072bdc9bfa8e",
  "name": "Bedroom",
  "description": "A private space for sleeping, usually with a bed, nightstands, and wardrobe or closet.",
  "dimensions": { "length": 14, "width": 12, "height": 10 },
  "features": ["queen bed", "nightstand", "wardrobe", "lamp", "closet"],
  "image": "https://example.com/images/bedroom.jpg",
  "createdAt": "2021-03-24T12:00:00.000Z"
}
PUT /api/roomtypes/:id
Update an existing room type.

Request Body (JSON):


{
  "name": "Updated Bedroom",
  "description": "An updated bedroom description.",
  "dimensions": { "length": 16, "width": 14, "height": 10 },
  "features": ["king bed", "nightstand", "wardrobe", "lamp"],
  "image": "https://example.com/images/updated-bedroom.jpg"
}
Response:

200 OK: Returns the updated room type.

Example Response:


{
  "_id": "605c72ef1532072bdc9bfa8e",
  "name": "Updated Bedroom",
  "description": "An updated bedroom description.",
  "dimensions": { "length": 16, "width": 14, "height": 10 },
  "features": ["king bed", "nightstand", "wardrobe", "lamp"],
  "image": "https://example.com/images/updated-bedroom.jpg",
  "createdAt": "2021-03-24T12:00:00.000Z"
}
DELETE /api/roomtypes/:id
Delete a room type.

Response:

200 OK: Returns a success message.

Example Response:


{
  "message": "Room type deleted successfully"
}
Environment Variables
You can configure the following environment variables for your backend:

MONGODB_URI: The URI for your MongoDB database. If you're using MongoDB Atlas, get the connection string from your Atlas dashboard.
PORT: The port where the server will run (default: 5000).
