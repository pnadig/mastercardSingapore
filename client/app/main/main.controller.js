'use strict';

angular.module('apiTestApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  })
  .controller('restaurantCtrl', function ($scope, $http, $state, $location, $window, Nonprofit) {
    
    var req = {
      method: 'GET',
      url: 'http://dmartin.org:8028/restaurants/v1/restaurant?Format=XML&PageOffset=0&PageLength=10&Latitude=38.53463&Longitude=-90.286781',
      headers: {
      'Content-Type': undefined
      },
      data: { data: 'data' }
    }

    //$http(req).success(function(){$scope.restaurants = data.Restaurants.Restaurant;}).error(function(){});

    $http.get('http://dmartin.org:8028/restaurants/v1/restaurant?Format=XML&PageOffset=0&PageLength=10&Latitude=38.53463&Longitude=-90.286781').success(function (data) {
      $scope.restaurants = data.Restaurants.Restaurant;
    });

    //$scope.nonprofits = Nonprofit.query();

  })
  .controller('ModalDemoCtrl', function ($scope, $modal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
    };

  })
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
})
  .controller('npListCtrl', function ($scope, $state, $location, $window, Nonprofit) {

    $scope.nonprofits = Nonprofit.query();

    $scope.deleteNonprofit = function(nonprofit) { // Delete a movie. Issues a DELETE to /api/movies/:id

      nonprofit.$delete(function() {
        $state.go('/main.nonprofit'); //redirect to home
      });

  };

  })
  .controller('npViewCtrl', function ($scope, $state, $stateParams, Nonprofit) {

    $scope.nonprofit = Nonprofit.get({ id: $stateParams.id });

    // $scope.nonprofit.donation = 0;
    //
    // $scope.newdonation = $scope.nonprofit.donation * 1000;

    $scope.deleteNonprofit = function(nonprofit) { // Delete a movie. Issues a DELETE to /api/movies/:id

      product.$delete(function() {
        $state.go('/products.productsList'); //redirect to home
      });

    };

  })
  .controller('npUserCtrl', function ($scope, $state, $stateParams, Nonprofit, Auth) {

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.transactions = [
      {date:"10-Mar-2015",
       org: "Animal Charities",
       amount: "$15",
       },
       {date:"12-Jan-2015",
        org: "Environmental Charities",
        amount: "$75",
      },
      {date:"17-Feb-2015",
       org: "Women Empowerment Charities",
       amount: "$150",
       }
    ];

    $scope.labels = ["Animal Charities", "Environmental Charities", "Women Empowerment Charities"];
    $scope.data = [100, 200, 500];



  })
  .controller('npnpadminCtrl', function ($scope, $state, $stateParams, Nonprofit, Auth) {

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.transactions = [
      {date:"10-Mar-2015",
       org: "John Greene",
       amount: "$15",
       },
       {date:"12-Jan-2015",
        org: "Doctor Who",
        amount: "$75",
      },
      {date:"17-Feb-2015",
       org: "Johnny Cash",
       amount: "$150",
       }
    ];

    $scope.labels = ["Animal Charities", "Environmental Charities", "Women Empowerment Charities"];
    $scope.data = [100, 200, 500];



  })


  .controller('npCreateCtrl', function ($scope, $state, $stateParams, Nonprofit) {

    $scope.nonprofit = new Nonprofit();  //create new movie instance. Properties will be set via ng-model on UI

    $scope.addNonprofit = function() { //create a new movie. Issues a POST to /api/movies
    $scope.nonprofit.$save(function() {
      $state.go('main.nonprofit'); // on success go back to home i.e. movies state.
    });
  };

  });
