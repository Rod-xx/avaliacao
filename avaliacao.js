function getMovieInfosOMDB(title){
    const url = `https://www.omdbapi.com/?t=${title}&apikey=790af7bc`  
    

    fetch(url) //Permite a busca de informações na API//
    .then(response => response.json())
    .then(data => { 
//.then Retorna uma Promise//
//textContent - retorna o conteúdo textual das id's que correspondem a determinadas tags.//
        if(data.Response == "False"){
            descriptionBodyNotFound.textContent = "Filme não encontrado!";
            descriptionBodyNotFound.style.marginBottom = '30px'
            movieTitle.textContent = ""
            movieYear.textContent = ""
            movieGenre.textContent = ""
            movieRuntime.textContent = ""
            imdbRating.textContent = ""
            movieInfo.textContent = ""
            movieWriter.textContent = ""
            movieDirector.textContent = ""
            moviePoster.style.backgroundImage = `url(filmeNaoEncontrado.png)`

        } else {
            descriptionBodyNotFound.textContent = "";
            
            movieTitle.textContent = data.Title
            movieYear.textContent = data.Year
            movieGenre.textContent = data.Genre
            movieRuntime.textContent = data.Runtime
            imdbRating.textContent = data.imdbRating
            movieInfo.textContent = data.Plot
            movieWriter.textContent = "Escrito por:" + data.Writer
            movieDirector.textContent = "Dirigido por:" + data.Director
            moviePoster.style.backgroundImage = `url(${data.Poster})`
        }
        
        
     })  
}

var form = document.getElementById('formSearch'); //Foi declarado que a variável form == elementos do <form>, que foram acessados usando getElementById():, os inputs.
var title = document.getElementById('title');

form.addEventListener('submit', function(e) {
    
    getMovieInfosOMDB(title.value)
    // impede o envio do form
    e.preventDefault();


});
