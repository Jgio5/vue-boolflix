// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film.
// Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
// 1.	Titolo
// 2.	Titolo Originale
// 3.	Lingua
// 4.	Voto

Vue.config.devtools = true

var app = new Vue({
    el: "#app",
    data: {
        searchFilm: '',
        searchMoviesResults: [],
        myApiKey : 'ea10c42e7bceaa9aa76b8819b31cdeb1'
    },

    methods: {
        searchFilmApi() {
            axios.get('https://api.themoviedb.org/3/search/movie' ,
                    {   params: {
                        api_key: this.myApiKey,
                        query: this.searchFilm
                        }
                    })
                .then((result) => {
                    this.searchMoviesResults = result.data.results;
                });
        }
    }
})
