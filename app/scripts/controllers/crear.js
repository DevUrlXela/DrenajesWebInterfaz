'use strict';
angular.module('drenajesWebInterfazApp')
  .controller('CrearExpCtrl',['$scope','apiService','sesion', function ($scope,apiService,sesion) {
      var d = new Date()
      $scope.expediente = {
        folio : '',
        fecha : d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear(),
        tipo : '',
        remitente : '',
        firma : ''
      }
      $scope.requisitos = []
      $scope.descripcion = ''
      $scope.cumple = true
      $scope.agregar_req = function(){
        if($scope.descripcion!=''){
          $scope.requisitos.push({ descripcion : $scope.descripcion, cumple:$scope.cumple})
        }
      }

      $scope.crear_exp = function(){
          if($scope.expediente.folio == '' || $scope.fecha == '' || $scope.expediente.tipo == '' || $scope.remitente == '' || $scope.expediente.firma == ''){
            swal({
              title: "No puede dejar campos vacios",
              type: "error"
            });
            return null
          }

        apiService.post('/expedientes/expediente/crear/', {
          "tipo":$scope.expediente.tipo,
          "remitente":$scope.expediente.remitente,
          "numero_folios":$scope.expediente.folio,
          "firma":$scope.expediente.firma
          }, sesion.getToken())
        .then(function successCallback(response) {
          console.log($scope.expediente)
          for(i=0;i<$scope.requisitos.length;i+=1){
            apiService.post('/expedientes/requisito/expediente/' + response.data.id + '/crear/',{"requisito":$scope.requisitos[i].descripcion},sesion.getToken())
            .then(function successCallback(response){
              console.log('funciona')
            })
          }
          swal({
            title: "Expediente Creado",
            type: "success"
            },
            function(){
              window.location = '/#!/';
            });
        }, function errorCallback(response) {

        })
      }
  }]);
