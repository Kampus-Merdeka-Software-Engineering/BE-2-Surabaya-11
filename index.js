const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/submit-form', (req, res) => {
    const formData = req.body;

    console.log("Pesan Berhasil Dikirim:", formData);

    res.json({ message: 'Pesan Berhasil Dikirim'});
});

app.use(express.static('public'));

const port = 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
