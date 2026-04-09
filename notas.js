const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofía", nota: 5.0, programa: "Diseño Web" }
];


function verAprendices() {
  const lista = aprendices.map(a => 
    `Aprendiz: ${a.nombre.toUpperCase()} - Nota: ${a.nota} - Programa: ${a.programa}`
  );
  console.log("\n=== LISTADO DE APRENDICES ===");
  lista.forEach(l => console.log(l));
}


function verAprobados() {
  const aprobados = aprendices.filter(a => a.nota >= 3);
  console.log("\n=== APROBADOS ===");
  aprobados.forEach(a => console.log(`${a.nombre} (${a.nota})`));
}

function verReprobados() {
  const reprobados = aprendices.filter(a => a.nota < 3);
  console.log("\n=== REPROBADOS ===");
  reprobados.forEach(a => console.log(`${a.nombre} (${a.nota})`));
}


function calcularPromedio() {
  const suma = aprendices.reduce((acc, a) => acc + a.nota, 0);
  const promedio = suma / aprendices.length;
  console.log(`\nPromedio general: ${promedio.toFixed(2)}`);
}


function ordenarPorNota() {
  const ordenados = [...aprendices].sort((a, b) => b.nota - a.nota);
  console.log("\n=== ORDENADOS POR NOTA ===");
  ordenados.forEach(a => console.log(`${a.nombre} (${a.nota})`));
}


function clasificarNota(nota) {
  let nivel;

  switch (Math.floor(nota)) {
    case 1:
    case 2:
      nivel = "Bajo";
      break;
    case 3:
      nivel = "Básico";
      break;
    case 4:
      nivel = "Alto";
      break;
    case 5:
      nivel = "Superior";
      break;
    default:
      nivel = "Nota inválida";
  }

  console.log(`Clasificación: ${nivel}`);
}

const prompt = require("prompt-sync")(); 

let opcion;

while (opcion !== "0") {
  console.log("\n===== MENÚ =====");
  console.log("1. Ver todos los aprendices");
  console.log("2. Ver aprobados");
  console.log("3. Ver reprobados");
  console.log("4. Calcular promedio");
  console.log("5. Ordenar por nota");
  console.log("6. Clasificar una nota");
  console.log("0. Salir");

  opcion = prompt("Seleccione una opción: ");

  switch (opcion) {
    case "1":
      verAprendices();
      break;
    case "2":
      verAprobados();
      break;
    case "3":
      verReprobados();
      break;
    case "4":
      calcularPromedio();
      break;
    case "5":
      ordenarPorNota();
      break;
    case "6":
      let nota = parseFloat(prompt("Ingrese la nota (1 a 5): "));
      clasificarNota(nota);
      break;
    case "0":
      console.log("Saliendo del sistema...");
      break;
    default:
      console.log("Opción inválida");
  }
}