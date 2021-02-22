const { I } = inject();
let values = require("./parameters/values.json");
module.exports = {
  buttons:{
    enterBTKBtn: '//div[@id="ember48"]//a[@class="btn btn-outline-info px-4"]'
  },
  loadHomePage: function(){
    I.amOnPage(values["CVPageUrl"]);
    I.wait(2);
    I.click(this.buttons.enterBTKBtn);
    I.wait(3);
    I.seeCurrentUrlEquals(values["BTKPageUrl"]);
    I.see(values["name"]);
  },
}
