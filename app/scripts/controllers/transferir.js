angular.module('drenajesWebInterfazApp')
  .controller('TransCtrl', function ($scope, $routeParams, $location,apiService,sesion) {
    $scope.id_exp = $routeParams.id
    $scope.razon = ''
    $scope.observacion = ''
    $scope.usuarios = []
    $scope.enviado = 0

    apiService.get('/expedientes/rol/usuarios/', sesion.getToken())
    .then(function successCallback(response){
      $scope.usuarios = response.data
    })

    $scope.enviar = function(){
      if($scope.razon != '' && $scope.observacion != '' && $scope.enviado != 0){
        apiService.post('/expedientes/actualizacion/expediente/' + $routeParams.id + '/crear/', {'observaciones':$scope.observacion,'enviado':sesion.getId(),'recibido' : $scope.enviado } , sesion.getToken())
        .then(function successCallback(response){
          swal({
            title: "Expediente enviado",
            type: "success"
            },
            function(){
              window.location = '/#!/';
            });
        })
      }
      else{

      }
    }

  });
