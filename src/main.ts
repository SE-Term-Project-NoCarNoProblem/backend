import express from 'express'
const app = express()

app.get('/', (req, res) => {
	res.send('Yayy')
})

app.listen(8000) // will change to env later, mabe tonight
console.log('Listening on hard-coded port')