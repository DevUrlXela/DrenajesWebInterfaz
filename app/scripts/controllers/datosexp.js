angular.module('drenajesWebInterfazApp')
  .controller('DetalleCtrl', function ($scope, $location, $routeParams, apiService, sesion) {

    apiService.post('/expedientes/expediente/' + $routeParams.id + '/leido/', { "token": sesion.getToken() }, sesion.getToken())
    .then(function successCallback(response) {
      console.log('funciona')
    }, function errorCallback(response) {
      console.log('error')
    })

    apiService.get( '/expedientes/expediente/informacion/' + $routeParams.id + '/', sesion.getToken())
    .then(function successCallback(response) {
      console.log(response.data)
    }, function errorCallback(response) {

    })




  });
