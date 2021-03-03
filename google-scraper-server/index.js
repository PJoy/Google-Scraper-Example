const express = require("express");
const cors = require('cors')
const app = express();

// Allow cross-origin resource sharing
app.use(cors())
app.use(express.json());

// Start server
app.listen(3333, () => {
    console.log("Server running on port 3333");
});

app.post("/log-search", (req, res, next) => {
    // Log request
    console.log(req.body)

    // then do something with the result...
});
