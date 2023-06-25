const express = require('express')
const app = express()
const api = process.env.API_URL
require('dotenv/config')
app.use(express.json())

app.listen(3000, ()=>{
    console.log('server listening on the 3000')
})


app.get('/', (req, res) =>{
    res.send('hello api')
})


require('dotenv/config')

app.get(`${api}/products`, (req, res) =>{
   console.log(api)
    const porduct = {
        id: 1,
        name: 'masaaki stephane',
        image: 'https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/icons/IMA-Logo-Social-Sharing.ashx?rev=c0e5e2be67f84f4081d61abdb80622e0'
    }
    res.send(porduct)
})

app.post(`${api}/products`, (req, res) =>{
     const newProduct = req.body
     console.log(newProduct)
     res.send(newProduct)
 })