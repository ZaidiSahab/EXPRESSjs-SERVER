import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello PAPPA!'+ new Date() )
    console.log("Pappa!!" , new Date())
})


app.get('/contact', (req, res) => {
    console.log("Contact" , new Date())
    res.send('contact'+ new Date())

})

const PORT = process.env.PORT|| 3002;
app.listen(PORT, () => {
    console.log(`Example SERVER listening on port ${PORT}`)
})