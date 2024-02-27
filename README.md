<!-- HEADINGS -->

# Emely Jimena Martinez Rios
## script1

Esta documentacion esta echa para explicar sobre lo echo anteriormente en **los codigos llamados "Script 1, 2 y 3**.

Ahora comenzare por el  **INDEX**

El index (**HTML**) lo que hace es que conecta con su debido script, en este caso con **su main 1, 2 y 3**

//Ahora se mostrara el index del **script1**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="main1.js" defer></script>
    <title>CONTENEDORES I</title>
    
</head>
<body>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>

</body>
</html> 
```
---------
## Script1-**Contenedores**
Este script1 debe generar 10 contenedores con un tamaño de 100, ademas de agregarle colores aleatorios.

Primero se crea una referencia al body, que crea un elemento de referencia al body de html.
```JavaScript

const body = document.querySelector('body')
 
 // Creamos una lista de 10 colores posibles (puedes cambiarlos si quieres)
 const colores = ['#669900','#99cc33','#ccee66','#006699','#3399cc','#990066','#cc3399','#e4a5ff','#d8b1ff','#b8d0ff'];
```
Ahora creamos un bucle for, este hace que se crean 10 div, con su respectivo tamaño, con texto "Container" que fue el texto que le puse, ademas de los colores que se seleccionaron aleatoriamente de la lista de colores...

```JavaScript
//Bucle que creea 10 div
for (let i=0; i<10; i++){
    //Crea el div
    const div = document.createElement('div')
    //Se conecta con el body
    body.appendChild(div)
    //Se crea el tamaño
    div.style.height='100px'
    //Se muestra el texto que se adjunto
    div.textContent= 'Container'
    //El fondo se realiza de forma aleatoria en base al array de colores
    color=Math.floor(Math.random()*colores.length)
    console.log(color)
    div.style.background=colores[color]
}
```
 
---

## **Script2 (1.2)**
Para el segundo script2 se debe agregar la funcionalidad de que los colores no se repitan, deben ser 20 colores en la estructura.

Ahora igual que con el pasado se debe referenciar el body y crear el arreglo para los colores, crear la funcion para hacer un mix decolores y hacer un mix aleatoriamente de colores.

```JavaScript
const body = document.querySelector('body')

// Creamos una lista de 20 colores posibles
const colores = ['#f56a00','#ef3c2d','#9dcee2','#1368aa',
'#db222a','#942b3b','#4c334d','#353652','#053c5e','#eda268',
'#8f3e00','#9c191b','#2a850e','#d4a373','#606f49','#7364d2','#c09cfa','#ad8042','#97f4e5','#e76f51']

// Función para mezclar aleatoriamente la lista de colores
function mixColors(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

//Se crea el bucle con el algoritmo Fisher-Yates este es para mezclar aleatoriamente y permutar los arreglos del array 
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Mezclamos aleatoriamente la lista de colores
mixColors(colores);

for (let i=0; i<10; i++){
    const div = document.createElement('div')
    body.appendChild(div)
    div.style.height='100px'
    div.textContent= 'Container'
    div.style.background=colores[i]
}
```
---
## Script3 **(Parrafos inteligentes)**
En este script3 se debe generar 5 parrafos inteligentes qu emuestre los carcateres.

Primero se crea un array que tiene una constante llamada **texto**, donde iran todas las palabras que se mostraran en la web.

```JavaScript
const texto = ['Spotify', 'es', 'una', 'aplicacion', 'para', 'escuchar', 'musica', 'esta', 'no', 'es', 'gratuita', 'ya', 'que', 'se', 'debe', 'pagar', 'para', 'poder', 'esuchar', 'musica.', 'Tiene', 'diferentes', 'precios', 'ya', 'que', 'el','mas', 'barato', 'por', 'decirlo', 'de', 'alguna', 'manera', 
  'es', 'el', 'de', 'estudiante', 'el', 'cual', 'cobra', '$70', 'pesos','por', 'mes', 'la','mayoria', 'de', 'las' 'personas', 'que', 'utilizan','esta','app','la', 'usan', 'por que', 'estan', 'todas',
  'las', 'canciones', 'que', 'se', 'puedan', 'imaginar'];
```
``` JavaScript
// Ahora se crea una variable llamada "parrafos", este se inicializa con el array vacio, luego selecciona el elemento body de html y se almacena en la variable body

const parrafos = [];

const body = document.querySelector('body');

//Este bucle ejecuta la función realizarParrafo() 5 veces, y se agregaran al cuerpo de la pagina web 5 parrafos diferentes

for(let i = 0; i < 5; i++) {
  realizarParrafo();
}

// Ahora esta función crea un párrafo, y lo agrega al cuerpo de la web, luego se almacena ese parrafo aleatoriamente con las palabras que selecciono a laar el array texto. Ademas que imprime la cantidad de numero en la consola
```
#### EN **numPalabrasEme** ES PARA MENCIONAR LOS NUMEROS DE PALABRAS ALEATORIAS, PERO LE PUSE EME PARA QUE FUERA DIFERENTE Y MAS CORTO

```JavaScript
function realizarParrafo(){
  const p = document.createElement('p');
  body.appendChild(p);
  const numPalabrasEme = noPalabras();
  for(let a = 0; a < numPalabrasEme; a++){
    const palabraEme = Math.floor(Math.random() * texto.length);
    p.textContent += texto[palabraEme] + ' ';
  }
  console.log("El num de palabras es: " + numPalabrasEme);
}

// La función noPalabras() hace que genere un numero aleatorio entre 0 y 99, pero si ese número es 80 o menos, se vuelve a llamar a sí misma recursivamente hasta obtener un número mayor a 80, y este luego se devuelve. Este controla la dsitribucion de la cantidad de palabras generadas en el parrafo

function noPalabras(){
  const numPalabrasEme = Math.floor(Math.random() * 100);
  if(numPalabrasEme <= 80){
    return noPalabras();
  }
  return numPalabrasEme;
}
```
