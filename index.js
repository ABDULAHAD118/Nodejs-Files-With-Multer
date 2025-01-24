const express = require('express');
require('dotenv').config();
const app = express()
const path = require('path')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.set('/views', path.resolve('./views'))

app.get('/', async (req, res) => {
    return res.render('index')
})

app.post('/upload', upload.single('file'), function (req, res, next) {
    console.log(req.file);
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});