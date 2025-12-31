const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json()); // for JSON body
app.use(express.urlencoded({ extended: false }));

// Load users from JSON file
let users = require('./usersdata.json');

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET user by ID
app.get('/api/user/:id', (req, res) => {
    const id = Number(req.params.id);

    const ud = users.find(user => user.id === id);
    if (ud) {
        return res.json(ud.first_name);
    }

    res.status(404).json({ msg: "User not found" });
});

// Return HTML list
app.get('/api/user/html', (req, res) => {
    const html = `
        <h1>Users</h1>
        <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
        </ul>
    `;
    res.send(html);
});

// POST - Add new user
app.post("/user/uadd", (req, res) => {
    const body = req.body;
    console.log(body);

    const newUser = { ...body, id: users.length + 1 };
    users.push(newUser);

    fs.writeFile('./usersdata.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ msg: "Error writing file" });
        }
        res.json({ msg: "User added", user: newUser });
    });
});

app.listen(3000, () => console.log("server started on port 3000"));
