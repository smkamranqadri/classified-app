(function() {
	angular.module('app.signin', [])
		.controller('SigninController', ['$http', '$location', 'userFactory', SigninController]);
  	
  	function SigninController($http, $location, userFactory) {
		_self = this;
		_self.user = { userName: '', passWord: '' };
		_self.error = '';
		_self.signin = function() {
			if (_self.user.userName !== '' && _self.user.passWord !== '') {
				$http.post('/user/signin', _self.user).then(function(response){
					if(response.data === 'User Signin Successfully!'){
						userFactory.setUserData(_self.user.userName);
						$location.path('/home');
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
	}
})();