const express = require("express");
const { Pool } = require("pg");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// EJS setup
app.set("view engine", "ejs");
app.set("views", "views");

// PostgreSQL Connection
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "jai ganesha",
    password: "Rohanph@900",
    port: 5432
});

// SHOW FORM + USER LIST
app.get("/", async (req, res) => {
    const result = await pool.query("SELECT * FROM users ORDER BY id DESC");
    res.render("index", { users: result.rows });
});

// INSERT NEW USER
app.post("/user/add", async (req, res) => {
    const { name, email } = req.body;

    await pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2)",
        [name, email]
    );

    res.redirect("/");   // go back to EJS page
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
