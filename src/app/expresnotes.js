// npm install @emailjs/browser bootstrap express@4.17.2 formsy-semantic-ui-react jquery nodemon popper.js process react react-bootstrap react-dom react-icons react-router-dom react-tooltip reactjs-popup sweetalert2

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4001;

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
    res.send("Home")
});

app.get('/portfolio', (req, res, next) => {
    res.send("Portfolio")
});

app.get('/resume', (req, res, next) => {
    res.send("Resume")
});

app.get('/contact', (req, res, next) => {
    res.send("Contact")
});


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});

// "start": "node index.js",
// "prestart": "parcel build ./src/index.html",

// "main":"index.js",

// "start": "parcel src/index.html --open",
// "build": "parcel build src/index.html --public-url ./"






// const express = require('express');
// const path = require('path');

// const app = express();

// const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'dist')));

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`)
// });