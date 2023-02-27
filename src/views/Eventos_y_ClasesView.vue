<template>
    <div class="accordion" id="accordionExample">
        <h1>Evento</h1>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ¿Que son?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Son acciones de los usuarios ante los cuales puede realizarse algún proceso. Los eventos se capturan mediante los manejos de eventos
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Modificadores de eventos
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        En vueJS el modificador de evento se invoca mediante el sufijo de instruccion indicado por un punto
      </div>
    </div>
  </div>
  <h2>Ejemplos</h2>
  <ul class="list-group">
  <li class="list-group-item">.top</li>
  <li class="list-group-item">.prevent</li>
  <li class="list-group-item">.capture</li>
  <li class="list-group-item">.self</li>
  <li class="list-group-item">.once</li>
</ul>
<div class="card mb-3" style="max-width: 540px;">
    <h3>Trabajo de la semana</h3>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="src/capturaportafolio.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Portafolio en VueJS</h5>
        <p class="card-text">El trabajo en pocas palabras consistia en realizar un portafolio en vue, que contenga los contenidos del computo.
            La fecha de entrega al final se definio para el 26/02/2023
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</template>