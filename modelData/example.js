"use strict";

/*
 * Carga el modelo de datos de la Tarea 1 Del LAB02.
 * Cargamos en el DOM la propiedad cc451models.exampleModel
 * una  funcion que retorna un objeto
 * con la siguiente propiedad:
 *    name:  Una cadena con el nombre.
 *
 * vea README.md para información en como acceder a ella.
 */
var cc451models;

if (cc451models === undefined) {
  cc451models = {};
}

cc451models.exampleModel = function () {
  // Tarea 1 completa
  return {
    name: "Jose Pachas",
    motto: "Be brave, even if you're afraid",
  };
};
