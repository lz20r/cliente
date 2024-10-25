let textos = new Array();
textos[0] = `Cuento\n El hombre pisó algo blanduzco, y enseguida sintió la mordedura en el pie. Saltó adelante, y al volverse con un juramento vio una yararacusú que, arrollada sobre sí misma, esperaba otro ataque.\n El hombre echó una veloz ojeada a su pie, donde dos gotitas de sangre engrosaban dificultosamente, y sacó el machete de la cintura. La víbora vio la amenaza, y hundió más la cabeza en el centro mismo de su espiral; pero el machete cayó de lomo, dislocándole las vértebras.\n El hombre se bajó hasta la mordedura, quitó las gotitas de sangre, y durante un instante contempló. Un dolor agudo nacía de los dos puntitos violetas, y comenzaba a invadir todo el pie. Apresuradamente se ligó el tobillo con su pañuelo y siguió por la picada hacia su rancho.\n Comienzo de “A la deriva”, de Horacio Quiroga`;
textos[1] = `Novela\n¿Hay una historia? Si hay una historia empieza hace tres años. En abril de 1976, cuando se publica el primer libro, él me manda una carta. Con la carta viene una foto donde me tiene en brazos: desnudo, estoy sonriendo, tengo tres meses y parezco una rana. A él, en cambio, se lo ve favorecido en esa fotografía: traje cruzado, sombrero de ala fina, la sonrisa campechana: un hombre de treinta años que mira al mundo de frente. Al fondo, borrosa y casi fuera de foco, aparece mi madre, tan joven que al principio me costó reconocerla. Comienzo de Respiración artificial, de Ricardo Piglia.`;
textos[2] = `Epopeya\n Háblame, Musa, de aquel varón de multiforme ingenio que, después de destruir la sacra ciudad de Troya, anduvo peregrinando larguísimo tiempo, vio las poblaciones y conoció las costumbres de muchos hombres y padeció en su ánimo gran número de trabajos en su navegación por el ponto, en cuanto procuraba salvar su vida y la vuelta de sus compañeros a la patria. Mas ni aun así pudo librarlos, como deseaba, y todos perecieron por sus propias locuras. ¡Insensatos! Comiéronse las vacas del Sol, hijo de Hiperión, el cual no permitió que les llegara el día del regreso. ¡Oh diosa, hija de Júpiter!: cuéntanos aunque no sea más que una parte de tales cosas.\n Comienzo de La Odisea, de Homero (trad. de Luis Segalá y Estalella). `;
textos[3] = `Leyenda de la luz mala\n El origen de esta leyenda se encuentra en una fosforescencia que se ve en cerros y quebradas del noroeste argentino, durante los meses secos.\n La leyenda sostiene que este es el farol de Mandinga (el Diablo con forma humana) y que su aparición indica sitios donde se esconden tesoros. Se afirma que la luz sería el espíritu del antiguo y difunto dueño de los tesoros, en su intento de alejar a los curiosos.\n El día de San Bartolomé (24 de agosto) es cuando estas luces se ven mejor.`;

textos[4] = `El origen del Sol y la Luna (mito azteca)\n En un momento no existían ni el Sol ni la Luna y los dioses se reunieron para decidir quién iba a iluminar el universo. Tecuciztécatl dijo que él tenía que hacerlo. Los dioses aceptaron esta propuesta y dijeron que Nanahuatzin se convertiría en la Luna.\n Los dioses decidieron que para convertirse en Sol, Tecuciztécatl tenía que arrojarse al fuego, pero él tuvo miedo y no lo pudo hacer. En su lugar, Nanahuatzin se tiró al fuego y, por su acto valiente, se transformó en el Sol. Tecuciztécatl se avergonzó por su actitud y decidió tirarse al fuego, y entonces se transformó en la Luna.`;

window.onhashchange = function () {
  window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "";
  });
  let contenido = document.getElementById("contenido");
  let marcador = location.hash[1];
  contenido.innerHTML = textos[marcador];

  history.replaceState(
    { pagina: marcador },
    "Tiulo" + marcador,
    "pagina" + marcador + ".html"
  );
};
