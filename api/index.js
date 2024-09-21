const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
dotenv.config();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

//importing routes
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const campaignRoute = require("./routes/campaignRoute");

//routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/campaign", campaignRoute);

mongoose.connect(
  "mongodb+srv://nipunavishka123:V1VP99fzz9BGKf7A@cluster0.kbd2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(4000, () => console.log("Server running on port: 4000"));
