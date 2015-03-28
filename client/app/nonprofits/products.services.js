'use strict';

angular.module('apiTestApp')
  .factory('Product', function ($resource) {
    return $resource('/api/products/:id', {
      id: '@_id'
    },
    {
      update: {
        method: 'PUT'
      }
	  });
  });
