'use strict';

angular.module('drenajesWebInterfazApp')
  .controller('TopCtrl', function ($scope, $location, sesion, apiService) {
    $scope.nombre_usuario = sesion.getCookie().user;
    $scope.cerrar = function(){
      apiService.crear('/expedientes/user/logout/', {"token": sesion.getToken()})
      .then(function successCallback(response) {
        sesion.logout();
        $location.url('/login')
      }, function errorCallback(response) {
        sesion.logout();
        $location.url('/login')
      })
    }

    apiService.crear('/expedientes/expediente/noleidos/',{"token": sesion.getToken()})
    .then(function successCallback(response) {
      $scope.noleidos = response.data.numero
    })

  })
  .controller('SidebarCtrl', function ($scope, sesion) {
      if(sesion.getRol() == "secretaria"){
        $scope.esSecretaria = true
      }
      else if(sesion.getRol() == "director"){
        $scope.esDirector = true
      }


  });
