
(function() {
	function Message(User, Room, $firebaseArray) {
		var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
		
		return {
			getByRoomId: function(roomId) {
               var list;
			     ref.orderByChild('roomId').equalTo(roomId).on('value', function(d){
                 list = d.val();
                 });
                return list;
			},
            send: function(newMessage){
                if(input || !input === '') {
                    console.log("submitted message"); 
                    messages.$add({
                        content: input,
                        roomId: Room.roomId,
                        sentAt: Date.now(),
                        username: User.name
                    });
                }
            }
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', [ 'User', 'Room', '$firebaseArray', Message ]);
})();