import React from 'react'
import Section from '../section/Section'
import './podcast.css';
import List from '../podcast_list/podcast_list';
import { BrowserRouter,Route,Routes,Link} from "react-router-dom";

function podcast() {
  return (
    <Section title="Join my podcast">
      <div className='row'>
        <div className='col-7'>
          <div className='title_podcast'>
            <h1 className='sub_title'>Top Spotify</h1>
            <h3 className='sub_title'>Technology</h3>
          </div>
        </div>
        <div className='col'>
          <img className='img_poster' src='https://img.freepik.com/free-vector/podcast-poster-template_47987-2202.jpg' alt='poster' />
        </div>
      </div>
      <br />
      <br />
      <div className='available_on'>
        <h5 className='avail_title'>Available on</h5>
        <div className='available_icons'>
          <a className='link m-2' href='https://open.spotify.com/show/7zLH9PYMRqjkvfgjGa4iHo' target='_blank'>
            <i className="fab fa-spotify fa-3x" id='spotify'></i>
          </a>
          <a className='link m-2' href='https://open.spotify.com/show/7zLH9PYMRqjkvfgjGa4iHo' target='_blank'>
            <i className="fab fa-spotify fa-3x" id='spotify'></i>
          </a>
          <a className='link m-2' href='https://open.spotify.com/show/7zLH9PYMRqjkvfgjGa4iHo' target='_blank'>
            <i className="fab fa-itunes fa-3x" id='itunes'></i>
          </a>
        </div>
      </div>
      <div className='main_container mt-5 '>
        <a href='https://open.spotify.com/show/7zLH9PYMRqjkvfgjGa4iHo'>
          <div className='episode mt-4 mb-3'>
            <div className='img_wrappper ml-4'>
              <a href='https://open.spotify.com/show/7zLH9PYMRqjkvfgjGa4iHo'>

                <button className='button' type='button'>
                  <i class="fas fa-play mx-auto" id=''></i>
                </button>
              </a>
            </div>

            <div className='content'>
              <div className='pod_date'>20 June 2022</div>
              <div className='title_player'>
                Web Developer</div>
              <div className='pod_description'><p className='text_para'>This podcast is  all about how a developer deals with daily life consequences</p></div>

            </div>
          </div>
        </a>
        <List date='20 June 2022' title="adadashu" description='ngsygusgyugudguagduysagdugudgauy' link='https://open.spotify.com/show/7zLH9PYMRqjkvfgjGa4iHo' />

        <div className='button_podcast'>
          <div class="button-more" role="button">
            <Link to="About">
            View  More
            </Link>
          </div>
        </div>

      </div>
    </ Section>
 


  )
}

export default podcast