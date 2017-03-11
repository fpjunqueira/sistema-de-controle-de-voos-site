angular.module('controlador-de-voos').controller('PilotosController', function($scope, $http, $location) {

    $scope.pilotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.url = 'http://localhost:8081/';

    $http.get('http://localhost:8080/pilotos')
        .success(function(retorno) {
            $scope.pilotos = retorno;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível buscar pilotos'
        });

});
