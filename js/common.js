


document.addEventListener('DOMContentLoaded', () => {
    // 텍스트 페이드 인
    gsap.utils.toArray('.hero-title, .hero-sub, .intro-text, .intro-sub, .strength-text, .contact-box h2, .contact-box p, .btn-inquire').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });
    });
  
    // 이미지 흔들기
    gsap.utils.toArray('.drops img, .bird, .renewal-item img').forEach(img => {
      gsap.to(img, {
        y: '+=10',
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut'
      });
    });
  
    // 클릭 시 튕기는 효과 (버튼용)
    const btn = document.querySelector('.btn-inquire');
    btn?.addEventListener('click', () => {
      gsap.fromTo(btn, {
        scale: 1
      }, {
        scale: 1.2,
        yoyo: true,
        repeat: 1,
        duration: 0.2,
        ease: 'back.out(2)'
      });
    });
  
    // 텍스트 하이라이트 (배경 슬라이딩)
    gsap.utils.toArray('.highlight').forEach(el => {
      gsap.fromTo(el, {
        backgroundSize: '0% 100%',
        backgroundPosition: '0% 50%'
      }, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        },
        backgroundSize: '100% 100%',
        backgroundPosition: '100% 50%',
        duration: 1.2,
        ease: 'power2.out'
      });
    });
  });
  