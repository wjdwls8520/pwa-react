import React, { useEffect, useRef } from 'react';
import './App.css';
import Box from './component/Box';
import { gsap } from 'gsap-trial';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { Link, Route, Routes } from 'react-router-dom';
import TimeText from './component/TimeText';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother); 

function App() {

  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // create the smooth scroller FIRST!
      ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });

      gsap.to(".dim", {
        scrollTrigger: {
          trigger: ".section--2",
          pin: true,  // 고정해줌
          immediateRender: false, // fromtTo 기능
          start: "center center",
          end: "1200 center",
          markers: true,
          scrub: true,
          id: "1nd"
        },
        yPercent: -100,
        scale: 1,
        // opacity: 0,
      });
      gsap.to(".fixed_level", {
        scrollTrigger: {
          trigger: ".section--2",
          // pin: true,  // 고정해줌
          immediateRender: false, // fromtTo 기능
          start: "center-=100px center",
          end: "1000 center",
          markers: true,
          scrub: true,
          id: "fixed"
        },
        opacity: 1,
      });
      gsap.to(".fixed_txt > p", {
        scrollTrigger: {
          trigger: ".section--2",
          // pin: true,  // 고정해줌
          immediateRender: false, // fromtTo 기능
          start: "center center",
          end: "1200 center",
          markers: true,
          scrub: true,
          id: "fixed--txt"
        },
        scale: 1,
        opacity: 1,
      });


    }, main);
    
    return () => ctx.revert();
  }, []);


  return (
    <div className="App">
        {/* 헤더 */}
        <header className="header"> 
            <div className='header_inner'>
                <h1 className='logo'> 
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='logo' /> 
                </h1>
                <ul className='gnb'>
                    <li>
                        <Link className={'link'} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={'link'} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={'link'} to="/works">Works</Link>
                    </li>
                    <li>
                        <Link className={'link'} to="/contact">Contact us</Link>
                    </li>
                </ul>
            </div>
        </header>

        <div id="smooth-wrapper" ref={main}>
          <div id="smooth-content">

                {/* 메인페이지 */}
                <Routes>
                    <Route path="/" element={
                      <>
                          <section className='section section--main'>
                              <video autoPlay playsInline loop muted>
                                  <source src={`${process.env.PUBLIC_URL}/video/main.mp4`} type="video/mp4" />
                                  Sorry, your browser doesn't support embedded videos.
                              </video>
                              <TimeText />
                              {/* <Box data-speed="1.5"></Box> */}
                          </section>
                          <section className='section section--2'>
                              <div className='dim'></div>
                              <div className='fixed_level'>
                                  <img src={`${process.env.PUBLIC_URL}/images/biglogo.png`} alt='biglogo' /> 
                              </div>
                              <div className='fixed_txt'>
                                  <p>KVR interactive</p>
                              </div>
                          </section>
                          <section className='section section--3'>

                          </section>
                      </>
                    } />
                </Routes>

                {/* about */}
                <Routes>
                    <Route path="/about" element={
                      <>
                        <a>안녕하세요</a>
                      </>
                    } />
                </Routes>

          </div>
        </div>
    </div>
  );
}

export default App;
