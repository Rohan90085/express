
app.post("/user/add", async (req, res) => {
    const { name, email } = req.body;

    try {
        await pool.query(
            "INSERT INTO users (name, email) VALUES ($1, $2)",
            [name, email]
        );

        res.send("User added from EJS form!");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});
