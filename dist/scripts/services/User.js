(function() {
    function User($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("users");
        var users = $firebaseArray(ref);
       
        
        var username = $cookies.get('username');
        var add = 
             function(username) {
                users.$add({
                    name: username
                });
        
        
        return username;
    };
        return {
            username: username,
            add: add
        };
        }
    angular 
           .module('blocChat')
           .factory('User', ['$firebaseArray', '$cookies', User]);
})();