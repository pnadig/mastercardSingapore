'use strict';

angular.module('apiTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.user', {
        url: 'userdonations',
        templateUrl: 'app/main/main.user.html',
        controller: 'npUserCtrl'
      })
      .state('main.npadmin', {
        url: 'adminpanel',
        templateUrl: 'app/main/main.adminNP.html',
        controller: 'npnpadminCtrl'
      })
      .state('main.nonprofit', {
        url: 'nonprofitList',
        templateUrl: 'app/main/main.nonprofitList.html',
        controller: 'npListCtrl'
      })
      .state('main.restaurants', {
        url: 'restaurants',
        templateUrl: 'app/main/main.restaurants.html',
        controller: 'restaurantCtrl'
      })
      .state('main.nonprofitCreate', {
        url: 'nonprofitList/create',
        templateUrl: 'app/main/nonprofits.create.html',
        controller: 'npCreateCtrl'
      })
      .state('main.nonprofitEdit', {
        url: 'nonprofitList/:id/edit',
        templateUrl: 'app/main/nonprofits.edit.html',
        controller: 'XMLCtrl'
      })
      .state('main.nonprofitView', {
        url: 'nonprofitList/:id/view',
        templateUrl: 'app/main/nonprofits.view.html',
        controller: 'npViewCtrl'
      })

      ;
  });
