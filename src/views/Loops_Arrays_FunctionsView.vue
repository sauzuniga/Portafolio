<template>
   <div class="card mb-3" style="max-width: 540px;">
    <h1>Loops</h1>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="src/loops.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">¿Para que sirven?</h5>
        <p class="card-text">Los loops o bucles sirven para ejecutar una parte del codigo un determinado numero de veces..</p>
      </div>
    </div>
  </div>
  <h2>Loops soportados por php</h2>
  <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        While
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">En este tipo de ciclo se verica primero la condición al
comienzo del ciclo y, si es verdadero, ingresa al ciclo y ejecuta
el bloque de instrucciones, y continúa ejecutándolo como
siempre y cuando la condición sea cierta.
.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Do-while
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Los bucles do-while son muy similares a los bucles while, excepto que la expresión verdadera es verificada al final de cada iteración en lugar que al principio. La diferencia principal con los bucles while es que está garantizado que ejecute la primera iteración de un bucle do-while.
</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        For
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"></div>
    </div>
  </div>
</div>
</div>
<div class="card mb-3" style="max-width: 540px;">
    <h2>Arrays</h2>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="src/array.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">¿Que es un array?</h5>
        <p class="card-text">Un array, o matriz, puede definirse como una variable especial que se utiliza para almacenar más de un valor dentro de una sola variable sin tener la necesidad de crear más de estas variables para almacenar todos los valores. Para crear una matriz en PHP, usamos la función de matriz array().</p>
      </div>
    </div>
  </div>
  <h3>Tipos de array</h3>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Numericos o indexados</li>
  <li class="list-group-item">Asociativos</li>
  <li class="list-group-item">Multidimensionales</li>
</ul>
</div>
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Funciones en php</div>
  <div class="card-body">
    <h5 class="card-title">¿Que son las funciones?</h5>
    <p class="card-text">Son bloques de codigo a los cuales se les pueden asignar un nombre y pueden ser llamados posteriormente para ser usados. Las funciones se declaran con la palabra reservada function y posteriormente el nombre de la funcion</p>
  </div>
  <h5>Tipos de funciones</h5>
  <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Funciones definidas por el usuario
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
       Como su nombre lo indica, es una funcion que es creada por el desarrollador
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Funciones integradas
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        Son funciones que ya vienen definidas con el lenguaje.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Funciones anonimas
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
       Son funciones que no tienen un nombre en especifico.
      </div>
    </div>
  </div>
</div>
</div>
<div class="card border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Trabajo de la semana</div>
  <div class="card-body text-primary">
    <p class="card-text">En si no existio un trabajo evaluado de la semana, sino que quedo como asignación, estudiar para el corto que se iba a realizar la siguiente semana y tambien realizar los  ejercicios que aparecian al final de un archivo que se nos asigno para que estudiaramos para el corto. Estos ejercicios se subirian a nuestro repositorio en github</p>
    <a href="https://github.com/sauzuniga/Ejercicios-php">Ejercicios resuletos</a>
  </div>
</div>

</template>