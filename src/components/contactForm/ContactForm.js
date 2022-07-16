import React,{useEffect,useState} from 'react'

function ContactForm() {
  
  return (
    <div class="container">
    <section class="row mt-2 text-center">
      <div class="col-md-6 m-auto">
        <form action="/signup" method="POST">
          <div class="form-group">
            <input type="text" name="firstName" id="first-name" class="form-control" placeholder="First Name"
              required />
          </div>
          <div class="form-group">
            <input type="text" name="lastName" id="last-name" class="form-control" placeholder="Last Name" required />
          </div>
          <div class="form-group">
            <input type="email" name="email" id="email" class="form-control" placeholder="Email" required />
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  </div>
  )
}

export default ContactForm