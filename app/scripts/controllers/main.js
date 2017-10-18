'use strict';

angular.module('drenajesWebInterfazApp')
  .controller('MainCtrl', function ($scope, $cookies, $location, apiService, sesion) {
    if(sesion.isLoged() == false){
      $location.url('/login');
    }
    
    //apiService.crear('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDMWY9z1PPeX-6adeIMRZBwk87ilFeH3bw',{"email" : "alguien@gmail.com","password" : "12345678","returnSecureToken": true});
})
