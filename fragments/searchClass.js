const { I } = inject();

module.exports = {
 fields:{
   searchBarField: "//div[@class='menu-search']//input[@id = 'searchBar']",
 },
 
  searchNewClass: function(classNameVar, classUrlVar){
    I.fillField(this.fields.searchBarField,classNameVar);
    I.pressKey("Enter");
    I.seeElement(classUrlVar);
  },
}
