(function() {
	  angular.module('app.home', [])
        .controller('HomeController', ['userFactory', '$http', HomeController]);

  	function HomeController(userFactory, $http){
  		_self = this;
  		_self.user = userFactory.user;
  		_self.posts = [];
		  $http.get('/post/posts').then(function(response){
			   _self.posts = response.data;
		  });
  	}
})();