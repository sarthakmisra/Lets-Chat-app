function navigate() {
    email = document.getElementById('input_ea').value;

    localStorage.setItem("input_ea", email);

    

    if(email ==  "")
{
    document.getElementById('tutu').innerHTML = "Please fill the email";
}
else {

    window.location = "kwitter_room.html";
}

}
