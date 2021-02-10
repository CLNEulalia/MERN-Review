const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const TweetModel = require('./db/tweet')
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '../build')))
let counter = 0

app.get('/api/', (req, res) => {
    res.send('on api route')
})

app.post('/api/submission', (req, res) => {
    res.send(
        `youre at submission with payload: ${req.body.myName}`
        )
})

app.post('/api/spa', (req, res) => {
    
    const data = req.body
    console.log(`got req with body: ${data}`)
    console.log(data)
    TweetModel.create({text:data.myData, likes:0})    
        .then(e =>  res.json({returnData:0}) )
        .catch(e => res.json({returnData:-1}) )
    // res.json({returnData: data.myData + "!!!"})
    // } catch { e => 
    //     {res.json({error: e})}
    // }

})

app.get('/api/like/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    TweetModel.findById(id)
        .then(tweet => {
            TweetModel.findByIdAndUpdate(
                id,
                {$set:{likes: tweet.likes + 1}},
                {new:true}
            )
            .then(newTweet => {
                console.log(`updated`)
                console.log(newTweet)
                res.json(newTweet)
            })

        })
        .catch(e => res.json({serverError:e}))
    
})

app.get('/api/poll', (req, res) => {
    
    let msg = {items:[]}
    
    TweetModel.find({})    
        .then(tweets => {
            
            //debug
            counter ++ 
            console.log(tweets.length)
            console.log(tweets)
            console.log(counter)
            
            let ret = undefined
            if (tweets) {
                ret = tweets.map(x => {
                        // if (x) return {text: x.text}
                        if (x) return x
                    })
                
                if (ret) {
                    if (ret.length > 0) {
                        msg['items'] = ret
                    }
                }
            }
            res.json(msg)
            })
        .catch( e => {
            msg['err'] = e; 
            res.json(msg) 
            })
    
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