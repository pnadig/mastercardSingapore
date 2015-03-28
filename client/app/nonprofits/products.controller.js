'use strict';

angular.module('apiTestApp')
  .controller('ProductsCtrl', function ($scope, $state, $location, $window, Product) {

  })
  .controller('ProductsListCtrl', function ($scope, $state, $location, $window, Product) {

    $scope.products = Product.query();

    $scope.deleteProduct = function(product) { // Delete a movie. Issues a DELETE to /api/movies/:id

      product.$delete(function() {
        $state.go('/products.productsList'); //redirect to home
      });

  };

  })
  .controller('ProductsCreateCtrl', function ($scope, $state, $stateParams, Product) {

    $scope.product = new Product();  //create new movie instance. Properties will be set via ng-model on UI

    $scope.addProduct = function() { //create a new movie. Issues a POST to /api/movies
    $scope.product.$save(function() {
      $state.go('products.productsList'); // on success go back to home i.e. movies state.
    });
  };

  })
  .controller('ProductsViewCtrl', function ($scope, $state, $stateParams, Product) {

    $scope.product = Product.get({ id: $stateParams.id });

    $scope.deleteProduct = function(product) { // Delete a movie. Issues a DELETE to /api/movies/:id

      product.$delete(function() {
        $state.go('/products.productsList'); //redirect to home
      });

    };

  })
  .controller('ProductsEditCtrl', function ($scope, $state, $stateParams, Product) {

    $scope.updateProduct = function() { //Update the edited movie. Issues a PUT to /api/movies/:id
    $scope.product.$update(function() {
      $state.go('products.productsList'); // on success go back to home i.e. movies state.
    });
  };

  $scope.loadProduct = function() { //Issues a GET request to /api/movies/:id to get a movie to update
    $scope.product = Product.get({ id: $stateParams.id });
  };

    $scope.loadProduct();
  })



  ;
