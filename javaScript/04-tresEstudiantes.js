/* 
Implementar funciones para realizar la misma funcionalidad del punto 3, pero calculando las notas de tres estudiantes.
 */



function perdirMateria () {
    const materia = prompt( 'Digita una Materia' ); 
    return materia;
}

for(let i = 0; i < 3; i++){
    let nom = prompt('dijite el nombre del alumno ');
    for(let i=1; i<=3; i++){
        const nuevoNombre = perdirMateria();
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
                console.log('el alumno '+nom,' aprobo la matera '+nuevoNombre,' con '+sum,);
                document.write('el alumno'+nom,' aprobo la matera '+nuevoNombre,' con '+sum, '</br>');
        }
        else{
            console.log('el alumno '+nom,' reprobo la matera '+nuevoNombre,' con ' +sum );
            document.write('el alumno '+nom,' reprobo la matera '+nuevoNombre,' con '+sum, '</br>' );
        }
    }
}