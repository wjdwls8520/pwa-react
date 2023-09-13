import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function GsapMain() {
    useEffect(()=> {
        gsap.registerPlugin(ScrollTrigger); 
  
        const gsapAnimation = gsap.context(() => {
            // 프로그레시브바
            gsap.to("#pro-bar", {
                scrollTrigger: {
                    trigger: ".App",
                    immediateRender: false, // fromtTo 기능 (되감기)
                    start: "10 top",
                    end: "bottom+=100 top",
                    markers: false,
                    scrub: 2,
                    id: "1nd"
                },
                width: '100%',
            });
  
            ScrollTrigger.refresh()
        })
  
        return ()=> gsapAnimation.revert();
    }, [])

    return null
}