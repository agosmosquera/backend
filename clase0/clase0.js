 let edad = 23;
 let nombre ="Agostina";
 let apellido ="Mosquera";
 let series = [
     "Game of thrones",
     "Friends",
     "Sillicon Valley"
 ];
 let peliculas = [
     "Avatar",
     "Vengadores",
     "Vengadores 2"
 ]
 let randomNumber = parseInt(Math.random()*(peliculas.length)) ;
 console.log("Hola mi nombre es " + nombre + apellido  )
 console.log("Mi serie favorita es " + series[randomNumber]  )
 console.log("Mi pelicula favorita es " + peliculas[2]  )