var movies = ['Steel Magnolias', 'Life As A House', 'Cider House Rules', 'The Hundred Foot Journey', 'Field of Dreams', 'Taken', 'Sneakers', "Ocean's Eleven", 'Lethal Weapon', 'Urban Cowboy', 'Forrest Gump', 'The Devil Wears Prada', 'Prime', 'Thelma & Louise', 'Stepmom', 'A Time To Kill', 'Hope Floats'];

function favoriteMovies() {
    "use strict";
    console.log(movies);
}
console.log('Here is a list of movies:');
console.log(movies);

movies.sort();
console.log(movies);

console.log(movies.indexOf("Thelma & Louise"));

movies.splice(movies.indexOf("Thelma & Louise") + 0, 1);

console.log(movies);

movies.unshift("Thelma & Louise");

console.log(movies);

movies.splice(movies.indexOf("Prime"));

console.log(movies);

movies.push("Prime");

console.log(movies);


var fave = "Thelma & Louise";

var least = "Prime";

function nameFave() {
    "use strict";
    console.log(fave);
}

console.log("My all time favorite movie is");
console.log(fave);

console.log("My least favorite movie is");
console.log(least);

console.log("Some other movies are: ")

movies.pop();
movies.shift();

var moviesString = movies.join(', ');

console.log(moviesString);






// Sort your favorite movies alphabetically

// Use .indexOf() to find your number one favorite movie
// Use .splice() to take that movie out of the array
// Put your favorite movie back in at the start of the array
// Repeat the above steps for your least favorite movie; put it at the end

// Create a function to console.log() your favorite movies.
// DO NOT VIOLATE SCOPE! Pass your favoriteMovies array in as a parameter
// Your function should output:
// "My all time favorite movie is [your favorite movie here]"
// "My least favorite movie is [your least favorite movie here]"
// "Some other movies are [the rest of the movies array with comma space between them]"
// You should not output any movies twice.
