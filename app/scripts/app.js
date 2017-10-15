'use strict';

/**
 * @ngdoc overview
 * @name drenajesWebInterfazApp
 * @description
 * # drenajesWebInterfazApp
 *
 * Main module of the application.
 */
angular
  .module('drenajesWebInterfazApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'Main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
