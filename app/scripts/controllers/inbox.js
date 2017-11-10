'use strict';

angular.module('drenajesWebInterfazApp')
.controller('InboxCtrl', function ($routeParams, $scope, $http, $location, sesion, apiService) {
  var trayShowing = 0;
  $scope.records = [];
  $scope.standby_metadata = [];
  $scope.transferred_metadata = [];
  $scope.finish_metadata = [];
  console.log($routeParams);
  if($routeParams.bandeja === "entrada") {
    apiService.get('/expedientes/expediente/inbox/' + $routeParams.pagina + '/', sesion.getToken()).then(response => {
      $scope.records = response.data;
      trayShowing = 0;
    });
  } else if ($routeParams.bandeja === "transferidos") {
    $http.get('/bd/transferred_inbox.json').then(response => {
      $scope.records = response.data.records;
      $scope.transferred_metadata = response.data.metadata;
      trayShowing = 1;
    });
  } else if ($routeParams.bandeja === "finalizados") {
    $http.get('/bd/finish_inbox.json').then(response => {
      $scope. records = response.data.records;
      $scope.finish_metadata = response.data.metadata;
      trayShowing = 2;
    });
  }

});
