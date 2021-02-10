const mongoose = require('./conn')

const TweetSchema = mongoose.Schema({
    text:   String,
    likes:  Number,
})

const TweetModel = mongoose.model('tweet', TweetSchema)

module.exports = TweetModel