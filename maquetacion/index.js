console.log("Consigna 1")
let numeroMaximo = Number(prompt("Ingrese un número:"));

for (let i = 1; i <= numeroMaximo; i++) {
  let lineaDeNumeros = "";
  for (let j = 1; j <= i; j++) {
    lineaDeNumeros += j;
  }
  console.log(lineaDeNumeros);
}


console.log("Consigna 2")



function verCalleRepetida(calles1, calles2) {
    let callesRepetidas = [];
    for (let i = 0; i < calles1.length; i++) {
      for (let j = 0; j < calles2.length; j++) {
        if (calles1[i] === calles2[j]) {
          callesRepetidas.push(calles1[i]);
        }
      }
    }
    return callesRepetidas;
  }
  
  let calles1 = [`colon`, `general paz`, `humberto primo`, `santa rosa`]
  let calles2 = [`lima`,`obispo oro`,`colon`,`velez sarsfield`]
  let miArrayComun = verCalleRepetida(calles1, calles2);
  console.log(miArrayComun);


  console.log("Consigna 3")

  class Carrito {
    constructor(montoTotal, productos) {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    addProduct(producto) {
      const productoExistente = this.productos.find(p => p.nombre === producto.nombre);
    if (productoExistente) {
      console.log(`Ya existe`+ producto.nombre +` con` + productoExistente.unidades +` unidades`);
      return;
    }
  
    getTotal() 
      let total = this.montoTotal;
      this.productos.forEach(producto => {
        total += producto.precio;
      });
      return total;
    }
      //3.2
    agregarProducto(nombre, precio, unidades) {
      const producto = { nombre, precio, unidades };
      this.addProduct(producto);
    }
    
    }
  
 