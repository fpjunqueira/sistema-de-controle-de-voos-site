angular.module('controlador-de-voos').controller('VoosController', function($scope, $http, $location) {

    $scope.voos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.url = 'http://localhost:8081/';

    console.log($location.search().teste);

    $http.get('http://localhost:8080/voo')
        .success(function(retorno) {
            $scope.voos = retorno;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível buscar voos'
        });

    $scope.buscar = function() {
        var busarPorData = 'http://localhost:8080/voo?decolagem=' + $scope.buscaDataDecolagem + '&pouso=' + $scope.buscaDataDecolagem;
        $http.get(busarPorData)
            .success(function(retorno) {
                $scope.voos = retorno;
            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível buscar voos'
            });
    }
});
