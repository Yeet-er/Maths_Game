function adduser(){
    player1_name= document.getElementById("Player1_name").value;
    player2_name= document.getElementById("Player2_name").value;
    localStorage.setItem("Player1_name",player1_name);
    localStorage.setItem("Player2_name",player2_name);
    window.location="gamepage.html";
}