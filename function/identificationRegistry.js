	var DriverLocation;
	var list1=[]
	list1.push('CNIC');
	list1.push('Passport');
	list1.push('Driving License');
	list1.push('Service Card');
	list1.push('Military Card');

registeridentification= function(length){
	length++;
	var temp=length;
	  while(length>0){
   	  browser.manage().timeouts().implicitlyWait(40000);
	  element.all(by.id('PIT_IDENCODE')).last().click();
 	  browser.manage().timeouts().implicitlyWait(40000);
  	  element.all(by.xpath('//span[text()="'+getIdent()+'"]')).last().click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element.all(by.css('[ng-reflect-name="CIT_IDENVALUE"]')).last().sendKeys(getRandomNum(1111111111111, 9999999999999));
	  browser.manage().timeouts().implicitlyWait(40000);
	  //element.all(by.className('ui-datepicker-trigger ui-calendar-button ng-tns-c9-46 ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted')).last().click();
	  if (length==temp){
	  browser.sleep(900);
	  element(by.className('ui-datepicker-trigger ui-calendar-button ng-tns-c9-'+(classPart+31)+' ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted')).click();  
	  browser.manage().timeouts().implicitlyWait(40000);
	  browser.sleep(400);
	  element(by.className('ui-datepicker-month ng-tns-c9-'+(classPart+31)+' ng-star-inserted')).$('[value="'+getRandomNum(0, 11)+'"]').click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.className('ui-datepicker-year ng-tns-c9-'+(classPart+31)+' ng-star-inserted')).$('[value="'+getRandomNum(2001, 2018)+'"]').click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.xpath('//a[@class="ui-state-default ng-tns-c9-'+(classPart+31)+' ng-star-inserted"][text()="'+getRandomNum(1, 29)+'"]')).click();	  
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.className('ui-datepicker-trigger ui-calendar-button ng-tns-c9-'+(classPart+32)+' ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ng-star-inserted')).click();
	  //element(by.className('ui-button-icon-left ui-clickable pi pi-calendar')).click();
	  browser.sleep(1000);
	  element(by.className('ui-datepicker-year ng-tns-c9-'+(classPart+32)+' ng-star-inserted')).$('[value="'+getRandomNum(2018, 2018)+'"]').click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  
	  element(by.className('ui-datepicker-month ng-tns-c9-'+(classPart+32)+' ng-star-inserted')).$('[value="'+getRandomNum(0, 11)+'"]').click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  
	  element(by.xpath('//a[@class="ui-state-default ng-tns-c9-'+(classPart+32)+' ng-star-inserted"][text()="'+getRandomNum(1, 29)+'"]')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  }
	  DriverLocation=require('path').resolve(__dirname, '..')
	  DriverLocation = DriverLocation +'\\TestImageAndDoc\\identificationCard.PNG';
	  //DriverLocation = __dirname +'\\TestImageAndDoc\\identificationCard.PNG';
	  element.all(by.css('input[type="file"]')).last().sendKeys(DriverLocation);

	  browser.manage().timeouts().implicitlyWait(40000);
	  //element(by.xpath('//button[. = "Next"]')).click();	  
	  if(length==1){
		  browser.manage().timeouts().implicitlyWait(40000);
		  element(by.xpath('//button[. = "Next"]')).click();	  
	  }
	  else if(length>1){
		  browser.manage().timeouts().implicitlyWait(40000);
		  element.all(by.xpath('//button[. = "Add"]')).last().click();
		  
		  browser.manage().timeouts().implicitlyWait(40000);
		  browser.sleep(1000);
		  browser.executeScript('window.scrollTo(0, document.body.scrollHeight);'); 
	  }
	  
	  
	  length--;
	}
	  //browser.sleep(5000);
	
};
var val;

getIdent = function(){
	
	
	var val=list1[getRandomNum(0, tempiden)];
	//console.log(tempiden,'HEYTYYYY');
	var index = list1.indexOf(val);
	
	list1.splice(index, 1);
		 
	//adrlist1=removePop(adrlist1,val);
	tempiden--;
	return val;
	
}

module.exports= registeridentification;