'use strict';
angular.module('drenajesWebInterfazApp')
  .controller('ModificarCtrl',['$scope', '$routeParams', '$location','apiService','sesion', function ($scope, $routeParams, $location,apiService,sesion) {
    $scope.id = $routeParams.id
    apiService.get( '/expedientes/expediente/informacion/' + $routeParams.id + '/', sesion.getToken())
    .then(function successCallback(response) {
      d = new Date(response.data.fecha_entrada)
      $scope.expediente = {
        id : $routeParams.id,
        folio : response.data.numero_folios,
        fecha : d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear(),
        tipo : response.data.tipo,
        remitente : response.data.remitente,
        firma : response.data.firma
      }
    })

    $scope.requisitos = []
    apiService.get( '/expedientes/requisito/expediente/' + $routeParams.id + '/informacion/' , sesion.getToken())
    .then(function successCallback(response) {
      for(var i = 0; i < response.data.length; i+=1 ){
        //console.log(response.data)
        var cumplido
        if(response.data[i].cumplido == 1){
          cumplido = true
        }else{
          cumplido = false
        }
        $scope.requisitos.push({descripcion:response.data[i].requisito, cumple:cumplido, id:response.data[i].id})
      }
    })

    $scope.descripcion = ''
    $scope.cumple = true

    $scope.agregar_req = function(){
      if($scope.descripcion!=''){
        $scope.requisitos.push({ descripcion : $scope.descripcion, cumple:$scope.cumple, id:0})
        //console.log($scope.requisitos)
      }
    }

    $scope.modificar_exp = function(){
        if($scope.expediente.folio == '' || $scope.expediente.tipo == '' || $scope.remitente == '' || $scope.expediente.firma == ''){
          swal({
            title: "No puede dejar campos vacios",
            type: "error"
          });
          return null
        }
      apiService.put('/expedientes/expediente/'+ $scope.id +'/editar/', { "tipo":$scope.expediente.tipo,"remitente":$scope.expediente.remitente,"folio":$scope.expediente.folio,"firma":$scope.expediente.firma }, sesion.getToken())
      .then(function successCallback(response) {
        for(i=0;i<$scope.requisitos.length;i+=1){
          if($scope.requisitos[i].id != 0){
            apiService.put('/expedientes/requisito/expediente/' + $routeParams.id + '/editar/' + $scope.requisitos[i].id + '/',{"requisito":$scope.requisitos[i].descripcion,"cumplido":$scope.requisitos[i].cumple},sesion.getToken())
            .then(function successCallback(response){
              console.log("funciona")
            })
          }
          else{
            apiService.post('/expedientes/requisito/expediente/' + $routeParams.id + '/crear/',{"requisito":$scope.requisitos[i].descripcion},sesion.getToken())
            .then(function successCallback(response){
              console.log("funciona")
            })
          }
        }
        swal({
          title: "Expediente modificado correctamente",
          type: "success"
          },
          function(){
            window.location = '/#!/detalle-expediente/'+ $routeParams.id;
          });
      }, function errorCallback(response) {

      })
    }

  }]);
