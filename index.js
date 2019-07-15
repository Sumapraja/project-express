const express = require('express')
const app = express()
const port = 3300

app.get('/', (req, res) => res.send('Hello Earth!'))
app.get('/Spider', (req, res) => res.status(200).send(`I'm Spiderman`))
app.get('/Mysterio', (req, res) => res.sendStatus(404))
app.get('/JJJ', (req, res) => res.redirect('..'))

app.get('/items/:id', (req, res) => {
    res.send({
      id: req.params.id
    })
  })
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 