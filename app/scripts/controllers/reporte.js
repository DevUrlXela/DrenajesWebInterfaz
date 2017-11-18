angular.module('drenajesWebInterfazApp')
  .controller('ReporteCtrl', function ($scope, $location,apiService,sesion) {
      d = new Date()
      $scope.fecha_inicio = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
      $scope.fecha_fin = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
      $scope.remitente = true
      $scope.fecha_entrada = true
      $scope.folio = true
      $scope.tipo = true
      $scope.completado = true
      $scope.fecha_finalizacion = true
      $scope.estado = '2'
      $scope.mostrar = false

      $scope.generar = function(){
          d1 = $scope.fecha_inicio.split('/')
          d2 = $scope.fecha_fin.split('/')
          d1 = new Date(d1[2],d1[1]-1,d1[0])
          d2 = new Date(d2[2],d2[1]-1,d2[0])
          if(d2 >= d1){
            apiService.post('/expedientes/reporte/',
            { 'completado_r': $scope.completado,
              'fecha_entrada_r': $scope.fecha_entrada,
              'fecha_fin': $scope.fecha_fin,
              'fecha_finalizacion_r':$scope.fecha_finalizacion,
              'fecha_inicio':$scope.fecha_inicio,
              'id':'1',
              'numero_folios_r':$scope.folio,
              'remitente_r':$scope.remitente,
              'tipo_r':$scope.tipo,
              'estado_r':$scope.estado }, sesion.getToken())
            .then(function successCallback(response){
              $scope.urlexcel = response.data.urlexcel
              $scope.urlpdf = response.data.urlpdf
              $scope.reporte = true
            })
          }
          else{
            swal({
              title: "Las fechas no tienen sentido",
              type: "error"
              });
          }
      }

  });
