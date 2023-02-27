<template>
    <div class="accordion" id="accordionExample">
        <h1>Bootstrap</h1>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ¿Que es Bootstrap?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Bootstrap es un framework CSS que se utiliza para el desarrollo de aplicaciones front-end que se pueden adaptar a cualquier tipo de dispositivo. Su propósito es ofrecerle al usuario una mejor experiencia cuando navega en un sitio determinado.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Origen
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Fue desarrollado por Twitter en 2010 con el objetivo de estandarizar las herramientas de la propia compañía. En un principio, se llamó Twitter Blueprint y en 2011 se transformó en código abierto y su nombre pasó a ser Bootstrap.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      ¿Que no ofrece Bootstrap para trabajar?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       Ofrece una variedad de componentes que estan listo para ser integrados en nuestros proyectos, esto con el objetivo de permitirno armar la estructura basica de nuestra pagina de manera rapida.
       Bootstrap tambien ofrece una gran cantidad de clases que encapsulan estilos CSS.
      </div>
    </div>
  </div>
</div>
<div class="accordion" id="accordionExample">
    <h2>VueJs</h2>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ¿Que es VueJs?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Vue es un framework open source de JavaScript, el cual nos permite construir interfaces de usuarios de una forma muy sencilla. Cabe destacar que para trabajar con vue es recomendable tener un nivel intermedio en javascript.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Origen
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Fue desarrollado por Evan You y lanzado en 2014. Aunque inicialmente fue pensado para ser un biblioteca personal, la comunidad hizo que el proyecto creciera a un ritmo impresionante, posicionándolo hoy en día como uno de los Frameworks web más populares, junto con Angular y React.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Forma de trabajar
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       En vue se trabaja con componentes, un componente vue es términos simples, un elemento el cual se encapsula código reutilizable. Dentro de un componente podremos encontrar etiquetas HTML, estilos de CSS y código JavaScript. Los componentes nos permiten desarrollar proyectos modularizados y fáciles de escalar, si nosotros así lo deseamos podemos reemplazar un componente por otro de una forma muy sencilla, como si de piezas de lego se tratasen.
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" style="max-width: 540px;">
    <h4>Actividad evaluada de la semana</h4>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="src/Captura.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">Basicamente consistia en que en grupos de 3, cada integrantes del equipo tenia que hacer su curriculum utilizando bootstrap, y ademas de eso se iba a asignar un ejercicio a cada grupo para que lo resolvieran y agregaran al proyectos. En nuestro caso el ejecicio fue una to do list</p>
      </div>
    </div>
  </div>
</div>
</template>