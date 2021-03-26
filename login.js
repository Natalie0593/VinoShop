// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDnxXab-MDCk7eXycgcjyrwcAzWyi4A91o",
	authDomain: "vinoshop-8d10f.firebaseapp.com",
	projectId: "vinoshop-8d10f",
	storageBucket: "vinoshop-8d10f.appspot.com",
	messagingSenderId: "189063941748",
	appId: "1:189063941748:web:86ca0005c2f7fafd68cb21",
	measurementId: "G-VGHSQQTV5F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
	
function signUp() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then((userCredential) => {
		alert("Signed Up")
		document.location.href = "index.html";
	})
	.catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorMessage);
	});
}

function signIn(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	firebase.auth().signInWithEmailAndPassword(email, password)
	.then((userCredential) => {
		alert("Signed In " +" "+ email);
		document.location.href = "index.html";
	})
	.catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorMessage);
	});

	document.location.href = "index.html";
}

function signOut(){
	firebase.auth().signOut().catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
	
	alert("Signed Out");
}

	









