fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "23f81f4f93mshea359620485e92ep108ebejsn1ed1ade9b212",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(parsedJson => {
	console.log(parsedJson)})
.catch(err => {
	console.error(err);
});

/* fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metalica", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "23f81f4f93mshea359620485e92ep108ebejsn1ed1ade9b212",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "23f81f4f93mshea359620485e92ep108ebejsn1ed1ade9b212",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
}); */