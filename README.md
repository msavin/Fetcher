<img src="https://raw.githubusercontent.com/msavin/Fetcher/master/public/meme.jpg">

# Fetcher API for Meteor: Proof of Concept

Fetcher aims to provide an alternative to Meteor's Pub/Sub model for sending data to the client. The goal is to return static data to the client, and make it easy to refresh. It's great for helping you scale down the real-time aspect of your application, so you can scale up in production! The main goals are to provide an API that helps you: 

  1- Retrieve static data from the server
  2- Render data into templates
  3- Refresh data on demand 

This package relies on Method's and Reactive-Dict to work. By standardizing the functionality into a package, we can make the concept easier to grasp and build debug tools around it. Most importantly, it would be really nice to have a clean and simple API to work with. 

# API
Fetcher relies on Meteor methods to retrieve data, and Reactive-Dict to return reactive data to Blaze.
```javascript
	// get data from server
	Fetcher.retrieve("name", param1, param2)

	// get data from server using same parameters
	Fetcher.refresh("name")

	// return data to whatever source
	- Fetcher.get("name")

	// overwrite the data yourself
	// userful for join, transform, etc
	- Fetcher.set("dowhatever")  
```

# Package Goals
 - Create a clean and simple API for retrieving static data
 - Plug into Meteor Publications for permissions/etc
 - Only publish changes in data instead of entire dataset (similar to MergeBox)
 - Make it easy to switch from Fetcher to a real-time subscription
 - Keep track of when data was last updated

# Contributing
Contributors are welcome, but please get in touch before getting started so that we're on the same page. If people want to work on it together, I'm fine with starting an organization for it. Get in touch (its[a]maxsavin.com) and I'll add you to the Slack channel.

# Advertisment
Check out <a href="http://meteor.toys">Meteor Toys</a>, the insanely handy development tools for Meteor!

Licensed under MIT