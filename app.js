// requireds

// const fs = require('express');
// const fs = require('./fs');


// console.log(module);


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

// console.log(multiplicar)
// let base = 9;
// console.log(process.argv);
// console.log(argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log('Limite ', argv.limite);

// console.log(base);


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));


/*
 * crear comando listar 
 */

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(listado => console.log(listado.rainbow))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no existe');
        break;
}