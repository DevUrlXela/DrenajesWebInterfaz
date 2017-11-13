angular.module('drenajesWebInterfazApp')
  .controller('CrearExpCtrl', function ($scope,apiService,sesion) {
      d = new Date()
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

        apiService.post('/expedientes/expediente/nuevo/', {
          "tipo":$scope.expediente.tipo,
          "fecha_entrada":$scope.expediente.fecha,
          "remitente":$scope.expediente.remitente,
          "folio":$scope.expediente.folio,
          "firma":$scope.expediente.firma
          }, sesion.getToken())
        .then(function successCallback(response) {
          for(i=0;i<$scope.requisitos.length;i+=1){
            apiService.post('/expedientes/requisito/expediente/' + response.data.id + '/crear/',{"requisito":$scope.requisitos[i].descripcion},sesion.getToken())
            .then(function successCallback(response){
              console.log(funciona)
            })
          }
        }, function errorCallback(response) {

        })
      }
  });
