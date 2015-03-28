'use strict';

angular.module('apiTestApp')
  .factory('Nonprofit', function ($resource) {
    return $resource('/api/nonprofits/:id', {
      id: '@_id'
    },
    {
      update: {
        method: 'PUT'
      }
	  });
  });
