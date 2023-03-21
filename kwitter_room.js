var firebaseConfig = {
      apiKey: "AIzaSyCQYNunrlE1T3K-1DtlSPUx8H8-hLGV4N8",
      authDomain: "bill-s-chat-website.firebaseapp.com",
      databaseURL: "https://bill-s-chat-website-default-rtdb.firebaseio.com",
      projectId: "bill-s-chat-website",
      storageBucket: "bill-s-chat-website.appspot.com",
      messagingSenderId: "309801397055",
      appId: "1:309801397055:web:10f94f636dc9145040018a"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
