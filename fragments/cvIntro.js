const { I } = inject();
let values = require('./parameters/cvIntroData.json');
module.exports = {
  
  fields:{
    introHeader: '//header[@id="ember165"]',
    cvName: '//input[@id="ember175"]',
    professionName: '//input[@class="ember-power-select-search-input"]',
    jobName:'//input[@id="ember200"]',
    careerField:'//textarea[@id="ember225"]',
    jobForSearchField:'//textarea[@id="ember235"]',
    salaryField:'//input[@id="ember260"]',
    coverLetterField: '//textarea[@id = "ember269"]'
  },
  comboboxes:{
    professionCombo: '//div[@id="ember187"]',
    professıonItem: '//ul[@id="ember-power-select-options-ember186"]//li[@data-option-index=5]',
    jobTypeCombo:'//div[@id="ember212"]',
    jobTypeItem:'//ul[@id="ember-power-select-options-ember211"]//li[@data-option-index = 2]',
    cityCombo:'//div[@id="ember248"]',
    citeItem:'//li[@data-option-index = 6]',
  },
  buttons:{
    submit:'//button[@id="ember272"]'
  },
  getValues: function (key){
    return values[key];
  },
  fillIntroPage: function () {
    I.wait(2);
    I.scrollTo(this.fields.introHeader);
    I.wait(2);
    I.fillField(this.fields.cvName, this.getValues("cvNameField"));
    I.click(this.comboboxes.professionCombo);
    I.wait(1);
    I.fillField(this.fields.professionName,this.getValues("professionName"));
    I.wait(2);
    I.seeElement(this.comboboxes.professıonItem);
    I.click(this.comboboxes.professıonItem);
    I.wait(2);
    I.fillField(this.fields.jobName,this.getValues("jobName"));
    I.click(this.comboboxes.jobTypeCombo);
    I.wait(2);
    I.click(this.comboboxes.jobTypeItem);
    I.wait(2);
    I.fillField(this.fields.careerField, this.getValues("career"));
    I.fillField(this.fields.jobForSearchField, this.getValues("jobs"));
    I.click(this.comboboxes.cityCombo);
    I.wait(2);
    I.click(this.comboboxes.citeItem);
    I.wait(2);
    I.fillField(this.fields.salaryField,this.getValues("salary"));
    I.fillField(this.fields.coverLetterField,this.getValues("coverLetter"));
    I.scrollPageToBottom();
    I.wait(2);
    I.click(this.buttons.submit);
    I.wait(2);
    I.seeElement('//div[@id="ember7"]');
    I.seeCurrentUrlEquals("https://1milyonistihdam.hmb.gov.tr/ozgecmis/kisisel-bilgiler/kisisel-bilgiler-edit")
  }
}