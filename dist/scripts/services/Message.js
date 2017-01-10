(funtion(){
 function Message($firebaseArray) {
    var ref= firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


return {
getByRoomId: function (roomId){
    var room messages = messagesRef.orderByChild('roomId').equalTo(4);
    roomMessages.limitToLast(10).on('child_added' ,function(snapshot) {
        //get data
        var data = snapshot.val();
    })
    }
    
  };
}

   angular
    .module('BlocChat')
    .factory('Message', ['$firebaseArray', Message]);

 })();