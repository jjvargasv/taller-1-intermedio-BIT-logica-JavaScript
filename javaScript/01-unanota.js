/*
 1.Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar). 
*/

let not = 3.6; //prompt('dijite su nota por Favor ');

if(not <0 || not >5){
    console.log('las notas debe ser mayores a 0 y menores de 5 ')
    document.write('las notas debe ser mayores a 0 y menores de 5' );
}
 else if(  3.5 <= not){
    console.log('el alumno aprobo la matera con '+not);
    document.write('el alumno aprobo la matera con '+not );
}
else{
console.log('el alumno reprobo la matera con ' +not );
document.write('el alumno reprobo la matera con '+not );
}