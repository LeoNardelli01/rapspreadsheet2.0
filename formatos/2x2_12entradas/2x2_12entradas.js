$(function(){
  $(".player1").html(localStorage.getItem('player1_name'));
  $(".player2").html(localStorage.getItem('player2_name'));

  $("#btnTerminar").click(function(e){
    var r = confirm("¿Terminar batalla?");
    if (!r) {
      e.preventDefault()
    }else{

      var patron1p1 = parseInt($(".patron1p1").val());
      var patron2p1 = parseInt($(".patron2p1").val());
      var patron3p1 = parseInt($(".patron3p1").val());
      var patron4p1 = parseInt($(".patron4p1").val());
      var patron5p1 = parseInt($(".patron5p1").val());
      var patron6p1 = parseInt($(".patron6p1").val());
      var patron7p1 = parseInt($(".patron7p1").val());
      var patron8p1 = parseInt($(".patron8p1").val());
      var patron9p1 = parseInt($(".patron9p1").val());
      var patron10p1 = parseInt($(".patron10p1").val());
      var patron11p1 = parseInt($(".patron11p1").val());
      var patron12p1 = parseInt($(".patron12p1").val());

      var totalPatronesP1 = patron1p1 + patron2p1 + patron3p1 + patron4p1 + patron5p1 + patron6p1 + patron7p1 + patron8p1 + patron9p1 + patron10p1 + patron11p1 + patron12p1;

      var flowP1 = parseInt($(".flowp1").val());
      var tecnicasP1 = parseInt($(".tecnicasP1").val());
      var escenaP1 = parseInt($(".escenaP1").val());

      // sumar patrones + skills y poner los resultados en localstorage

    }
  });

});
