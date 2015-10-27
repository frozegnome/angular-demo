'use strict';

angular.module('angularDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.router'
])
  .config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('main.add', {
        url: '/add',
        templateUrl: 'app/main/add.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('main.edit', {
        url: '/edit',
        templateUrl: 'app/main/edit.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('main.delete', {
        url: '/delete',
        templateUrl: 'app/main/delete.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });

  });

