
(function() {
	function Message(User, Room, $cookies, $firebaseArray) {
		var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
		
		return {
			getByRoomId: function(roomId){ 
               var list;
			     ref.orderByChild('roomId').equalTo(roomId).on('value', function(d){
                 list = d.val();
                 });
                return list; 
			},
            send: function(input, roomId){
                if(true) {
                    console.log("submitted message from Message.send"); 
                    messages.$add({
                        content: input,
                        roomId: '-K_lLI6Tw0EYtZYiNGA7',
                        sentAt: 'today',
                        username: $cookies.get('blocChatCurrentUser')
                    });
                }
               
            }
          
		};
        
       
	}
    
	
	angular
		.module('blocChat')
		.factory('Message', [ 'User', 'Room', '$cookies', '$firebaseArray', Message ]);
})();