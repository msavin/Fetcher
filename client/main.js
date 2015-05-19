// Step #1: Get Message Data
//   This could be triggered anywhere. For example:
//   Router, Tracker, Event, etc
Fetcher['retrieve']('returnMessages', 'messages');

// Step #2: Return this data to the template
Template.messages.helpers({
	message: function () {
		return Fetcher.get("messages");
	}
});

// Step #3: Give people way to insert messages
Template.controls.events({
  'submit': function (event, template) {
    
    event.preventDefault();

    message = $("#message").val();

    Messages.insert({
      content: message,
      date: new Date()
    });
  }
});

// Step #4: Provide refresh toggle
Template.controls.events({
	'click .refresh': function () {
		// Should be
		// Fetcher['refresh']('returnMessages');
		// But I'll go easy on myself on the POC:
		Fetcher['retrieve']('returnMessages', 'messages');	
	}
	
});