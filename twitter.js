const conf = require('./conf.js');
var Twit = require('twit');
var T = new Twit(conf.robot);  // insert api key field from conf file

module.exports.twitterHistory = function(target, cb){ // pull last x tweets from target user
  var options = {
    screen_name: '',
    include_rts: false,
    count: 200,
    exclude_replys: true
  }
  options.screen_name = target;
  T.get('statuses/user_timeline', options, function(err, data, response){
    if(err) console.log(err);
    //console.log(response)
    return cb(data);
  });
}
module.exports.twitterSearch = function(target, cb){ // pull last x tweet according to search
  var options = {
    q: '',
    include_rts: true,
    count: 200
  }
  options.q = target;
  T.get('search/tweets', options, function(err, data, response){
    if(err) console.log(err);
    //console.log(response)
    if(data.statuses.length == 0 ){
      //return cb('corpus too small, change your search terms')
	options.q += ' da OR fucked OR a OR tank'
	    console.log(options.q)
    T.get('search/tweets', options, function(err, data, response){
	        if(err) console.log(err);
	        //console.log(response)
	        if(data.statuses.length == 0 ){
       return cb('corpus too small, change your search terms')
      } else {
        return cb(data.statuses);
	                            }
	                              });
    } else {
      return cb(data.statuses);
    }
  });
}
