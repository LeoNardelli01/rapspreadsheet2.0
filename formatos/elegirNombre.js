$(function(){

  $("#siguiente").click(function(e){
    var player1_name = $("#player1_name").val();
    var player2_name = $("#player2_name").val();

    if (player1_name == "") {
      e.preventDefault();
      alert("El Jugador 1 necesita un nombre");
    } else if(player2_name == ""){
      e.preventDefault();
      alert("El jugador 2 necesita un nombre");
    } else{
      localStorage.setItem('player1_name', player1_name);
      localStorage.setItem('player2_name', player2_name);
    }
  });
  



});
