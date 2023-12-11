const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'http://localhost:5500'
}

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const router = require('./routes/roomRoutes.js')
app.use('/api/rooms', router)

const contactRouter = require('./routes/contactRoutes.js')
app.use('/api/contacts', contactRouter)


app.get('/api/rooms', (req, res) => {
    const responseData = { message: 'Hello from special endpoint' };
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(responseData));
});


app.get('/', (req, res) => {
    res.json({ message:'hello from api'})
})


const PORT = process.env.PORT || 5500


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})