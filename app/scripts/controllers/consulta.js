angular.module('drenajesWebInterfazApp')
  .controller('ConsultaCtrl', function ($scope, sesion, apiService) {
    $scope.id_expediente = ""
    $scope.busqueda=function(){
      if ($scope.id_expediente != '') {
        apiService.get('/expedientes/expediente/busqueda/'+$scope.id_expediente+'/',sesion.getToken())
        .then(function successCallback(response) {
          $scope.estado = response.data.estado;
          $scope.tipo = response.data.tipo;
          $scope.remitente = response.data.remitente;
          $scope.firma = response.data.firma;
          $scope.fecha_ing = response.data.fecha_ingreso;
          console.log($scope.fecha_ing);
        }, function errorCallback(response) {
          swal({
            title: "Advertencia",
            text: "Expediente no encontrado",
            type: "error"
          })
        })

      }

    }

})
