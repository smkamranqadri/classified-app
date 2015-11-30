(function() {
	  angular.module('app.newpost', [])
        .controller('NewpostController', ['userFactory', '$location', '$http' ,NewpostController]);

  	function NewpostController(userFactory, $location, $http){
  		_self = this;
  		if (!userFactory.user.userName) {
			$location.path('/signin');
  		}
  		_self.post = { title: '', description: '', price: '', image: 'image' };
  		_self.error = '';
  		_self.submitPost = function (){
  			$http.post('/post/newpost', _self.post).then(function(response){
				if(response.data === 'Post Submitted Successfully!'){
					$location.path('/home');
				} else {
					_self.error = response.data;
				}
			}, function(error){
				_self.error = error;
			});
  		};
  	}
})();