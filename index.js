const express = require('express')
const connectToMongo = require('./db');
const Books = require('./models/books');
const path = require('path');
var cors = require('cors');
require("dotenv").config();

connectToMongo();

const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

// For Production 

const static_path = path.join(__dirname,'client','build');
app.use(express.static(static_path));

// app.get("/*",(req,res)=>{
//   res.sendFile(path.join(__dirname,'./client/build/index.html'));
// })

app.get('/fetchbook',async (req, res) => {
  try {
      const books = await Books.find();
      res.json(books)
  } catch (error) {
      res.status(500).json({ "Server Error": error.message });
  }
})

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})