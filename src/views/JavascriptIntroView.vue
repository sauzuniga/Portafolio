<template>
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">¿Que es JavaScript?</h5>
    <p class="card-text">es el lenguaje de programación encargado de dotar de mayor interactividad y dinamismo a las páginas web. Cuando JavaScript se ejecuta en el navegador, no necesita de un compilador. El navegador lee directamente el código, sin necesidad de terceros. Por tanto, se le reconoce como uno de los tres lenguajes nativos de la web junto a HTML y CSS.
     Un dato que vale la pena resaltar es que Javascript, no es lo mismo que Java, son lenguajes muy distintos
    </p>
  </div>
</div>
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">¿Para que sirve?</h5>
    <p class="card-text">Por el lado del cliente podemos crear efectos y animaciones sin ninguna interacción, o respondiendo a eventos causados por el propio usuario tales como botones pulsados y modificaciones del DOM.
        Por el lado del servidor podemos aprovechar las ventajas de los lenguajes de scripting para construir el código de servidor (o backend) de tus aplicaciones.
    </p>
  </div>
</div>
<div class="card text-dark bg-info mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Tipos de datos en JavaScript</h5>
    <ul class="list-group">
  <li class="list-group-item">Undefined</li>

  <li class="list-group-item list-group-item-primary">Boolean</li>
  <li class="list-group-item list-group-item-secondary">Number</li>
  <li class="list-group-item list-group-item-success">String</li>
  <li class="list-group-item list-group-item-danger">BigInt</li>
  <li class="list-group-item list-group-item-warning">Symbol</li>
  <li class="list-group-item list-group-item-info">Null</li>
  <li class="list-group-item list-group-item-light">Object</li>
  <li class="list-group-item list-group-item-dark">Function</li>
</ul>
  </div>
</div>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Actividad de la semana
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Debido a que era la primera de clases, por lo tanto era un contenido introductorio. Por todo lo anterior no hubo una actividad evaluada
      </div>
    </div>
  </div>
</div>
</template>