

const express = require('express');
const fs = require('fs');
const app = express();
let users = require("./usersdata.json");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.patch("/user/update/:id", (req, res) => {
    const id = Number(req.params.id); // FIX 1
    const body = req.body;
    const userindex = users.findIndex(u => u.id === id);
    if (userindex === -1) {
        return res.status(404).json({ msg: "user not found" });
    }
    // FIX 2
    users[userindex] = { ...users[userindex], ...body };
    fs.writeFile('./usersdata.json', JSON.stringify(users), err => {
        if (err) {
             res.json({ msg: "not updated" });
        }
        
        res.json(users[userindex]);
    });
});

app.listen(3000, () => console.log("server started"));