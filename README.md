# Fetcher

Fetcher is designed to make retrieving data through Method's really easy. It will run Meteor.call() for you, then deposit the result into a reactive dictionary. Just like a Session variable, you can use that data anywhere in your application, and it persists through hot reloads.

# How to Use

Fetcher relies on Meteor.call() to retrieve data from Methods, and Reactive-Dict to return reactive data to Blaze or wherever you may need it. 
```javascript
// get data from server
// params are for the Method call
Fetcher.retrieve("taco", "methodName", param1, param2, param3, etc)

// return data
Fetcher.get("taco")

// modify the data
Fetcher.set("taco", {'cheese' : 'yes please'})  

// re-run previous Fetcher.retrieve()
Fetcher.refresh("taco")
```

# Advertisment
Check out <a href="http://meteor.toys">Meteor Toys</a>, the insanely handy development tools for Meteor!

Licensed under <a href="https://github.com/msavin/Fetcher/blob/master/LICENSE.md">MIT</a>
