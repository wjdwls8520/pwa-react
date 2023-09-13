import { useEffect } from "react"
import GsapAbout from "../component/GsapAbout"

export default function About() {

    useEffect(() => {

    }, [])

    return(
        <div className="wrap">
            <GsapAbout />

            <section className='section about--main'>
                <div className='dim'></div>
                <div className='fixed_level'>
                    <img src={`${process.env.PUBLIC_URL}/images/biglogo.png`} alt='biglogo' /> 
                </div>
                <div className='fixed_txt'>
                    <p>KVR interactive</p>
                </div>
            </section>
            <section className='section about--2'>
                <div className="about_ct">
                    <div className="text_box">
                        <span className="tit">About</span>
                        <span className="text">
                            우리는 사람간 연결이 필요한 곳에
                            <br/>
                            기술을 통한 새로운 가치경험을 만들고 있습니다. 
                            <br/>
                            <br/>
                            다양한 디바이스를 통해 언제, 어디서, 누구나 
                            <br/>
                            이용이 가능한 서비스를 만들며 디지털 트윈과 가상공간을 통해
                            <br/>
                            고객이 추구하는 가치를 전달할 수 있도록 연구합니다. 
                            <br/>
                            <br/>
                            '재밌는 기술을 일상으로'
                            <br/>
                            케이브이알 인터랙티브가 추구하는 K-메타버스 입니다.
                        </span>
                    </div>
                    <div className="img_box">

                    </div>
                </div>
            </section>
        </div>
    )
}