import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './App.css';
import Box from './component/Box';
import { gsap } from 'gsap-trial';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { Link, Route, Routes } from 'react-router-dom';


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

      // gsap.to(".box", {
      //   scrollTrigger: {
      //     trigger: ".wrap",
      //     pin: true,  // 고정해줌
      //     immediateRender: false, // frontTo 기능
      //     start: "0 top",
      //     end: "300 top",
      //     markers: true,
      //     scrub: true,
      //     id: "1nd"
      //   },
      //   yPercent: 50,
      //   scale: 3,
      //   opacity: 1,
      // });


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
                        // <Box data-speed="1.5"></Box>
                        <section className='section section--main'>
                          
                        </section>
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
