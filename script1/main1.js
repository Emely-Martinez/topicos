 const body = document.querySelector('body')
 
 // Creamos una lista de 10 colores posibles (puedes cambiarlos si quieres)
 const colores = ['#669900','#99cc33','#ccee66','#006699','#3399cc','#990066','#cc3399','#e4a5ff','#d8b1ff','#b8d0ff'];

for (let i=0; i<10; i++){
    const div = document.createElement('div')
    body.appendChild(div)
    div.style.height='100px'
    div.textContent= 'Container'
    color=Math.floor(Math.random()*colores.length)
    console.log(color)
    div.style.background=colores[color]
}