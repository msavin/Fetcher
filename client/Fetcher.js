// Fetcher: New Way to Retrieve Data in Meteor  (POC)

Fetcher = new ReactiveDict('fetcher');

Fetcher["retrieve"] = function (methodName, dictName) {
	Meteor.call(methodName, function (error, result) {
		if (!error) {
			Fetcher.set(dictName, result)
		}
	});
}