import React, { useEffect, useState,Component} from 'react'
import './card.css';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from '../axios/axios';
function Card() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [count, setCount] = useState([]);
 useEffect(()=>{
  async function fetchData(){
    const req= await axios.get('/dbCards/cards');
    setCount(req.data);
  }
  fetchData();
 },[]);
  return (

    <div className="row">
      <Slider  {...settings}> 

      {count.map((person) => {
        
        return (
          <div className="col-sm-3">
            <div className="card ">
              <img src={person.imgUrl} className="card-img-top img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{person.title}</h5>
                <p className="card-text">{person.description}</p>
              </div>
            </div>
          </div>
        )
      })}
      </Slider>
    </div>

  )
}

export default Card
