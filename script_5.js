const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 0 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(" 1)Est-ce que tous les livres ont été au moins empruntés une fois ?")

for (var i =0; i < books.length ; i++) {
  if (books[i].rented >0) {
    console.log(`le livre  ${books[i].title} a été  empruntés ${books[i].rented} fois` )
  }
  else
    console.log(`le livre ${books[i].title} est encore vierge` )
}

console.log("-----------------------------------------------------------------------------")

console.log("2)Quel est livre le plus emprunté ?")
 tabrented = [];
for (var i = 0 ; i < books.length  ; i++) {
  tabrented.push(books[i].rented);
  max = Math.max(...tabrented);
if(books[i].rented === max){
  x = books[i]
}
}
console.log(`le livre le plus emprunté est ${x.title}`);

console.log("-----------------------------------------------------------------------------")

console.log("3)Quel est livre le moins emprunté ?")
 tabmin = [];
for (var i = 0 ; i < books.length  ; i++) {
  tabmin.push(books[i].rented);
  min = Math.min(...tabmin);
if(books[i].rented === min){
  y = books[i]
}
}
console.log(`le livre le moins emprunté est ${y.title}`);


console.log("-----------------------------------------------------------------------------")

console.log("4)Trouve le livre avec l'ID 873495 ")
tabid = [];
for (var i = 0 ; i < books.length  ; i++) {
  tabid.push(books[i].id);
if(books[i].id === 873495){
  livre = books[i]
  }
}
console.log(`le livre avec ${livre.id} est ${livre.title}`)

console.log("-----------------------------------------------------------------------------")

console.log("5)Supprime le livre avec l'ID 133712 ")
tab2 = [];
for (var i = 0 ; i < books.length  ; i++) {
  tab2.push(books[i].id);
if(books[i].id === 133712){
  livre = books[i]
  }
}
console.log(books.shift(livre));
console.log(books)

console.log("-----------------------------------------------------------------------------")

console.log("6)ie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
books.sort(function(a, b) {
  var titleA = a.title.toUpperCase(); // ignore upper and lowercase
  var titleB = b.title.toUpperCase(); // ignore upper and lowercase
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log('books:', books.sort());










