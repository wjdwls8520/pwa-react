import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function GsapAbout() {

    useEffect(() => {
    
        gsap.registerPlugin(ScrollTrigger); 

        const gsapAnimation = gsap.context(() => {
 
            // 빅로고
            gsap.to(".dim", {
                scrollTrigger: {
                    trigger: ".about--main",
                    pin: true,  // 고정해줌
                    immediateRender: false, // fromtTo 기능 (되감기)
                    start: "center center",
                    end: "1200 center",
                    markers: false,
                    scrub: 2,
                    id: "1nd"
                },
                yPercent: -100,
                scale: 1,
            });
            gsap.to(".fixed_level", {
                scrollTrigger: {
                    trigger: ".about--main",
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
                    trigger: ".about--main",
                    immediateRender: false,
                    start: "center center",
                    end: "1200 center",
                    markers: false,
                    scrub: 2,
                    id: "fixed--txt"
                },
                scale: 1,
                opacity: 1,
            });
            
            ScrollTrigger.refresh()
        })

            return ()=> gsapAnimation.revert();
        
    }, []);
    
    return null
}

