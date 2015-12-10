(function(){
	angular.module('classifiedApp')
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
})();