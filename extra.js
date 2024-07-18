const arrNums = [10,20,30,40,50,60,70,80,90,100];

const [pCero,pUno,pDos,pTres,pCuatro, ...resto] = arrNums

const numPedidos = [pCero,pDos,pCuatro]

const restoNums = [pUno,pTres,...resto]

console.log(numPedidos);
console.log(restoNums);


const mascota = {
    nombre:"Miel",
    tipo:"Perro",
    color:"Marron Claro",
    raza:"Salchicha"
}

const {nombre,tipo,color,raza} = mascota;

const mensaje = `Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de color:
${color} y su raza es: ${raza}.`

console.log(mensaje);

