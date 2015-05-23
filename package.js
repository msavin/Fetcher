Package.describe({
    name:          "msavin:fetcher",
    summary:       "Retrieve static data from MongoDB",
    version:       "0.1.1",
    git:           "https://github.com/msavin/Fetcher.git",
    documentation: "README.md"
  });

Package.onUse(function(api) {

  var clientFiles = [
    "Fetcher.js",
  ];

  api.add_files(clientFiles, "client");

  api.versionsFrom("1.0");
  api.use(["reactive-dict"], "client");

  api.export("Fetcher", "client");

});
