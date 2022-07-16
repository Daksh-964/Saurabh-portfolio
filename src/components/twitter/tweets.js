import React, { useEffect, useState, Component } from 'react'
import './tweets.css';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from '../axios/axios';

function tweets() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    //   const [count, setCount] = useState([]);
    //  useEffect(()=>{
    //   async function fetchData(){
    //     const req= await axios.get('/dbCards/cards');
    //     setCount(req.data);
    //   }
    //   fetchData();
    //  },[]);
    return (

        <div className="row">
            <div className='title text-center mb-3'>Tweets</div>
            <Slider  {...settings}>
                {/* <div class="card_tweet">
                    <img src="https://w0.peakpx.com/wallpaper/985/1007/HD-wallpaper-narcos-poster.jpg" class="card-img-top img_tweet" alt="..." />
                </div> */}
                <div className='tweet'>
                    <img className='img_tweets' src='https://w0.peakpx.com/wallpaper/985/1007/HD-wallpaper-narcos-poster.jpg' />
                </div>
                <div className='tweet'>
                    <img className='img_tweets' src='https://w0.peakpx.com/wallpaper/985/1007/HD-wallpaper-narcos-poster.jpg' />
                </div>
                <div className='tweet'>
                    <img className='img_tweets' src='https://w0.peakpx.com/wallpaper/985/1007/HD-wallpaper-narcos-poster.jpg' />
                </div>
                <div className='tweet'>
                    <img className='img_tweets' src='https://w0.peakpx.com/wallpaper/985/1007/HD-wallpaper-narcos-poster.jpg' />
                </div>


            </Slider>
        </div>

    )
}

export default tweets
