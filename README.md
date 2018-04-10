# BearBot
A simple twitterbot that, when mentioned by other twitter users, generates
a random tarot reading with corresponding emojis and apologizes for the user's
fate. Hosted on Heroku.

## Technologies Used
- Node.js
- Twitter NPM Package

## Inspiration
- [TechKnights](http://techknights.org/workshops/nodejs-twitterbot/)
- [Build A Twitter Bot in Half an Hour](https://medium.com/@mattpopovich/how-to-build-and-deploy-a-simple-twitter-bot-super-fast-with-node-js-and-heroku-7b322dbb5dd3)
- [Writing An Emoji Twitter Bot](https://techlady.haus/blog/2017/7/22/writing-an-emoji-bot)

## Process and Structure
My goal was to create a twitterbot that generated sufficiently varied tweets at sufficiently spaced intervals in order to evade Twitter's minimum criteria for deletion; to that end, I though an account that responded with random tarot readings would be sufficiently random and yet sufficiently unpopular so as to not tweet too often. I anticipated difficulties in the wrong places: I expected it to be difficult to incorporate emoji characters; I expected Twitter's API to be difficult to communicate with; I expected responding to mentions would involve many checks and so be difficult; I expected hosting to be easy.

As it was, following a hodgepodge of the above guides, it was very easy to create a reading stream for Twitter mentions using the Twitter NPM package; it was easy to evade the easy pitfall of a twitter account responding to itself by performing a simple user check; it was stupidly easy to add emojis to tweets. By far I spent the most time researching how to add emojis to twitter posts via API calls, before I realized that emojis are recognized as characters and so could be pasted directly into the development environment. (They even show up in the terminal!)

The real problem was that I did not appreciate how to build a node package.json, nor did I appreciate what heroku needed to initiate a node process. Initially my bibliography consisted of [TechKnights](http://techknights.org/workshops/nodejs-twitterbot/) only, which made no mention of hosting, anc [Writing An Emoji Twitter Bot](https://techlady.haus/blog/2017/7/22/writing-an-emoji-bot), which I'd consulted for any information on emoji inclusion and noted Heroku as a possible hosting platform.  This project introduced me to the way that Heroku servers manage processes.

 In the future, I'd love to build a more complicated twitter bot, that would take advantage of Heroku's ability to schedule processes.

## Gratitudes
- My friend Matthew Seaton, for pushing me to go to a coding bootcamp and for
assuring me that building a twitter bot is very easy.
