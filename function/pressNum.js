pressNum = function(length){
		
		var x=getRandomNum(0, 9);
		console.log(x);
		for( i=0 ;length>i ; i++ ){
			
			switch(x){
			
			case 1:
				browser.actions().sendKeys(protractor.Key.NUMPAD1).perform();
				x=getRandomNum(0, 9);
				break;
			case 2:
				browser.actions().sendKeys(protractor.Key.NUMPAD2).perform();
				x=getRandomNum(0, 9);
				break;
			case 3:
				browser.actions().sendKeys(protractor.Key.NUMPAD3).perform();
				x=getRandomNum(0, 9);
				break;
			case 4:
				browser.actions().sendKeys(protractor.Key.NUMPAD4).perform();
				x=getRandomNum(0, 9);
				break;
			case 5:
				browser.actions().sendKeys(protractor.Key.NUMPAD5).perform();
				x=getRandomNum(0, 9);
				break;
			case 6:
				browser.actions().sendKeys(protractor.Key.NUMPAD6).perform();
				x=getRandomNum(0, 9);
				break;
			case 7:
				browser.actions().sendKeys(protractor.Key.NUMPAD7).perform();
				x=getRandomNum(0, 9);
				break;
			case 8:
				browser.actions().sendKeys(protractor.Key.NUMPAD8).perform();
				x=getRandomNum(0, 9);
				break;
			case 9:
				browser.actions().sendKeys(protractor.Key.NUMPAD9).perform();
				x=getRandomNum(0, 9);
				break;
			case 0:
				browser.actions().sendKeys(protractor.Key.NUMPAD0).perform();
				x=getRandomNum(0, 9);
				break;
			}
			
			
		}
		
		
	}

module.exports=pressNum;