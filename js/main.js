/**
 * Boost Pay Store — точка входа
 */
document.addEventListener('DOMContentLoaded', () => {
  initMessengerLinks();
  initHeader();
});

/**
 * Подставляет ссылки мессенджеров на все CTA-кнопки
 */
function initMessengerLinks() {
  const { primaryCta, support, social } = BOOSTPAY_CONFIG;

  document.querySelectorAll('[data-cta="primary"]').forEach((el) => {
    el.href = primaryCta;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('[data-cta="support"]').forEach((el) => {
    el.href = support;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('[data-social="vk"]').forEach((el) => {
    el.href = social.vk;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('[data-social="telegram"]').forEach((el) => {
    el.href = social.telegram;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('[data-social="whatsapp"]').forEach((el) => {
    el.href = BOOSTPAY_CONFIG.messengers.whatsapp;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });
}

/**
 * Мобильное меню и подсветка активного пункта навигации
 */
function initHeader() {
  const burger = document.getElementById('header-burger');
  const nav = document.getElementById('header-nav');
  const navLinks = document.querySelectorAll('.header__nav-link');

  if (!burger || !nav) return;

  const closeMenu = () => {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    nav.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (link.dataset.cta) return;

      navLinks.forEach((item) => item.classList.remove('is-active'));
      link.classList.add('is-active');
      closeMenu();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
    }
  });

  const sections = document.querySelectorAll('section[id]');
  const linkMap = {};
  navLinks.forEach((link) => {
    const hash = link.getAttribute('href');
    if (hash && hash.startsWith('#')) {
      linkMap[hash.slice(1)] = link;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((item) => item.classList.remove('is-active'));
          const active = linkMap[entry.target.id];
          if (active) active.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}
