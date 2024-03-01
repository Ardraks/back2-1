const db=require("./connection/Database")
const express = require("express");
const app = express();
const dotenv = require("dotenv");
// const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

// const app = new express();




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
  
  app.use("/auth", authRoute);
  app.use("/users", userRoute);
  app.use("/posts", postRoute);
  app.use("/categories", categoryRoute);
  
  




app.get('/',(request,response)=>{
    response.send("hai")
})


app.listen(4005,(request,response)=>{
    console.log("port is ruuning in 4005")
})