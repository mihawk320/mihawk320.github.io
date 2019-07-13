window.onload=function(){
    /*Esta funcion se realiza al moverse el mouse que lo que vamos a encontrar es el movimiento en x 
    y el movimiento en y */
    document.onmousemove=function(ev){
        var x= -ev.clientX/10; // al dividirlo entre 10 le reducimos la velocidad de desplazamiento
        // Estamos asignandole a x el movimiento que se hace en el eje x del mouse
        var y= -ev.clientY/10;

        document.getElementById("bienvenidos").style.backgroundPosition=x+ 'px ' + y + 'px';
    };
}