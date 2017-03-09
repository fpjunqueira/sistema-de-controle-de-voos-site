angular.module('controlador-de-voos', ['diretivas', 'ngRoute'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/voo', {
              templateUrl: 'partials/listar-voos.html',
              controller: 'VoosController'
            })
            .when('/voo/:id', {
              templateUrl: 'partials/consultar-voo-horarios.html',
              controller: 'VisualizarVooController'
            })
            .when('/voo/:id/:view', {
              templateUrl: function(attr) {
                  return 'partials/consultar-voo-' + attr.view + '.html';
              },
              controller: 'VisualizarVooController'
            })
            .otherwise({
                templateUrl: 'partials/erro.html'
            });
});
