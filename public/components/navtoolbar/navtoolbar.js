(function(){
	angular.module('app.navtoolbar', [])
	    .controller('NavtoolbarController', ['userFactory', NavtoolbarController]);
		function NavtoolbarController (userFactory) {
		    _self = this;
			_self.user = userFactory.user;
		    _self.signout = function() {
		  		userFactory.deleteUser();
		    };
		}
})();