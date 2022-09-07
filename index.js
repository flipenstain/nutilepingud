const express = require('express')
const app = express()

app.use(express.json())

let notes = [
  {
    id: 1,
    content: ""
    }
]

app.get('/api/notes', (request, response) => {
  console.log(notes)
  response.json(notes)
})

app.get(["/", "/:nimi"], (req, res) => {
  greeting = "<h1>Hello From Node on Fly!</h1>"
  nimi = req.params["name"]
  if (nimi) {
    res.send(greeting + "</br>and hello to " + nimi)
  } else {
    res.send(greeting)
  }
})

app.post('/api', (request, response) => {
    const body = request.body
    console.log(body)
    const tere = 'Tere, '
    const note = {
        content: tere + body.content
    }
    response.json(note)

})


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })