var name = localStorage.getItem("name");
document.getElementById("name").innerHTML = name + "!";
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCA6TimPu00EXbPmH1Gr-xLTUOIpk5Q1gQ",
      authDomain: "kwitter-b56d5.firebaseapp.com",
      databaseURL: "https://kwitter-b56d5-default-rtdb.firebaseio.com",
      projectId: "kwitter-b56d5",
      storageBucket: "kwitter-b56d5.appspot.com",
      messagingSenderId: "658335062537",
      appId: "1:658335062537:web:5294e7bc93fdd992f336d8"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function add(){
      room = document.getElementById("roomSearch").value;

      firebase.database().ref("/").child(room).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room", room)
      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      room = childKey
      console.log("Room Name - " + room)
      row = "<div class='roomName' id="+room+" onclick='redirect(this.id)'>#"+ room + "</div><hr>"
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function redirect(name){
      console.log(name)
      localStorage.setItem("room", name)
      window.location = "kwitter_page.html"
}

function logout(){
      window.location = "index.html"
      localStorage.removeItem("name")
      localStorage.removeItem("room")
}