import React,{useState} from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  " id='navbar'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item m-2">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link" href="#">Blogs</a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link">Podcast</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar