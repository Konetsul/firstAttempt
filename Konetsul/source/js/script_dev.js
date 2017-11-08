$(document).ready(function($){
	var articles = $('article').hide();
	// articles.first().show();

	$('.wrapper>h1>a').click(function(){
		var $this = $(this);

		articles.slideUp(300);

		$this.parent().next().slideDown(300);

		return false;

	});

});