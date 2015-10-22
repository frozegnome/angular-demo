(function() {
  'use strict';

  angular
    .module('angularDemoApp')
    .service('employeeInfo', ['$http', function ($http) {
      var jsonLoc = 'http://10.34.24.120:9000/api/employees';

      this.getEmployees = function() {
        var service = $http({
          method: 'GET',
          url: jsonLoc
        });
        return service;
      };

      this.setEmployees = function(empToPost) {
        var service = $http({
          method: 'POST',
          url: jsonLoc,
          data: empToPost
        });
        return service;
      };
  }]);
})();