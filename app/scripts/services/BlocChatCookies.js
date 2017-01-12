(function () {
        function BlocChatCookies($cookies, $uibModal, User) {
        var currentUser = $cookies.get('blocChatCurrentUser');
            if(!currentUser || currentUser === ''){
                //do something
                $uibModal.open({
                    controller: 'NewUserNameModalCtrl',
                    controllerAs: 'newuser',
                    templateUrl: '/templates/username-modal.html',
                    size: 'sm',
                    backdrop: 'static',
                    keyboard: false,
                    animation: true
                });
            };
        }

    angular 
    .module('blocChat')
    .run(['$cookies', '$uibModal','User', BlocChatCookies]);

 })();