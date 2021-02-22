Feature('submitClass');
Before(({I}) => {
    I.login();
});
Scenario('submit new class', ({ I, loadBTKAkademyPage,classListPage}) => {
    loadBTKAkademyPage.loadHomePage();
    classListPage.submitNewClass();
});
