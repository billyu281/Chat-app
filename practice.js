var firebaseConfig = {
    apiKey: "AIzaSyCQYNunrlE1T3K-1DtlSPUx8H8-hLGV4N8",
    authDomain: "bill-s-chat-website.firebaseapp.com",
    databaseURL: "https://bill-s-chat-website-default-rtdb.firebaseio.com",
    projectId: "bill-s-chat-website",
    storageBucket: "bill-s-chat-website.appspot.com",
    messagingSenderId: "309801397055",
    appId: "1:309801397055:web:10f94f636dc9145040018a"
  };
  
firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    window.location="kwitter_room.html";
}

