'use strict';

angular.module('drenajesWebInterfazApp')
  .controller('TopCtrl',[ '$scope', '$location', 'sesion', 'apiService', function ($scope, $location, sesion, apiService) {
    $scope.busqueda = '';
    $scope.search = function() {
      $location.path('/resultados/busqueda/' + $scope.busqueda + '/1/');
    }
    $scope.nombre_usuario = sesion.getCookie().user;
    $scope.cerrar = function(){
      apiService.post('/expedientes/user/logout/', { "token": sesion.getToken() }, sesion.getToken())
      .then(function successCallback(response) {
        sesion.logout();
        $location.url('/login')
      }, function errorCallback(response) {
        sesion.logout();
        $location.url('/login')
      })
    }

    apiService.get('/expedientes/expediente/noleidos/', sesion.getToken() )
    .then(function successCallback(response) {
      $scope.noleidos = response.data.numero
    })

  }])
  .controller('SidebarCtrl',['$scope', 'sesion', function ($scope, sesion) {
      if(sesion.getRol() == "Secretaria"){
        $scope.esSecretaria = true
      }
      else if(sesion.getRol() == "Director"){
        $scope.esDirector = true
      }


  }]);
