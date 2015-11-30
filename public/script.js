(function(){
	angular.module('classifiedApp', ['ngRoute', 'ngMaterial', 'ngStorage', 'app.home', 'app.signin', 'app.signup', 'app.newpost'])
		.config(function($routeProvider){
			$routeProvider.when('/', {
				templateUrl:'components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
			});
			$routeProvider.when('/signin', {
				templateUrl:'components/signin/signin.html',
                controller: 'SigninController',
                controllerAs: 'signin'
			});
			$routeProvider.when('/signup', {
				templateUrl:'components/signup/signup.html',
                controller: 'SignupController',
                controllerAs: 'signup'
			});
			$routeProvider.when('/newpost', {
				templateUrl:'components/newpost/newpost.html',
                controller: 'NewpostController',
                controllerAs: 'newpost'
			});
			$routeProvider.otherwise({redirectTo: '/'});
		})
	    .factory('userFactory', ['$localStorage', function($localStorage){
	    	var user = {
	    		userName : $localStorage.userName
	    	};

	    	function setUserData(param) {
	    		user.userName = param;
	    		$localStorage.userName = param;
	    	}

	    	function delUserData() {
	    		delete $localStorage.userName;
		  		delete user.userName;
	    	}

	    	return {
	    		setUserData : setUserData,
	    		delUserData : delUserData,
	    		user : user
	    	};
	    }])
	    .controller('AppController', ['userFactory', AppController]);
		function AppController (userFactory) {
		    _self = this;
			_self.user = userFactory.user;
		    _self.signout = function() {
		  		userFactory.delUserData();
		    };
		}
})();