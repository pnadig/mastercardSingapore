'use strict';

angular.module('apiTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsCtrl',
        authenticate: true
      })
      .state('products.productsList', {
        url: '/products/list',
        templateUrl: 'app/products/products.list.html',
        controller: 'ProductsListCtrl',
        authenticate: true
      })
      .state('products.productsCreate', {
        url: '/products/list/create',
        templateUrl: 'app/products/products.create.html',
        controller: 'ProductsCreateCtrl',
        authenticate: true
      })
      .state('products.productsView', {
        url: '/products/list/:id/view',
        templateUrl: 'app/products/products.view.html',
        controller: 'ProductsViewCtrl',
        authenticate: true
      })
      .state('products.productsEdit', {
        url: '/products/list/:id/edit',
        templateUrl: 'app/products/products.edit.html',
        controller: 'ProductsEditCtrl',
        authenticate: true
      })
      ;
  });
