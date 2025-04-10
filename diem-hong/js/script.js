document.addEventListener('DOMContentLoaded', function() {
  // Loading Screen
  setTimeout(function() {
      document.querySelector('.loading-screen').style.opacity = '0';
      setTimeout(function() {
          document.querySelector('.loading-screen').style.display = 'none';
      }, 500);
  }, 1500);

  // Initialize AOS Animation
  AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
  });

  // Sticky Navigation
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          document.querySelector('.navbar').classList.add('sticky');
      } else {
          document.querySelector('.navbar').classList.remove('sticky');
      }

      // Back to Top Button
      if (window.scrollY > 300) {
          document.querySelector('.back-to-top').classList.add('active');
      } else {
          document.querySelector('.back-to-top').classList.remove('active');
      }
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 70,
                  behavior: 'smooth'
              });

              // Close mobile menu if open
              const navbarCollapse = document.querySelector('.navbar-collapse');
              if (navbarCollapse.classList.contains('show')) {
                  navbarCollapse.classList.remove('show');
              }
          }
      });
  });

  // Countdown Timer
  const weddingDate = new Date('October 20, 2023 09:00:00').getTime();

  const countdown = setInterval(function() {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
      document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
      document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

      if (distance < 0) {
          clearInterval(countdown);
          document.querySelector('.countdown-container').innerHTML = '<h3>Chúng tôi đã kết hôn!</h3>';
      }
  }, 1000);

  // Scroll Down Button
  document.querySelector('.scroll-down').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: document.querySelector('#couple').offsetTop - 70,
          behavior: 'smooth'
      });
  });

  // Back to Top Button
  document.querySelector('.back-to-top').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // RSVP Form Submission
  const rsvpForm = document.getElementById('rsvpForm');
  if (rsvpForm) {
      rsvpForm.addEventListener('submit', function(e) {
          e.preventDefault();

          // Here you would typically send the form data to a server
          // For demo purposes, we'll just show an alert
          alert('Cảm ơn bạn đã phản hồi! Chúng tôi rất mong được gặp bạn trong ngày trọng đại.');

          // Reset form
          this.reset();
      });
  }

  // Lightbox for Gallery
//   lightbox.option({
//       'resizeDuration': 200,
//       'wrapAround': true,
//       'albumLabel': 'Ảnh %1 / %2'
//   });
});