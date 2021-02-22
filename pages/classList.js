const { I, searchClassFragment, submitClassFragment} = inject();
let values = require("./parameters/values.json");
module.exports = {

  submitNewClass: function(){
    searchClassFragment.searchNewClass(values["className"], values["classLink"]);
    submitClassFragment.submitClass(values["classLink"]);
  },
}
