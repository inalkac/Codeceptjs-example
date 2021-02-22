// in this file you can append custom step methods to 'I' object
let parameters = require("./parameters/loginData.json");
module.exports = function() {
  return actor({
    
    getEnviromentParameters: function(key){
      return parameters[key];
    },
    login : function (){
      this.amOnPage(this.getEnviromentParameters("url"));
      this.waitForElement("//input[@id='identification']");
      this.fillField("//input[@id='identification']",this.getEnviromentParameters("name"));
      this.fillField("//input[@id='password']", this.getEnviromentParameters("password"));
      this.click("//button[@class = 'mly-login-button']");
      this.wait(3);
      this.see(this.getEnviromentParameters("accountName"));
    }
    

  });
}
