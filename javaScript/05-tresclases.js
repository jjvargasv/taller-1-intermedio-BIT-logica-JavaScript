/* 
Implementar el concepto de clases para gestionar la información de los estudiantes y calcular las notas de los tres estudiantes.
 */

const miArrMateria =[];

 function perdirMateria () {
    const materia = prompt( 'Digita una Materia' ); 
    return materia;
}


function notasMAteria(){
    const not = Number(prompt( 'Digita un nota' )); 
    return not;

}


 let objMateria; 

for(let k=0 ; k <3; k++){
        nombre = prompt('dijite el nombre del alumno ');
       
    for( let i = 0; i < 3; i++ ) { 
        objMateria= {
            nombreAlumno: '', //nombre delalumno
            nombreMateria: '' ,    // nombre de materia
            notas: [], //Lista de Notas
            promedio: 0,
            aprobo:'',
        };
         let not=0;
        objMateria.nombreAlumno= nombre;
        const nuevoNombre = perdirMateria();
        objMateria.nombreMateria= nuevoNombre;
        for(let o = 0; o < 3; o++){
            const nota = notasMAteria();
            objMateria.notas.push(nota)
            not=not+nota;
        }
        not = not/3;
        objMateria.promedio = not;

        if(  3.4 <= not){
        
            objMateria.aprobo ='aprobo';
        }
        else{
            
            objMateria.aprobo =' reprobo';
        }
        console.log( miArrMateria );

        miArrMateria.push(objMateria)
    
    }
}

