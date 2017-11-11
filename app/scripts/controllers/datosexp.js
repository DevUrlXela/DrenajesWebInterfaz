angular.module('drenajesWebInterfazApp')
  .controller('DetalleCtrl', function ($scope, $route, $routeParams, apiService, sesion) {

    apiService.post('/expedientes/expediente/' + $routeParams.id + '/leido/', { "token": sesion.getToken() }, sesion.getToken())
    .then(function successCallback(response) {
    })

    apiService.get( '/expedientes/expediente/informacion/' + $routeParams.id + '/', sesion.getToken())
    .then(function successCallback(response) {
      $scope.data = response.data
    })

    apiService.get( '/expedientes/requisito/expediente/' + $routeParams.id + '/informacion/' , sesion.getToken())
    .then(function successCallback(response) {
      $scope.requisitos = response.data
    })

    apiService.get( '/expedientes/estado/expediente/' + $routeParams.id + '/estados/' , sesion.getToken())
    .then(function successCallback(response) {
      $scope.estados = response.data
    })

    apiService.get( '/expedientes/actualizacion/expediente/' + $routeParams.id + '/transferencias/' , sesion.getToken())
    .then(function successCallback(response) {
      console.log(response.data)
      $scope.transferencias = response.data
    })

    apiService.get( '/expedientes/observacion/expediente/' + $routeParams.id + '/informacion/' , sesion.getToken())
    .then(function successCallback(response) {
      console.log(response.data)
      $scope.observaciones = response.data
    })

    $scope.nueva_obs = ''
    $scope.crear_obs = function(){
      console.log($scope.nueva_obs)
      if($scope.nueva_obs != ''){
        apiService.post( '/expedientes/observacion/expediente/' + $routeParams.id + '/crear/' , {"token":sesion.getToken(), "observacion":$scope.nueva_obs}, sesion.getToken())
        .then(function successCallback(response) {
          $route.reload()
        }, function errorCallback(response) {
          $scope.mensaje = "Error al agregar observacion"
        })
      }
    }

  });
