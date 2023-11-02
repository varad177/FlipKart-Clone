import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import Connection from "./database/db.js";
import DefalutData from "./default.js";
import Router from "./routes/route.js";
import path from 'path'
const PORT = process.env.PORT || 8000;
const app = express();
const __dirname = path.resolve()





app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Router);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
Connection();

DefalutData();

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
    
      res.status(500).send(err);
    }
  );
});
