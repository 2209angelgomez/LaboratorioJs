var countmen=0;
var countwomen=0;
var agewomen=0;
var agemen=0;
var gender;
var age;
var sum;
var avgwomen;
var avgmen;


gender=prompt("Por favor ingrese su género");
age=parseInt(prompt("Por favor ingrese su edad"));

while(gender!=isNaN && isNaN(age)){
    alert("Por favor ingrese valores validos");
    gender=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}
while (age<18){
    alert("No se admiten menores de edad")
    gender=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}

while (age!=0) {
    if(gender=="hombre"){
        countmen++;
        agemen=agemen+age;
    }
    else if(gender=="mujer"){
        countwomen++;
        agewomen=agewomen+age; 
    }
    gender=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}

sum=countmen+countwomen;
avgwomen=agewomen/countwomen;
avgmen=agemen/countmen;
document.write("<p>A la fiesta ingresaron "+sum+"</p><p>Ingresaron "+countmen+" hombres</p><p>Ingresaron "+countwomen+" mujeres");
document.write("<p>El promedio de edad por hombres es de: "+avgmen+"</p><p>El promedio de edad por mujeres es de: "+avgwomen+"</p>");