const express = require("express");
const cors = require("cors");

const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", bookRoutes);

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Libro Service corriendo en puerto ${PORT}`);
});