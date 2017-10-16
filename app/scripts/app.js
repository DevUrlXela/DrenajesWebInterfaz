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
  })
  .service('apiService', function($http) {
    var apiURL = '';
    // var apiURL = 'http://127.0.0.1:8000';
    var obtener = function(endpoint) {
      return $http.get(apiURL+endpoint);
    };
    var crear = function(endpoint, params) {
      return $http.post(apiURL+endpoint, params);
    };

    var modificar = function(endpoint, params) {
      return $http.put(apiURL+endpoint, params);
    };

    var borrar = function(endpoint){
      return $http.delete(apiURL+endpoint);
    };

    return {
      obtener: obtener,
      crear: crear,
      modificar: modificar,
      borrar: borrar
    };
  });
