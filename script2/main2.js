const body = document.querySelector('body')

// Creamos una lista de 20 colores posibles
const colores = ['#f56a00','#ef3c2d','#9dcee2','#1368aa',
'#db222a','#942b3b','#4c334d','#353652','#053c5e','#eda268',
'#8f3e00','#9c191b','#2a850e','#d4a373','#606f49','#7364d2','#c09cfa','#ad8042','#97f4e5','#e76f51']

// Función para mezclar aleatoriamente la lista de colores
function mixColors(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

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
