<template>
    <div class="card mb-3" style="max-width: 540px;">
        <h1>Rutas en Laravel</h1>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://www.cloudways.com/blog/wp-content/uploads/Main.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">¿Que es una ruta?</h5>
        <p class="card-text">Son uno de los componentes mas importantes de Laravel, su función es manejar el flujo de solicitudes y respuestas en ambos sentidos, es decir desde y hacia el cliente .</p>
        <h5>¿Donde se definen las rutas? </h5>
        <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">routes/api.php</h5>
    </div>
    <p class="mb-1">En el caso de que sean rutas de APIS las queremos definir, se hara desde el archivo api.php que esta en la carpeta routes.</p>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">routes/channels.php</h5>
    </div>
    <p class="mb-1">Se definen en este archivo cuando son canales de transmisión de eventos.</p>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">routes/console.php</h5>
    </div>
    <p class="mb-1">En este archivo se definen los comandos de consola que pueden interactuar con el usuario u otro sistema.</p>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">routes/web.php</h5>
    </div>
    <p class="mb-1">En este archivo se definen las rutas que son de nuestra interfaz de nuestro proyecto.</p>
  </a>
</div>
<h3>Ejemplo de diferentes tipos de rutas</h3>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRwT5QoeHV05U5a4ExRws3Av9jcI4HrtnBz1W8Gie_1COsShEBTgNXthpfEJMp7eJRuw&usqp=CAU" alt="">
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://user-images.githubusercontent.com/5417461/66260886-54a36700-e7e6-11e9-896d-58e02c55281d.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Formularios en Laravel</h5>
        <p class="card-text">Los formularios son los archivos desde donde se recopila la informacion de los ususrios, los formularios se pueden crear facilmente con html mas precisamente con la etiqueta form. Dentro del form se ponen todos los elementos de tipo input donde el usuario introducirá la informacion que sera enviada mediante el boton submit</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header"></div>
  <div class="card-body">
    <h3 class="card-title">Controladores</h3>
    <p class="card-text">Se podria decir que son los intermediarios entre las vistas y los modelos, es decir se encarga de controlar, estos reciben las peticiones de los usuarios y se encargan de solicitar los datos al modelo y despues comunicáselo a la vista. Para crear un controlador automáticamente en Laravel, se usa el siguiente comando: php artisan make:controller AlumnoController --resource </p>
    <div class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-dark">
    <h5 class="card-title">Actividad de la semana</h5>
    <p class="card-text">Esta semana no hubo actividad evaluada debido a que todavía estaba pendiente la entrega del examen parcial 2 completo.</p>
  </div>
</div>
  </div>
</div>
</template>