	var DriverLocation;
	var list1=[];
	list1.push('Signature');
	list1.push('Driving License');
	list1.push('Certificate of Annual Income');
	list1.push('No Objection Certificate');
	list1.push('Education Certificate');

Document_Page=function(length){
	  length++;
	  while(length>0){
	  browser.manage().timeouts().implicitlyWait(40000);
	  element.all(by.id('PDT_DOTYCODE')).last().click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element.all(by.xpath('//span[text()="'+getDocType()+'"]')).last().click();
	  browser.manage().timeouts().implicitlyWait(4000);
	  element.all(by.css('[ng-reflect-name="CDO_COMMENT"]')).last().sendKeys('Accepted');
	  browser.manage().timeouts().implicitlyWait(4000);
	  //const fs = require('fs');
	  DriverLocation=require('path').resolve(__dirname, '..')
	  DriverLocation = DriverLocation +'\\TestImageAndDoc\\dummyDocument.pdf';
	  //const csv = fs.readFileSync(DriverLocation, 'utf8');
	  //element.all(by.css('input[type="file"]')).last().sendKeys("C:/Users/asif.nawaz/eclipse-workspace/CRMRegistrar/TestImageAndDoc/dummyDocument.pdf");
	  element.all(by.css('input[type="file"]')).last().sendKeys(DriverLocation);
	  browser.manage().timeouts().implicitlyWait(4000);
	  //browser.sleep(3000);
	  
	 
	  
	  if(length==1){
		  browser.manage().timeouts().implicitlyWait(4000);
		  //browser.sleep(3000);
		  element(by.xpath('//button[. = "Next"]')).click();
		  browser.executeScript('window.scrollTo(0, document.body.scrollHeight);'); 
		  browser.manage().timeouts().implicitlyWait(4000);
		  element(by.xpath('//button[. = "Save"]')).click();
		  browser.manage().timeouts().implicitlyWait(4000);
		  element(by.xpath('/html/body/my-app/app-root/div/div/div[2]/div/dynamic-form-renderer/dynamic-form-wizard/p-dialog/div/div[2]/textarea')).sendKeys('Register by CRM registrar');
		  //browser.sleep(10000);
		  browser.manage().timeouts().implicitlyWait(4000);
		  element(by.xpath('//button[. = "Accept"]')).click();
		  browser.sleep(1000);
	  }
	  else if (length>1) {
		  browser.manage().timeouts().implicitlyWait(40000);
		  element.all(by.xpath('//button[. = "Add"]')).last().click();
		  
		  browser.manage().timeouts().implicitlyWait(40000);
		  //browser.sleep(1000);
		  browser.executeScript('window.scrollTo(0, document.body.scrollHeight);'); 
	  }
	  length--;
	  };
	  browser.manage().timeouts().implicitlyWait(4000);
  };
  
  getDocType= function(){

		var val=list1[getRandomNum(0, tempdoc)];
		//console.log(tempiden,'HEYTYYYY');
		var index = list1.indexOf(val);
		
		list1.splice(index, 1);
		
			 //console.log(list1);
		//browser.sleep(3000);
			 //adrlist1=removePop(adrlist1,val);
		tempdoc--;
		return val;
	  
  };
  module.exports= Document_Page;