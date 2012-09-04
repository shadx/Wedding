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
    controls: false
  });

  $('#prev_foto').click(function(){
	  slider.goToPreviousSlide();
	  return false;
  });

  $('#next_foto').click(function(){
	  slider.goToNextSlide();
	  return false;
  });
});