angular.module('controlador-de-voos').controller('AeroportosController', function($scope, $http, $location) {

    $scope.aeroportos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.url = 'http://localhost:8081/';

    $http.get('http://localhost:8080/aeroportos')
        .success(function(retorno) {
            $scope.aeroportos = retorno;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível buscar aeroportos'
        });

});
