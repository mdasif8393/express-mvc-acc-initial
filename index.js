const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route");
const errorHandler = require("./middleware/errorHandler");
const { connectToServer } = require("./utils/dbConnect");


app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");


//viewCount middleware
// app.use(viewCount);

//call database connection from dbConnect.js
connectToServer((err)=>{
  if(!err){
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
  else{
    console.log(err)
  }
});

//use tools router
app.use("/api/v1/tools", toolsRoutes)

app.get("/", (req, res) => {
  res.render("home.ejs", {
    id: 3,
    user: {
      name: "test"
    }
  } )
});

//no route found router
app.all("*", (req, res) => {
  res.send("No route found")
})

app.use(errorHandler);



process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  })
})