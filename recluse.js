var TT = require('./twitter.js');
const conf = require('./conf.js');
var Twit = require('twit');
var T = new Twit(conf.robot);

var options = {
  nick: conf.robot.screen_name
};
var stream = T.stream('statuses/filter', { track: options.nick });
stream.on('tweet', function(tweet){
  console.log(tweet.user.screen_name+": "+tweet.text)
  if(tweet.text == "I\'m not a furry."){
    console.log('testing, you\'re not a furry, ayyy')
  }
  var arg = tweet.text.split(' ');
  // if(arg[0] != "@"+options.nick) return; // if tweet not to me...
});
