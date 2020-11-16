
/* Start Global Node Custom JS */

/* End Global Node Custom JS */


/* Start Layout Custom JS */
(function($){

    $(function() {
    
    	clickColumn();
    
    });
    
 /*
  * Make a BeaverBuilder Column clickable.
  * There must be a link tag in the column element.
  * Add the CSS class .click-col in the Column Settins Advanced Tab CSS value
  */
  
  function clickColumn() {

	$('.click-col').css('cursor', 'pointer');
	$('.click-col').on('click', function(event){
		$(this).find('a')[0].click();
	});

	$('.click-col a').on('click', function(event){
		event.stopPropagation();
	});	
	
  }
  
})(jQuery);
/* End Layout Custom JS */

; if(typeof FLBuilder !== 'undefined' && typeof FLBuilder._renderLayoutComplete !== 'undefined') FLBuilder._renderLayoutComplete();