(function(){
	angular.module('classifiedApp', ['ngMaterial', 'ui.router', 'ngStorage', 'naif.base64',
									 'app.navtoolbar', 'app.home', 'app.signin', 'app.signup', 'app.newpost'])
	    .controller('AppController', ['', AppController]);
		function AppController () {
		    _self = this;
		}
})();