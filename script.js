"use strict";

const numberofFilms = +prompt("Сколько фильмов вы уже посмотрели: ", "");

const personalMovieDB = {
    count: 2,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



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

if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB => 10 && personalMovieDB < 30 ) {
    console.log("Вы классический зритель"); 
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("error");
}


console.log(personalMovieDB);
    
 