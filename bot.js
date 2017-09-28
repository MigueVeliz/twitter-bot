console.log("The bot is running")

var Twit = require('twit');
var config = require('./config') // Auth info is config.js

var T = new Twit( config );

function tweetIt() {

	var r = Math.floor(Math.random() * 100);
	
	var tweet = {
		status: r + " Learning how to create a bot"
	}

	T.post('statuses/update', tweet, tweeted);


	function tweeted(err, data, response) {
		console.log("It worked!")
	}

}

/*tweetIt();
setInterval( tweetIt, 1000*20)*/

// Getting tweets
// var params = { q: 'node', count: 2 };
// T.get('search/tweets', params, gotData);
// function gotData(err, data, response) {
// 	console.log(data);, 
// }

// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);

function followed( eventMsg ) {
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screenName;

	tweetIt('@' + screenName + ' do you like coding?');
}

