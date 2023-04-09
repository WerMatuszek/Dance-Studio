$(document).ready(function(){
	$('#photo').hide();
	$('img').click(function(){
		if($('#photo').is(':hidden')){
		$('#photo').show();
		var clone1 = $(this).clone();
		$(clone1).css({
			'height': '500px',
			'width':'auto',
			'zIndex':'100',
			'position':'fixed',
			'top':'10%',
			'left':'0',
			'right':'0',
			'margin':'auto',
			'box-shadow':'0px 0px 100px 10px'
			});
		$(clone1).appendTo('#photo');
		}else{
			document.getElementById('photo').innerHTML=null;
			$('#photo').hide();
		}
	});
	$('#photo').click(function(){
		document.getElementById('photo').innerHTML=null;
		$('#photo').hide();
	});
});