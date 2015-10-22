'use strict';

angular.module('angularDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.router'
])
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('main.add', {
        url: '/add',
        templateUrl: 'add/add.html',
        controller: 'AddCtrl',
        controllerAs: 'add'
      })
      .state('main.edit', {
        url: '/edit',
        templateUrl: 'edit/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      });

    $locationProvider.html5Mode(true);
  })
  .run(($rootScope) => {
    $rootScope.$on('$stateChangeError', console.log.bind(console));
  });

