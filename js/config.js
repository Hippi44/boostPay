/**
 * Boost Pay Store — глобальная конфигурация
 * Все CTA ведут в мессенджеры (без регистрации и оплаты на сайте)
 */
const BOOSTPAY_CONFIG = {
  messengers: {
    telegram: 'https://t.me/Boostepaystore',
    whatsapp: 'https://wa.me/79999999999',
    vk: 'https://vk.me/boostpayy',
  },

  /** Основная CTA-кнопка → Telegram */
  primaryCta: 'https://t.me/Boostepaystore',

  /** Кнопка «Поддержка 24/7» → Telegram */
  support: 'https://t.me/Boostepaystore',

  /** Соцсети в футере */
  social: {
    vk: 'https://vk.me/boostpayy',
    telegram: 'https://t.me/Boostepaystore',
    youtube: 'https://t.me/Boostepaystore',
  },
};
