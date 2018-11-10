var AgeM;
var AgeW;
var cont=1;
var cont1=1;
var edad_joven=1000;
var promedio_edadH=0;
var promedio_edadM=0;
var cantHombres=0;
var cantMujeres=0;
var cantPersonas=0;
var sumaH=0;
var sumaM=0;
        
prompt( "Digite las edades de los hombres que asistieron a la fiesta.");
    
    while (AgeM != 0 ){
              edad=document.write( "Edad: "+cont);
              if (AgeM>=18){
                if (edadH<edad_joven){
                    edad_joven=AgeM;
                }
                cantHombres++;
                cont++;
                sumaH=sumaH+AgeM;
              }else{
                    alert( "No se permiten menores de edad a la fiesta.", "Error",0);
              }           
    }
    
    prompt("Digite las edades de las mujeres que asistieron a la fiesta.");

    while (AgeW != 0){
              AgeW=document.write( "Edad: "+cont1);
              if (AgeW>=18){
                if (AgeW<edad_joven){
                    edad_joven=AgeW;
                }
                cantMujeres++;
                cont1++;
                sumaM=sumaM+edadM;
              }else{
                    alert( "No se permiten menores de edad a la fiesta.","Error",0);
              }           
   } 
    promedio_edadH=sumaH/cantHombres;
    promedio_edadM=sumaM/cantMujeres;
    cantPersonas=cantHombres+cantMujeres;
    
   document.write( "La cantidad de personas que asistieron a la fiesta es: " + cantPersonas+"\n"+
           "Cantidad de hombres: "+cantHombres+"\n"+
           "Cantidad de mujeres: "+cantMujeres+"\n"+
           "Promedio edad hombres: "+promedio_edadH+"\n"+
           "Promedio edad mujeres: "+promedio_edadM+"\n"+
           "Edad mas joven: "+edad_joven);    

