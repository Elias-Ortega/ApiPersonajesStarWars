class Personaje {
    constructor(nombre, altura, peso) {
      this.nombre = nombre;
      this.altura = altura;
      this.peso = peso;
    }
  }
  
  //Funcion , obtiene personaje por su id.
  const getPersonaje = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `https://swapi.dev/api/people/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        let { name, height, mass } = data;
        let nuevoPersonaje = new Personaje(name, height, mass);
        resolve(nuevoPersonaje);
      } catch (error) {
        reject(error);
      }
    });
  };
  
  //generadores
  function* generador1() {
    yield getPersonaje(0);
    yield getPersonaje(1);
    yield getPersonaje(2);
    yield getPersonaje(3);
    yield getPersonaje(4);
    yield getPersonaje(5);
  }
  
  
  function* generador2() {
    yield getPersonaje(5);
    yield getPersonaje(6);
    yield getPersonaje(7);
    yield getPersonaje(8);
    yield getPersonaje(9);
    yield getPersonaje(10);
  }
  
  
  function* generador3() {
    yield getPersonaje(11);
    yield getPersonaje(12);
    yield getPersonaje(13);
    yield getPersonaje(14);
    yield getPersonaje(15);
    yield getPersonaje(16);
  }

  //  botón timeline 1-5
const btnPrimeros = document.getElementById('primeros');

btnPrimeros.addEventListener('click', () => {
  const divsRangoUnoAlCinco = document.querySelectorAll('.timeline-text');
  const generador = generador1();

  divsRangoUnoAlCinco.forEach(async (elemento) => {
    const h6 = elemento.querySelector('.nombre-personaje');
    const parrafo = elemento.querySelector('.altura-peso');

    const personaje = await generador.next().value;

    if (personaje) {
      h6.textContent = personaje.nombre;
      parrafo.textContent = `${personaje.altura} cms, ${personaje.peso} kilos`;
    }
  });
});


//Boton  timeline 6-11 
const btnSecundarios = document.getElementById('secundarios');

btnSecundarios.addEventListener('click', () => {
  const divsRangoSeisAlOnce = document.querySelectorAll('.timeline-text.secundarios');
  const generador = generador2();

  divsRangoSeisAlOnce.forEach(async (elemento) => {
    const h6 = elemento.querySelector('.nombre-personaje');
    const parrafo = elemento.querySelector('.altura-peso');

    const personaje = await generador.next().value;

    if (personaje) {
      h6.textContent = personaje.nombre;
      parrafo.textContent = `${personaje.altura} cms, ${personaje.peso} kilos`;
    }
  });
});


// Boton timeline 12-17 
const btnOtros = document.getElementById('otrosPersonajes');

btnOtros.addEventListener('click', () => {
  const divsRangoDoceAlDiecisiete = document.querySelectorAll('.timeline-text.otros');
  const generador = generador3();

  divsRangoDoceAlDiecisiete.forEach(async (elemento) => {
    const h6 = elemento.querySelector('.nombre-personaje');
    const parrafo = elemento.querySelector('.altura-peso');

    const personaje = await generador.next().value;

    if (personaje) {
      h6.textContent = personaje.nombre;
      parrafo.textContent = `${personaje.altura} cms, ${personaje.peso} kilos`;
    }
  });
});
