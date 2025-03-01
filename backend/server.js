require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

mongoose
  .connect("mongodb://127.0.0.1:27017/notesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB підключено"))
  .catch((err) => console.error("Помилка підключення до MongoDB:", err));

app.get("/", (req, res) => {
  res.send("Сервер працює!");
});

app.listen(PORT, () => console.log(`Сервер працює на порту ${PORT}`));

const noteRoutes = require("./routes/noteRoutes");
app.use("/api", noteRoutes);

const { swaggerUi, swaggerSpec } = require("./swaggerConfig").default;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));