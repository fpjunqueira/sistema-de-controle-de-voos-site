angular.module('controlador-de-voos').controller('VoosController', function($scope, $http, $location, $filter, $rootScope) {

    $scope.voos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    $scope.url = 'http://localhost:8081/';

    $http.get('http://localhost:8080/voos')
        .success(function(retorno) {
            $scope.voos = retorno;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível buscar voos'
        });

    $scope.buscar = function() {
        $scope.mensagem = '';
        var data1 = $filter('dateUTC')( $scope.buscaDataInicial);
        var data2 = $filter('dateUTC')(  $scope.buscaDataFinal );
        var busarPorData = 'http://localhost:8080/voos?dataInicial=' +   data1 + '&dataFinal=' + data2;
        $http.get(busarPorData)
            .success(function(retorno) {
                $scope.voos = retorno;
                if (retorno == '') {
                      $scope.mensagem = 'Não foi possível encontrar voo para o período escolhido'
                }
            })
            .error(function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível buscar voos'
            });
    }

});
