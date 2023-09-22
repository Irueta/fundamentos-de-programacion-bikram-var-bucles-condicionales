let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = PI * 2;
var booleanoAnd = booleano1 && booleano2;
var booleanoNot = !booleano1;
var booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (! booleano1 && ! booleano2));
var incrementarDesp = 2;
var resultadoDesp = incrementarDesp ++;
var incrementarAntes = 2;
var resultadoAntes = ++ incrementarAntes;
/*10 - Crear variable **contarHasta10_2** con valor **0** e incrementar su valor con un **bucle for hasta que se verifique que contarHasta10_2 === 10** */

for (let contarHasta10_2 = 0; contarHasta10_2 === 10; contarHasta10_2++){};
/*11 - Crear las variables **postI** y **postJ** con valor **0** a continuación cree **un bucle que itere 11 veces**. En cada iteración se deberá **sumar al valor de postI el valor de postJ++***/ 
var postI = 0;
var postJ = 0;
for (let i = 0; i < 11; i++){
    postI = postI + postJ;
    postJ++;
}
/*12 - Crear la variable **sumaPares** con valor **0** a continuación crea un bucle que **itere 10 veces (i < 10)** si la iteración es par se deberá **sumar a sumaPares el número de la iteración actual (i)***/ 
var sumaPares = 0;
for (i=0; i < 10 ; i++){
    if (i %2 == 0){
        sumaPares = sumaPares + i;
    } else {
        continue;
    }
}


/*### Variables ###

- [ ] 13.- Crear variable tipo **let** de nombre **variableValorNumerico** declarada con un **valor numérico cualquiera**
*/
let variableValorNumerico = 3;
/*
- [ ] 14.- Crear variable tipo **const** de nombre **MiNombre** declarada con valor **tu nombre**
*/
const MiNombre = "Jon";
/*
- [ ] 15.- Crear variable tipo **const** de nombre **MiNumeroFav** declarada con **valor numérico**
*/
const MiNumeroFav = 3;
/*
### Booleanos ###

- [ ] 16.- Crear variable **booleanoOr** cuyo calor sea la comparación booleana **booleano1 or booleano2**
*/ 
var booleanoOr = booleano1 || booleano2;
/*
- [ ] 17.- Crear variable **booleanoMix1** cuyo valor sea la comparación booleana **(booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)**
*/ 
var booleanoMix1 = booleano1 && (TAU/2 == PI) || (variableValorNumerico >= MiNumeroFav);
/*
- [ ] 18.- Crear variable **seisNoEsNueve** cuyo valor sea la comparación booleana **6 no es estrictamente igual que 9**
*/ 
var seisNoEsNueve = 6 != 9;
/*
- [ ] 19.- Crear variable **booleanoMix2** cuyo valor sea la comparación booleana **variableValorNumerico positivo (0 no incluido) o menor que -(MiNumeroFav * TAU)**
*/ var booleanoMix2 = (variableValorNumerico > 0) || (MiNumeroFav * TAU);
/*
### Operadores ###

- [ ] 20.- Crear variable **valorSuma** cuyo valor sea **la suma de MiNumeroFav y variableValorNumerico**
*/
var valorSuma = MiNumeroFav + variableValorNumerico;
/*
- [ ] 21.-  Crear variable **valorResta** cuyo valor sea **la resta de MiNumeroFav y variableValorNumerico**
*/
var valorResta = MiNumeroFav - variableValorNumerico;
/*
- [ ] 22.-  Crear variable **valorMultiplicación** cuyo valor sea **la multiplicación de MiNumeroFav por variableValorNumerico**
*/ 
var valorMultiplicacion = MiNumeroFav * variableValorNumerico;
/*
- [ ] 23.-  Crear variable **valorDivisión** cuyo valor sea **la división de MiNumeroFav entre 3**
*/ 
var valorDivision = MiNumeroFav / 3;
/*
### Bucles ###

- [ ] 24.- Crear variable **contarHasta10** con valor **0** e incrementar su valor con un **bucle while hasta que se verifique que contarHasta10 === 10**
*/ 
var contarHasta10 = 0;
while (contarHasta10 !== 10){
    contarHasta10++;
};
/*
- [ ] 25.- Crear las variables **preI** y **preJ** con valor **0** a continuación cree **un bucle que itere 11 veces**. En cada iteración se deberá **sumar al valor de preI el valor de ++preJ**
*/ 
var preI = 0;
var preJ = 0;
for (let i = 0; i < 11; i++){
    preJ++;
    preI = preI + preJ;
}

/*
- [ ] 26.- Crear la variable **sumaImpares** con valor **0** a continuación crea un bucle que **itere 10 veces (i < 10) si la iteración es impar se deberá sumar a sumaImpares el número de la iteración actual (i)**
*/
var sumaImpares = 0
for (i=0; i < 10 ; i++){
    if (i %2 !== 0){
        sumaImpares = sumaImpares + i;
    } else {
        continue;
    }
}