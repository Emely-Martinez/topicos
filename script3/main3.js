const texto = ['Spotify', 'es', 'una', 'aplicacion', 'para', 'escuchar', 'musica', 'esta', 'no', 
  'es', 'gratuita', 'ya', 'que', 'se', 'debe', 'pagar', 'para', 'poder', 'esuchar', 'musica.', 'Tiene', 
  'diferentes', 'precios', 'ya', 'que', 'el','mas', 'barato', 'por', 'decirlo', 'de', 'alguna', 'manera', 
  'es', 'el', 'de', 'estudiante', 'el', 'cual', 'cobra', '$70', 'pesos','por', 'mes', 'la','mayoria', 'de', 
  'las', 'personas', 'que', 'utilizan','esta', 'app','la', 'usan', 'por que', 'estan', 'todas',
  'las', 'canciones', 'que', 'se', 'puedan', 'imaginar'];

const parrafos = [];

const body = document.querySelector('body');

for(let i = 0; i < 5; i++) {
  realizarParrafo();
}
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
function noPalabras(){
  const numPalabrasEme = Math.floor(Math.random() * 100);
  if(numPalabrasEme <= 80){
    return noPalabras();
  }
  return numPalabrasEme;
}