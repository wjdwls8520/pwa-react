import React, { useEffect, useState} from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Loading from './component/Loding';
import Menu from './component/mMenu';
import GsapMain from './component/GsapMain';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
      setLoading(false)
  }, [])

  return (
    <div className="App">
      <GsapMain />

      {loading ? <Loading /> : null} 
        <div id='pro-bar' />

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
                <Menu />
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

        <footer id="footer">
          <div className="top_f fff">
              <div className="logo_wrap">
                  <div className="logo_f">
                      <img src={`${process.env.PUBLIC_URL}/images/logo_f.png`} alt='logo' /> 
                  </div>
              </div>
              <div className="sns_wrap">
                  <div className="sns_f">
                      <a className='link' target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/KVRcokr/">
                        <img src={`${process.env.PUBLIC_URL}/images/icon_face.png`} alt="페이스북" />
                      </a>
                  </div>
                  <div className="sns_f">
                      <a className='link' target='_blank' rel="noopener noreferrer" href="https://www.youtube.com/channel/UCSKbQqePsxtZ2VO3xqDpjXw">
                        <img src={`${process.env.PUBLIC_URL}/images/icon_you.png`} alt="유튜브" />
                      </a>
                  </div>
              </div>
          </div>
          <div className="mid_f fff">
              <div className="txt_wrap txt_wrap01">
                  <span className="tit">대표</span>
                  <span className="txt">최태철</span>
                  <br className="mm_br" />
                  <span className="tit">사업자명</span>
                  <span className="txt">(주)케이브이알 인터랙티브</span>
                  <br className="mm_br" />
                  <span className="tit">사업자등록번호</span>
                  <span className="txt">544-87-00914</span>
              </div>
              <div className="txt_wrap txt_wrap02">
                  <span className="tit">회사 주소</span>
                  <span className="txt">서울특별시 마포구 월드컵북로396, 누리꿈스퀘어 연구개발타워 6층</span>
              </div>
              <div className="txt_wrap txt_wrap03">
                  <span className="tit bold">이메일</span>
                  <span className="txt bold-color">kvrint@k-vr.co.kr</span>
              </div>
          </div>
          <div className="bot_f fff">
              <div className="txt_wrap txt_wrap04">
                  <span className="tit bold">사업문의</span>
                  <span className="txt bold-color">02-305-7797</span>
                  <br className="mmm_br" />
                  <span className="tit">제휴문의</span>
                  <span className="txt">02-6010-5252</span>
                  <br className="mmm_br" />
                  <span className="tit">기타문의</span>
                  <span className="txt">02-6010-5242</span>
                  <p className="copy">Copyright ⓒ 2022 KVR INTERACTIVE. All Rights Reserved</p>
              </div>
          </div>
        </footer>       
      </div>
  );
}

export default App;
