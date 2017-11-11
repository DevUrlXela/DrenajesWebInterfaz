angular.module('drenajesWebInterfazApp')
  .controller('TransCtrl', function ($scope, $routeParams, $location,apiService,sesion) {
    $scope.id_exp = $routeParams.id
    $scope.razon = 'nada'
    $scope.observacion = 'nada'
    $scope.usuarios = []
    //obtener usuarios

    $scope.enviar = function(){

    }

  });
