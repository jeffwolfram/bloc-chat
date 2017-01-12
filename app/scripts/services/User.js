(function() {
    function User($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("users");
        var users = $firebaseArray(ref);
        
        
        var username = $cookies.get('differentThanExpected');
        var User = 
             function(username) {
                users.$add({
                    name: username
                });
            
        
        return{
            User: user
        } 
    }
        }
    angular 
           .module('blocChat')
           .factory('User', ['$firebaseArray', '$cookies', User]);
})();