const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

const buildPath = path.join(__dirname, "../Client/build");

app.use(express.static(buildPath));

app.get("/*", function(req, res) {
    res.sendFile(
        path.join(buildPath, "index.html"),
        function(err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
})

app.get('/', (req, res) => {
    res.send('Hello from the Express server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});