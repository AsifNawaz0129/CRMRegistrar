
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    specs: ['spec3.js'],
    
    //specs: ['spec2.js'],
    maxInstances : 1,
    //shardTestFiles: true
  },
//Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  /*onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports/screenshots'
      }).getJasmine2Reporter());
   },*/
  
  params: {
      glob: 'tempiden',
      glob: 'name',
      glob: 'address'
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
