(function() {
  'use strict';

  angular
    .module('angularDemoApp')
    .controller('MainCtrl', ['employeeInfo', function (employeeInfo) {
      var vm = this;
      
      //Loading vm methods
      vm.empList = [];
      vm.empToAdd = {};
      vm.tempEmp = {};

      activate();

      // TODO: Move away from .success and .error; they are deprecated. Use .then

      // Initial loading of Employees in DB
      function loadEmployees() {
        vm.empList = employeeInfo.getEmployees()
        .success(function(data) {
          vm.empList = data;
          console.log(vm.tempEmp);
        })
        .error(function() {
          console.log('Error fetching data');
        });
      }

      // Instantiate loadEmployees()
      function activate() {
        loadEmployees();
      }

      // Add an Employee
      vm.postNewEmp = function() {
        employeeInfo.setEmployee(vm.empToAdd)
        .success(function() {
          console.log('Success!');
        })
        .error(function() {
          console.log('Error carrying out request');
        });
      };

      // Edit an Employee
      vm.postChangeEmp = function() {
        employeeInfo.editEmployee(vm.tempEmp)
        .success(function() {
          console.log('Success!');
        })
        .error(function() {
          console.log('Error carrying out request');
        });
      };

      // Delete an Employee
      vm.postDeleteEmp = function() {
        employeeInfo.delEmployee(vm.tempEmp)
        .success(function() {
          console.log('Success! Employee Deleted');
        })
        .error(function() {
          console.log('Error carrying out request');
        });
      };
    }]);
})();
