const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb+srv://Ahmed_Mohamed:CARS95@cluster0.2szpgm7.mongodb.net/?retryWrites=true&w=majority"

async function connectToMongoDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB();

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});