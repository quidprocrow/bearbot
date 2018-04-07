'use strict'
// Require twitter node package.
const TwitterPackage = require('twitter')
// Require secret keys associated with particular twitter app.
// const secret = require('./secret')
// Require tarot reading function.
const tarot = require('./tarot')
// Require unique random number generator.
const randomizer = require('./randomizer')

const keys = {
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token_key: process.env.ACCESS_TOKEN_KEY,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

const Twitter = new TwitterPackage(keys)

Twitter.stream('statuses/filter', {track: '@abearofbadnews'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
    // If the user's name isn't my own, then I want to respond.
    if (tweet.user.screen_name !== '@abearofbadnews') {
      // @ them.
      const user = '@' + tweet.user.screen_name
      const greeting = `OY, ${user} \n`
      // Create a reading of unique cards.
      const fate = randomizer.readingGenerator()
      // Apologize for their fate.
      const apology = '\n SRRRRRY BRRRO'
      // Body containing the reading.
      const statusBody = `${greeting} ${tarot.reading(fate[0])} ${tarot.reading(fate[1])} ${tarot.reading(fate[2])} ${apology}`
      // Respond accordingly.
      Twitter.post('statuses/update', {status: `${statusBody}`},  function(error, tweet, response){
       if(error){
         console.log(error)
       }
       console.log(tweet)  // Tweet body.
       console.log(response)  // Raw response object.
      })
    }
  })

  stream.on('error', function(error) {
    console.log(error);
  })
})
