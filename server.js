const express = require("express")
const PORT = 3000
const app = express();

app.use(express.static("public"))

import { Database } from "bun:sqlite"
const schema = await Bun.file("./schema.sql").text()

const db = new Database("movies.db")
db.query(schema)

const select = db.query("SELECT * FROM peliculas")
console.log(select.all())

app.get("/movies", (req, res) => {
    res.json(movies)
})

app.listen(PORT, () => console.log("Servidor funcionando en el puerto " + PORT));
