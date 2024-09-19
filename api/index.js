const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config();

//importing routes
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/auth", authRoute);
app.use("/user", userRoute);

mongoose.connect(
  "mongodb+srv://nipunavishka123:V1VP99fzz9BGKf7A@cluster0.kbd2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(4000, () => console.log("Server running on port: 4000"));
