$(document).ready(function(){
  $(".top_menu LI").hover(
    function () {
      $(this).next('LI').css('background-position', '-9999px');
    },
    function () {
      $(this).next('LI').css('background-position', '0');
    }
  );
  
  $(".filter_form SELECT").selectBox();
  
  jQuery("#slider_price").slider({
  	min: 0,
  	max: 150000,
  	value: 100000,
  	range: "min",
  	stop: function(event, ui) {
  		// jQuery("input#minCost").val(jQuery("#slider_price").slider("values",0));
  		// jQuery("input#maxCost").val(jQuery("#slider_price").slider("values",1));
    },
    slide: function(event, ui){
  		// jQuery("input#minCost").val(jQuery("#slider_price").slider("values",0));
  		// jQuery("input#maxCost").val(jQuery("#slider_price").slider("values",1));
    }
  });
  
  var slider = $('#small_slider').bxSlider({
    auto: true,
    speed: 150,
    controls: false
  });

  $('#prev_foto').click(function(){
	  slider.goToPreviousSlide();
  });

  $('#next_foto').click(function(){
	  slider.goToNextSlide();
  });
  
  
  
  $('#top_slider').bxSlider({
    // mode: 'vertical',
    speed: 0,
    auto: true,
    pager: true
  });
  
  
  
  $width_win = $(document).width();
	if($width_win <= 1100) {
	  // $("#filter_slider .filter_cont_col").css("left", "260px");
	}
  
  if($width_win <= 1400) {
	  $("#boby_bg").css("background-position", "-350px 0");
	}
  
  if($width_win <= 1300) {
	  $("#boby_bg").css("background-position", "-400px 0");
	}
});