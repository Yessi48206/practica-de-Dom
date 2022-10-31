//metodo setTimeout=ejecuta una funcion pasado cierto tiempo
let contador=1
function saludar(){
    document.write("<p> Hola mundo</p>");
    //cuenta las veces que quiero q se repita el setInterval
    if(contador===5){
        clearInterval(identificador);
    }
    contador++;
}
//window.setTimeout(saludar,3000);

//se entiende un metodo de windo
//setTimeout(saludar,3000)

//setTimeout(() => {
//    document.write("<p> Hola mundo</p>");
//}, 4000);

//setInterval ejecuta una funcion cada cierto tiempo

//let identificador =setInterval(saludar,2000);

//ACLARACION EJERCICIO DEL RELOJ 

let fechaActual= new Date();
//document.write(fechaActual);
document.write("LA FECHA DE HOY ES");
document.write("</br>");
document.write(fechaActual.getDate());//dia 31
document.write("/"+(fechaActual.getMonth()+1));
document.write("/"+fechaActual.getFullYear());

