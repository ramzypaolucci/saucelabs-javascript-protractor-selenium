describe('Protractor Demo 2', function() {
  it('add and remove from todo list', function() {
    browser.executeScript("sauce:context=Going to 'angularjs.org'");
    browser.get('http://www.angularjs.org');

    browser.executeScript("sauce:context=Sending add to the todo list");
    element(by.model('todoList.todoText')).sendKeys('finish homework');
    element(by.partialButtonText('add')).click();

    browser.executeScript("sauce:context=Crossing off list and archiving");
    element(by.css('.done-false')).click();
    element(by.partialLinkText('archive')).click();


    browser.executeScript("sauce:context=checking if 'finish homework' was added to the list");
    var todo = element(by.css('.done-false'));
    expect(todo.getText()).toEqual('finish homework');
  });
});