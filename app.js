// Require twitter node package.
const TwitterPackage = require('twitter')
// Require secret keys associated with particular twitter app.
const secret = require('./secret')
// Require tarot reading function.
const tarot = require('./tarot')

const rando = function () {
  return Math.floor(Math.random() * 21)
}


const randomEmoji = () => {
  const emoji = ['👍', '👌', '❤️','☕️','🍕','✨','🦄']
  return `${rando(emoji)}`
}

const Twitter = new TwitterPackage(secret.keys)
Twitter.post('statuses/update', {status: `${tarot.reading(rando())}`},  function(error, tweet, response){
 if(error){
   console.log(error)
 }
 console.log(tweet)  // Tweet body.
 console.log(response)  // Raw response object.
})
// Twitter.stream('statuses/filter', {track: '#unbearabletest'}, function(stream) {
//   stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });
//
//   stream.on('error', function(error) {
//     console.log(error);
//   });
// });
