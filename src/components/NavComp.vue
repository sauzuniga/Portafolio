<template>
  
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">Home </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/introduccion"  class="nav-link" >Introduccion </router-link>
        </li>
        <li class="nav-item">
          <router-link to="contenidos" class="nav-link" >Contenidos </router-link>
        </li>
        <li class="nav-item">
          <router-link to="javascriptintro" class="nav-link" >JavascriptIntro </router-link>
        </li>
        <li class="nav-item">
          <router-link to="bootstrapvue" class="nav-link" >Bootstrap y vue </router-link>
        </li>
        <li class="nav-item">
          <router-link to="clases" class="nav-link" >Rendering y Directivas </router-link>
        </li>
        <li class="nav-item">
          <router-link to="eventosYclases" class="nav-link" >Eventos y clases </router-link>
        </li>
        <li class="nav-item">
          <router-link to="componentes" class="nav-link" >Componentes </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>