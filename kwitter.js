function change(){
    var name = document.getElementById("name").value;
    if(name == ""){
        window.alert("Please Enter Your UserName")
    }
    else{
        localStorage.setItem("name", name);
        document.getElementById("login_button").style.display = "none";
        document.getElementById("gif").style.display = "inline-block";
        setTimeout(() => {window.location = "kwitter_room.html";}, 3000);
    }
}