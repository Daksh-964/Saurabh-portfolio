import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Blogs from './components/blogs/blogs'
import Calendly from './components/calendly/calendly'
import Youtube from './components/youtube/youtube'
import Podcast from './components/podcast/podcast'
// import Experience from './components/experience/Experience'
import Tweets from './components/twitter/tweets'
import Aboutus from './components/aboutus/Aboutus'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopButton from './components/topButton/TopButton'
import Loader from './components/loader/loader'
function App() {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    })


  return (
    <BrowserRouter>

      <div className="App">
      {isLoading==true?
        <Loader/>:
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboutus />} />
        </Routes>
      }


        {/* <TopButton /> */}

      </div>
    </BrowserRouter>

  )
}

export default App
