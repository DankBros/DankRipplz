var Firebase = require("firebase")

var ref = new Firebase('https://dankripplz.firebaseio.com')

ref.on('child_added', function(snapshot){
	ref.child(snapshot.key()).remove()
})