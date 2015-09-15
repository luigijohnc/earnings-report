'use strict';

describe('Controller: EarningsCycleCtrl', function () {

  // load the controller's module
  beforeEach(module('earningsApp'));

  var EarningsCycleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EarningsCycleCtrl = $controller('EarningsCycleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
