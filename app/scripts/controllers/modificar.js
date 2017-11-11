angular.module('drenajesWebInterfazApp')
  .controller('ModificarCtrl', function ($scope, $routeParams, $location,apiService,sesion) {

    apiService.get( '/expedientes/expediente/informacion/' + $routeParams.id + '/', sesion.getToken())
    .then(function successCallback(response) {
      d = new Date(response.data.fecha_entrada)
      $scope.expediente = {
        id : $routeParams.id,
        folio : response.data.numero_folios,
        fecha : d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getYear(),
        tipo : response.data.tipo,
        remitente : response.data.remitente,
        firma : response.data.firma
      }
    })

    $scope.requisitos = []
    apiService.get( '/expedientes/requisito/expediente/' + $routeParams.id + '/informacion/' , sesion.getToken())
    .then(function successCallback(response) {
      for(var i = 0; i < response.data.length; i+=1 ){
        $scope.requisitos.push({descripcion:response.data[i].fields.requisito, cumple:response.data[i].fields.cumplido})
      }
    })

    $scope.descripcion = ''
    $scope.cumple = true

    $scope.agregar_req = function(){
      if($scope.descripcion!=''){
        $scope.requisitos.push({ descripcion : $scope.descripcion, cumple:$scope.cumple})
        console.log($scope.requisitos)
      }
    }

  });
