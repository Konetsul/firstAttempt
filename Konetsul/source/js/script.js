$(document).ready(function(){
	$('.wrapper>article').not(':first').hide();

	$('.wrapper>h1').click(function(){
		var findArticle = $('this').next('article');
		var findWrapper = $('this').closest('.wrapper');

		if(findArticle.is(':visible')){
			findArticle.slideUp(400);
		}else{
			findWrapper.find('>article').slideUp(400);
			findArticle.slideDown(400);
		}
	});
});