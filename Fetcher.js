Fetcher = new ReactiveDict('fetcher');


Fetcher["retrieve"] = function () {
	
	// convert arguments to array
	var methodCall = Array.prototype.slice.call(arguments);

	// extract the name of the reactive-dict
	var dictName   = methodCall[0];

	// back up arguments for a re-run
	var backupName = "backup_" + dictName;
	Fetcher.set(backupName, methodCall);

	// remove the name of reactive-dict from arguments
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


Fetcher["refresh"] = function (name) {

	// rerun using previous data
	previous = Fetcher.get("backup_" + name);
	Fetcher.retrieve.apply(null, previous); 

}