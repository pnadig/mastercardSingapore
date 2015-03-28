'use strict';

angular.module('apiTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mastercard', {
        url: '/mastercard',
        templateUrl: 'app/mastercard/mastercard.html',
        controller: 'MastercardCtrl'
      });
  });