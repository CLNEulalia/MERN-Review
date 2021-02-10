const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '../build')))

app.get('/api/', (req, res) => {
    res.send('on api route')
})

app.post('/api/submission', (req, res) => {
    res.send(
        `youre at submission with payload: ${req.body.myName}`
        )
})

app.post('/api/spa', (req, res) => {
    try {
    const data = req.body
    console.log(`got req with body: ${data}`)
    console.log(data)
    res.json({returnData: data.myData + "!!!"})
    } catch { e => 
        {res.json({error: e})}
    }

})

app.get('*', (req, res) => {
    // res.sendFile('public/index.html', (err) => {
    res.sendFile(path.join(__dirname, '../build'), (err) => {
    
        console.log('problem sending file')
        console.log(err)
        res.send('error')
    })
})



app.listen(port,()=>{
    console.log(`port ${port}`)
})