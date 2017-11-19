'use strict';
angular.module('drenajesWebInterfazApp')
  .controller('TransCtrl',['$scope', '$routeParams', '$location','apiService','sesion', function ($scope, $routeParams, $location,apiService,sesion) {
    $scope.id_exp = $routeParams.id;
    $scope.razon = '';
    $scope.observacion = '';
    $scope.enviado = '0';

    apiService.get('/expedientes/rol/usuarios/', sesion.getToken())
    .then(function successCallback(response){
       user_temp = response.data;
       for(var i = 0; i<user_temp.length;i=i+1){
         if(user_temp[i].id === sesion.getId()){
           user_temp.splice(i,1);
         }
       }
      $scope.usuarios = user_temp;
    });

    $scope.enviar = function(){
      if($scope.razon !== '' && $scope.observacion !== '' && $scope.enviado !== 0){
        apiService.post('/expedientes/actualizacion/expediente/' + $routeParams.id + '/crear/', {'observaciones':$scope.razon,'enviado':sesion.getId(),'recibido' : $scope.enviado } , sesion.getToken())
        .then(function successCallback(response){
          apiService.post( '/expedientes/observacion/expediente/' + $routeParams.id + '/crear/' , {"token":sesion.getToken(), "observacion":$scope.observacion}, sesion.getToken())
          .then(function successCallback(response) {
            $route.reload();
          });
          swal({
            title: "Expediente enviado",
            type: "success"
            },
            function(){
              window.location = '/#!/';
            });
        });
      }
    };

  }]);
