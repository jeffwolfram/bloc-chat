(function() {
    function RoomListCtrl(Room, Message, $uibModal, $scope){
        
        this.rooms = Room.all;
        this.messages;
        this.room = null;
        $scope.message = null;
        
       
        
        this.activeRoom = function(room){
            this.room = room;
            
            this.messages = Message.getByRoomId(room.$id);
            
        }
        this.send = function(newMessage) {
            Message.send(newMessage, this.room);
            $scope.message = '';
        };
         this.rooms.$loaded().then(function(rooms){
//            this.room = rooms.$getRecord('1')
            if(this.room){
                this.messages = Message.getByRoomId(this.room.$id);
            }
        })
        
        this.openModal = function(){
            $uibModal.open({
                controller: 'ModalCtrl',
                controllerAs: '$ctrl',
                templateUrl: '/templates/modal.html',
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                size: 'sm',
                appendTo: undefined,
                animation: true
            })
        };
    }
    
    angular
    .module('blocChat')
    .controller('RoomListCtrl', ['Room', 'Message', '$uibModal', '$scope', RoomListCtrl]);
})();