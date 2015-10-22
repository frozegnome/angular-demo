(function() {
  'use strict';

  angular
    .module('angularDemoApp')
    .controller('MainCtrl', ['employeeInfo', function (employeeInfo) {
      var vm = this;
      
      //Loading vm methods
      vm.empList = [];
      vm.loadEmployees = loadEmployees;

      activate();

      // Initial loading of Employees in DB
      function loadEmployees() {
        vm.empList = employeeInfo.getEmployees()
        .success(function(data) {
          vm.empList = data;
          console.log(vm.empList);
        })
        .error(function() {
          console.log('Error fetching data');
        });
      }

      // Instantiate loadEmployees()
      function activate() {
        loadEmployees();
      }
    }]);
})();
