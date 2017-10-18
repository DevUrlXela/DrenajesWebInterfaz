'use strict';

angular.module('drenajesWebInterfazApp')
  .controller('TopCtrl', function ($scope, $location, sesion, apiService) {
    $scope.nombre_usuario = sesion.getCookie().user;
    $scope.cerrar = function(){
      apiService.obtener('http://localhost:8000/usuarios/user/logout/')
      .then(function successCallback(response) {
        sesion.logout();
        $location.url('/login')
      }, function errorCallback(response) {
        sesion.logout();
        $location.url('/login')
      })
    }
  });
