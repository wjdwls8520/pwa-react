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
        smooth: 1.5, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });

      // 빅로고
      gsap.to(".dim", {
        scrollTrigger: {
          trigger: ".section--2",
          pin: true,  // 고정해줌
          immediateRender: false, // fromtTo 기능 (되감기)
          start: "center center",
          end: "1200 center",
          markers: false,
          scrub: true,
          id: "1nd"
        },
        yPercent: -100,
        scale: 1,
      });
      gsap.to(".fixed_level", {
        scrollTrigger: {
          trigger: ".section--2",
          immediateRender: false, 
          start: "center-=100px center",
          end: "1000 center",
          markers: false,
          scrub: true,
          id: "fixed"
        },
        opacity: 1,
      });
      gsap.to(".fixed_txt > p", {
        scrollTrigger: {
          trigger: ".section--2",
          immediateRender: false,
          start: "center center",
          end: "1200 center",
          markers: false,
          scrub: true,
          id: "fixed--txt"
        },
        scale: 1,
        opacity: 1,
      });

      // 텍스트컨텐츠
      //.from을 사용하여 거꾸로 사용할수있음
      gsap.from(".text_contents1", {
        scrollTrigger: {
          trigger: ".text_contents1",
          immediateRender: false,
          start: "-300 center",
          end: "center center",
          markers: true,
          scrub: true,
          id: "1"
        },
        scale: 0.2,
        xPercent: 50,
        opacity: 0.7,
      });
      gsap.from(".text_contents2", {
        scrollTrigger: {
          trigger: ".text_contents2",
          immediateRender: false,
          start: "-300 center",
          end: "center center",
          markers: true,
          scrub: true,
          id: "2"
        },
        scale: 0.2,
        xPercent: -100,
        opacity: 0.7,
      });
      gsap.from(".text_contents3", {
        scrollTrigger: {
          trigger: ".text_contents4",
          immediateRender: false,
          start: "-400 center",
          end: "center center",
          markers: true,
          scrub: true,
          id: "3"
        },
        scale: 0.4,
        xPercent: 50,
        yPercent: -50,
        opacity: 1,
      });
      gsap.from(".text_contents4", {
        scrollTrigger: {
          trigger: ".text_contents4",
          immediateRender: false,
          start: "-400 center",
          end: "center center",
          markers: true,
          scrub: true,
          id: "4"
        },
        scale: 0.1,
        xPercent: -100,
        yPercent: 100,
        opacity: 0,
      });
      gsap.to(".text_contents4 > .line > .line--bar", {
        scrollTrigger: {
          trigger: ".text_contents4",
          immediateRender: false,
          start: "-100 center",
          end: "100 center",
          markers: true,
          scrub: true,
          id: "4"
        },
        opacity : 1,
        width: "100%"
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
                              <span className='text_contents text_contents1'>
                                <span className='big'>글로벌 </span>
                                <span className='bold'>웹(web) 환경</span>
                                <span className='big'>에</span>
                                <br/>
                                <span className='tiny bold'>VR, 3D, 디지털 트윈</span>
                                <span className='tiny'>을 통한</span>
                              </span>

                              <span className='text_contents text_contents2'>
                                <span className='big bold'>온라인 전시</span>
                                <span className='tiny'>와 </span> 
                                <span className='big bold'>메타버스 플랫폼 </span>
                                <span className='tiny'>을 </span>
                                {/* <br /> */}
                                <span className='tiny'>구축합니다</span> 
                              </span>

                              <span className='text_contents text_contents3'>
                                <span className='tiny'>시공간을 넘어 </span>
                                <span className='tiny bold'>사람들을 이어주고</span>
                              </span>

                              <span className='text_contents text_contents4'>
                                <span className='big bold line'>
                                  가치있는 서비스
                                  <span className='line--bar'></span>
                                </span>
                                <span className='tiny'>를 만들어 나가고 있습니다.</span>
                              </span>
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
