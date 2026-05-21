// --- MOBILE MENU PERFECT LOGIC ---
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const closeNav = document.getElementById('closeNav');

  if (menuBtn && mobileNav) {
    // Hamburger par click karne par Menu Khulega aur Band hoga (Toggle)
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      menuBtn.classList.toggle('active'); 
    });

    // Andar wale 'X' button se band karna
    if (closeNav) {
      closeNav.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuBtn.classList.remove('active');
      });
    }

    // Menu ke kisi link par click karne par auto-close
    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuBtn.classList.remove('active');
      });
    });
  }