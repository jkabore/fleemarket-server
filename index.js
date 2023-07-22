require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());

const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");
const productsRoute = require("./routes/productsRoute");
const bidsRoute = require("./routes/bidsRoute");
const notificationsRoute = require("./routes/notificationsRoute");

const port = process.env.PORT || 8000;
app.use(
  cors({
    origin: process.env.STATIC_URL,
  })
);
app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/bids", bidsRoute);
app.use("/api/notifications", notificationsRoute);
app.listen(port, () =>
  console.log(`Node/Express Server started on port ${port}`)
);
