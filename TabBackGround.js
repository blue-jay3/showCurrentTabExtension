var currentTabId = 0;
var currentTabURL = "null";

chrome.commands.onCommand.addListener(function(command) { 
    
console.log ("1. Inside listener");

chrome.tabs.query({active:true, currentWindow: true}, function(arrayOfTabs) {

    console.log("2. Filtering Results");
    currentTabURL = arrayOfTabs[0].url;
    currentTabId = arrayOfTabs[0].id; 
        
if (command == "toggle") 
{
	console.log ("3. Resolved Command");
	//console.log ("TAB ID = " + currentTabId + "\n URL =  " + currentTabURL);

    chrome.notifications.create('', {
        title: 'Tab Info:',
        message: 'TAB ID = ' + currentTabId + " URL = " + currentTabURL,
        iconUrl: '/images/get_started16.png',
        type: 'basic'
      });
}	

});

});