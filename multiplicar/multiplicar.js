// requireds

const fs = require('fs');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un numero`);
            return
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            // let baseb = base * i;
            // console.log(baseb);
            data += (`${base} * ${i} = ${base * i} \n`);
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
            // console.log('El archivo tabla-2.txt ha sido creado!');
        });
    });
}

let listarTabla = (base, limite = 12) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            if (!Numbrer(base)) {
                reject(`El valor ingresado ${base} no es un numero`);
            } else {
                reject(`El valor ingresado ${limite} no es un numero`);
            }
            return
        }

        let listado = '';
        console.log('==================='.red);
        console.log(`=TABLA DE ${base}=`.blue);
        console.log('==================='.red);
        for (let x = 1; x <= limite; x++) {

            listado += (`${base} * ${x} = ${base * x} \n`);
            // console.log(`${base} * ${x} = ${base * x} \n`);
            //si se ocupa el console.log, se evita todo el resto de proceso
            // hecho en el switch del archivo app.js:50
        }
        resolve(listado);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}