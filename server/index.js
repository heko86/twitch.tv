import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Message from "./src/models/Message.js";
import User from "./src/models/User.js";
import Channel from "./src/models/Channel.js";

import authRoutes from "./src/routes/authRoutes.js";
import channelsRoutes from "./src/routes/channelsRoutes.js";
import settingsRouters from "./src/routes/settingsRouters.js";
import itemsRouters from "./src/routes/itemsRouters.js";
import { registerSoketServer } from "./src/io/io.js";

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello here is your server");
});

app.use("/api/auth", authRoutes);
app.use("/api/channels", channelsRoutes);
app.use("/api/settings", settingsRouters);
app.use("/api/items", itemsRouters);

const server = http.createServer(app);

registerSoketServer(server);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed. Server not started");
    console.log(err);
  });
