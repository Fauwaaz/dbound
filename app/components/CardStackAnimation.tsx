import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CardStackAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);

    const cardData = [
    {
      id: 'card1',
      bgColor: 'bg-[#d0ed97]',
      imgSrc: '/LOGO-AHV-1.png',
      imgRotate: '-10'
    },
    {
      id: 'card2',
      bgColor: 'bg-[#bbbbd3]',
      imgSrc: '/LOGO-AHV-1.png',
      imgRotate: '0'
    },
    {
      id: 'card3',
      bgColor: 'bg-[#da7e57]',
      imgSrc: '/LOGO-AHV-1.png',
      imgRotate: '5'
    },
    {
      id: 'card4',
      bgColor: 'bg-[#84a7e8]',
      imgSrc: '/LOGO-AHV-1.png',
      imgRotate: '10'
    },
    {
      id: 'card5',
      bgColor: 'bg-[#d0d9d8]',
      imgSrc: '/LOGO-AHV-1.png',
      imgRotate: '10'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current || !sectionRef.current) return;

      const cards = gsap.utils.toArray(".card") as HTMLElement[];
      const animation = gsap.timeline();
      let cardHeight = 0;

      function initCards() {
        animation.clear();
        cardHeight = cards[0].offsetHeight;

        cards.forEach((card, index) => {
          const isLast = index === cards.length + 1;

          gsap.set(card, {
            y: index * 20,
            zIndex: isLast ? cards.length + 10 : cards.length + index,
            rotate: cards.length * index * -5,
            opacity: 0,
            scale: 1 - index * 0.05,
            transformOrigin: "center center"
          });

          if (!isLast) {
            animation.to(
              card,
              {
                y: -(cardHeight + 100),
                opacity: 1,
                rotate: cards.length * index * -1,
                scale: 0.9 ,
                duration: 1,
                ease: "power2.inOut"
              },
              index * 0.5
            );
          } else {
            animation.to(
              card,
              {
                y: -300,
                rotate: cards.length * index * 0,
                scale: 0.9,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut"
              },
              index * 0.5
            );
          }
        });

      }


      // Initialize cards
      initCards();

      // Create ScrollTrigger
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        pin: containerRef.current,
        end: `+=${cardHeight * (cards.length - 1)}`, // Adjusted for proper end point
        scrub: 1,
        animation,
        pinSpacing: true,
        markers: false,
        invalidateOnRefresh: true,
        onRefresh: initCards,
        onUpdate: (self) => {
          const lastCard = cards[cards.length - 1];
          if (lastCard) {
            gsap.set(lastCard, {
              zIndex: cards.length + 10,
            });
          }
        }
      });

      const handleResize = () => {
        initCards();
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);

    }, containerRef);

    return () => ctx.revert();
  }, []);



  return (
    <div ref={containerRef} className="min-h-screen mt-[-100px]">

      <div ref={sectionRef} className="section h-screen flex flex-col items-center justify-center relative">
        <div className="text-center mb-10">
          <h1 className="text-8xl font-bold mb-4">OUR WORK</h1>
        </div>
        <div className="container mx-auto px-4 ">
          <ul ref={cardsRef} id="cards" className="relative w-full max-w-2xl mx-auto">
            {cardData.map((cardInfo, index) => (
              <li
                key={cardInfo.id}
                id={cardInfo.id}
                className={`card absolute inset-0 rounded-2xl py-2 px-2 flex items-center justify-center shadow-2xl ${cardInfo.bgColor}`}
                style={{
                  height: '200px',
                  zIndex: cardData.length - index,
                  rotate: cardInfo.imgRotate
                }}
              >
                <Image
                  src={cardInfo.imgSrc}
                  width={250}
                  height={250}
                  quality={100}
                  alt=''
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardStackAnimation;