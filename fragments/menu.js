const { I } = inject();

module.exports = {
  buttons:{
    cvMenu:'//span[contains(text(),"Özgeçmiş İşlemleri")]',
    editCV: '//ul[@class="mly-menu-sub"]'
  },

  clickMenuItem: function(){
    I.click(this.buttons.cvMenu);
    I.wait(2);
    I.click(this.buttons.editCV);
    
    //I.seeElement("//a[@class='mly-menu-link.mly-with-sub.active']");
  },
}
