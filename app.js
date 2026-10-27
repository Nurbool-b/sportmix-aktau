/**
 * SPORTMIX AKTAU — HIGH CONVERTING E-COMMERCE ENGINE
 * WhatsApp: +7 778 591 75 59
 * Address: 17 mkr, 18, LCD "Ak Zhaiyk"
 */

const SPORTMIX_PRODUCTS = [
  {
    id: 1,
    name_kk: "Sportmix Dri-FIT Training Tracksuit (Black & Volt)",
    name_ru: "Спортивный Костюм Sportmix Dri-FIT (Черный/Неон)",
    cat: "suits",
    price: 24900,
    old_price: 31000,
    tag: "hit",
    tag_kk: "ХИТ САТЫЛЫМ",
    tag_ru: "ХИТ ПРОДАЖ",
    sizes: ["S", "M", "L", "XL", "2XL"],
    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name_kk: "Tech Fleece Athletic Sport Suit (Dark Heather Gray)",
    name_ru: "Костюм Tech Fleece Athletic (Темно-серый)",
    cat: "suits",
    price: 26500,
    old_price: 34000,
    tag: "hit",
    tag_kk: "ТОП ТАҢДАУ",
    tag_ru: "ТОП ВЫБОР",
    sizes: ["M", "L", "XL", "2XL"],
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name_kk: "Sportmix Ultra Boost Pro Running Sneakers",
    name_ru: "Кроссовки Sportmix Ultra Boost Pro",
    cat: "shoes",
    price: 23500,
    old_price: 29000,
    tag: "new",
    tag_kk: "ЖАҢА ТОПТАМА",
    tag_ru: "НОВАЯ МОДЕЛЬ",
    sizes: ["40", "41", "42", "43", "44", "45"],
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name_kk: "Retro Court Low Streetwear Sneakers White",
    name_ru: "Кроссовки Retro Court Low Белые",
    cat: "shoes",
    price: 21900,
    old_price: 27000,
    tag: "hit",
    tag_kk: "ХИТ",
    tag_ru: "ХИТ",
    sizes: ["40", "41", "42", "43", "44"],
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name_kk: "Windstopper Water-Repellent Sport Windbreaker",
    name_ru: "Ветрозащитная Спортивная Ветровка Windstopper",
    cat: "jackets",
    price: 19500,
    old_price: 25000,
    tag: "sale",
    tag_kk: "-22% ЖЕҢІЛДІК",
    tag_ru: "-22% СКИДКА",
    sizes: ["S", "M", "L", "XL", "2XL"],
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    name_kk: "Heavyweight Boxy Fleece Hoodie (All Black)",
    name_ru: "Плотный Спортивный Худи Heavyweight Black",
    cat: "hoodies",
    price: 17500,
    old_price: 22000,
    tag: "hit",
    tag_kk: "ТАҢДАУЛЫ",
    tag_ru: "ИЗБРАННОЕ",
    sizes: ["M", "L", "XL", "2XL"],
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    name_kk: "Waterproof Tactical Gym Duffel & Crossbody Bag",
    name_ru: "Спортивная Водостойкая Сумка Sportmix Duffel",
    cat: "bags",
    price: 11900,
    old_price: 16000,
    tag: "new",
    tag_kk: "АКСЕССУАР",
    tag_ru: "АКСЕССУАР",
    sizes: ["One Size"],
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    name_kk: "Thermal Pro Compression Set (Longsleeve + Tights)",
    name_ru: "Компрессионный Комплект Термобелья Pro",
    cat: "suits",
    price: 15500,
    old_price: 19000,
    tag: "sale",
    tag_kk: "АКЦИЯ",
    tag_ru: "АКЦИЯ",
    sizes: ["M", "L", "XL"],
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80"
  }
];

const I18N_DATA = {
  kk: {
    nav_catalog: "Каталог",
    nav_about: "Дүкен жайлы",
    nav_delivery: "Жеткізу & Төлем",
    nav_contacts: "Мекенжай & 2GIS",
    hero_sub: "«SPORTMIX» — сапалы спорттық костюмдер, жүгіруге және күнделікті киіске арналған премиум кроссовкалар, желден қорғайтын ветровкалар мен аксессуарлар.",
    hero_btn_cat: "Каталогты таңдау",
    cat_badge: "SPORTMIX КАТАЛОГЫ",
    cat_title: "СПОРТТЫҚ ТАУАРЛАР ЖИЫНТЫҒЫ",
    cat_desc: "Қажетті санатты таңдаңыз немесе WhatsApp арқылы тапсырыс беріңіз",
    tab_all: "Барлығы",
    tab_suits: "Спорттық костюмдер",
    tab_shoes: "Кроссовкалар",
    tab_jackets: "Ветровкалар & Күртешелер",
    tab_hoodies: "Худи & Свитшоттар",
    tab_bags: "Спорттық сөмкелер",
    add_btn: "Себетке",
    buy_btn: "WhatsApp алу"
  },
  ru: {
    nav_catalog: "Каталог",
    nav_about: "О магазине",
    nav_delivery: "Доставка и Оплата",
    nav_contacts: "Контакты & 2GIS",
    hero_sub: "«SPORTMIX» — качественные спортивные костюмы, премиальные кроссовки для бега и города, ветрозащитные куртки и аксессуары.",
    hero_btn_cat: "Выбрать в каталоге",
    cat_badge: "КАТАЛОГ SPORTMIX",
    cat_title: "АССОРТИМЕНТ ТОВАРОВ",
    cat_desc: "Выберите категорию или оформите быстрый заказ в WhatsApp",
    tab_all: "Все",
    tab_suits: "Спортивные костюмы",
    tab_shoes: "Кроссовки",
    tab_jackets: "Ветровки и куртки",
    tab_hoodies: "Худи и свитшоты",
    tab_bags: "Спортивные сумки",
    add_btn: "В корзину",
    buy_btn: "В WhatsApp"
  }
};

let currentLang = 'kk';
let activeCat = 'all';
let searchQuery = '';
let currentSort = 'pop';
let cart = [];

// Init cart
try {
  const c = localStorage.getItem('sportmix_cart');
  if (c) cart = JSON.parse(c);
} catch (e) {}

// Render
function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let filtered = SPORTMIX_PRODUCTS.filter(item => {
    const matchCat = activeCat === 'all' || item.cat === activeCat;
    const name = currentLang === 'kk' ? item.name_kk : item.name_ru;
    const matchSearch = name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (currentSort === 'cheap') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'expensive') {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Тауар табылмады</div>`;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const name = currentLang === 'kk' ? item.name_kk : item.name_ru;
    const tagText = currentLang === 'kk' ? item.tag_kk : item.tag_ru;
    const tagClass = item.tag === 'hit' ? 'tag-hit' : (item.tag === 'new' ? 'tag-new' : 'tag-sale');
    const defaultSize = item.sizes[0];

    return `
      <div class="product-item">
        <div class="p-img-box">
          <span class="p-tag ${tagClass}">${tagText}</span>
          <img src="${item.img}" alt="${name}" loading="lazy">
        </div>
        <div class="p-body">
          <div class="p-category">${item.cat}</div>
          <h3 class="p-name">${name}</h3>
          <div class="p-sizes">
            <span style="font-size: 0.72rem; color: var(--text-muted);">${currentLang === 'kk' ? 'Өлшемдер:' : 'Размеры:'}</span>
            ${item.sizes.map(s => `<span class="size-badge">${s}</span>`).join('')}
          </div>
          <div class="p-price-row">
            <span class="p-price">${item.price.toLocaleString('ru-RU')} ₸</span>
            <span class="p-old">${item.old_price.toLocaleString('ru-RU')} ₸</span>
          </div>
          <div class="p-actions">
            <button class="btn-card-add" onclick="addToCart(${item.id}, '${defaultSize}')">
              <i class="fa-solid fa-cart-plus"></i> ${I18N_DATA[currentLang].add_btn}
            </button>
            <button class="btn-card-buy" onclick="orderWhatsAppDirect('${name}', '${item.price.toLocaleString('ru-RU')} ₸', '${defaultSize}')">
              <i class="fa-brands fa-whatsapp"></i> ${I18N_DATA[currentLang].buy_btn}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCat(cat) {
  activeCat = cat;
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
  renderCatalog();
}

function handleSearch(q) {
  searchQuery = q;
  renderCatalog();
}

function handleSort(s) {
  currentSort = s;
  renderCatalog();
}

// Cart
function addToCart(id, size) {
  const prod = SPORTMIX_PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  const chosenSize = size || prod.sizes[0];
  const existing = cart.find(c => c.id === id && c.size === chosenSize);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: prod.id,
      name_kk: prod.name_kk,
      name_ru: prod.name_ru,
      price: prod.price,
      img: prod.img,
      size: chosenSize,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(currentLang === 'kk' ? 'Тауар себетке қосылды! 🛍️' : 'Товар добавлен в корзину! 🛍️');
}

function updateCartQty(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart();
  updateCartUI();
}

function removeCartItem(idx) {
  cart.splice(idx, 1);
  saveCart();
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem('sportmix_cart', JSON.stringify(cart));
  } catch (e) {}
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const mCountEl = document.getElementById('mobileCartCount');
  const container = document.getElementById('cartItemsContainer');
  const totalEl = document.getElementById('cartTotalVal');

  const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  if (countEl) countEl.textContent = totalCount;
  if (mCountEl) mCountEl.textContent = totalCount;
  if (totalEl) totalEl.textContent = totalPrice.toLocaleString('ru-RU') + ' ₸';

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-view">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>${currentLang === 'kk' ? 'Себетіңіз әзірге бос' : 'Ваша корзина пуста'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map((item, idx) => {
    const name = currentLang === 'kk' ? item.name_kk : item.name_ru;
    return `
      <div class="cart-line-item">
        <img src="${item.img}" alt="${name}">
        <div class="cart-line-meta">
          <div class="cart-line-title">${name}</div>
          <div class="cart-line-size">Өлшем: ${item.size}</div>
          <div class="cart-line-price">${(item.price * item.qty).toLocaleString('ru-RU')} ₸</div>
          <div class="cart-line-ctrls">
            <button class="ctrl-btn" onclick="updateCartQty(${idx}, -1)">-</button>
            <span style="font-size:0.85rem; font-weight:700;">${item.qty}</span>
            <button class="ctrl-btn" onclick="updateCartQty(${idx}, 1)">+</button>
            <button class="cart-trash" onclick="removeCartItem(${idx})"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openCart() {
  document.getElementById('cartSlideover').classList.add('active');
  document.getElementById('cartBackdrop').classList.add('active');
  updateCartUI();
}

function closeCart() {
  document.getElementById('cartSlideover').classList.remove('active');
  document.getElementById('cartBackdrop').classList.remove('active');
}

// WhatsApp Integration (Sportmix phone: +7 778 591 75 59)
function orderWhatsAppDirect(name, price, size) {
  let text = "";
  if (currentLang === 'kk') {
    text = `Сәлеметсіз бе, SPORTMIX Aktau!\n\nСайттан мына тауарға тапсырыс бергім келеді:\n` +
           `📦 Тауар: *${name}*\n` +
           `📏 Өлшемі: *${size}*\n` +
           `💰 Бағасы: *${price}*\n\n` +
           `Мекенжайым: Ақтау қаласы.\nҚолда бар ма және қашан жеткізе аласыз?`;
  } else {
    text = `Здравствуйте, SPORTMIX Aktau!\n\nХочу оформить заказ с сайта:\n` +
           `📦 Товар: *${name}*\n` +
           `📏 Размер: *${size}*\n` +
           `💰 Цена: *${price}*\n\n` +
           `Адрес доставки: г. Актау.\nЕсть ли в наличии и когда доставка?`;
  }
  const url = `https://wa.me/77785917559?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    alert(currentLang === 'kk' ? 'Себетіңіз бос!' : 'Корзина пуста!');
    return;
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const itemsList = cart.map((it, i) => {
    const name = currentLang === 'kk' ? it.name_kk : it.name_ru;
    return `${i + 1}. *${name}* (${it.size}) × ${it.qty} дана = ${(it.price * it.qty).toLocaleString('ru-RU')} ₸`;
  }).join('\n');

  let text = "";
  if (currentLang === 'kk') {
    text = `Сәлеметсіз бе, SPORTMIX Aktau!\nСайт арқылы мына тауарларға тапсырыс жасадым:\n\n` +
           `${itemsList}\n\n` +
           `💳 Жалпы сома: *${total.toLocaleString('ru-RU')} ₸*\n` +
           `📍 Қала: Ақтау (17 мкр ЖК «Ақ Жайық» немесе жеткізу)\n\n` +
           `Тапсырысты растауыңызды сұраймын!`;
  } else {
    text = `Здравствуйте, SPORTMIX Aktau!\nОформил заказ на сайте:\n\n` +
           `${itemsList}\n\n` +
           `💳 Общая сумма: *${total.toLocaleString('ru-RU')} ₸*\n` +
           `📍 Доставка по Актау / самовывоз 17 мкр ЖК «Ак Жайык»\n\n` +
           `Подтвердите, пожалуйста, заказ!`;
  }
  const url = `https://wa.me/77785917559?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Kaspi Modal
function openKaspiModal() {
  if (cart.length === 0) {
    alert(currentLang === 'kk' ? 'Себетке тауар салыңыз!' : 'Корзина пуста!');
    return;
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('kaspiTotal').textContent = total.toLocaleString('ru-RU') + ' ₸';
  document.getElementById('kaspiModal').classList.add('active');
}

function closeKaspiModal() {
  document.getElementById('kaspiModal').classList.remove('active');
}

// Size Calculator
function openSizeModal() {
  document.getElementById('sizeModal').classList.add('active');
}

function closeSizeModal() {
  document.getElementById('sizeModal').classList.remove('active');
}

function calculateSize() {
  const h = parseInt(document.getElementById('userHeight').value, 10);
  const w = parseInt(document.getElementById('userWeight').value, 10);
  if (!h || !w) return;

  let size = "L (50)";
  let note = "SPORTMIX спорттық костюмдеріне мінсіз сәйкес келеді.";

  if (w < 60 || h < 170) {
    size = "S (46)";
    note = "Ықшам дене бітіміне арналған жеңіл спорттық отырыс.";
  } else if (w <= 72 && h <= 176) {
    size = "M (48)";
    note = "Стандартты ыңғайлы спорттық өлшем.";
  } else if (w <= 84 && h <= 184) {
    size = "L (50)";
    note = "SPORTMIX-тің ең сұранысқа ие, еркін қозғалысқа арналған өлшемі.";
  } else if (w <= 95 || h <= 190) {
    size = "XL (52)";
    note = "Кең әрі массивті спорттық отырыс.";
  } else {
    size = "2XL (54)";
    note = "Еркін оверсайз өлшемі.";
  }

  document.getElementById('resSize').textContent = size;
  document.getElementById('resNote').textContent = note;
  document.getElementById('calcResult').style.display = 'block';
}

// Language Switch
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('btnKz').classList.toggle('active', lang === 'kk');
  document.getElementById('btnRu').classList.toggle('active', lang === 'ru');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (I18N_DATA[lang] && I18N_DATA[lang][k]) {
      el.textContent = I18N_DATA[lang][k];
    }
  });

  renderCatalog();
  updateCartUI();
}

// Toast
function showToast(msg) {
  const t = document.createElement('div');
  t.style.position = 'fixed';
  t.style.bottom = '80px';
  t.style.right = '20px';
  t.style.background = '#12161e';
  t.style.color = '#fff';
  t.style.border = '1px solid #ccff00';
  t.style.padding = '12px 20px';
  t.style.borderRadius = '30px';
  t.style.fontWeight = '700';
  t.style.zIndex = '9999';
  t.innerHTML = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 300);
  }, 2200);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartUI();

  // Mobile menu toggle
  const mBtn = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('.nav');
  if (mBtn && nav) {
    mBtn.addEventListener('click', () => {
      const show = nav.style.display === 'flex';
      nav.style.display = show ? 'none' : 'flex';
      if (!show) {
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '72px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#0a0c10';
        nav.style.padding = '20px';
        nav.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      }
    });
  }

  // Close modals on overlay click
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  });
});
