import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function GsapHome() {

    useEffect(() => {
    
        gsap.registerPlugin(ScrollTrigger); 

        const gsapAnimation = gsap.context(() => {
 
            // 빅로고
            gsap.to(".dim", {
                scrollTrigger: {
                    trigger: ".home--2",
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
                    trigger: ".home--2",
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
                    trigger: ".home--2",
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
    
            // 텍스트컨텐츠
            gsap.to(".home--3", {
                scrollTrigger: {
                    trigger: ".home--3",
                    immediateRender: false,
                    start: "bottom-=200 center",
                    end: "bottom center",
                    markers: false,
                    scrub: 2,
                    id: "home--3"
                },
                opacity:0
            });


            //.from을 사용하여 거꾸로 사용할수있음
            gsap.from(".text_contents1", {
                scrollTrigger: {
                    trigger: ".text_contents1",
                    immediateRender: false,
                    start: "-500 center",
                    end: "center center",
                    markers: false,
                    scrub: 1,
                    id: "1"
                },
                scale: 0.4,
                xPercent: 30,
                opacity: 0,
            });
            gsap.from(".text_contents2", {
                scrollTrigger: {
                    trigger: ".text_contents2",
                    immediateRender: false,
                    start: "-500 center",
                    end: "center center",
                    markers: false,
                    scrub: 1,
                    id: "2"
                },
                scale: 0.4,
                xPercent: -50,
                opacity: 0,
            });
            gsap.from(".text_contents3", {
                scrollTrigger: {
                    trigger: ".text_contents4",
                    immediateRender: false,
                    start: "-600 center",
                    end: "center center",
                    markers: false,
                    scrub: 2,
                    id: "3"
                },
                scale: 0.4,
                xPercent: 30,
                yPercent: -50,
                opacity: 0,
            });
            gsap.from(".text_contents4", {
                scrollTrigger: {
                    trigger: ".text_contents4",
                    immediateRender: false,
                    start: "-600 center",
                    end: "center center",
                    markers: false,
                    scrub: 2,
                    id: "4"
                },
                scale: 0.1,
                xPercent: -30,
                yPercent: 100,
                opacity: 0,
            });
            gsap.to(".text_contents4 > .line > .line--bar", {
                scrollTrigger: {
                    trigger: ".text_contents4",
                    immediateRender: false,
                    start: "-200 center",
                    end: "100 center",
                    markers: false,
                    scrub: 1,
                    id: "4"
                },
                opacity : 1,
                width: "100%"
            });

            // 루프 텍스트
            gsap.from(".ct_1 .top", {
                scrollTrigger: {
                    trigger: ".ct_1",
                    immediateRender: false,
                    start: "top-=600 center",
                    end: "bottom+=600 center",
                    markers: false,
                    scrub: 5,
                    id: "loopTop_01"
                },
                xPercent: -50
            });
            gsap.to(".ct_1 .bot", {
                scrollTrigger: {
                    trigger: ".ct_1",
                    immediateRender: false,
                    start: "top-=600 center",
                    end: "bottom+=600 center",
                    markers: false,
                    scrub: 5,
                    id: "loopBot_01"
                },
                xPercent: -50
            });

            gsap.from(".ct_2 .top", {
                scrollTrigger: {
                    trigger: ".ct_2",
                    immediateRender: false,
                    start: "top-=600 center",
                    end: "bottom+=600 center",
                    markers: false,
                    scrub: 5,
                    id: "loopTop_02"
                },
                xPercent: -50
            });
            gsap.to(".ct_2 .bot", {
                scrollTrigger: {
                    trigger: ".ct_2",
                    immediateRender: false,
                    start: "top-=600 center",
                    end: "bottom+=600 center",
                    markers: false,
                    scrub: 5,
                    id: "loopBot_02"
                },
                xPercent: -50
            });

            gsap.from(".ct_3 .top", {
                scrollTrigger: {
                    trigger: ".ct_3",
                    immediateRender: false,
                    start: "top-=600 center",
                    end: "bottom+=600 center",
                    markers: false,
                    scrub: 5,
                    id: "loopTop_03"
                },
                xPercent: -50
            });
            gsap.to(".ct_3 .bot", {
                scrollTrigger: {
                    trigger: ".ct_3",
                    immediateRender: false,
                    start: "top-=600 center",
                    end: "bottom+=600 center",
                    markers: false,
                    scrub: 5,
                    id: "loopBot_03"
                },
                xPercent: -50
            });
            
            ScrollTrigger.refresh()
        })

            return ()=> gsapAnimation.revert();
        
    }, []);
    
    return null
}

