
(function($){$(function(){clickColumn();});function clickColumn(){$('.click-col').css('cursor','pointer');$('.click-col').on('click',function(event){$(this).find('a')[0].click();});$('.click-col a').on('click',function(event){event.stopPropagation();});}})(jQuery);