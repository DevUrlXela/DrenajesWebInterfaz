'use strict';

angular.module('drenajesWebInterfazApp')
.controller('InboxCtrl', function ($scope, apiService) {
  $scope.records = []
  $scope.standby_records = [];
  $scope.transferred_records = [];
  $scope.finish_records = [];
  $scope.standby_metadata = [];
  $scope.transferred_metadata = [];
  $scope.finish_metadata = [];

  apiService.get('/bd/standby_inbox.json').then(response => {
    $scope.standby_records = response.data.records;
    $scope.standby_metadata = response.data.metadata;
    $scope.changeInbox(0);
  });

  apiService.get('/bd/transferred_inbox.json').then(response => {
    $scope.transferred_records = response.data.records;
    $scope.transferred_metadata = response.data.metadata;
  });

  apiService.get('/bd/finish_inbox.json').then(response => {
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
});
