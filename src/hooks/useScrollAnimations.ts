import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up enhanced real-time scroll animations
    const ctx = gsap.context(() => {
      // Smooth real-time section animations
      gsap.utils.toArray('[data-animate]').forEach((element: any) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            scrub: 1.2,
            fastScrollEnd: true,
            preventOverlaps: true
          }
        });
        
        tl.fromTo(element, 
          {
            y: 80,
            opacity: 0,
            scale: 0.95,
            rotationX: 10,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1,
            ease: "power3.out",
          }
        );
      });

      // Enhanced card animations with magnetic effect
      gsap.utils.toArray('[data-animate-cards]').forEach((container: any) => {
        const cards = container.querySelectorAll('[data-card]');
        gsap.fromTo(cards,
          {
            y: 100,
            opacity: 0,
            rotationY: 25,
            scale: 0.85,
          },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
              toggleActions: "play none none reverse",
            }
          }
        );

        // Add magnetic hover effect to cards
        cards.forEach((card: any) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              rotationY: 5,
              z: 50,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              rotationY: 0,
              z: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      });

      // Smooth real-time parallax
      gsap.utils.toArray('[data-parallax]').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -30,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
            refreshPriority: 1
          }
        });
      });

      // Advanced 3D text animations
      gsap.utils.toArray('[data-3d-text]').forEach((element: any) => {
        const chars = element.querySelectorAll('.char');
        gsap.fromTo(chars,
          {
            rotationX: 90,
            y: 80,
            opacity: 0,
            scale: 0.5,
          },
          {
            rotationX: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(2)",
            stagger: 0.03,
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      // Smooth scroll progress indicator
      const progressBar = document.createElement('div');
      progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, hsl(263 100% 65%), hsl(45 100% 70%));
        z-index: 9999;
        transition: width 0.1s ease;
      `;
      document.body.appendChild(progressBar);

      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          progressBar.style.width = `${self.progress * 100}%`;
        }
      });

      // Interactive button hover effects
      gsap.utils.toArray('button, .btn').forEach((button: any) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};