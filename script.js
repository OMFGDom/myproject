"use strict";

let numberofFilms;


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
    privat: false
};



function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonaLevel() {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB => 10 && personalMovieDB < 30 ) {
        console.log("Вы классический зритель"); 
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("error");
    }
}

detectPersonaLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    } else {
        console.log('fuck ')
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const e = prompt(`Ваш любимый жанр под номеров ${i}`, '');
        
        if(e != null && e != '' && e.length <50){
            personalMovieDB.genres[i] = e;
            console.log("GOOD");
        } else {
            console.log('error');
            i--;
        }
    }
}

console.log(personalMovieDB);