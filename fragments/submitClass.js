const { I } = inject();

module.exports = {
    buttons:{
       submitBtn: '//div[@class = "buttons"]'
    },
    submitClass: function(classLinkVar){
        I.amOnPage("https://www.btkakademi.gov.tr"+classLinkVar);
        I.wait(2);
        pause();
        I.click(this.buttons.submitBtn);
        I.see("Kayıtlı");
  },
}
