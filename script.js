// Image slider 

document.addEventListener('DOMContentLoaded', function() {
    const sliderImages = document.querySelector('.slider-images');
    const images = document.querySelectorAll('.slider-images img');
    let currentIndex = 0;
    const totalImages = images.length;
    const intervalTime = 3000; 
  
    function changeSlide() {
      currentIndex = (currentIndex + 1) % totalImages;
      const offset = -currentIndex * 100; 
      sliderImages.style.transform = `translateX(${offset}vw)`;
    }
  
    setInterval(changeSlide, intervalTime);
  });

  // Scrool- Up
document.addEventListener('DOMContentLoaded', function() {
    const scrollUpButton = document.querySelector('.scroll-up');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) { 
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    });
    scrollUpButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // QR Code for Donation open close

  document.getElementById('qrbtn').addEventListener('click', function() {
    document.getElementById('qrcode').style.display = 'flex';
});

document.getElementById('closeQRCodeBtn').addEventListener('click', function() {
    document.getElementById('qrcode').style.display = 'none';
    window.location.href = '/Donation/donation.html'; 
});

window.onclick = function(event) {
    if (event.target === document.getElementById('qrcode')) {
        document.getElementById('qrcode').style.display = 'none';
        window.location.href = '/Donation/donation.html';
    }
}


// Show QR COde on press 
const qrCodeContainer = document.querySelector('.qr-code-container');
    const lightbox = document.getElementById('lightbox');

    qrCodeContainer.addEventListener('click', function() {
        qrCodeContainer.classList.toggle('active');
        lightbox.classList.toggle('active');
    });

    function toggleLightbox() {
        qrCodeContainer.classList.remove('active');
        lightbox.classList.remove('active');
    }


    // 
    // 
    // 
// Scrool Up
  document.addEventListener('DOMContentLoaded', function() {
    const scrollUpButton = document.querySelector('.scroll-up');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) { 
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    });
  
    scrollUpButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });