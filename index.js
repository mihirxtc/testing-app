const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.get("/admin", (req, res) => {
    res.send("admin");
});

app.get("/admin/dashboard", (req, res) => {
    res.send("Admin Dashboard");
})

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});