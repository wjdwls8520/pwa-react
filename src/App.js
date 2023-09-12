import React, { useEffect} from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Gsap from './component/Gsap';
import Home from './router/Home';
import About from './router/About';

function App() {

  return (
    <div className="App">
        <div id='pro-bar' />
        <Gsap />

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

          <Routes>
            {/* 메인페이지 */}
            <Route path="/" element={
              <Home />
            } />

            {/* about */}
            <Route path="/about" element={
                <About />
            } />

            {/* works */}
            <Route path="/works" element={
              <div className='wrap'>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
              </div>
            } />

            {/* contact */}
            <Route path="/contact" element={
              <div className='wrap'>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
              </div>
            } />

            <Route path="*" element={<p>404</p>} />
          </Routes>


          




          
      </div>
  );
}

export default App;
