import TimeText from "../component/TimeText";

import main from "../video/main.mp4"
import videoCt01 from "../video/exhibition.mp4"
import videoCt02 from "../video/disital.mp4"
import videoCt03 from "../video/web.mp4"
import videoContact from "../video/contact.mp4"
import GsapHome from "../component/GsapHome";

export default function Home() {

    return (
        <div className='wrap'>
            <GsapHome />

            <section className='section home--main'>
                <video autoPlay playsInline loop muted>
                    <source src={main} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video>
                <TimeText />
                {/* <Box data-speed="1.5"></Box> */}
            </section>
            <section className='section home--2'>
                <div className='dim'></div>
                <div className='fixed_level'>
                    <img src={`${process.env.PUBLIC_URL}/images/biglogo.png`} alt='biglogo' /> 
                </div>
                <div className='fixed_txt'>
                    <p>KVR interactive</p>
                </div>
            </section>
            <section className='section home--3'>
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
                    <br className='m-br' />
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
                    <span className='tiny'>를 
                    만들어 나가고 있습니다.
                    </span>
                </span>
            </section>
            <section className='section home--4'>
                <div className="ct ct_1">
                    <div className="loop_text">
                        <span className="top">VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION</span>
                        <span className="bot">VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION</span>
                    </div>

                    <div className='left_box'>
                        <div className="txt_group">
                            <h4 className="big">온라인 전시</h4>
                            <span className="tiny">
                                시공간 제약 없는 온라인 전시 개최
                                <br/> 
                                체험형 전시 콘텐츠 개발, 전시성과 측정
                                </span>
                            <span className="category">
                                온라인 전시관 / 박물관
                            </span>
                        </div>
                        <button className="btn_more">
                            더보기
                        </button>
                    </div>
                    <div className="right_box">
                        <video autoPlay playsInline loop muted>
                            <source src={videoCt01} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    </div>
                </div>
                <div className="ct ct_2">         
                    <div className="loop_text">
                        <span className="top">VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION</span>
                        <span className="bot">VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION</span>
                    </div>    

                    <div className="right_box">
                        <video autoPlay playsInline loop muted>
                            <source src={videoCt02} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    </div>
                    <div className='left_box'>
                        <div className="txt_group">
                            <h4 className="big">디지털 플랫폼</h4>
                            <span className="tiny">
                                공공기관, 기업의 디지털 플랫폼
                                <br /> 
                                실감형 콘텐츠 (3D제품, 디지털휴먼) 개발,
                                <br />
                                공간 및 콘텐츠 관리자 제공
                            </span>
                            <span className="category">
                                온라인 전시관 / 박물관
                            </span>
                        </div>
                        <button className="btn_more">
                            더보기
                        </button>
                    </div>
                </div>
                <div className="ct ct_3">
                    <div className="loop_text">
                        <span className="top">VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION</span>
                        <span className="bot">VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION DIGITAL PLATFORMWEB VR EXHIBITION</span>
                    </div>

                    <div className='left_box'>
                        <div className="txt_group">
                            <h4 className="big">웹 메타버스 플랫폼</h4>
                            <span className="tiny">
                                시공간 제약 없는 온라인 전시 개최
                                <br/> 
                                체험형 전시 콘텐츠 개발, 전시성과 측정
                                </span>
                            <span className="category">
                                온라인 전시관 / 박물관
                            </span>
                        </div>
                        <button className="btn_more">
                            더보기
                        </button>
                    </div>
                    <div className="right_box">
                        <video autoPlay playsInline loop muted>
                            <source src={videoCt03} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    </div>
                </div>
            </section>
            <section className='section home--5'>
                <video autoPlay playsInline loop muted>
                    <source src={videoContact} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video>
                <div className='right_box'>
                    <div className="txt_group">
                        <h4 className="big">Contact us</h4>
                        <span className="tiny">
                            재미있는 상상을 현실로 만들겠습니다.
                        </span>
                    </div>
                    <button className="btn_more">
                        문의하기
                    </button>
                </div>
            </section>

        </div>
    )
}