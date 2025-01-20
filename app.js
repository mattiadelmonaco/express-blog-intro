// Local server with express.js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get("/bacheca", (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// BLOG'S POSTS

const posts = [
    {
      title: "Il segreto del perfetto Ciambellone",
      content: "Un dolce classico della tradizione, semplice da preparare ma sempre delizioso. Scopri la ricetta per un ciambellone soffice e profumato.",
      image: "ciambellone.jpg",
      tags: ["dolci", "tradizione", "ciambellone", "ricette facili"]
    },
    {
      title: "Cracker alla Barbabietola: salute e gusto",
      content: "Un'idea originale e sana per uno snack croccante e colorato. Ecco come preparare dei cracker alla barbabietola fatti in casa.",
      image: "cracker_barbabietola.jpg",
      tags: ["snack", "barbabietola", "healthy", "ricette vegane"]
    },
    {
      title: "Pane Fritto Dolce: la bontà che stupisce",
      content: "Un piatto sorprendente, croccante all'esterno e morbido dentro. Perfetto per la colazione o uno sfizio pomeridiano.",
      image: "pane_fritto_dolce.jpg",
      tags: ["pane", "dolci fritti", "colazione", "sfiziosità"]
    },
    {
      title: "Pasta alla Barbabietola: un'esplosione di colori",
      content: "Trasforma un piatto tradizionale con l'aggiunta del colore vibrante della barbabietola. Una ricetta semplice e scenografica.",
      image: "pasta_barbabietola.jpg",
      tags: ["pasta", "barbabietola", "vegetariano", "creativo"]
    },
    {
      title: "Torta Paesana: sapori di una volta",
      content: "Un dolce della tradizione lombarda che celebra i sapori genuini di una volta. Ecco la ricetta passo passo.",
      image: "torta_paesana.jpg",
      tags: ["dolci", "tradizione", "torta paesana", "Lombardia"]
    }
  ]