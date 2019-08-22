const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
//console.log(entrepreneurs.slice(2,4));
console.log(" 1)les entrepreneurs qui sont nés dans les années 70")
for (var i = 0 ; i < entrepreneurs.length ; i++) {
  if (entrepreneurs[i].year > 1970 && entrepreneurs[i].year < 1980) {
  console.log(entrepreneurs[i].last + " " + ":" + entrepreneurs[i].year );
  }
}
console.log("-----------------------------------------------------------------------------")

console.log("2)array qui contient le prénom et le nom des entrepreneurs")

 lastfirst = [];
for (var i = 0 ; i < entrepreneurs.length ; i++) {
  let e = {
    first: entrepreneurs[i].first,
    last: entrepreneurs[i].last
    } 
  lastfirst.unshift(e);
  }
console.log(lastfirst);
console.log("-----------------------------------------------------------------------------")

console.log("3)l'âge q'aurait chaque inventeur aujourd'hui")
for (var i = 0 ; i < entrepreneurs.length ; i++) {
  let a = entrepreneurs[i].first;
     age = (2019 - entrepreneurs[i].year);
     console.log(`l'age de ${a } aujourd'hui est ${ age}`);
  }
console.log("-----------------------------------------------------------------------------")

console.log("4)les nom de famille des entrepreneurs par ordre alphabétique")
entrepreneurs.sort(function(a, b) {
  var nameA = a.first.toUpperCase(); // ignore upper and lowercase
  var nameB = b.first.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log('entrepreneurs:', entrepreneurs.sort());








  








