'use strict'
// using prompt for user interface
const prompt = require('prompt');
const opn = require('opn');

prompt.start();

 //
 // Get two properties from the user: username and email
 //

let appz = {
  tcc_website : "tcc website",
  tcc_wifi : "tcc wifi",
  tcc_blackboard : "tcc blackboard",
  helpz : "--help"
}


 console.log("Welcome to app opener");

 prompt.get(['app_name'], (err,result) => {
//   console.log('the app you want to open is ' + result.app_name);
if(result.app_name === appz.tcc_website){
opn('https://www.tccd.edu/');
}

else if(result.app_name === appz.tcc_wifi){
opn('http://64.28.249.230/fs/customwebauth/login.html?switch_url=http://64.28.249.230/login.html&ap_mac=00:f6:63:70:11:80&client_mac=ac:e0:10:ed:e4:80&wlan=TCCD-PUBLIC&redirect=go.microsoft.com/fwlink/?LinkID=219472&clcid=0x409');
}
else if(result.app_name === appz.tcc_blackboard){
  opn('https://sso.tccd.edu/_layouts/PG/login.aspx?ReturnUrl=%2f');
}
else if (result.app_name === appz.helpz){
  console.log("options are ");
  for (var key in appz){
    console.log(appz[key]);
  }
}
else{
console.log("options are ");
for (var key in appz){
  console.log(appz[key]);
}
}

 });

   // Log the results.

// });
