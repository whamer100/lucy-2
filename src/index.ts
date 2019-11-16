import express from 'express';
const app = express()
const port = process.env.PORT || 6969
import dataHandler from "./scott"

const stwHandler = (data: string) => {
  if (data.length < 1) {
    return "Error: no data provided"
  } else {
    return dataHandler(data)
  }
}

app.get('/', (req, res) => res.send(''))
app.get('/stw', (req, res) => res.send('Error: no data provided'))
app.get('/stw/:data', async (req, res) =>
  res.send(await stwHandler(req.params["data"])))

app.listen(port, () => console.log(`listening on port ${port}`))