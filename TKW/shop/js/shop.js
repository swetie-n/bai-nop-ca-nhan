/* NHI's Shop - dữ liệu, ngôn ngữ, tìm kiếm gợi ý, giỏ hàng */
const P = [
  { id: 'dienthoai', img: 'dienthoai.png', price: 1019.9,
    vi: ['Điện thoại', 'Điện thoại ABC Series X: thiết kế mỏng nhẹ, màn hình tràn viền sắc nét, camera đa ống kính chống rung quang học và pin dùng cả ngày. Phù hợp học sinh, sinh viên và nhân viên văn phòng.'],
    en: ['Phone', 'ABC Series X phone: slim design, sharp edge-to-edge display, multi-lens camera with optical stabilization and all-day battery. Great for students and office workers.'] },
  { id: 'laptop', img: 'laptop.png', price: 5099,
    vi: ['Laptop', 'Laptop ABC Pro 15: vi xử lý đa nhân, card đồ họa riêng, RAM lớn, màn hình Full HD hoặc 4K. Mượt từ học tập, văn phòng đến dựng video và chơi game.'],
    en: ['Laptop', 'ABC Pro 15 laptop: multi-core CPU, dedicated graphics, plenty of RAM and a Full HD or 4K display. Smooth for study, office work, video editing and gaming.'] },
  { id: 'tablet', img: 'tablet.png', price: 1999,
    vi: ['Tablet', 'Tablet ABC Pad 10: màn hình 10 inch độ phân giải cao, hỗ trợ bút stylus, pin lâu, mỏng nhẹ. Lý tưởng để xem phim, đọc sách, vẽ và học trực tuyến.'],
    en: ['Tablet', 'ABC Pad 10 tablet: sharp 10-inch screen, stylus support, long battery life and a light body. Ideal for movies, reading, drawing and online learning.'] },
  { id: 'dieuhoa', img: 'dieuhoa.png', price: 20099,
    vi: ['Điều hòa', 'Điều hòa ABC CoolMaster 12000 BTU: tiết kiệm điện, vận hành êm, lọc không khí, khử mùi và điều khiển qua ứng dụng điện thoại.'],
    en: ['Air conditioner', 'ABC CoolMaster 12000 BTU air conditioner: energy-saving, quiet, with air filtering, deodorizing and phone-app control.'] },
  { id: 'tv', img: 'tv.png', price: 39999,
    vi: ['Tivi', 'Tivi ABC Vision 55 inch 4K UHD: hệ điều hành thông minh, âm thanh vòm, viền mỏng, kết nối HDMI, USB, Wi-Fi và Bluetooth.'],
    en: ['TV', 'ABC Vision 55-inch 4K UHD TV: smart OS, surround sound, slim bezels, with HDMI, USB, Wi-Fi and Bluetooth.'] },
  { id: 'tulanh', img: 'tulanh.png', price: 15555.9,
    vi: ['Tủ lạnh', 'Tủ lạnh ABC FreezeMax 300L: làm lạnh nhanh, tiết kiệm điện, ngăn chứa rộng, khử mùi kháng khuẩn. Phù hợp gia đình 3-5 người.'],
    en: ['Refrigerator', 'ABC FreezeMax 300L fridge: fast cooling, energy-saving, roomy compartments and antibacterial deodorizing. Fits families of 3-5.'] }
];

const D = {
  vi: { tagline: 'Công nghệ cho mọi nhà', home: 'Trang chủ', about: 'Giới thiệu', products: 'Sản phẩm', contact: 'Liên hệ',
    account: 'Tài khoản', login: 'Đăng nhập', register: 'Đăng ký', search: 'Tìm sản phẩm...', cats: 'Chủng loại', cart: 'Giỏ hàng',
    items: 'sản phẩm', total: 'Tổng tiền', clear: 'Xóa giỏ hàng', info: 'Thông tin sản phẩm', add: 'Thêm vào giỏ', added: 'Đã thêm vào giỏ',
    brand: 'Thương hiệu', warranty: 'Bảo hành', months: 'tháng', price: 'Giá', none: 'Không tìm thấy sản phẩm phù hợp.',
    results: 'Kết quả cho', all: 'Tất cả sản phẩm', hello: 'Chào mừng bạn đến với NHI’s Shop', helloText: 'Chọn một chủng loại hoặc tìm sản phẩm bạn cần.',
    featured: 'Sản phẩm nổi bật', cName: 'Họ và tên', cEmail: 'Email', cMsg: 'Nội dung góp ý', cSend: 'Gửi liên hệ',
    cNameP: 'Nhập họ và tên của bạn', cEmailP: 'Nhập email liên hệ', cMsgP: 'Nhập nội dung góp ý hoặc liên hệ...', cTitle: 'Liên hệ với NHI’s Shop',
    aboutText: 'NHI’s Shop là cửa hàng điện tử trực tuyến mô phỏng, được thiết kế cho bài thực hành thiết kế web. Cửa hàng cung cấp điện thoại, laptop, tablet, điều hòa, tivi và tủ lạnh.' },
  en: { tagline: 'Technology for every home', home: 'Home', about: 'About', products: 'Products', contact: 'Contact',
    account: 'Account', login: 'Log in', register: 'Sign up', search: 'Search products...', cats: 'Categories', cart: 'Cart',
    items: 'items', total: 'Total', clear: 'Clear cart', info: 'Product details', add: 'Add to cart', added: 'Added to cart',
    brand: 'Brand', warranty: 'Warranty', months: 'months', price: 'Price', none: 'No matching products found.',
    results: 'Results for', all: 'All products', hello: 'Welcome to NHI’s Shop', helloText: 'Pick a category or search for what you need.',
    featured: 'Featured products', cName: 'Full name', cEmail: 'Email', cMsg: 'Your message', cSend: 'Send message',
    cNameP: 'Enter your full name', cEmailP: 'Enter your email', cMsgP: 'Write your feedback or question...', cTitle: 'Contact NHI’s Shop',
    aboutText: 'NHI’s Shop is a demo online electronics store built for a web design course. It offers phones, laptops, tablets, air conditioners, TVs and refrigerators.' }
};

const $ = (s, r = document) => r.querySelector(s);
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLowerCase();
const money = n => '$' + n.toLocaleString('en-US', { maximumFractionDigits: 2 });
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

let lang = load('nhishop-lang', 'vi');
const T = k => D[lang][k] || k;
const pname = p => p[lang][0];
const body = document.body;
const page = body.dataset.page;
const find = id => P.find(p => p.id === id);

/* ---------- Giỏ hàng ---------- */
const getCart = () => load('nhishop-cart', {});
function cartStats() {
  const c = getCart();
  let n = 0, sum = 0;
  for (const id in c) { const p = find(id); if (p) { n += c[id]; sum += c[id] * p.price; } }
  return { n, sum };
}
function drawCart() {
  const { n, sum } = cartStats();
  $('#cart-count').textContent = n + ' ' + T('items');
  $('#cart-total').textContent = money(sum);
}
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.id);
  toast.id = setTimeout(() => t.classList.remove('show'), 1800);
}

/* ---------- Khung trang ---------- */
const block = (title, html, cls = '') =>
  `<section class="blk ${cls}"><h2 class="pill">${title}</h2><div class="box">${html}</div></section>`;

function shell() {
  const nav = [['home', 'trangchu'], ['about', 'gioithieu'], ['products', 'sanpham'], ['contact', 'lienhe']]
    .map(([k, f]) => `<li class="nav-item"><a class="nav-link ${page === f ? 'active' : ''}" href="${f}.html">${T(k)}</a></li>`).join('');
  const cats = P.map(p => `<a href="${p.id}.html" class="list-group-item list-group-item-action">${pname(p)}</a>`).join('');
  $('#app').innerHTML = `
  <div class="sheet">
    <header class="top">
      <div><h1 class="brand">NHI’s Shop</h1><p class="tagline">${T('tagline')}</p></div>
      <div class="langs" role="group" aria-label="Language">
        <button class="lang ${lang === 'vi' ? 'on' : ''}" data-lang="vi">VI</button>
        <button class="lang ${lang === 'en' ? 'on' : ''}" data-lang="en">EN</button>
      </div>
    </header>
    <nav class="navbar navbar-expand-lg px-0">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Menu"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav me-auto">${nav}
          <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${T('account')}</a>
            <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">${T('login')}</a></li><li><a class="dropdown-item" href="#">${T('register')}</a></li></ul></li>
        </ul>
        <form class="search" id="sform" role="search" autocomplete="off">
          <input id="q" type="search" placeholder="${T('search')}" aria-label="${T('search')}">
          <ul id="sugg" class="sugg" hidden></ul>
        </form>
      </div>
    </nav>
    <div class="row g-4 mt-1">
      <main class="col-lg-9" id="main"></main>
      <aside class="col-lg-3">
        ${block(T('cart'), `<p class="mb-1"><strong id="cart-count"></strong></p><p class="mb-1">${T('total')}: <strong class="money" id="cart-total"></strong></p><a href="#" id="clear" class="small">${T('clear')}</a>`)}
        ${block(T('cats'), `<div class="list-group list-group-flush cats">${cats}</div>`)}
      </aside>
    </div>
  </div>
  <div id="toast" class="toast-msg" role="status"></div>`;
}

/* ---------- Nội dung từng trang ---------- */
const pcard = p => `<div class="col-lg-4 col-sm-6"><a class="pcard" href="${p.id}.html">
  <span class="pill">${pname(p)}</span><div class="box"><img src="../images/${p.img}" alt="${pname(p)}"><div class="money">${money(p.price)}</div></div></a></div>`;

function grid(q = '') {
  const k = norm(q.trim());
  const list = k ? P.filter(p => norm(p.vi[0] + ' ' + p.en[0] + ' abc').includes(k)) : P;
  const head = k ? `<p class="mb-3">${T('results')} “${q.trim()}”: <strong>${list.length}</strong></p>` : '';
  $('#grid').innerHTML = head + (list.length ? `<div class="row g-4">${list.map(pcard).join('')}</div>` : `<p>${T('none')}</p>`);
}

function content() {
  const m = $('#main');
  if (page === 'trangchu') {
    m.innerHTML = `<div class="hero"><p class="hello">Hello!</p><div><h2 class="h4 mb-1">${T('hello')}</h2><p class="mb-0">${T('helloText')}</p></div></div>
      <h2 class="pill mt-4">${T('featured')}</h2><div class="mt-4 pt-2" id="grid"></div>`;
    grid();
  } else if (page === 'sanpham') {
    m.innerHTML = `<h2 class="pill">${T('all')}</h2><div class="mt-4 pt-2" id="grid"></div>`;
    const q = new URLSearchParams(location.search).get('q') || '';
    $('#q').value = q;
    grid(q);
  } else if (page === 'product') {
    const p = find(body.dataset.id);
    m.innerHTML = `<div class="row g-4"><div class="col-md-5"><div class="box detail-img"><img src="../images/${p.img}" alt="${pname(p)}"></div></div>
      <div class="col-md-7">${block(T('info'), `<h3 class="h5">${pname(p)}</h3><p>${p[lang][1]}</p>
        <ul class="list-unstyled"><li>${T('brand')}: ABC</li><li>${T('warranty')}: 24 ${T('months')}</li><li>${T('price')}: <strong class="money">${money(p.price)}</strong></li></ul>
        <button class="btn-pill add" data-id="${p.id}">${T('add')}</button>`)}</div></div>`;
    document.title = pname(p) + ' - NHI’s Shop';
  } else if (page === 'lienhe') {
    m.innerHTML = block(T('cTitle'), `<form id="formGopy" method="post" action="https://script.google.com/macros/s/AKfycbx-RjkAAhLlk7IHQe3QrreulFyBS-mGgkbueELghBaprV8tGyHnV5M4sAv8HFtGtj5T/exec">
      <label class="form-label" for="hoten">${T('cName')}</label><input class="form-control mb-3" id="hoten" name="hoten" placeholder="${T('cNameP')}" required>
      <label class="form-label" for="email">${T('cEmail')}</label><input class="form-control mb-3" type="email" id="email" name="email" placeholder="${T('cEmailP')}" required>
      <label class="form-label" for="noidung">${T('cMsg')}</label><textarea class="form-control mb-3" id="noidung" name="noidung" rows="4" placeholder="${T('cMsgP')}" required></textarea>
      <button class="btn-pill" type="submit">${T('cSend')}</button></form>`);
  } else if (page === 'gioithieu') {
    m.innerHTML = block(T('about'), `<p class="mb-0">${T('aboutText')}</p>`);
  }
}

/* ---------- Tìm kiếm + gợi ý ---------- */
function bindSearch() {
  const q = $('#q'), box = $('#sugg');
  const show = () => {
    const k = norm(q.value.trim());
    const hits = k ? P.filter(p => norm(p.vi[0] + ' ' + p.en[0]).includes(k)).slice(0, 5) : [];
    box.innerHTML = hits.map(p => `<li><a href="${p.id}.html"><img src="../images/${p.img}" alt=""><span>${pname(p)}</span><b>${money(p.price)}</b></a></li>`).join('');
    box.hidden = !hits.length;
    if (page === 'sanpham') grid(q.value);
  };
  q.addEventListener('input', show);
  q.addEventListener('focus', show);
  $('#sform').addEventListener('submit', e => {
    e.preventDefault();
    if (page === 'sanpham') { grid(q.value); box.hidden = true; }
    else location.href = 'sanpham.html?q=' + encodeURIComponent(q.value.trim());
  });
}

function render() {
  document.documentElement.lang = lang;
  shell(); content(); bindSearch(); drawCart();
}

document.addEventListener('click', e => {
  const l = e.target.closest('.lang');
  if (l) { lang = l.dataset.lang; save('nhishop-lang', lang); render(); return; }
  const a = e.target.closest('.add');
  if (a) {
    const c = getCart();
    c[a.dataset.id] = (c[a.dataset.id] || 0) + 1;
    save('nhishop-cart', c);
    drawCart();
    toast(T('added') + ' (' + cartStats().n + ' ' + T('items') + ')');
    return;
  }
  if (e.target.id === 'clear') { e.preventDefault(); save('nhishop-cart', {}); drawCart(); return; }
  if (!e.target.closest('#sform')) $('#sugg').hidden = true;
});

render();
