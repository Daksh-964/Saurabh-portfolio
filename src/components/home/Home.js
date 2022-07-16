import React from 'react';
import './Home.css'
import About from '../about/About';
import Blogs from '../blogs/blogs';
import Calendly from '../calendly/calendly';
import Youtube from '../youtube/youtube';
import Podcast from '../podcast/podcast';
import Tweets from '../twitter/tweets'
import Aboutus from '../aboutus/Aboutus'
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';


function Openingpage() {
  return (
    <>
      <div className='container-fluid mb-4'>
        <div className='main_content row'>
          <div className='col-lg-5 offset-md-1 intro_about mb-2 mx-auto text-center mt-1'>
            <div className='content'>
              <h1 className='head'>Daksh Singh</h1>
              <p className='text'>Your Favorite Developer who can clone every website.</p>
            </div>
            <div className='social_icon' >
              <a href='https://www.youtube.com/channel/UC5xurO4ea0KPc9SLRIrpWCw' className='social_links'>
                < i className="fab fa-youtube px-2 icon" />
              </a>
              <a href='#'>
                <i className="fab fa-twitter px-2 icon" />
              </a>
              <a href='#'>
                <i class="fab fa-linkedin px-2 icon" />
              </a>
              <a href='#'>
                <i class="fab fa-instagram px-2 icon" />
              </a>
            </div>
            <a href='https://twitter.com/0xSaurabh_'>
              <button className='btn btn-15' type='button'>
                Enter
              </button>
            </a>
          </div>
          <div className='col-lg-5 mb-5 text-center offset-md-1 mx-auto mt-2'>

            <img className='img_home' src='https://i.pinimg.com/originals/8c/ba/e8/8cbae894b87d526112eade459a45beee.jpg' alt='fli' />

          </div>
        </div>
      </div>
      <Podcast />
      <br />
      <br />
      <Tweets />
      <Calendly />
      <Blogs />
      <About  />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Openingpage;