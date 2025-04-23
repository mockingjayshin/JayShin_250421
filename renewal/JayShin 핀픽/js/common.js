// js/common.js

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // 전체 섹션 fade-in
  gsap.utils.toArray('.section').forEach(sec => {
    gsap.to(sec, {
      scrollTrigger: {
        trigger: sec,
        start: 'top 85%'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  // Hero 텍스트 등장
  gsap.from('.hero-content h1, .hero-content p, .btn-primary', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2
  });

  // 카드 & 스크린 플로팅
  gsap.utils.toArray('.card, .screen').forEach(el => {
    gsap.to(el, {
      y: '+=10',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'sine.inOut'
    });
  });
});
