var TT = require('./twitter.js');
const conf = require('./conf.js');
var Twit = require('twit');
var T = new Twit(conf.robot);

var options = {
  nick: conf.robot.screen_name,
  swift: 2436389418,
  corn: "1027396132530544640",
  bob: 2371132376
};
const trackID = options.corn; // set to one of above names
var stream = T.stream('statuses/filter', { follow: trackID });

/*
stream.on('message', function(msg){
  for(var x in msg){
    console.log("MESSAGE: " + x)
  }
});
*/

stream.on('tweet', function(tweet){
  console.log(tweet.user.screen_name+": "+tweet.text)
  let text = tweet.text;
  if(text.includes("I\'m not a furry.") || text.includes("I\’m not a furry.") || text.includes("I\`m not a furry.")){ // ’`'
    console.log('testing, you\'re not a furry, ayyy')
    T.post('statuses/update', { status: '@'+ tweet.user.screen_name + ' You\'re not a furry.', in_reply_to_status_id: tweet.id_str }, function(err, data)
 {
          if(err) {
                     console.log("DANGER: " + err)
              } else {
                // console.log(data)
            }
    });
  }
  //var arg = tweet.text.split(' ');
  // if(arg[0] != "@"+options.nick) return; // if tweet not to me...
});
