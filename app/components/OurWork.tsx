import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const OurWorkAnimation = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!titleRef.current) return;

            const ourLetters = titleRef.current.querySelectorAll('.our-letter');
            const workLetters = titleRef.current.querySelectorAll('.work-letter');

            gsap.set(ourLetters[1], { // 'u'
                y: 100,
                rotation: 0,
                scale: 1.2,
                transformOrigin: "center center"
            });

            gsap.set(ourLetters[2], { // 'r'
                y: 150,
                rotation: 0,
                scale: 1.1,
                transformOrigin: "center center"
            });

            gsap.set(workLetters[0], { // 'w'
                y: 650,
                rotation: 0,
                scale: 1.3,
                transformOrigin: "center center"
            });

            gsap.set(workLetters[1], { // 'o'
                y: 700,
                rotation: 0,
                scale: 1.4,
                transformOrigin: "center center"
            });

            gsap.set(workLetters[2], { // 'r'
                y: 750,
                rotation: 0,
                scale: 1.5,
                transformOrigin: "center center"
            });

            gsap.set(workLetters[3], { // 'k'
                y: 800,
                rotation: 0,
                scale: 1.6,
                transformOrigin: "center center"
            });

            // Create timeline for scroll-triggered animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "center center",
                    end: "+=100%",
                    scrub: 2,
                    markers: false,
                }
            });

            gsap.to('.box', {
                scrollTrigger: {
                    trigger: '.box',
                    start: 'top',
                    end: '+=200%',
                    scrub: true,
                    pin: true,
                    markers: false,
                },
            });

            tl.to(ourLetters[1], { // 'u'
                y: 0,
                rotation: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out"
            }, 0.05)
                .to(ourLetters[2], { // 'r' (from 'our')
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    duration: 3,
                    ease: "power3.out"
                }, 0.1)
                .to(workLetters[0], { // 'w'
                    y: 40,
                    rotation: 0,
                    scale: 1,
                    duration: 3,
                    ease: "power3.out"
                }, 0.2)
                .to(workLetters[1], { // 'o'
                    y: 40,
                    rotation: 0,
                    scale: 1,
                    duration: 3,
                    ease: "power3.out"
                }, 0.3)
                .to(workLetters[2], { // 'r'
                    y: 40,
                    rotation: 0,
                    scale: 1,
                    duration: 3,
                    ease: "power3.out"
                }, 0.4)
                .to(workLetters[3], { // 'k'
                    y: 40,
                    rotation: 0,
                    scale: 1,
                    duration: 3,
                    ease: "power3.out"
                }, 0.5);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className='relative h-screen mt-[150px]'>
            <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden box z-3">
                <div className='gridContainer absolute top-[50px] -z-10'>
                    <p className="smallTitle text-xl text-zinc-700"><strong>Our clients —</strong> are entrepreneurs, community change-makers &amp; corporate brands tackling complexity.</p>
                </div>
                <div
                    ref={titleRef}
                    className="text-6xl md:text-8xl lg:text-[220px] font-bold select-none uppercase roboto-condensed tracking-tigh Our_Work_Title "
                    style={{
                        lineHeight: '1'
                    }}
                >
                    <span className="inline-block mr-2">
                        <span className="inline-block our-letter">o</span>
                        <span className="inline-block our-letter">u</span>
                        <span className="inline-block our-letter">r</span>
                    </span>
                    <span className="inline-block ml-4">
                        <span className="inline-block work-letter">w</span>
                        <span className="inline-block work-letter">o</span>
                        <span className="inline-block work-letter">r</span>
                        <span className="inline-block work-letter">k</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OurWorkAnimation;