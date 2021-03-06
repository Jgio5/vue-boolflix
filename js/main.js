// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film.
// Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
// 1.	Titolo
// 2.	Titolo Originale
// 3.	Lingua
// 4.	Voto

// Milestone 2:
// Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5,
// così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote.
// Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente,
// gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API.

// Allarghiamo poi la ricerca anche alle serie tv.
// Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv.

// Milestone 3:
// In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. 

// Milestone 4:
// Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:



Vue.config.devtools = true

var app = new Vue({
    el: "#app",
    data: {
        //Sezione dedicata alla ricerca nell'API
        searchWord: '',
        searchResults: [],
        myApiKey : 'ea10c42e7bceaa9aa76b8819b31cdeb1',
        //Sezione bandiere - array per la verifica delle bandiere disponibili
        flag: false,
        availableFlags: ['en', 'es', 'fr', 'it', 'ja', 'zh']
    },

    methods: {
        // Ricerca Film e Serie TV tramite "multi" e una ricerca in base alla query inserita dall'utente
        search() {
            axios.get('https://api.themoviedb.org/3/search/multi' ,
                    {   params: {
                            api_key: this.myApiKey,
                            query: this.searchWord,
                            language: 'it_IT'
                        }
                    })
                
                /*mi da errore con alcune parole*/
                // .then((result) => {
                //     this.searchResults = result.data.results;
                // })
                .then((result) => {
                    this.searchResults = result.data.results.filter((person) => {
                        return person.media_type != 'person'
                    });
                })

            console.log(this.searchResults);
            this.searchWord = '';
        },
        //Stelle e punteggi
        getVote(vote) {
            return parseInt(vote / 2);
        },
        //Seleziono la bandiera
        setLenguageFlag(language) {
            this.flag = true;
            return "img/" + language + ".png";
          },
        //Inserire immagine
        getPoster(poster) {
            return `https://image.tmdb.org/t/p/w185/${poster}`;
        }
    }
})
