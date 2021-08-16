
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBz9rtYdMSAJA9gZukDHzyE88n9kSQ_Jbk",
  authDomain: "kwitter-de09e.firebaseapp.com",
  databaseURL: "https://kwitter-de09e-default-rtdb.firebaseio.com",
  projectId: "kwitter-de09e",
  storageBucket: "kwitter-de09e.appspot.com",
  messagingSenderId: "73021393293",
  appId: "1:73021393293:web:d831a3d59e652224b955c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE L

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyBLo48Rja-YMlsIjUhTeCUTfpxo2ZSFvwU",
      authDomain: "kashmeera-s-kwitter.firebaseapp.com",
      databaseURL: "https://kashmeera-s-kwitter-default-rtdb.firebaseio.com",
      projectId: "kashmeera-s-kwitter",
      storageBucket: "kashmeera-s-kwitter.appspot.com",
      messagingSenderId: "203510943976",
      appId: "1:203510943976:web:a00a286c80728041dff95d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
     function addRoom()
     {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
     }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}