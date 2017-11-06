'use strict';

angular.module('drenajesWebInterfazApp')
.controller('InboxCtrl', function ($scope, $http, $location, sesion, apiService) {
  $scope.records = []
  $scope.standby_records = [];
  $scope.transferred_records = [];
  $scope.finish_records = [];
  $scope.standby_metadata = [];
  $scope.transferred_metadata = [];
  $scope.finish_metadata = [];

  $http.get('/bd/standby_inbox.json').then(response => {
    $scope.standby_records = response.data.records;
    $scope.standby_metadata = response.data.metadata;
    $scope.changeInbox(0);
  });

  $http.get('/bd/transferred_inbox.json').then(response => {
    $scope.transferred_records = response.data.records;
    $scope.transferred_metadata = response.data.metadata;
  });

  $http.get('/bd/finish_inbox.json').then(response => {
    $scope.finish_records = response.data.records;
    $scope.finish_metadata = response.data.metadata;
  });

  $scope.changeInbox = function(inbox) {
    if(inbox == 0) {
      $scope.records = $scope.standby_records;
    } else if (inbox == 1) {
      $scope.records = $scope.transferred_records;
    } else if (inbox == 2) {
      $scope.records = $scope.finish_records;
    }
  }

  $scope.openExp = function(id) {
    apiService.post('/expedientes/expediente/' + id + '/leido/', {"token": sesion.getToken()} ,sesion.getToken()).then(response => {
      console.log(response);
      $location.path('/detalle-expediente/' + id);
    });
  }
});
