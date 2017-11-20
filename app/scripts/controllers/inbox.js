'use strict';

angular.module('drenajesWebInterfazApp')
.controller('InboxCtrl', ['$routeParams', '$scope', '$http', '$location', 'sesion', 'apiService', function ($routeParams, $scope, $http, $location, sesion, apiService) {
  $scope.rol = sesion.getRol();
  $scope.pag = $routeParams.pagina * 1;
  $scope.total_pags;
  $scope.records = [];
  $scope.noleidos = 0;

  $scope.nextPage = function() {
    if($scope.pag + 1 <= $scope.total_pags) {
      if($routeParams.bandeja == "entrada") {
        $location.path("/home/entrada/" + (++$scope.pag));
      } else if($routeParams.bandeja == "transferidos"){
        $location.path("/home/transferidos/" + (++$scope.pag));
      } else if($routeParams.bandeja == "finalizados"){
        $location.path("/home/finalizados/" + (++$scope.pag));
      }
    }
  }

  $scope.previousPage = function() {
    if($scope.pag - 1 >= 1){
      if($routeParams.bandeja == "entrada") {
        $location.path("/home/entrada/" + (--$scope.pag));
      } else if($routeParams.bandeja == "transferidos"){
        $location.path("/home/transferidos/" + (--$scope.pag));
      } else if($routeParams.bandeja == "finalizados"){
        $location.path("/home/finalizados/" + (--$scope.pag));
      }
    }
  }

  function fetchData() {
    if($routeParams.bandeja === "entrada") {
      apiService.get('/expedientes/expediente/inbox/' + $scope.pag + '/', sesion.getToken()).then(function(response){
        $scope.records = response.data.objects;
        $scope.total_pags = response.data.meta.total;
      });
    } else if ($routeParams.bandeja === "transferidos") {
      apiService.get('/expedientes/expediente/transferidos/' + $scope.pag + '/', sesion.getToken()).then(function(response){
        $scope.records = response.data.objects;
        $scope.total_pags = response.data.meta.total;
      });
    } else if ($routeParams.bandeja === "finalizados") {
      apiService.get('/expedientes/expediente/finalizados/' + $scope.pag + '/', sesion.getToken()).then(function(response){
        $scope.records = response.data.objects;
        $scope.total_pags = response.data.meta.total;
      });
    }

    apiService.get('/expedientes/expediente/noleidos/', sesion.getToken() )
    .then(function(response){
      $scope.noleidos = response.data.numero;
    })
  }

  fetchData();
}]);
