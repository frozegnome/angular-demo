(function() {
  'use strict';

  angular
    .module('angularDemoApp')
    .controller('AddCtrl', ['employeeInfo', function (employeeInfo) {
      var vm = this;
      
      //Loading vm methods
      vm.emp = {};

      vm.postNewEmp = function() {
      	employeeInfo.setEmployees(vm.emp)
      	.success(function() {
          console.log('Success!');
        })
        .error(function() {
          console.log('Error fetching data');
        });
      };
    }]);
})();
