/* global angular */

angular.module('classifiedApp', ['ngNewRouter', 'ngMaterial', 'app.home'])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {
  $router.config([
    {path: '/', component: 'home' }
  ]);
}