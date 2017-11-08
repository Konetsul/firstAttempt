$.getJSON('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=1db87b4de15947b198b50827a19a78dc', function(data){
	var items = []; 
	console.log('data', data); 
	$.each(data.articles, function (key, val) { 
		items.push('<h2><a href "' + key + '"> '+ val.title + '</a></h2>'); 
		items.push('<div>' + val.description + '</div>');
		items.push('<div>' + val.publishedAt + '</div>');
		items.push('<img src="' + val.urlToImage + '" >'); 
		
	}); 


	$('<div/>', { 
	'class': 'my-new-list', 
	html: items.join('') 
	}).appendTo('.content');
});
