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
        templateUrl: 'app/add/add.html',
        controller: 'AddCtrl',
        controllerAs: 'add'
      })
      .state('main.edit', {
        url: '/edit',
        templateUrl: 'app/edit/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      });

  });

