
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    specs: ['spec1.js','spec1.js','spec1.js','spec1.js'],
    
    //specs: ['spec1.js'],
    maxInstances : 4,
    shardTestFiles: true
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
      glob: 'tempdoc',
      glob: 'name',
      glob: 'address',
      glob: 'hundred',
      glob: 'classPart'
  },


  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  }
};
