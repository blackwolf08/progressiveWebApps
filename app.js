main = document.getElementById('main');
apiKey = 'e3d99591f8d349ceb8e13d335a019521';

window.addEventListener('load',function(e) {
	updateNews();
});

async function updateNews(){
	const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey='+apiKey);
	const json = await res.json();

	main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article){
	return `<div class="article">
		<a href="${article.url}">
			<h2>${article.title}</h2>
			<img src="${article.urlToImage}>
			<p>${article.description}</p>
		</a>
	</div>`;
	

}