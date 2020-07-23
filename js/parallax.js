	$('#scene').parallax();

function alturaMaxima() {
  var altura = $(window).height();
  $(" .back").css('min-height',altura);
}

alturaMaxima();
$(window).bind('resize', alturaMaxima);

$('.index').click( 
                    function(e) {
                        $('#navcheck').click();
                        //e.stopPropagation();
                    }
                );
                $('.whatwedo').click( 
                    function(e) {
                        $('#navcheck').click();
                        //e.stopPropagation();
                    }
                );
                $('.whychoose').click( 
                    function(e) {
                        $('#navcheck').click();
                        //e.stopPropagation();
                    }
                );
                $('.references').click( 
                    function(e) {
                        $('#navcheck').click();
                        //e.stopPropagation();
                    }
                );
                $('.team').click( 
                    function(e) {
                        $('#navcheck').click();
                        //e.stopPropagation();
                    }
                );
                $('.contact').click( 
                    function(e) {
                        $('#navcheck').click();
                        //e.stopPropagation();
                    }
                );