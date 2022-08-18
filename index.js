let listaCompras = ["Fideos moño", "Mostaza", "Ketchup", "Milenesas soja", "Cachafaz chocolate"];
console.log("Lista de compras inicial => " + listaCompras);

listaCompras = [...listaCompras, "Aceite de girasol"];
console.log("Agregamos el aceite de girasol => " + listaCompras);

listaCompras.pop();
console.log("Eliminamos el Aceite de girasol => " + listaCompras);

const lista3PeliculasFavoritas = [
 { titulo: "The Matrix", director: "The Wachowskis", fecha: "1999" },
 { titulo: "Hackers", director: "Iain Softley", fecha: "1995" },
 { titulo: "Star Wars: Episode III – Revenge of the Sith", director: "George Lucas", fecha: "2005" },
];

const peliculasPosteriores1Enero2010 = lista3PeliculasFavoritas.filter((pelicula) => pelicula.fecha >= 2010);
console.log(peliculasPosteriores1Enero2010);

// Para comprobar el buen funcionamiento.
const peliculasPosteriores1Enero1999 = lista3PeliculasFavoritas.filter((pelicula) => pelicula.fecha >= 1999);
console.log(peliculasPosteriores1Enero1999);

const directores = lista3PeliculasFavoritas.map((pelicula) => pelicula.director);
console.log(directores);

const titulos = lista3PeliculasFavoritas.map((pelicula) => pelicula.titulo);
console.log(titulos);

const directoresTitulos = directores.concat(titulos);
console.log(directoresTitulos);

const directoresTitulos2 = [...directores, ...titulos];
console.log(directoresTitulos2);
