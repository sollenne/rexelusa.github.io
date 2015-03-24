$(window).resize(function(){
     console.log('resize called');
     var width = $(window).width();
     if(width >= 1224){
         $('#spanProdDesc').removeClass('span-10').addClass('span-13');
         $('#spanProdPrice').removeClass('span-7').addClass('span-9');
         $('#spanEmptyLeft').removeClass('span-16 width650').addClass('span-20 width810');
         $('#spanTotals').removeClass('span-8').addClass('span-9');

     }
     else{
         $('#spanProdDesc').removeClass('span-13').addClass('span-10');
         $('#spanProdPrice').removeClass('span-9').addClass('span-7');
         $('#spanEmptyLeft').removeClass('span-20 width810').addClass('span-16 width650');
         $('#spanTotals').removeClass('span-9').addClass('span-8');
     }
  })
  .resize();//trigger the resize event on page load.
