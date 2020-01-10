$(function(){

  $(".formato").click(function(e){
    var tipoFormato = $(this).html();
    console.log(tipoFormato);

    var r = confirm("¿Comenzar "+ tipoFormato + "?");
    if(!r){
      e.preventDefault();
    }
  });
  


});
