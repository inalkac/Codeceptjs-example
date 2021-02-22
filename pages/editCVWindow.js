const menu = require("../fragments/menu");

const { I, menuFragment,cvIntroFragment} = inject();

module.exports = {

  fillCVFields: function(){
    menuFragment.clickMenuItem();
    cvIntroFragment.fillIntroPage();

  }
}
 