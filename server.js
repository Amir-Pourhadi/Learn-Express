const express = require("express");
const app = express();
const port = 8080;

// app.use((req, res) => {
// 	res.send({ color: "blue", mive: "huloo" });
// });	

app.get("/", (req, res) => {
	res.send("<h1>welcome to Home page</h1>");
});

app.get("/dogs", (req, res) => {
	res.send("WOOF");
});

app.get("/cats", (req, res) => {
	res.send("MEOW");
});

app.get("/r/:id/:select", (req, res) => {
	const { id, select } = req.params;
	res.send(`<h1>this is your param: ${id} and your select is: ${select}</h1>`);
});

app.get("/search", (req, res) => {
	const { q } = req.query;
	res.send(`your search is: ${q}`);
});

app.get("*", (req, res) => {
	res.send("<h1>there is no such a route here</h1>");
});

app.listen(port, () => {
	console.log(`I am running on port ${port}`);
});
