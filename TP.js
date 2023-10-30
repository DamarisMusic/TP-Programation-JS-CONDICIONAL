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
if((numero == 'Termina en 5') || (numero == 'Termina en 0'))
{
    alert('El número es múltiplo de 5')
}else{
    alert('El número no es múltiplo de 5')
}

/* 7: Cálculo de descuento*/
function descuento(num)
let ingresarEdad = prompt('Ingresa tu edad')
let ingresarPrecioCualquiera = prompt('Ingresar solo el precio de algo')
let descuentoProducto = ingresarPrecioCualquiera * 10 / 100
if(ingresarEdad >= 65)
{
    alert('Tienes un decuento del 10% por ser mayor de 65 años, que es' + descuentoProducto)
}else{
    alert('No tienes un descuento del 10%')
}

/* 8: Categoría de notas*/
function calificacionEnCategorias(num)
let ingresarNotaNumerica = prompt('Ingresa el porcentaje numérico de una nota')
if((ingresarNotaNumerica >= 80) && (ingresarNotaNumerica <= 100))
{
    alert('Es un MS (Muy Satisfactorio)')
}if((ingresarNotaNumerica >= 60) && (ingresarNotaNumerica <= 79)){
    alert('Es un S (Satisfactorio)')
}else{
    alert('Es un EP (En Proceso)')
}

/* 9: Día de la semana*/
function diaDeLaSemana(texto)
let numeroDeLaSemana = prompt('Ingresa un número del 1 al 7')
if (numeroDeLaSemana == 1)
{
    alert('El día es Lunes')
}if(numeroDeLaSemana == 2){
    alert('Es el día Martes')
}if(numeroDeLaSemana == 3){
    alert('Es el día miércoles')
}if(numeroDeLaSemana == 4){
    alert('Es el día Jueves')
}if(numeroDeLaSemana == 5){
    alert('Es el día Viernes')
}else{
    alert('Es un día del fin de semana, sábado o domingo.')
}

/* 10: Año bisiesto o no*/
function queAñoEs(num)
let año = prompt('Ingresa un año')
if((año / 400) || (año / 4))
{
    alert('Es un año bisiesto')
}else{
    alert('No es un año bisiesto')
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