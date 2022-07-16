import React from 'react'
import './youtube.css';
function youtube() {
    return (
        <div className='youtube mt-10'>
            <div className='title text-center mb-3'>Watch on Youtube</div>
            <div className='row youtube_content'>
                <div className='col-lg-2 offset-md-1'>
                    <img src='https://cdn.bio/assets/images/creators/justin_kan/video_camera.png'></img>
                </div>
                <div className="col-lg-2 offset-md-1 embed-responsive embed-responsive-16by9  mt-8">
                    <iframe className="embed-responsive-item frame" src="https://www.youtube.com/embed/fa3Iczgh8Ok" frameborder="0" allow="autoplay; encrypted-media"
                        allowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </div>
            <div>More videos</div>
        </div>
    )
}

export default youtube