const express = require('express');
const app = express();

const PORT = 3000;

// Server static files
app.use(express.static('public'));

app.listen(PORT, (msg) => {
    console.log(`Server listening on port ${PORT}`);
});