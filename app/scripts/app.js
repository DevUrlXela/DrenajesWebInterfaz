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
      .when('/login', {   //URL en el navegador
        templateUrl: 'views/login.html', //html que va a mostrar
        controller: 'LoginCtrl'
      })
      .when('/transferir', {
        templateUrl: 'views/transferir.html',
        controller: 'TransCtrl'
      })
      .when('/detalle-expediente/:id', {
        templateUrl: 'views/detalle.html',
        controller: 'DetalleCtrl'
      })
      .when('/modificar-expediente', {
        templateUrl: 'views/modificar.html',
        controller: 'ModificarCtrl'
      })
      .when('/consulta', {
        templateUrl: 'views/consultaexp.html',
        controller: 'ConsultaCtrl'
      })
      .when('/crear-expediente', {
        templateUrl: 'views/crearexp.html',
        controller: 'CrearExpCtrl'
      })
      .when('/404', {
        templateUrl: 'views/blank.html',
        controller: 'ErrorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .service('apiService', function($http) {
    //var apiURL = '';
    var apiURL = 'http://localhost:8000';

    var get = function(endpoint, token) {
      if(token != undefined){
        return $http.get(apiURL+endpoint, { "headers" : {"Content-Type" : "application/json", "Authorization" : "Beared " + token } });
      }
        return $http.get(apiURL+endpoint);
    };
    var post = function(endpoint, params, token) {
      if(token != undefined){
        return $http.post(apiURL+endpoint, params, { "headers" : {"Content-Type" : "application/json", "Authorization" : "Beared " + token } });
      }
      return $http.post(apiURL+endpoint, params);

    };

    var put = function(endpoint, params, token) {
      if(token != undefined){
        return $http.put(apiURL+endpoint, params,{ "headers" : {"Content-Type" : "application/json", "Authorization" : "Beared " + token } });
      }
      return $http.put(apiURL+endpoint, params)
    };

    var del = function(endpoint, token){
      if(token != undefined){
        return $http.delete(apiURL+endpoint,{ "headers" : {"Content-Type" : "application/json", "Authorization" : "Beared " + token } });
      }
      return $http.delete(apiURL+endpoint)
    };

    return {
      get: get,
      post: post,
      put: put,
      del: del
    };
  })
  .service('sesion', function($cookies, apiService){

    var getToken = function(){
      return $cookies.getObject('sesion').token
    }

    var getId = function(){
      return $cookies.getObject('sesion').idUser
    }

    var getRol = function(){
      return $cookies.getObject('sesion').rol
    }

    var getUser = function(){
      return $cookies.getObject('sesion').user
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

    var login = function(token, idUser, user, rol){

        $cookies.putObject('sesion', {'token': token , 'rol': rol, 'idUser': idUser, 'user': user})
    }


    var logout = function(){
      $cookies.remove('sesion')
    }

    return{
      login : login,
      logout : logout,
      isLoged : isLoged,
      getToken: getToken,
      getCookie : getCookie,
      getUser: getUser,
      getRol : getRol,
      getId : getId
    }
  })
  .component('cmFooter', {
    templateUrl: 'views/componentes/footer.html'
  })
  .component('cmSidebar', {
    templateUrl: 'views/componentes/sidebar.html',
    controller:'SidebarCtrl'
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
  })
  .run(function($rootScope, $location, sesion){
    //al cambiar de rutas
    $rootScope.$on('$routeChangeStart', function()
    {
        if(sesion.isLoged() == false){
          $location.url('/login')
        }
        else if($location.path() == '/login'){
          $location.url('/')
        }
    })
  });
