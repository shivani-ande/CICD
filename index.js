require(“dotenv”);
const express = require(“express”);
const app = express();
const { log } = console;
app.get(“/user”, (req, res) => {
 res.send({
 result: [
 {
 name: “armstrong”,
 status: “developer”,
 },
 ],
 });
});
const port = process.env.PORT || 5000;
app.listen(port, () => log(`Server running on port ${port} 🔥`));
