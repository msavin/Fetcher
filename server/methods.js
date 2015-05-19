Meteor.methods({
	returnMessages: function () {
		return Messages.find().fetch();

		// This would technically plug into Meteor publications

	}
}); 