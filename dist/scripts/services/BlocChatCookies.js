(function () {
        function BlocChatCookies($cookies, $uibModal, User) {
        var currentUser = $cookies.get('blocChatCurrentUser');
            if(!currentUser || currentUser === ''){
                console.log('cookies');

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
                console.log("after uib");
            };
        }

    angular 
    .module('blocChat')
    .run(['$cookies', '$uibModal','User', BlocChatCookies]);

 })();