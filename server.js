const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 5000;
// process.env.PORT is used when app is deployed
// 5000 is used localy

app.listen(port, () => console.log(`Server running on port ${port}`));
// run 'npm run server' to launch server with nodemon for restarting server automatically
// in browser type 'localhost:5000' to see message
