Feature('createCV');
Before(({I}) => {
    I.login();
});
Scenario('createCV test', ({I, editCVWindowPage}) => {
    editCVWindowPage.fillCVFields();
});
