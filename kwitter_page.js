//YOUR FIREBASE LINKS
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

    room_name = localStorage.getItem("room")
    username = localStorage.getItem("name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id)
      console.log(message_data)
      var name1 = message_data['name']
      var msg = message_data['message']
      var like = message_data['likes']
      var nameTag = "<h4>"+ name1 + "<img class='userTick' src='tick.png'>"
      var msgTag = "<h4 class='msgh4'>"+ msg + "</h4>"
      var likeTag = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLink(this.id)'>"
      var spanTag = "<span id='likeBTN' class='glyphicon glyphicon-thumbs-up'> Likes : "+like+"</span></button><hr>"

      var row = nameTag + msgTag + likeTag + spanTag
      document.getElementById("output").innerHTML += row
//End code
      } });  }); }
getData();
function logout(){
      window.location = "index.html"
      localStorage.removeItem("name")
      localStorage.removeItem("room")
}

function send1(){
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name : username,
            message : msg,
            likes : 0
      })
      document.getElementById("msg").value = ""
}
function updateLink(message_data){
      console.log("Clicked On Like Buttton - " + message_data)
      var likes = document.getElementById(message_data).value
      var updatedLikes = Number(likes) + 1
      console.log(updatedLikes)

      firebase.database().ref(room_name).child(message_data).update({
            likes : updatedLikes
      })
}
function logout(){
      window.location = "index.html"
      localStorage.removeItem("name")
      localStorage.removeItem("room")
}     