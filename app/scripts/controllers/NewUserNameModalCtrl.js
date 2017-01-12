(function() {
    function NewUserNameModalCtrl($uibModalInstance, $cookies, User) {
        this.name = User.name;
        
        this.addUser = function() {
            if(this.name) {
                $cookies.put('blocChatCurrentUser', this.name);
                User.add(this.name);
                $uibModalInstance.close();
                console.log("submitted username: " + $cookies.get('blocChatCurrentUser'));
            } else{
                alert("You must enter a valid name");
            }
        }
    }
            angular 
                    .module('blocChat')
                    .controller('NewUserNameModalCtrl', ['$uibModalInstance', '$cookies', 'User', NewUserNameModalCtrl ]);
})();