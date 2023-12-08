const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    console.log("Pesan Berhasil Dikirim:", formData);

    res.json('Pesan Berhasil Dikirim');
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
