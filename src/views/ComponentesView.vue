<template>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ¿Que es un componente en vueJS?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Es la forma que ofrece vue para reutilizar una instancia tantas veces como sea requerido
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Sintaxis para crear un componente
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Vue.component("name", { options }). El name es el nombre que le damos al componentes que estamos creando, y el apartado de options son todas las opciones que se pueden enviar a una instancia de Vue
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     ¿Como se envian datos entre componentes?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Se envían datos desde un componente padre hacia el hijo mediante sus propiedades ( props )
y desde el componente hijo hacia el padre mediante eventos ( $emit ).
      </div>
    </div>
  </div>
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <h3>Actividad de la semana</h3>
  <div class="card-body">
    <h5 class="card-title">Repositorio</h5>
    <p class="card-text">El trabajo consistia en entregar el repositorio de git donde tenemos todo lo que hicimos en las practicas</p>
  </div>
  <div class="card mb-3">
  <img src="src/evidencias.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Evidencia de entrega</h5>
  </div>
</div>
</div>
</div>
</template>