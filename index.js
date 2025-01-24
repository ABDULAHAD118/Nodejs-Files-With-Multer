const express = require('express');
require('dotenv').config();
const app = express()
const path = require('path')
const multer = require('multer')
const fs = require('fs');

const PORT = process.env.PORT;
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync('./uploads')) {
            fs.mkdirSync('./uploads');
        }
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.get('/', async (req, res) => {
    fs.readdir('./uploads', (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Unable to scan files');
        }
        if (files) {
            return res.render('index', { files: files })
        }
        return res.render('index')
    });
})

app.post('/upload', upload.single('file'), function (req, res) {
    return res.redirect('/')
})




app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});