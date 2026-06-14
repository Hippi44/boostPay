/**
 * Boost Pay Store — карусели (игры, отзывы)
 * Инициализация после верстки соответствующих секций
 */

function initCarousel(rootSelector, options = {}) {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const track = root.querySelector('[data-carousel-track]');
  const prevBtn = root.querySelector('[data-carousel-prev]');
  const nextBtn = root.querySelector('[data-carousel-next]');

  if (!track || !prevBtn || !nextBtn) return;

  const getScrollAmount = () => {
    const firstCard = track.querySelector('.games__card, [data-carousel-item]');
    if (!firstCard) return options.scrollAmount ?? 280;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 16;
    return cardWidth + gap;
  };

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCarousel('[data-carousel="games"]');
  initCarousel('[data-carousel="reviews"]');
});
