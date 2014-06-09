describe('I want to help questions pages', function() {
  describe('I want to help start page', function() {
    it('should have three questions', function() {
      browser.get('http://localhost:8080/#/questions/i-want-to-help');
      var q1 = element(by.repeater('choice in questionsCtrl.choices').row(0).column('question'));
      expect(q1.getText()).toEqual('I want to help other developers understand Angular.');
      var q2 = element(by.repeater('choice in questionsCtrl.choices').row(1).column('question'));
      expect(q2.getText()).toEqual('I want to help improve Angular itself.');
      var q3 = element(by.repeater('choice in questionsCtrl.choices').row(2).column('question'));
      expect(q3.getText()).toEqual('I want to help make components for Angular.');
    });


    it('should have links to children', function() {
      var q1 = element(by.repeater('choice in questionsCtrl.choices').row(0).column('question'));
      q1.click();
      var child1 = element(by.repeater('choice in questionsCtrl.choices').row(0).column('question'));
      expect(child1.getText()).toEqual('I can help update Angular\'s documentation.');
    });
  });
});