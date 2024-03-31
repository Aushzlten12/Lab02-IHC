'use strict';

/*
 * Carga el modelo de datos de la tarea 2  del  LAB02  del curso  cc451.
 * Cargamos en la propiedad cc451models.statesModel una funcion que 
 * retorna un arreglo de cadenas  con los nombres de los estados de EUA.
 *
 * Vea  el README.md para mas detalles
 */

var cc451models;

if (cc451models === undefined) {
   cc451models = {};
}

cc451models.statesModel = function() {
   return [
      'Alabama', 
      'Alaska', 
      'Arizona', 
      'Arkansas', 
      'California',
      'Kansas', 
      'Kentucky', 
      'Louisiana', 
      'Maine', 
      'Maryland',
      'South Dakota', 
      'Tennessee', 
      'Texas', 
      'Utah', 
      'Vermont',
      'Montana', 
      'Nebraska', 
      'Nevada', 
      'New Hampshire', 
      'New Jersey',
      'Hawaii', 
      'Idaho', 
      'Illinois', 
      'Indiana', 
      'Iowa',
      'New Mexico', 
      'New York', 
      'North Carolina', 
      'North Dakota', 
      'Ohio',
      'Oklahoma', 
      'Oregon', 
      'Pennsylvania', 
      'Rhode Island', 
      'South Carolina',
      'Massachusetts', 
      'Michigan', 
      'Minnesota', 
      'Mississippi', 
      'Missouri',
      'Colorado', 
      'Connecticut', 
      'Delaware', 
      'Florida', 
      'Georgia',
      'Virginia', 
      'Washington', 
      'West Virginia', 
      'Wisconsin', 
      'Wyoming'
   ];
};

