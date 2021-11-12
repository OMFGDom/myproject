"use strict";



function start() {
    numberofFilms = +prompt("Сколько фильмов вы уже посмотрели: ", "");
    while (numberofFilms == "" || numberofFilms == null || isNaN(numberofFilms)) {
        numberofFilms = +prompt("Сколько фильмов вы уже посмотрели: ", "");
    }
}

start();

const personalMovieDB = {
    count: 2,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели: ", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели: ", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов: ", ''),
                b = prompt("На сколько оцените его?: ", '');
            
            if(a != null && b != null && a != '' && b != '' && a.length <50){
                personalMovieDB.movies[a] = b;
                console.log("GOOD");
            } else {
                console.log('error');
                i--;
            }
            
        }
    },
    detectPersonaLevel: function() {
        if (personalMovieDB.count <= 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB => 10 && personalMovieDB < 30 ) {
            console.log("Вы классический зритель"); 
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("error");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('fuck ');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номеров ${i}`);
            personalMovieDB.genres[i - 1] = genre;
            
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i} - это ${item}`)
            });

        }
    }, 
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};




;




personalMovieDB.toggleVisibleMyDB();


