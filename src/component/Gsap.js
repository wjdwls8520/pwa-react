import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function Gsap() {

    useEffect(() => {
    
        gsap.registerPlugin(ScrollTrigger); 
        
        return ()=> {
            
            // 빅로고
            gsap.to(".dim", {
            scrollTrigger: {
                trigger: ".section--2",
                pin: true,  // 고정해줌
                immediateRender: false, // fromtTo 기능 (되감기)
                start: "center center",
                end: "1200 center",
                markers: false,
                scrub: true,
                id: "1nd"
            },
            yPercent: -100,
            scale: 1,
            });
            gsap.to(".fixed_level", {
            scrollTrigger: {
                trigger: ".section--2",
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
                trigger: ".section--2",
                immediateRender: false,
                start: "center center",
                end: "1200 center",
                markers: false,
                scrub: true,
                id: "fixed--txt"
            },
            scale: 1,
            opacity: 1,
            });
    
            // 텍스트컨텐츠
            //.from을 사용하여 거꾸로 사용할수있음
            gsap.from(".text_contents1", {
            scrollTrigger: {
                trigger: ".text_contents1",
                immediateRender: false,
                start: "-500 center",
                end: "center center",
                markers: false,
                scrub: true,
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
                scrub: true,
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
                scrub: true,
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
                scrub: true,
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
                start: "-100 center",
                end: "100 center",
                markers: false,
                scrub: true,
                id: "4"
            },
            opacity : 1,
            width: "100%"
            });
            
        }
        
    }, []);
    
    return null
}