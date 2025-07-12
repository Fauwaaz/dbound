import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export const AnimatedText = ({ text, className, link }: { text: string; className?: string; link?: any }) => {
    const textRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (!textRef.current) return;

        // Split text into individual letters
        const text = textRef.current;
        const textContent = text.textContent || '';

        // Clear the original text and create spans for each letter
        text.innerHTML = '';

        textContent.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // Non-breaking space for spaces
            span.className = 'letter';
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(0px)';
            text.appendChild(span);
        });

        const letters = text.querySelectorAll('.letter');

        // Create timeline for animation
        timelineRef.current = gsap.timeline({ paused: true });

        // Set initial state - letters are at normal position
        gsap.set(letters, { y: 0 });

        // Create the animation
        timelineRef.current
            .to(letters, {
                y: -100, // Move up and out of view
                opacity: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power3.in"
            })
            .set(letters, { y: 100 }) // Instantly move to bottom
            .to(letters, {
                y: 0, // Animate back to normal position
                opacity: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "power3.out"
            });

        // Mouse enter event
        const handleMouseEnter = () => {
            timelineRef.current?.restart();
        };

        // Mouse leave event
        const handleMouseLeave = () => {
            timelineRef.current?.reverse();
        };

        text.addEventListener('mouseenter', handleMouseEnter);
        text.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            text.removeEventListener('mouseenter', handleMouseEnter);
            text.removeEventListener('mouseleave', handleMouseLeave);
            timelineRef.current?.kill();
        };
    }, [text]);

    return (
        <Link href={link} className="no-underline text-current">
            <div
                ref={textRef}
                className={`cursor-pointer select-none hover:scale-110 transition-transform duration-300 ${className}`}
                style={{
                    lineHeight: '1.2',
                    overflow: 'hidden'
                }}
            >

                {text}
            </div>
        </Link>
    );
};