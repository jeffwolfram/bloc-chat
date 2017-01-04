(function() {
    function RoomListCtrl(Room){
        this.rooms = Room.all;
//        $scope.rooms = this.roomList.all;
    }
    
    angular
    .module('blocChat')
    .controller('RoomListCtrl', ['Room', RoomListCtrl]);
})();