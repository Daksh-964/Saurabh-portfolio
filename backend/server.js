import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 8001; // port app gonna listen
const connection_url = "mongodb+srv://daksh_12:BEXf4eV796HE5vco@cluster0.nc46vlo.mongodb.net/portfoliodb?retryWrites=true&w=majority";
// Middlewares
app.use(express.json());
app.use(Cors());
app.use(bodyParser.urlencoded({extended:true}));

// DB config
mongoose.connect(connection_url, { 
  // pass in couple of parameters to our connection, make our connection smooth
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true,
});


// API Endpoints
// ## go root url, callback func
app.get("/", (req, res) => {
  res.status(200).send("HELLO WORLD!!!");
});
app.get("/signup", (req, res) => {
  res.status(200).send("HELLO WORLD!!!");
});
app.get("/podcastlist",(req,res)=>{
  res.status(200).send("Podcast");
})

// add data to db, endpoint /tinder/card
app.post("/dbCards/cards", (req, res) => {
  // save request body into a var
  const dbCard = req.body;
  //   function to create a new document
  Cards.create(dbCard, (err, data) => {
    // if there is error
    if (err) {
      // set response to 500, which means internal server error and send error back
      res.status(500).send(err);
    } else {
      // 201 means created, successfully created our data and send back the data
      res.status(201).send(data);
    }
  });
});
// app.post('/signup', (req,res)=>{
//   const {firstName, lastName, email}= req.body;
//   const option ={
//     url:''
//   }
// });

// another endpoint (the same) which will download data from the db
// with this will be retrieving every single thing from the collection DB that we just created
app.get("/dbCards/cards", (req, res) => {
  //   function to find a card
  Cards.find((err, data) => {
    // if there is error
    if (err) {
      // set response to 500, which means internal server error and send error back
      res.status(500).send(err);
    } else {
      // 200 means found
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));