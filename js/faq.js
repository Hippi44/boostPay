/**
 * Boost Pay Store — FAQ-аккордеон
 * Инициализация после верстки секции FAQ
 */

function initFaq() {
  const items = document.querySelectorAll('[data-faq-item]');

  items.forEach((item) => {
    const trigger = item.querySelector('[data-faq-trigger]');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((other) => other.classList.remove('is-open'));

      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initFaq);
