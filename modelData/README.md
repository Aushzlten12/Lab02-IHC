# CC451 LAB02 Model Data


Dado que no tenemos un sistema de base de datos como backend para  obtener datos del modelo, almacenamos los datos del modelo en el DOM para que sean accesibles a las vistas. Agregamos una propiedad de objeto  llamada `cc451models` al DOM que contiene los datos del modelo para las diferentes vistas.


* `cc451models.exampleModel()` - El modelo para la tarea 1 - example view.
* `cc451models.statesModel()`  - El modelo para la tarea  2 - states view.

Estos modelos pueden accesarse por el controlador de la vista  bajo la propiedad window.
Por ejemplo:

    window.cc451models.statesModel()
    
accederá al arreglo de estados de la tarea 2 asi:

    window.cc451models.statesModel()[0] === 'Alabama'
