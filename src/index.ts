import express from 'express';
const app = express()
const port = process.env.PORT!

app.get('/', (req, res) => res.send('This is a test.'))

app.listen(port, () => console.log(`listening on port ${port}`))