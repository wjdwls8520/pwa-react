import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

export default function Box() {

    // let boxREf = useRef();

    // useEffect(()=> {
        
    //         let tl = gsap.timeline();
    //         tl.from(boxREf.current, {
    //             x: 200,
    //             duration: 1,
    //             ease: "bounce.out",
    //         }); 
    //         tl.to(boxREf.current, {
    //             x: 0,
    //             duration: 1.3,
    //             scale: 1.5,
    //             ease: "bounce.out",
    //         });
    //         tl.to(boxREf.current, {
    //             scale: 1, 
    //         });

    // 스크롤트리거 타임라인
    // var left_tl_02 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".section--4",
    //         immediateRender: false,
    //         start: "1200 top",
    //         end: "2700 top",
    //         markers: true,
    //         scrub: 1,
    //         id: "videoCt_2"
    //     },
    // });
    // left_tl_02.to(".ct_2 > .left_box", {
    //     opacity : 1,
    //     xPercent : 5,
    // }).to(".ct_2", {
    //     opacity : 0,
    //     xPercent : -5,
    // });
        
    // }, [])

    return(
        <div>
            <div className="wrap">
                <div className='box' >

                </div>
            </div>
        </div>
    )
}