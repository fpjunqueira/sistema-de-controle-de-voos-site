angular.module('controlador-de-voos', ['diretivas', 'ngRoute'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/voos', {
              templateUrl: 'partials/listar-voos.html',
              controller: 'VoosController'
            })
            .when('/voos/:id', {
              templateUrl: 'partials/consultar-voo-horarios.html',
              controller: 'VisualizarVooController'
            })
            .when('/voos/:id/:view', {
              templateUrl: function(attr) {
                  return 'partials/consultar-voo-' + attr.view + '.html';
              },
              controller: 'VisualizarVooController'
            })
            .when('/aeroportos', {
              templateUrl: 'partials/listar-aeroportos.html',
              controller: 'AeroportosController'
            })
            .when('/pilotos', {
              templateUrl: 'partials/listar-pilotos.html',
              controller: 'PilotosController'
            })
            .otherwise({
                templateUrl: 'partials/erro.html'
            });
});
