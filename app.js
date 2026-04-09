// =======================
// BASE DE DATOS
// =======================
const productos = [
  { id: 1, nombre: "Mouse", categoria: "Periférico", precio: 50000, stock: 10, ventas: 12 },
  { id: 2, nombre: "Teclado", categoria: "Periférico", precio: 120000, stock: 5, ventas: 7 },
  { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
  { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
  { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

// =======================
// FUNCIONES
// =======================

// Productos agotados
function verAgotados(lista) {
  return lista.filter(p => p.stock === 0);
}

// Ordenar por precio
function ordenarPorPrecio(lista) {
  return [...lista].sort((a, b) => a.precio - b.precio);
}

// Buscar producto
function buscarProducto(lista, nombre) {
  return lista.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
}

// Valor total inventario
function calcularInventario(lista) {
  return lista.reduce((total, p) => total + (p.precio * p.stock), 0);
}

// Filtrar por ventas
function filtrarPorVentas(lista, cantidad) {
  return lista.filter(p => p.ventas > cantidad);
}

// Map nombres
function nombresProductos(lista) {
  return lista.map(p => p.nombre);
}

// Validaciones
function hayProductosCaros(lista) {
  return lista.some(p => p.precio > 500000);
}

function todosConStock(lista) {
  return lista.every(p => p.stock > 0);
}

// =======================
// REPORTE FINAL
// =======================
function generarReporte(lista) {

  if (lista.length === 0) {
    console.log("No hay productos.");
    return;
  }

  const masCaro = lista.reduce((max, p) => p.precio > max.precio ? p : max);
  const masBarato = lista.reduce((min, p) => p.precio < min.precio ? p : min);
  const masVendido = lista.reduce((max, p) => p.ventas > max.ventas ? p : max);
  const valorInventario = calcularInventario(lista);
  const totalVendidas = lista.reduce((total, p) => total + p.ventas, 0);
  const agotados = verAgotados(lista).length;

  console.log("\n===== REPORTE FINAL =====");
  console.log("Producto más caro:", masCaro);
  console.log("Producto más barato:", masBarato);
  console.log("Producto más vendido:", masVendido);
  console.log("Valor total del inventario:", valorInventario);
  console.log("Total de unidades vendidas:", totalVendidas);
  console.log("Cantidad de productos agotados:", agotados);
}

// =======================
// MENÚ
// =======================
function mostrarMenu() {
  console.log("\n===== MENÚ =====");
  console.log("1. Ver agotados");
  console.log("2. Ordenar por precio");
  console.log("3. Buscar producto");
  console.log("4. Valor inventario");
  console.log("5. Productos con más de 5 ventas");
  console.log("6. Nombres productos");
  console.log("7. ¿Hay productos caros?");
  console.log("8. ¿Todos tienen stock?");
  console.log("9. Reporte final");
  console.log("10. Salir");
}

// =======================
// EJECUCIÓN
// =======================
let opcion = 0;

while (opcion !== 10) {
  mostrarMenu();

  opcion = parseInt(prompt("Ingrese una opción:"));

  switch (opcion) {

    case 1:
      console.log(verAgotados(productos));
      break;

    case 2:
      console.log(ordenarPorPrecio(productos));
      break;

    case 3:
      let nombre = prompt("Ingrese el nombre:");
      let resultado = buscarProducto(productos, nombre);

      if (resultado) {
        console.log(resultado);
      } else {
        console.log("No encontrado");
      }
      break;

    case 4:
      console.log(calcularInventario(productos));
      break;

    case 5:
      console.log(filtrarPorVentas(productos, 5));
      break;

    case 6:
      console.log(nombresProductos(productos));
      break;

    case 7:
      console.log(hayProductosCaros(productos));
      break;

    case 8:
      console.log(todosConStock(productos));
      break;

    case 9:
      generarReporte(productos);
      break;

    case 10:
      console.log("Saliendo...");
      break;

    default:
      console.log("Opción inválida");
  }
}