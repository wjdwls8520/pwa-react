import TimeText from "../component/TimeText";

export default function Home() {
    
    return (
        <div className='wrap'>
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
            <section className='section section--4'>
                <div className=''>

                </div>
            </section>
        </div>
    )
}