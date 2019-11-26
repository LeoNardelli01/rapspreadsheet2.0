$(function(){
      //granim.js
      var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        image : {
          source: 'fondo.png',
          position: ['center', 'bottom'],
          blendingMode: 'multiply'
        },
        states : {
            "default-state": {
                gradients: [
                    ['#d80009', '#0003d8'],
                    ['#0003d8', '#d80009'],
                    ['#d80009', '#0003d8']
                ]
            }
        }
    });
    //fin granim.js

});
