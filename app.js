const express = require('express')
const app = express()
const port = 3003
const fs = require('fs')

app.get("/", (req, res) => {
  fs.readFile(`${__dirname}/index.html`, "utf8", (err, data) => {
    res.send(data)
   })
})

app.listen(port, () => {
	console.log(`Node Server is running on PORT: ${port}`);
})

// Route not found (404)
app.use(function(req, res, next) {
  res.status(404).send({ message : '404 Not Found' });
  next()
});

// Server error (500)
app.use(function(err, req, res, next) {
  return res.status(500).send({ message : '500 Server Error' });
});