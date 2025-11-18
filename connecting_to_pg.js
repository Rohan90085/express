const express = require("express");
const { Pool } = require("pg");

const app = express();

// For form data (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// For JSON (optional but useful)
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "jai ganesha",
  password: "Rohanph@900",
  port: 5432,
});

// POST: Insert data using form input
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

// GET: Get all users
app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  let op="users list:\n"
  result.rows.forEach((u)=>{
    op +=`id:${u.id},name:${u.name},email:${u.email}\n`
  });
  res.send(op);
});

app.listen(3000, () => console.log("Server running on port 3000"));
