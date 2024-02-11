const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ "users": ["userone", "usertwo", "userthree"] });
});

app.listen(6000, () => {
    console.log("server started on port 6000");
});
