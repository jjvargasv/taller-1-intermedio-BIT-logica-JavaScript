/* 
Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.
 */




let nom = prompt('dijite el nombre del alumno ');
for(let i=1; i<=3; i++){
    let materia1 = prompt('dijite el nombre de la materia del alumno ');
    let sum = 0;
    for(let i=1; i<=3; i++){
        let not1 = Number(prompt('dijite sus notas '));
        if(not1 <0 || not1 >5){
            console.log('las notas debe ser mayores a 0 y menores de 5 ');
            document.write('las notas debe ser mayores a 0 y menores de 5' );
            i--;
            not1=0;
        }
        sum = sum + not1;
    }
        sum = sum / 3 ;
    
    if(  3.5 <= sum){
            console.log('el alumno '+nom,' aprobo la matera '+materia1,' con '+sum,);
            document.write('el alumno'+nom,' aprobo la matera '+materia1,' con '+sum, '</br>');
    }
    else{
        console.log('el alumno '+nom,' reprobo la matera '+materia1,' con ' +sum );
        document.write('el alumno '+nom,' reprobo la matera '+materia1,' con '+sum, '</br>' );
    }
}