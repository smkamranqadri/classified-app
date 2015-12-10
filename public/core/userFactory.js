(function(){
	angular.module('classifiedApp')
	    .factory('userFactory', ['$localStorage', function($localStorage){
	    	var user = {
	    		userName : $localStorage.userName
	    	};

	    	function createUser(param) {
	    		user.userName = param;
	    		$localStorage.userName = param;
	    	}

	    	function deleteUser() {
	    		delete $localStorage.userName;
		  		delete user.userName;
	    	}

	    	return {
	    		createUser : createUser,
	    		deleteUser : deleteUser,
	    		user : user
	    	};
	    }])
})();