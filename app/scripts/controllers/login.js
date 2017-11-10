'use strict';

angular.module('drenajesWebInterfazApp')
  .controller('LoginCtrl', function ($scope, $location,apiService,sesion) {
    $scope.respuesta = 'Bienvenido'
    $scope.user = null
    $scope.password = null
    $scope.logearse = function(){

    //apiService.crear('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDMWY9z1PPeX-6adeIMRZBwk87ilFeH3bw',{"email" : $scope.user ,"password" : $scope.password,"returnSecureToken": true})
    apiService.post('/expedientes/user/login/', {"username" : $scope.user ,"password" : $scope.password})
    .then(function successCallback(response) {
      sesion.login(response.data.token, response.data.user, response.data.username, response.data.rol)
      $location.url('/home/entrada/1')
      console.log(response.data.token)
    }, function errorCallback(response) {
      $scope.respuesta = 'Usuario o contraseña incorrectos';
    })


  }

});
