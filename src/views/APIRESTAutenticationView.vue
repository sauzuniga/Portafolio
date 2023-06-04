<template>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://marketplace-cdn.atlassian.com/files/3b63f907-f7b7-45da-b2fe-7165550944e5" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
       <h1>Autenticación de las APIs</h1>
        <p class="card-text">Las autenticaciones se usan en las aplicaciones para permitir a los usuarios diversas acciones como iniciar y cerrar sesión, proteger la privacidad y limitar los permisos de los usuarios.</p>
        <h3>Metodos de autenticación API REST</h3>
        <p>Existen varias maneras para autentificar una API, pero se podria decir que los 4 metodos principales son:</p>
        <ul class="list-group">
  <li class="list-group-item">Autenticación basica</li>
  <li class="list-group-item">Autenticación basada en token</li>
  <li class="list-group-item">Autenticación basada en clave API </li>
  <li class="list-group-item">OAuth 2.0 (Autorización abierta)</li>
</ul>
<h3>Autenticación basa en token</h3>
<p>En este método, el usuario se identifica al igual que con la autenticación básica, con sus credenciales, nombre de usuario y contraseña. Pero en este caso, con la primera petición de autentificación, el servidor generará un token basado en esas credenciales.</p>
<p>El servidor guarda en base de datos este registro y lo devuelve al usuario para que a partir de ese momento no envíe más credenciales de inicio de sesión en cada petición HTTP.  En lugar de las credenciales, simplemente se debe enviar el token codificado en cada petición HTTP.</p>
<p>Esta forma de autenticación se considera segura
porque los tokens pueden ser cifrados y firmados para evitar la manipulación o la suplantación de
identidad.
</p>
      </div>
    </div>
  </div>
</div>
<div>
    <h3>Implementación de autenticación</h3>
    <img src="https://raw.githubusercontent.com/breatheco-de/content/master/src/assets/images/authentication-diagram.png" alt="">
    <p>El diagrama anterior muestra de una forma sencilla la implementación de la autenticación en una base
de datos y una API. La idea principal es crear una tabla de usuario con el correo electrónico y la
contraseña de cada usuario y un endpoint api que genere un token si el email y la contraseña están en
la base de datos.
El token generado se utilizará como mecanismo de autenticación en cada uno de los endpoints de la
API. Para ello, se debe validar la existencia del token en el header de la petición y su validez.
</p>
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Actividad de la semana</h5>
    <p class="card-text">Esta semana no se realizó ninguna actividad evaluada debido a que la siguiente semana se realizaría un corto que equivaldría al 40% del lab2.</p>
  </div>
</div>
</div>
</template>