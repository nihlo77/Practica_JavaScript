// ejercicio 1: hacer un cuadrado
console.log(`\nEJERCICIO 1: hacer un cuadrado\n`)
//aqui empieza el código restircciones: ciclos + solo un if else + solo dos console
for(let i = 1; i<=11; i++) {
    if(i==1 || i == 11){
        console.log(`****************`)} 
        else {console.log(`*              *`)}
} 

// ejercicio 2: recorrer un número con marcas en multiplos de 3 y 5
console.log(`\n\nEJERCICIO 2: recorrer hasta cualquier número con marcas en múltiplos de 3 y 5 \n`)
//aqui empieza el código restricciones: un for + maximo 3 condicionales + cualquier número
let num = 15
for(let i = 1; i <= num; i++){
 mult3 = i%3
 mult5 = i%5
 mult3y5 = mult3 + mult5
   if(mult3y5 == 0){console.log(`TzStricker`)} 
    else if(mult3 == 0){console.log(`Tz`)} 
    else if(mult5 == 0){console.log(`Stricker`)}
   else {console.log(i)}
 }

 // ejercicio 3: dado el número imprimir la tabla de multiplicar
console.log(`\n\nEJERCICIO 3: dado el número imprimir la tabla de multiplicar \n`)
//aqui empieza el código, no hay restricciones

let tabla=8
let i=1
console.log(`la tabla de multiplicar del ${tabla} es:`)
while(i<11){
    result = i*tabla
    console.log(`${tabla} X ${i} = ${result}`)
    i = i + 1
}

// EJERCICIOS AVANZADO: 
console.log(`\n\nEJERCICIO AVANZADO: El codigo contendra una palabra y una posicion, a través de esto la letra que esten en dicha posicion deben ser retirada de la palabra\n`)
//aqui empieza el código, no hay restricciones

let palabras1 = `ESTERNOCLEIDOMASTOIDEO`
let posicion1 = 20
let palabraarray1 = palabras1.split(``)

for (i=0; i<=palabraarray1.length -1 ; i++)  
{if(i==posicion1) {palabraarray1[i] = ``}}
let denuevopalabra1 = palabraarray1.toString()
otrapalabra1 = denuevopalabra1.replace(/,/g,``)
console.log(`Para la palabra ${palabras1} se elimina la letra de la posicion ${posicion1} quedando ${otrapalabra1}`)


// Bonus track

console.log(`\n\nBONUS TRACK: El ejercicio avanzado sin iteraciones\n`)
let palabras = palabras1
let posicion = posicion1
let palabraarray = palabras.split(``)
palabraarray.fill(``,posicion,posicion +1 )
let denuevopalabra = palabraarray.toString()
otrapalabra = denuevopalabra.replace(/,/g,``)
console.log(`Para la palabra ${palabras} se elimina la letra de la posicion ${posicion} quedando ${otrapalabra}`)
