
(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
		
		return {
			getByRoomId: function(roomId) {
               var list;
			     ref.orderByChild('roomId').equalTo(roomId).on('value', function(d){
                 list = d.val();
                 });
                console.log(list[1]);
                console.log('first: ' + list[0])
                
                
                return list.splice(1, list.length);
			},
            send: function(newMessage) {
                //add code here 
            }
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message ]);
})();