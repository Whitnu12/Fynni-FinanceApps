// fynni - Main Application JavaScript

(function() {
  'use strict';

  // Analytics tracking function (placeholder for GA4)
  window.trackEvent = function(eventName, params = {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, params);
    }
    console.log('Event tracked:', eventName, params);
  };

  // Mobile Menu Toggle with proper accessibility
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      
      // Trap focus when menu is open
      if (!isExpanded) {
        const firstFocusable = mobileMenu.querySelector('a, button');
        if (firstFocusable) firstFocusable.focus();
      } else {
        mobileMenuBtn.focus();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenuBtn.click();
      }
    });
  }

  // FAQ Accordion with proper ARIA
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach((item, index) => {
    const button = item.querySelector('.faq-question button');
    const answer = item.querySelector('.faq-answer');
    
    if (button && answer) {
      button.addEventListener('click', () => {
        const isOpen = answer.classList.contains('open');
        const chevron = button.querySelector('.faq-chevron');
        
        // Close all other items
        faqItems.forEach((otherItem, otherIndex) => {
          if (otherIndex !== index) {
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherButton = otherItem.querySelector('.faq-question button');
            const otherChevron = otherButton?.querySelector('.faq-chevron');
            
            if (otherAnswer) otherAnswer.classList.remove('open');
            if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
            if (otherChevron) otherChevron.classList.remove('rotated');
          }
        });
        
        // Toggle current item
        answer.classList.toggle('open');
        button.setAttribute('aria-expanded', !isOpen);
        if (chevron) chevron.classList.toggle('rotated');
      });
    }
  });

  // Intersection Observer for fade-up animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });

  // Cookie Banner with localStorage persistence
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAcceptBtn = document.getElementById('cookie-accept');
  const cookieDeclineBtn = document.getElementById('cookie-decline');

  function showCookieBanner() {
    if (!localStorage.getItem('cookie-consent')) {
      setTimeout(() => {
        if (cookieBanner) cookieBanner.classList.remove('cookie-hidden');
      }, 2000);
    }
  }

  function hideCookieBanner(consent) {
    if (cookieBanner) {
      cookieBanner.classList.add('cookie-hidden');
      localStorage.setItem('cookie-consent', consent);
      trackEvent('cookie_consent', { consent });
    }
  }

  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener('click', () => hideCookieBanner('accepted'));
  }

  if (cookieDeclineBtn) {
    cookieDeclineBtn.addEventListener('click', () => hideCookieBanner('declined'));
  }

  // Initialize cookie banner
  showCookieBanner();

  // Smooth scroll for anchor links with offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenuBtn.click();
          }

          // Track navigation
          trackEvent('nav_click', { section: href.substring(1) });
        }
      }
    });
  });

  // Performance monitoring
  if (window.performance && window.performance.getEntriesByType) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navEntry = performance.getEntriesByType('navigation')[0];
        if (navEntry) {
          const loadTime = navEntry.loadEventEnd - navEntry.startTime;
          console.log('Page load time:', loadTime.toFixed(2), 'ms');
          trackEvent('page_load_performance', { loadTime });
        }
      }, 0);
    });
  }

})();
