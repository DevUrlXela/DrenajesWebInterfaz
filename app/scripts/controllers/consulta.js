'use strict';
angular.module('drenajesWebInterfazApp')
  .controller('ConsultaCtrl', [ '$scope', 'sesion', 'apiService',function ($scope, sesion, apiService) {
    $scope.id_expediente = ""
    // $scope.estado = 'En Espera'
    $scope.busqueda=function(){
      if ($scope.id_expediente != '') {
        apiService.get('/expedientes/expediente/busquedarapida/'+$scope.id_expediente+'/',sesion.getToken())
        .then(function successCallback(response) {
          // console.log(response.data);
          $scope.estado = response.data.estado;
          $scope.tipo = response.data.tipo;
          $scope.remitente = response.data.remitente;
          $scope.firma = response.data.firma;
          $scope.fecha_ing = response.data.fecha_ingreso;
        }, function errorCallback(response) {
          swal({
            title: "Advertencia",
            text: "Expediente no encontrado",
            type: "error"
          })
          $scope.estado = '';
          $scope.tipo = '';
          $scope.remitente = '';
          $scope.firma = '';
          $scope.fecha_ing = '';
        })

      }

    }
    $scope.estados=function(a){
      if (a == 0) {
        if($scope.estado == 'En espera'){
          return 'active'
        }
        else {
          return ''
        }
      }
      else if (a == 1) {
        if($scope.estado == 'En proceso'){
          return 'active'
        }
        else {
          return ''
        }
      }
      else if (a == 2) {
        if ($scope.estado == 'Finalizado'){
          return 'active'
        }
        else {
          return ''
        }

      }

    }


}])
