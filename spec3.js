describe('CRM authorizer', function() {
	it('CRM Autorizer', function() {
	  	//Browser
		//Browser
		browser.get('');
	    	//Maximize Windows
	    browser.driver.manage().window().maximize();
	    	//Login Credentials
	    browser.manage().timeouts().implicitlyWait(40000);
	    element(by.id('clientid')).sendKeys('001');
	    browser.manage().timeouts().implicitlyWait(40000);
		element(by.id('username')).sendKeys('05');
		browser.manage().timeouts().implicitlyWait(40000);
		element(by.id('password')).sendKeys('123');
		browser.manage().timeouts().implicitlyWait(40000);
		element(by.xpath('//button[. = "Log In"]')).click();
		browser.manage().timeouts().implicitlyWait(40000);
		  //Navigation to CRM
		browser.manage().timeouts().implicitlyWait(40000);
		browser.sleep(3000);
		  //Navigation to CRM
	  	element(by.xpath('//span[. = "CRM"]')).click();
	  	browser.manage().timeouts().implicitlyWait(40000);
		element(by.xpath("//SPAN[@class='ng-tns-c4-15'][text()='Workflow Approval']/self::SPAN")).click();
		browser.manage().timeouts().implicitlyWait(40000);
		element(by.xpath("//SPAN[@class='ng-tns-c4-18'][text()='Individual Customer']/self::SPAN")).click();
		//element(by.xpath('//span[text()= "Customer Registration"]')).click();
		browser.manage().timeouts().implicitlyWait(40000);
	  	element(by.xpath("(//INPUT[@pinputtext=''])[2]/../..")).click();
	  	browser.actions().sendKeys(protractor.Key.NUMPAD0).perform();
	  	browser.actions().sendKeys(protractor.Key.NUMPAD0).perform();
	  	browser.actions().sendKeys(protractor.Key.NUMPAD6).perform();
	  	browser.actions().sendKeys(protractor.Key.ENTER).perform();
	  	element.all(by.className('ui-button-text ui-clickable')).first().click();
	  	browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
		browser.manage().timeouts().implicitlyWait(40000);
		browser.sleep(2000);
		element(by.xpath('//button[. = "Next"]')).click();
		browser.manage().timeouts().implicitlyWait(40000);
		browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
		browser.manage().timeouts().implicitlyWait(40000);
		element(by.xpath('//button[. = "Next"]')).click();
		browser.manage().timeouts().implicitlyWait(40000);
		browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
		browser.manage().timeouts().implicitlyWait(40000);
		element(by.xpath('//button[. = "Next"]')).click();
		browser.manage().timeouts().implicitlyWait(40000);
		browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
		browser.manage().timeouts().implicitlyWait(40000);
		element(by.xpath('//button[. = "Next"]')).click();
		browser.manage().timeouts().implicitlyWait(40000);
		browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
		element(by.xpath('//button[. = "Accept"]')).click();
		browser.sleep(5000);
		//browser.sleep(30000);
	  });  
  
});
