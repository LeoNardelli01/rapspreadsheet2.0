$(function(){

  //PLAYERS
  let player1 = localStorage.getItem('rap1');
  let player2 = localStorage.getItem('rap2');
  let terminados = 0;
  let resFinalesP1 = 0;
  let resFinalesP2 = 0;

        //btn easy mode verde o gris
        if (localStorage.getItem('em_totalEasyMode1') === null) {
            $("#easyMode").css('background-color', 'rgba(145, 145, 145, 0.51)');//gris

          }else{
            $("#easyMode").css('background-color', "rgba(17, 213, 78, 0.39)");//verde
            $("#easyMode").css('box-shadow', '0px 0px 15px green');
            resFinalesP1 += parseInt(localStorage.getItem('em_totalEasyMode1'));
            resFinalesP2 += parseInt(localStorage.getItem('em_totalEasyMode2'));

            terminados += 1;
          }

          // btn hard mode verde o gris
          if (localStorage.getItem('hm_totalHardMode1') === null) {
            $("#hardMode").css('background-color', 'rgba(145, 145, 145, 0.51)');//gris

          }else{
            $("#hardMode").css('background-color', "rgba(17, 213, 78, 0.39)");//verde
            $("#hardMode").css('box-shadow', '0px 0px 15px green');
            resFinalesP1 += parseInt(localStorage.getItem('hm_totalHardMode1'));
            resFinalesP2 += parseInt(localStorage.getItem('hm_totalHardMode2'));

            terminados += 1;
          }

          if (localStorage.getItem('te_totalTematicas1') === null ) {
            $("#tematicas").css('background-color', 'rgba(145, 145, 145, 0.51') // gris
          } else{
            $("#tematicas").css('background-color', "rgba(17, 213, 78, 0.39)");
            $("#tematicas").css('box-shadow', '0px 0px 15px green');
            resFinalesP1 += parseInt(localStorage.getItem('te_totalTematicas1'));
            resFinalesP2 += parseInt(localStorage.getItem('te_totalTematicas2'));
            terminados += 1;
          }

          if (localStorage.getItem('pe_totalPersonajes1') === null) {
            $("#personajes").css('background-color', 'rgba(145, 145, 145, 0.51') // gris
          } else {
            $("#personajes").css('background-color', "rgba(17, 213, 78, 0.39)");
            $("#personajes").css('box-shadow', '0px 0px 15px green');
            resFinalesP1 += parseInt(localStorage.getItem('pe_totalPersonajes1'));
            resFinalesP2 += parseInt(localStorage.getItem('pe_totalPersonajes2'));
            terminados += 1;
          }

          if (localStorage.getItem('li_totalLibre1') === null ) {
            $("#libre").css('background-color', 'rgba(145, 145, 145, 0.51');
          } else{
            $("#libre").css('background-color', "rgba(17, 213, 78, 0.39)");
            $("#libre").css('box-shadow', '0px 0px 15px green');
            resFinalesP1 += parseInt(localStorage.getItem('li_totalLibre1'));
            resFinalesP2 += parseInt(localStorage.getItem('li_totalLibre2'));
            terminados += 1;
          }
          if (localStorage.getItem('de_totalDeluxe1') === null ) {
            $("#deluxe").css('background-color', 'rgba(145, 145, 145, 0.51');
          } else{
            $("#deluxe").css('background-color', "rgba(17, 213, 78, 0.39)");
            $("#deluxe").css('box-shadow', '0px 0px 15px green');
            resFinalesP1 += parseInt(localStorage.getItem('de_totalDeluxe1'));
            resFinalesP2 += parseInt(localStorage.getItem('de_totalDeluxe2'));
            terminados += 1;
          }




  switch (terminados) {
    case 0:      //ARRANCA EL MENU
      var options = {
        strings: ["<h4>Bienvenido a RAP Spreadsheet</h4>", "<h4>Formato FMS</h4>","<h4>Versión beta 1.0</h4>", "<h4>3...2...1... TIEMPO!!</h4>", "<h4></h4>" ],
        typeSpeed: 70,
        showCursor: false,
        smartBackspace: true
      }
      var typed = new Typed(".typed", options);

      $("#easyMode").removeClass("disabled");
      $("#nombre1").html(player1);
      $("#nombre2").html(player2);

      break;

      case 1:  // EASY MODE TERMINADO

      var options = {
        strings: ["<h4>Easy Mode Terminado</h4>", "<h4>" + localStorage.getItem('em_totalEasyMode1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('em_totalEasyMode2') + " Pts Para " + player2 +"</h4>", "<h4>Prepárate para el Hard Mode</h4>", "<h4></h4>" ],
        typeSpeed: 70,
        showCursor: false,
        smartBackspace: true
      }
      var typed = new Typed(".typed", options);


      $("#hardMode").removeClass("disabled");
      $("#nombre1").html(player1);
      $("#resP1").html(resFinalesP1)
      $("#nombre2").html(player2);
      $("#resP2").html(resFinalesP2);
      break;

      case 2:  // HARD MODE TERMINADO
      var options = {
        strings: ["<h4>Hard Mode Terminado</h4>", "<h4>" + localStorage.getItem('hm_totalHardMode1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('hm_totalHardMode2') + " Pts Para " + player2 +"</h4>", "<h4>Prepárate para Temáticas</h4>", "<h4></h4>" ],
        typeSpeed: 70,
        showCursor: false,
        smartBackspace: true
      }
      var typed = new Typed(".typed", options);
      $("#tematicas").removeClass("disabled");

      $("#nombre1").html(player1);
      $("#resP1").html(resFinalesP1);
      $("#nombre2").html(player2);
      $("#resP2").html(resFinalesP2);


      break;

      case 3: //Tematicas terminado
        var options = {
          strings: ["<h4>Temáticas Terminado</h4>", "<h4>" + localStorage.getItem('te_totalTematicas1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('te_totalTematicas2') + " Pts Para " + player2 +"</h4>", "<h4>Prepárate para Personajes</h4>", "<h4></h4>" ],
          typeSpeed: 70,
          showCursor: false,
          smartBackspace: true
        }
        var typed = new Typed(".typed", options);
        $("#personajes").removeClass("disabled");

        $("#nombre1").html(player1);
        $("#resP1").html(resFinalesP1);
        $("#nombre2").html(player2);
        $("#resP2").html(resFinalesP2);

        break;

      case 4: // personajes terminado
      var options = {
        strings: ["<h4>Personajes Terminado</h4>", "<h4>" + localStorage.getItem('pe_totalPersonajes1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('pe_totalPersonajes2') + " Pts Para " + player2 +"</h4>", "<h4>Se viene el minuto libre...</h4>", "<h4></h4>" ],
        typeSpeed: 70,
        showCursor: false,
        smartBackspace: true
      }
      var typed = new Typed(".typed", options);
      $("#libre").removeClass("disabled");

      $("#nombre1").html(player1);
      $("#nombre2").html(player2);

      break;

      case 5:
      var options = {
        strings: ["<h4>Libre Terminado</h4>", "<h4>" + localStorage.getItem('li_totalLibre1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('li_totalLibre2') + " Pts Para " + player2 +"</h4>", "<h4>Prepárate para Deluxe</h4>", "<h4></h4>" ],
        typeSpeed: 70,
        showCursor: false,
        smartBackspace: true
      }
      var typed = new Typed(".typed", options);
      $("#deluxe").removeClass("disabled");

      $("#nombre1").html(player1);
      $("#nombre2").html(player2);

      break;

      case 6:
      var options = {
        strings: ["<h4>Deluxe Terminado</h4>", "<h4>" + localStorage.getItem('de_totalDeluxe1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('de_totalDeluxe2') + " Pts Para " + player2 +"</h4>", "<h4>Finaliza para ver los resultados</h4>", "<h4></h4>" ],
        typeSpeed: 70,
        showCursor: false,
        smartBackspace: true
      }
      var typed = new Typed(".typed", options);

      $("#nombre1").html(player1);
      $("#nombre2").html(player2);

      //activar termianr batalla
      $("#btn-terminarBatalla").removeClass("disabled");


  }//fin switch


})
