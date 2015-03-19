$( document ).ready(function() {
  $('#footerTabs > ul > li').click(function () {
        if ($('#accessibletabsnavigation1-1').hasClass('current')) {
            $('.general-information').parent().hide();
            $('.global-sites-section').parent().show();
        } else if ($('#accessibletabsnavigation1-0').hasClass('current')) {
            $('.global-sites-section').parent().hide();
            $('.general-information').parent().show();
        }
    });
});
