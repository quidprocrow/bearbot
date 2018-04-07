//console.log("Hello World!");
const TwitterPackage = require('twitter')
const secret = require('./secret')

const rando = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const randomEmoji = () => {
  const emoji = ['👍', '👌', '❤️','☕️','🍕','✨','🦄']
  return `${rando(emoji)}`
}
const Twitter = new TwitterPackage(secret.secret)
Twitter.post('statuses/update', {status: `${randomEmoji()}`},  function(error, tweet, response){
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
