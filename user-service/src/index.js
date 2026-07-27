const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Usuario Service corriendo en puerto ${PORT}`);
});