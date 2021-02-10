const mongoose = require('./conn')

const TweetSchema = mongoose.Schema({
    text:String
})

const TweetModel = mongoose.model('tweet', TweetSchema)

module.exports = TweetModel