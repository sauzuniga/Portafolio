<template>
    <div class="accordion" id="accordionExample">
        <h1>Rendering</h1>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ¿Que es?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         Es una opción de VueJS para interactuar con el DOM, el cual propone una vista(HTML), estado(JS) y usuario(interactua e introduce cambios en la vista)
      </div>
    </div>
  </div>
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Directivas</div>
  <div class="card-body">
    <h5 class="card-title">¿Que son?</h5>
    <p class="card-text">Una directiva es un atributo de un elemento HTML que luego va a interpretar el framework Vue. Las directivas siempre comienzan con v-</p>
  </div>
</div>
<div class="accordion" id="accordionExample">
    <h2>Partes de una directiva</h2>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Directiva
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Hace referencia al nombre de la diractiva, algunas de estas se pueden abreviar 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Argumento
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        En algunas directivas se indica un parametro
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Modificador
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Se hace referencia a que se puede modificar el comportamiento de la directiva
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Valor
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Hace referiencia a que se establece un valor, igual que en html
      </div>
    </div>
  </div>
</div>
<h3>Ejemplos de directivas</h3>
<ul class="list-group">
  <li class="list-group-item list-group-item-primary">v-blind</li>
  <li class="list-group-item list-group-item-secondary">v-show</li>
  <li class="list-group-item list-group-item-success">v-model</li>
  <li class="list-group-item list-group-item-danger">v-if</li>
  <li class="list-group-item list-group-item-warning">v-once</li>
  <li class="list-group-item list-group-item-info">v-else</li>
  <li class="list-group-item list-group-item-light">v-html</li>
  <li class="list-group-item list-group-item-dark">v-else-if</li>
</ul>
</div>
</template>