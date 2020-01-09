const express = require('express')
const cors = require('cors')
const app = express()

const faqData = require('./data.json')

app.use(cors())
app.get('/', (req, res) => {
  res.send('HELLO WORLD')
})

app.get('/faq', (req, res) => {
  res.send(faqData)
})

const server = app.listen(8765, () => {
  const host = server.address().address
  const port = server.address().port

  console.log(`START SERVER - LISETENING AT http://${host}:${port}`)
})
