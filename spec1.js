var  comp,Mcomp,FNcomp,Adrcomp;
var adrtemp=3;
var DriverLocation;

tempiden =3;
tempdoc =4;
classPart=22;

var adrlist1=[];

adrlist1.push('Residential Address');
adrlist1.push('Permenant Address');
adrlist1.push('Correspondance Address');
adrlist1.push('Business Address');	

var PressKey= require('./function/pressNum.js');
var idenFill= require('./function/identificationRegistry.js');
var docFill= require('./function/documentRegistry.js');

describe('CRM register bot', function() {
	
  it('CRM Registrar', function() {
	 hundred=100;
	//Name Initialization
	const fs = require('fs');
	DriverLocation = __dirname +'\\function\\data.csv';
	const csv = fs.readFileSync(DriverLocation, 'utf8');
	var allTextLines = csv.split(/\r\n|\n/);
	name=[];
	for (var i=0; i< allTextLines.length; i++) {
				var data = allTextLines[i].split('>');
					
					name.push(data[0]);
		}
	//Address Initialization
	const fs1 = require('fs');
	DriverLocation = __dirname +'\\function\\dataAddress.csv';
	const csv1 = fs1.readFileSync(DriverLocation, 'utf8');

	
	//const csv1 = fs1.readFileSync('C:\\Users\\asif.nawaz\\eclipse-workspace\\CRMRegistrar\\function\\dataAddress.csv', 'utf8');

	var allTextLines1 = csv1.split(/\r\n|\n/);
	address=[];
	for (var i=0; i< allTextLines1.length; i++) {
				var data = allTextLines1[i].split('>');
					
					address.push(data[0]);
		}
	//console.log(address[100]);
	browser.sleep(4000);

	  	//Browser
    browser.get('http://mfsys-cloud:4200/#/login');
    	//Maximize Windows
    browser.driver.manage().window().maximize();
    	//Login Credentials
    browser.manage().timeouts().implicitlyWait(40000);
    element(by.id('clientid')).sendKeys('001');
    browser.manage().timeouts().implicitlyWait(40000);
	element(by.id('username')).sendKeys('01');
	browser.manage().timeouts().implicitlyWait(40000);
	element(by.id('password')).sendKeys('1234567');
	browser.manage().timeouts().implicitlyWait(40000);
	element(by.xpath('//button[. = "Log In"]')).click();
	browser.manage().timeouts().implicitlyWait(40000);
	  //Navigation to CRM
  	element(by.xpath('//span[. = "CRM"]')).click();
  	browser.manage().timeouts().implicitlyWait(40000);
  	//element(by.xpath('//span[text()="Operation"]')).click();
	element(by.className('ripplelink ng-tns-c4-'+classPart+' ng-star-inserted')).click();
	browser.manage().timeouts().implicitlyWait(40000);
	element(by.className('ng-tns-c4-'+(classPart+1)+'')).click();
	//element(by.xpath('//span[text()= "Customer Registration"]')).click();
	browser.manage().timeouts().implicitlyWait(40000);
	element(by.className('ui-button-icon-left ui-clickable ui-icon-add')).click();
	browser.manage().timeouts().implicitlyWait(40000);
	  //element(by.id('PLC_LOCACODE')).click();
	  //browser.manage().timeouts().implicitlyWait(40000);
	  //element.all(by.xpath('//span[text()="'+getLocaCode()+'"]')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  FNcomp=name[getRandomNum(0,4900)];
	  //browser.sleep(1500);
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.css('[ng-reflect-name=CMP_FIRSTNAME]')).sendKeys(FNcomp);
	  browser.manage().timeouts().implicitlyWait(40000);
	  //element(by.css('[ng-reflect-name=CMP_MIDDLENAME]')).sendKeys(getName());
	  browser.manage().timeouts().implicitlyWait(40000);
	  //browser.sleep(1500);
	  Lname=name[getRandomNum(0,4900)];
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.css('[ng-reflect-name=CMP_LASTNAME]')).sendKeys(Lname);
	  browser.manage().timeouts().implicitlyWait(40000);
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.id('CMP_CUSTSEX')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  comp=getSexCode();
	  element.all(by.xpath('//span[text()="'+comp+'"]')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.id('CMP_SALUTATION')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element.all(by.xpath('//span[text()="'+getSalutionStatus()+'"]')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.id('CMP_MARITALSTATUS')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  Mcomp=getMaritalStatus();
	  element.all(by.xpath('//span[text()="'+Mcomp+'"]')).click();
	  //browser.sleep(800);
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.css('[ng-reflect-name=CMP_FATHERNAME]')).sendKeys(name[getRandomNum(0,4900)]);
	  //browser.sleep(800);
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.css('[ng-reflect-name=CMP_MOTHERNAME]')).sendKeys(name[getRandomNum(0,4900)]);
	  browser.manage().timeouts().implicitlyWait(40000);
	  if(Mcomp=='Married'){
		 element(by.id('PPA_PATGCODE')).click();	
		 if(comp=='Male') {
			 browser.manage().timeouts().implicitlyWait(40000);
			 element.all(by.xpath('//span[text()="Wife"]')).click();
			 browser.manage().timeouts().implicitlyWait(40000);
			 element(by.css('[ng-reflect-name=CMP_CUSTPRTGNAME]')).sendKeys(name[getRandomNum(0,4900)]);
	  		}
		 else if(comp=='Female'){
			 browser.manage().timeouts().implicitlyWait(40000);
			 element.all(by.xpath('//span[text()="Husband"]')).click();
			 browser.manage().timeouts().implicitlyWait(40000);
			 element(by.css('[ng-reflect-name=CMP_CUSTPRTGNAME]')).sendKeys(name[getRandomNum(0,4900)]);
		 }
	  }	  
	  browser.sleep(800);
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.id('CMP_NATIONALITY')).click();	
	  browser.manage().timeouts().implicitlyWait(40000);
	  //browser.sleep(800);
	  element(by.xpath('//span[text()="'+getNationality()+'"]')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  //Date Picker
	  element(by.className('ui-button-icon-left ui-clickable pi pi-calendar')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.className('ui-datepicker-month ng-tns-c9-'+(classPart+19)+' ng-star-inserted')).$('[value="'+getRandomNum(0, 11)+'"]').click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.className('ui-datepicker-year ng-tns-c9-'+(classPart+19)+' ng-star-inserted')).$('[value="'+getRandomNum(1947, 2000)+'"]').click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element.all(by.xpath('//a[@class="ui-state-default ng-tns-c9-'+(classPart+19)+' ng-star-inserted"][text()="'+getRandomNum(1,29 )+'"]')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.id('CMP_BIRTHPLACE')).click();	
	  browser.manage().timeouts().implicitlyWait(40000);
	  element.all(by.xpath('//span[text()="'+getNational()+'"]')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.id('CMP_EDUCATION')).click();	
	  browser.manage().timeouts().implicitlyWait(40000);
	  element.all(by.xpath('//span[text()="'+getEducation()+'"]')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.id('CMP_OCCUPATION')).click();	
	  browser.manage().timeouts().implicitlyWait(40000);
	  element.all(by.xpath('//span[text()="'+getOccupation()+'"]')).click(); 
	  browser.executeScript('window.scrollTo(0, document.body.scrollHeight);'); 
	  browser.manage().timeouts().implicitlyWait(40000);
	  browser.sleep(600);
	  element(by.id('PCN_CSNTCODE')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  var Classifcomp =getClassification();
	  /*browser.manage().timeouts().implicitlyWait(40000);
	  element(by.id('PCN_CSNTCODE')).click();	*/
	  browser.manage().timeouts().implicitlyWait(40000);
	  var temp1=getNature();
	  element.all(by.xpath('//span[text()="'+temp1+'"]')).click();
	  //element.all(by.xpath('//span[text()="'+temp1+'"]')).click();
	  browser.manage().timeouts().implicitlyWait(40000);
	  element(by.xpath('//button[. = "Next"]')).click();
	  contactCard(getRandomNum(0,2));
	  idenFill(getRandomNum(0,3));
	  docFill(getRandomNum(0, 3));
  });
 
 //53
  contactCard = function(length) {
	  length++;
	  while(length>0){
		  var EC= protractor.ExpectedCondition;
		  browser.manage().timeouts().implicitlyWait(40000);
		  element.all(by.id('PAT_ADRSCODE')).last().click();	
		  browser.manage().timeouts().implicitlyWait(40000);
		  Adrcomp=getAddresCode();
		  element.all(by.xpath('//span[text()="'+Adrcomp+'"]')).last().click();
		  browser.sleep(800);
	  	  element.all(by.css('[ng-reflect-name=PAD_ADRSDEFAULT]')).last().sendKeys(address[getRandomNum(0,100)]);
	  	  browser.sleep(500);
	  	  browser.manage().timeouts().implicitlyWait(40000);
		  element.all(by.id('PCO_CTRYCODE')).last().click();	
		  browser.manage().timeouts().implicitlyWait(40000);
		  //browser.sleep(500);
		  element.all(by.xpath('//span[text()="'+getNational()+'"]')).last().click();
		  browser.manage().timeouts().implicitlyWait(40000);
		  element.all(by.id('PPV_PROVCODE')).last().click();	
		  browser.manage().timeouts().implicitlyWait(40000);
		  var provComp=getProvince();
		  element.all(by.xpath('//span[text()="'+provComp+'"]')).last().click();
		  browser.manage().timeouts().implicitlyWait(40000);
		  element.all(by.id('PDS_DISTCODE')).last().click();
		  if(provComp=='Federal'){
			  element.all(by.xpath('//span[text()="Islamabad"]')).last().click();
			  browser.manage().timeouts().implicitlyWait(40000);
			  element.all(by.id('PCT_CITYCODE')).last().click();
			  browser.manage().timeouts().implicitlyWait(40000);
			  element.all(by.xpath('//span[text()="Islamabad"]')).last().click();		  
		  }	
		  else if (provComp=='Punjab'){
			  element.all(by.xpath('//span[text()="'+getPunjabDistrict()+'"]')).last().click();
			  browser.manage().timeouts().implicitlyWait(40000);
			  element.all(by.id('PCT_CITYCODE')).last().click();
			  browser.manage().timeouts().implicitlyWait(40000);
			  element.all(by.xpath('//span[text()="Lahore"]')).last().click();
		  }
		  else if (provComp=='Sindh'){
			  element.all(by.xpath('//span[text()="'+getSindhDistrict()+'"]')).last().click();
		  }; 
		  browser.manage().timeouts().implicitlyWait(40000);
		  var maskinput = element.all(by.css('[ng-reflect-name=PAD_ADRSLNDPHONE]')).last();
		  browser.manage().timeouts().implicitlyWait(40000);
		  browser.sleep(500);
		  maskinput.click();
		  PressKey(10);
	  	  browser.manage().timeouts().implicitlyWait(40000);
	  	  
		  element.all(by.css('[ng-reflect-name=PAD_ADRSMOBPHONE]')).last().click();
		  browser.sleep(500);
		  PressKey(12);
		  browser.manage().timeouts().implicitlyWait(40000);
		  element.all(by.css('[ng-reflect-name=PAD_ADRSEMAIL]')).last().sendKeys(''+FNcomp+Lname+getRandomNum(10, 99)+'@gmail.com');
		  if(length==1){
			  browser.manage().timeouts().implicitlyWait(40000);
			  browser.executeScript('window.scrollTo(0, document.body.scrollHeight);'); 
			  browser.manage().timeouts().implicitlyWait(40000);
			  element(by.xpath('//button[. = "Next"]')).click();  
		  }
		  else if(length>1){
			  browser.manage().timeouts().implicitlyWait(40000);
			  element.all(by.xpath('//button[. = "Add"]')).last().click();
			  
			  browser.manage().timeouts().implicitlyWait(40000);
			  //browser.sleep(1000);
			  browser.executeScript('window.scrollTo(0, document.body.scrollHeight);'); 
		  }
		  length--;
	  }
  	}
  	
  	getRandomString = function(length) {
	  var string = '';
	  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' //Include numbers if you want
	          for (i = 0; i < length; i++) {
	              string += letters.charAt(Math.floor(Math.random() * letters.length));
	          }
	          return string;
	}
    getRandomNum = function(min, max){
	    return parseInt(Math.random() * (max - min) + min);
	};
	getPunjabDistrict = function() {
		var list1=[]
		list1.push('Lahore');
		return list1[getRandomNum(0, 0)];
	}
	
	getSindhDistrict = function() {
		var list1=[]
		list1.push('Nawabshah');
		list1.push('Jamshoro');
		list1.push('Karachi');
		return list1[getRandomNum(0, 2)];
	}
	getProvince = function() {
		var list1=[]
		list1.push('Federal');
		list1.push('Punjab');
		//list1.push('Sindh');
		return list1[getRandomNum(0, 1)];
	}
	getNationality = function() {
		var list1=[]
		list1.push('Pakistani');
		return list1[getRandomNum(0, 0)];
	};
	getNational = function() {
		var list1=[]
		list1.push('Pakistan');
		return list1[getRandomNum(0, 0)];
	};
	getLocaCode = function() {
		var list1=[]
		list1.push('Head Office');
		list1.push('Area 1-Jhatla');
		list1.push('Noushera');
		list1.push('Jhatla');
		list1.push('Danda Shah Bilawal');
		list1.push('Talagang');
		return list1[getRandomNum(0, 5)];
	};
	getAddresCode = function () {
		var val;
		val=adrlist1[getRandomNum(0, adrtemp)];
		var index = adrlist1.indexOf(val);
		adrlist1.splice(index, 1);
		adrtemp--;
		return val;
	}
	getSexCode = function() {
		var list1=[]
		list1.push('Male');
		list1.push('Female');
		return list1[getRandomNum(0, 1)];
	};
	getMaritalStatus = function() {
		var list1=[]
		list1.push('Married');
		list1.push('Single');
		return list1[getRandomNum(0, 1)];
	};
	getEducation = function() {
		var list1=[]
		list1.push('Secondary');
		list1.push('Tertiary (College/University)');
		list1.push('Licensed Practitioner');
		list1.push('Post Graduate');
		list1.push('Illiterate');
		return list1[getRandomNum(0, 4)];
	};
	getSalutionStatus = function() {
		if(comp=='Female'){
			var list1=[]
			list1.push('Mrs.');
			list1.push('Ms.');
			return list1[getRandomNum(0, 1)];
		}
		else{
			var list2=[]
			list2.push('Mr.');
			return list2[getRandomNum(0, 0)];
		}
	};
	getClassification = function(){
		var list1=[]
		list1.push('Member');
		//list1.push('Organization');
		list1.push('Individual');
		return list1[getRandomNum(0, 2)];
	}
	getOccupation = function () {
		var list1=[]
		list1.push('Self Employed');
		list1.push('Salaried');
		list1.push('Student');
		list1.push('Retaired');
		list1.push('Minor');
		return list1[getRandomNum(0, 4)];
	}
	getNature = function () {
		var list1=[];
		list1.push('Normal');
		list1.push('Activist herself');
		list1.push('Bad client - not to be repeated');
		list1.push('Migrated Client');
		list1.push('Mark as Default Client');
		list1.push('Client disbursed without activist involvement');
		return list1[getRandomNum(0, 5)];
	}
});