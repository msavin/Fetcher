# Fetcher

Fetcher is a simple abstraction designed to make retrieving data through Method's really easy. It will run the method call for you, then deposit the result into a reactive dictionary. You can then use that data anywhere in your application, and it persists through hot reloads. 

# API

Fetcher relies on Meteor methods to retrieve data, and Reactive-Dict to return reactive data to Blaze or wherever you may need it. 
```javascript
// get data from server
Fetcher.retrieve("name", "methodName", ["param1", "param2", "param3"])

// modify the data yourself
Fetcher.set("dowhatever")  

// return data to whatever source
Fetcher.get("name")
```

# Advertisment
Check out <a href="http://meteor.toys">Meteor Toys</a>, the insanely handy development tools for Meteor!

Licensed under MIT