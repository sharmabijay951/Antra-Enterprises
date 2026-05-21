const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const closeNav = document.getElementById('closeNav');

  // Menu kholna aur Hamburger ko 'X' banana
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
    menuBtn.classList.add('active'); // Ye class CSS mein 'X' banayegi
  });

  // Menu band karna aur wapas 3 lines banana
  closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuBtn.classList.remove('active');
  });

  // Menu ke kisi link par click karne par menu auto-close hona
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuBtn.classList.remove('active');
    });
  });