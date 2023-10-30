/* 1: Mensaje de bienvenida*/
function mensaje(texto)
let saludo = prompt('Ingresa tu nombre')
if((saludo == 'Santino') || (saludo == 'Nahuel'))
{
    alert('Bienvenido al queridísimo célebre y clasificado' + saludo)
}else{
    alert('Hola, ¿Cómo estás' + saludo)
}

/* 2: Mayor de edad*/
function edad(num)
let mayorEdadONo = prompt('Ingresa tu edad')
if(mayorEdadONo >= 18)
{
    alert('Sos mayor de edad')
}else{
    alert('Sos menor de edad')
}

/* 3: Categoría de edad*/
function categoríaEdad(num)
let edad = prompt('Ingresa tu edad')
if((edad >= 6) && (edad <= 11))
{
    alert('Sos un/a niño/a')
}if((edad >= 12) && (edad <=18)){
    alert('Sos un/a adolescente')
}if((edad >= 14) && (edad <= 26)){
    alert('Sos un/a jóven')
}if((edad >= 27) && (edad <= 59)){
    alert('Sos un/a adulto/a')
}else{
    alert('Sos un/a anciano/a')
}

/* 4: Día laborable o fin de semana*/
function queDiaEs(texto)
let dia = prompt('Ingresa un día de la semana')
if((dia == 'Lunes') || (dia == 'Martes') || (dia == 'Miércoles') || (dia == 'Jueves') || (dia == 'Viernes'))
{
    alert('Es un día de semana laborable.')
}else{
    alert('Es un día de fin de semana')
}

/* 5: Comprobar contraseña*/
function comprobarContraseña(texto)
let contraseña = prompt('Ingresa una contraseña que se te ocurra')
if(contraseña == 'secreto')
{
    alert('Acceso concedido')
}else{
    alert('Acceso denegado')
}

/* 6: Múltiplo de 5*/
function multiploONo(num)
let numero = prompt('Ingresa un número cualquiera')
{if(numero % 5 == 0)
{
    return alert('El número es múltiplo de 5')
}else{
    return alert('El número no es múltiplo de 5')
}
}
/* 7: Cálculo de descuento*/
function descuento(edad, precio)
let ingresarEdad = prompt('Ingresa tu edad')
let ingresarPrecio = prompt('Ingresar solo el precio de algo')
{ if(ingresarEdad > 65)
{
    return ingresarPrecio * 90 / 100
}else{
    return ingresarPrecio
}
}
/* 8: Categoría de notas*/
function calificacionEnCategorias(num)
let ingresarNotaNumerica = prompt('Ingresa el porcentaje numérico de una nota')
if((ingresarNotaNumerica >= 80) && (ingresarNotaNumerica <= 100))
{
    return alert('Es un MS (Muy Satisfactorio)')
} else if((ingresarNotaNumerica >= 60) && (ingresarNotaNumerica <= 79)){
    return alert('Es un S (Satisfactorio)')
}else{
    return alert('Es un EP (En Proceso)')
}

/* 9: Día de la semana*/
function diaDeLaSemana(texto)
let numeroDeLaSemana = prompt('Ingresa un número del 1 al 7')
if (numeroDeLaSemana == 1)
{
     return alert('El día es Lunes')
} else if(numeroDeLaSemana == 2){
    return alert('Es el día Martes')
} else if(numeroDeLaSemana == 3){
    return alert('Es el día miércoles')
} else if(numeroDeLaSemana == 4){
    return alert('Es el día Jueves')
} else if(numeroDeLaSemana == 5){
    return alert('Es el día Viernes')
} else if(numeroDeLaSemana == 6){
    return alert('Es el día Sábado')
} else{
    return alert('Es el día domingo')
}

/* 10: Año bisiesto o no*/
function queAñoEs(num)
let año = prompt('Ingresa un año')
if((año / 400 == 0) || (año / 4 == 0) && (año / 100 != 0))
{
    return alert('Es un año bisiesto')
}else{
    return alert('No es un año bisiesto')
}

/* 11: Comprobar igualdad de cadenas*/
function igualdadTextos(texto)
let texto1 = prompt('Ingresa una palabra')
let texto2 = prompt('Ingresa una palabra igual o diferente')
if(texto1 == texto2)
{
    alert('Son dos cadenas de texto iguales')
}else{
    alert('No son dos cadenas de texto iguales')
}

/* 12: Calculadora de edad*/
function calcularEdad(num)
let añoNacimiento = prompt('Ingresa tu edad')
let calcularEdad = 2023 - añoNacimiento
if(calcularEdad == true)
{
    alert('Tenés ' + calcularEdad)
}else{
    alert('No tenés ' + calcularEdad)
}