const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    const { message } = req.body

    if(message === "ping") {
        return res.json({ response: "pong" })
    } else {
        return res.status(400).json({ error: "Erro" })
    }
})

app.listen(PORT, () => {
    console.log("Server is running...")
})