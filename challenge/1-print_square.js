#!/usr/bin/node
/*
    Imprimir un cuadrado con el carácter #
    
    El tamaño del cuadrado debe ser el primer argumento 
    del programa.
*/

if (process.argv.length <= 2) {
    process.stderr.write("Falta el argumento\n");
    process.stderr.write("Uso: ./1-print_square.js <size>\n");
    process.stderr.write("Ejemplo: ./1-print_square.js 8\n");
    process.exit(1);
}

size = parseInt(process.argv[2], 10);  // Convertir a base 10

if (isNaN(size) || size <= 0) {
    process.stderr.write("El argumento debe ser un número válido mayor que 0\n");
    process.exit(1);
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
