(function() {
	angular.module('app.signup', [])
		.controller('SignupController', ['$http', "$location", SignupController]);
  	
  	function SignupController($http, $location) {
		_self = this;
		_self.user = {userName: '', passWord: ''};
		_self.error = '';
		_self.registered = false;
		_self.signup = function(){
			if (_self.user.userName !== '' && _self.user.passWord !== '') {
				$http.post('/user/signup', _self.user).then(function(response){
					if(response.data === 'User Created Successfully!'){
						_self.registered = true;
					} else {
						_self.error = response.data;
					}
				}, function(error){
					_self.error = error;
				});
			} else {
				_self.error = 'Username or Password Missing...';
			}
		};
		_self.signin = function(){
			$location.path('/signin');
		};
	}
})();