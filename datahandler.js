var Firebase = require("firebase")

var ref = new Firebase('https://dankripplz.firebaseio.com')
var count = 0
ref.on('child_added', function(snapshot){
	if(snapshot.key()!='totaldanks'){
		ref.child(snapshot.key()).remove()
		count++
	}
	ref.child('totaldanks').set(count)
})