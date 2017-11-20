'use strict';
angular.module('drenajesWebInterfazApp')
  .controller('ReporteCtrl', ['$scope', '$location','apiService','sesion', function ($scope, $location,apiService,sesion) {
      d = new Date()
      $scope.fecha_inicio = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
      $scope.fecha_fin = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
      $scope.remitente = true
      $scope.fecha_entrada = true
      $scope.folio = true
      $scope.tipo = true
      $scope.completado = true
      $scope.fecha_finalizacion = true
      $scope.estado = '1'
      $scope.mostrar = false

      $scope.generar = function(){
          d1 = $scope.fecha_inicio.split('/')
          d2 = $scope.fecha_fin.split('/')
          d1 = new Date(d1[2],d1[1]-1,d1[0])
          d2 = new Date(d2[2],d2[1]-1,d2[0])
          if(d2 >= d1){
            apiService.post('/expedientes/expediente/reporte/',
            { 'completado': $scope.completado,
              'fecha_entrada': $scope.fecha_entrada,
              'fecha_inicio': d1.getFullYear() + '-' + (d1.getMonth()+1) + '-' + d1.getDate(),
              'fecha_fin': d2.getFullYear() + '-' + (d2.getMonth()+1) + '-' + d2.getDate(),
              'fecha_finalizacion':$scope.fecha_finalizacion,
              'numero_folios':$scope.folio,
              'remitente':$scope.remitente,
              'tipo':$scope.tipo,
              'estado':$scope.estado }, sesion.getToken())
            .then(function successCallback(response){
              // var file = new Blob([response.data], {type: 'application/ms-excel;charset=utf-8'});
              // console.log(response.data)
              // var link = document.createElement('a'); //create link download file
              // link.href = window.URL.createObjectURL(file); // set url for link download
              // link.setAttribute('download', 'reporte.csv'); //set attribute for link created
              // document.body.appendChild(link);
              // link.click();
              // document.body.removeChild(link);
              $scope.urlexcel = apiService.apiURL + response.data.url
              $scope.mostrar = true
              swal({
                title: "Reporte Generado",
                type: "success"
                });
            })
          }
          else{
            swal({
              title: "Las fechas no tienen sentido",
              type: "error"
              });
          }
      }

  }]);
