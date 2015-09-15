'use strict';

describe('Directive: appbar', function () {

  // load the directive's module
  beforeEach(module('earningsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<appbar></appbar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the appbar directive');
  }));
});
