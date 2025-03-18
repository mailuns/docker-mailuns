const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3333;
const db = require("./db");

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(bodyParser.urlencoded({ extended: true })); // Parses form data
app.use(bodyParser.json()); // Parses JSON data

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Hello, Docker from ${process.env.NODE_ENV} server!`);
});

app.get("/all", async (req, res) => {
    try {
        const data = await db.query("SELECT * FROM employee");
        res.status(200).send(data.rows);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get("/setup", async (req, res) => {
    try {
        await db.query(
            "CREATE TABLE employee( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))"
        );
        res.status(200).send({ message: "Successfully created table" });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.post("/create", async (req, res) => {
    const { name, address } = req.body;
    try {
        await db.query("INSERT INTO employee (name, address) VALUES ($1, $2)", [
            name,
            address,
        ]);
        res.status(200).send({
            message: "Successfully added rows",
            data: req.body,
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(
        `API of ${process.env.NODE_ENV} listening at http://localhost:${port}`
    );
});
