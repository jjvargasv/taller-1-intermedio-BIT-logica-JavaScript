/*
Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar).
*/

let sum = 0;
for(let i=0; i<3; i++){
    let not1 = Number(prompt('dijite sus notas '));
    if(not1 <0 || not1 >5){
        console.log('las notas debe ser mayores a 0 y menores de 5 ');
        i--;
        not1=0;
    }
    sum = sum + not1;
}
    sum = sum / 3 ;

if(  3.5 <= sum){
        console.log('el alumno aprobo la matera con '+sum);
        document.write('el alumno aprobo la matera con '+sum );
}
else{
    console.log('el alumno reprobo la matera con ' +sum );
    document.write('el alumno reprobo la matera con '+sum );
}
