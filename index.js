const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '233891906bmsh35e3a0e66d921a9p1e5b93jsnf2a62dfa6226',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));