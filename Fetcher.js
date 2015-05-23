Fetcher = new ReactiveDict('fetcher');

Fetcher["retrieve"] = function () {
	
	// convert arguments to array
	var methodCall = Array.prototype.slice.call(arguments);
	
	// extract the name of the reactive-dict
	var dictName   = methodCall[0];
	    methodCall.shift();

	// make it work
	methodCall.push(function (error, result) {
		if (!error) {
			Fetcher.set(dictName, result)
		} else {
			console.log("Fetcher: Error with '" + dictName + "'");
			console.log(error);
		}
	});

	// boom
	Meteor.call.apply(Meteor, methodCall); 

}