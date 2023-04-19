<template>
    <div class="card mb-3" style="max-width: 540px;">
        <h1>¿Que es Laravel?</h1>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="src/Laravel.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">Es un framework gratis de php y de codigo abierto que brinda un conjunto de herramientas para crear aplicacione modernas de manera facil. Laravel es para backend, aunque tambien tiene herramientas para frontend como sistemas de validación entre otras cosas</p>
      </div>
    </div>
  </div>
  <h2>Patron de arquitectura de software que maneja laravel</h2>
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="src/mvc.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">MVC</h5>
        <p class="card-text">Este patron se separa en 3 capas modelo, vista, y controlador y se utiliza para separar el codigo por sus distintas responsabilidades, manteniendo distintas capas que se encargan de hacer una tarea muy concreta, lo que ofrece beneficios diversos..</p>
      </div>
    </div>
  </div>
  <h4>Analogia</h4>
  <p>Una analogia muy usada para explicar el mvc es la de la television, que cuenta que en la televisión podemos ver distintos canales distribuidos por nuestro proveedor de cable o televisión (que representa al modelo), todos los canales que podemos ver son la vista, y nosotros cambiando de canal, controlando qué vemos representamos al controlador. </p>
</div>
<h5>Ventajas de laravel</h5>
<ul class="list-group">
  <li class="list-group-item">Tiene una comunidad muy activa</li>

  <li class="list-group-item list-group-item-primary">Simplifica enormemente la interacción con bases de datos</li>
  <li class="list-group-item list-group-item-secondary">Brinda un alto nivel de seguridad</li>
  <li class="list-group-item list-group-item-success">Brinda posibilidad de acceder a datos en realtime y recibir notificaciones cuando éstos se alteran en la base de datos
</li>
  <li class="list-group-item list-group-item-danger">Posee Varias configuraciones para envío de email, con proveedores diversos</li>
  <li class="list-group-item list-group-item-warning">Brinda un sistema de gestion de sesiones</li>
</ul>
<h5>¿Como crer un proyecto con laravel?</h5>
<p>Para poder trabajar con laravel, se necesita tener instalado el sistema de gestión de paquetes composer y el paquete xampp, usbwebserver o tener un archivo con la configuración manual de php y un servidor web ya sea apache o otros. Ya teniendo composer, abrimos la consola y ponemos el comando: composer create-project --prefer-dist laravel/laravel y el nombre que le queramos dar al proyecto.</p>
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Actividad de la semana</h5>
    <p class="card-text">La actividad de la semanana fue el corto sobre las clases abstratas y interfaces que valia el 70% del segundo laboratorio.</p>
  </div>
</div>
</div>
</template>