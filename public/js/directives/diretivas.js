angular.module('diretivas', [])
    .directive('vooCabecalho', function() {

        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
              titulo: '@',
              subtitulo: '@',
              informacoes: '@'
          };

        ddo.templateUrl = 'js/directives/voo-cabecalho.html';

        return ddo;
    });
