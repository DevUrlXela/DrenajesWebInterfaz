'use strict';

angular.module('drenajesWebInterfazApp')
.controller('InboxCtrl', function ($routeParams, $scope, $http, $location, sesion, apiService) {
  $scope.pag = $routeParams.pagina * 1;
  $scope.total_pags;
  $scope.records = [];

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
    if($scope.pag - 1 >= 1)
    if($routeParams.bandeja == "entrada") {
      $location.path("/home/entrada/" + (--$scope.pag));
    } else if($routeParams.bandeja == "transferidos"){
      $location.path("/home/transferidos/" + (--$scope.pag));
    } else if($routeParams.bandeja == "finalizados"){
      $location.path("/home/finalizados/" + (--$scope.pag));
    }
  }

  function fetchData() {
    if($routeParams.bandeja === "entrada") {
      apiService.get('/expedientes/expediente/inbox/' + $scope.pag + '/', sesion.getToken()).then(response => {
        $scope.records = response.data.objects;
        $scope.total_pags = response.data.meta.total;
      });
    } else if ($routeParams.bandeja === "transferidos") {
      apiService.get('/expedientes/expediente/transferidos/' + $scope.pag + '/', sesion.getToken()).then(response => {
        $scope.records = response.data.objects;
        $scope.total_pags = response.data.meta.total;
      });
    } else if ($routeParams.bandeja === "finalizados") {
      apiService.get('/expedientes/expediente/finalizados/' + $scope.pag + '/', sesion.getToken()).then(response => {
        $scope.records = response.data.objects;
        $scope.total_pags = response.data.meta.total;
      });
    }
  }

  fetchData();
});
