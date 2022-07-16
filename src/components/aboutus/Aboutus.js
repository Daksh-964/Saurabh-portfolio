import React from 'react'
import './Aboutus.css';
import List from '../podcast_list/podcast_list';
function Aboutus() {
  return (
    <div className='container-fluid mb-4'>
      <div className='home row'>
        <div className='col-lg-5 offset-md-1 intro mb-2 mx-auto text-center mt-2'>
          <img className='img_home' src='https://i.pinimg.com/originals/8c/ba/e8/8cbae894b87d526112eade459a45beee.jpg' alt='fli' />
          <div className='social_handles'>
            <a><button className='social_button'>
            <i class="fab fa-instagram" />
              Instagram</button></a>
            <a><button className='social_button'>
            <i class="fab fa-facebook" />
              Facebook</button></a>
            <a><button className='social_button'>
            <i class="fab fa-youtube" />
              Youtube</button></a>
            <a><button className='social_button'>
            <i class="fab fa-twitter" />
              Twitter</button></a>
          </div>
        </div>
        <div className='col-lg-5 mb-5 text-center offset-md-1 mx-auto mt-1'>

          <div className='content'>
            <h1 className='head_about'>The quest</h1>
            <p className='text_about'>All your idols are going through something. Join Justin Kan, co-founder of the world's No.1 live-streaming platform Twitch, on the quest to find eternal growth. The mission...</p>
          </div>
            {/* Podcast list  */}
      <List />
          {/* <div className='social_icon' >
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
          </div> */}
          <a href='https://twitter.com/0xSaurabh_'>
            <button className='btn btn-15' type='button'>
              Enter
            </button>
          </a>


        </div>
      </div>
    </div>
  )
}

export default Aboutus