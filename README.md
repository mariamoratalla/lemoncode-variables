# Laboratorio Variables


Pasos para abrir el proyecto:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## Ejercicio

Se pretende mostrar una serie de grupos musicales por consola, indicando su nombre, año de fundación, si está activo o no y su género musical. Además, añadir estilo al nombre de cada grupo.

El género hay que tenerlo en una variable distinta.

Pasos: 
- Crear una interfaz para estandarizar las propiedades de los objetos.
- Crear las variables para el género musical.
- Crear los objetos de los grupos y poner que son del mismo tipo que la interface.
- Crear una constante para aplicar estilo al nombre de cada grupo y así no tener que poner el estilo en todos los nombres.
- Hacer console.log para mostrar en consola los grupos y sus propiedades. En la propiedad 'nombre'poner %c para indicar que tiene estilos de CSS y poner la constante del estilo como otra variable de la función console.log().



