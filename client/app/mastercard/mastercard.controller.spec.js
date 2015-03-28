'use strict';

describe('Controller: MastercardCtrl', function () {

  // load the controller's module
  beforeEach(module('apiTestApp'));

  var MastercardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MastercardCtrl = $controller('MastercardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
