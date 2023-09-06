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