import express from 'express'
import 'dotenv/config'

const app = express()

app.get('/', (req, res) => {
	res.send('Yayy')
})

const port = +(process.env.PORT || 8000);
app.listen(port) // will change to env later, mabe tonight
console.log(`Listening on port ${port}`)