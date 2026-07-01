const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Auth Service corriendo en puerto ${PORT}`);
});