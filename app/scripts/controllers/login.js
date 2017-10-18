'use strict';

angular.module('drenajesWebInterfazApp')
  .controller('LoginCtrl', function ($scope, $location,apiService,sesion) {
    $scope.respuesta = 'Bienvenido'
    $scope.user = null
    $scope.password = null
    $scope.logearse = function(){

    apiService.crear('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDMWY9z1PPeX-6adeIMRZBwk87ilFeH3bw',{"email" : $scope.user ,"password" : $scope.password,"returnSecureToken": true})
    //apiService.crear('http://localhost:8000/usuarios/user/login/',{"username" : $scope.user ,"password" : $scope.password})
    .then(function successCallback(response) {
      sesion.login(response.data.idToken, response.data.email, response.data.email)
      $location.url('/')
    }, function errorCallback(response) {
      $scope.respuesta = 'Usuario o contraseña incorrectos';
    })


  }

});
