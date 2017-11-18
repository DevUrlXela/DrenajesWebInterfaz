'use strict';

angular.module('drenajesWebInterfazApp')
  .controller('BusquedaCtrl', function ($scope, $window, $routeParams, sesion, apiService) {
    $scope.title = 'Resultados';
    $scope.records = [];
    $scope.pag = $routeParams.pag * 1;
    $scope.total_pags;
    var params = {
      'busqueda': $routeParams.params
    };

    function fetchData() {
      apiService.post('/expedientes/expediente/busqueda/'+ $scope.pag +'/', params, sesion.getToken()).then(response => {
        $scope.records = response.data.objects;
        $scope.total_pags = response.data.meta.total;
        if($scope.records.length == 0) {
          swal(
              {
                  title: "No se han econtrado coincidencias",
                  text: "No existen coincidencias para la búsqueda '" + params.busqueda +"'",
                  type: "warning",
                  confirmButtonColor: "#75b045",
                  confirmButtonText: "Entendido!",
                  closeOnConfirm: true
              }, () => {
                console.log("Regresando");
                $window.location.href = '/#!/home/entrada/1';
              }
          );
        }
      });
    }

    fetchData();
  });