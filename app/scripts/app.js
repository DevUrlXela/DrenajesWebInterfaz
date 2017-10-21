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
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
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
  })
  .service('sesion', function($cookies, apiService){

    var getToken = function(){
      return $cookies.getObject('sesion').token
    }

    var getCookie = function(){
      return $cookies.getObject('sesion')
    }

    var isLoged = function(){
      if( $cookies.getObject('sesion') != null){
        return true
      }
      else {
        return false
      }
    }

    var login = function(token,idUser,user){

        $cookies.putObject('sesion', {'token': token ,'idUser': idUser, 'user': user})
    }


    var logout = function(){
      $cookies.remove('sesion')
    }

    return{
      login : login,
      logout : logout,
      isLoged : isLoged,
      getToken: getToken,
      getCookie : getCookie
    }
  })
  .component('cmFooter', {
    templateUrl: 'views/componentes/footer.html'
  })
  .component('cmSidebar', {
    templateUrl: 'views/componentes/sidebar.html'
  })
  .component('cmScrolltop',  {
    templateUrl: 'views/componentes/scrolltop.html'
  })
  .component('cmTopnavigation',  {
    templateUrl: 'views/componentes/topnavigation.html',
    controller: 'TopCtrl'
  })
  .component('inbox', {
    templateUrl: 'views/inbox.html',
    controller: 'InboxCtrl'
  });
