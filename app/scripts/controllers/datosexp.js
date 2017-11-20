'use strict';
angular.module('drenajesWebInterfazApp')
  .controller('DetalleCtrl',[ '$scope', '$route', '$routeParams', 'apiService', 'sesion',function ($scope, $route, $routeParams, apiService, sesion) {

    $scope.id= $routeParams.id;
    apiService.post('/expedientes/expediente/' + $routeParams.id + '/leido/', { "token": sesion.getToken() }, sesion.getToken())
    .then(function successCallback(response) {
    });

    apiService.get('/expedientes/expediente/permiso/' + $routeParams.id + '/', sesion.getToken())
    .then(function successCallback(response) {
      $scope.autorizar = response.data.autorizar
      $scope.modificar = response.data.modificar
      $scope.transferir = response.data.transferir
      $scope.confirmar_recibido = !response.data.confirmar_recibido
      $scope.aceptar = response.data.aceptar
      if($scope.aceptar == 1){
        $scope.autorizar = 0
        $scope.confirmar_recibido = 0
        $scope.transferir = 0
      }
      else if($scope.confirmar_recibido == 1){
        $scope.autorizar = 0
        $scope.transferir = 0
        $scope.modificar = 0
      }
      else if($scope.autorizar == 0 ){
        $scope.transferir = 0;
        $scope.modificar = 0;
      }
    });

    apiService.get( '/expedientes/expediente/informacion/' + $routeParams.id + '/', sesion.getToken())
    .then(function successCallback(response) {
      $scope.data = response.data;
    });

    apiService.get( '/expedientes/requisito/expediente/' + $routeParams.id + '/informacion/' , sesion.getToken())
    .then(function successCallback(response) {
      $scope.requisitos = response.data;
    });

    apiService.get( '/expedientes/estado/expediente/' + $routeParams.id + '/estados/' , sesion.getToken())
    .then(function successCallback(response) {
      $scope.estados = response.data;
    });

    apiService.get( '/expedientes/actualizacion/expediente/' + $routeParams.id + '/transferencias/' , sesion.getToken())
    .then(function successCallback(response) {
      $scope.transferencias = response.data;
    });

    apiService.get( '/expedientes/observacion/expediente/' + $routeParams.id + '/informacion/' , sesion.getToken())
    .then(function successCallback(response) {
      $scope.observaciones = response.data;
    });

    $scope.nueva_obs = ''
    $scope.crear_obs = function(){
      if($scope.nueva_obs != ''){
        apiService.post( '/expedientes/observacion/expediente/' + $routeParams.id + '/crear/' , {"token":sesion.getToken(), "observacion":$scope.nueva_obs}, sesion.getToken())
        .then(function successCallback(response) {
          $route.reload();
        }, function errorCallback(response) {
          $scope.mensaje = "Error al agregar observacion";
        });
      }
    };

    $scope.autorizar_fun = function(){
      apiService.get('/expedientes/expediente/' + $routeParams.id + '/autorizar/', sesion.getToken())
        .then(function successCallback(response) {
          swal({
            title: "Expediente autorizado",
            type: "success"
            },
            function(){
              location.reload();
            });
        },
        function errorCallback(response) {
          swal({
            title: "No tienes permisos",
            type: "error"
            },
            function(){
              location.reload();
            });
        })
    }

    $scope.aceptar_fun = function(){
      apiService.get('/expedientes/expediente/' + $routeParams.id + '/aceptar/', sesion.getToken())
        .then(function successCallback(response) {
          swal({
            title: "Expediente aceptado",
            type: "success"
            },
            function(){
              location.reload();
            });
        },
        function errorCallback(response) {
          swal({
            title: "No tienes permisos",
            type: "error"
            },
            function(){
              location.reload();
            });
        })
    };

    $scope.confirmar_fun = function(){
      apiService.get('/expedientes/expediente/' + $routeParams.id + '/confirmar/', sesion.getToken())
        .then(function successCallback(response) {
          swal({
            title: "Expediente recibido confirmado",
            type: "success"
            },
            function(){
              location.reload();
            });
        },
        function errorCallback(response) {
          swal({
            title: "No tienes permisos",
            type: "error"
            },
            function(){
              location.reload();
            });
        });
    };
  }]);
