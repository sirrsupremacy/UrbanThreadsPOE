// util
const $ = s=>document.querySelector(s);
const params = new URLSearchParams(location.search);
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
  // Pre-fill checkout item
  if (location.pathname.endsWith('checkout.html')) {
    const sku = params.get('sku') || '';
    const name = params.get('name') || '';
    const price = params.get('price') || '';
    const set = (id,val)=>{ const el=document.getElementById(id); if(el) el.value = val; };
    set('sku', sku); set('productName', name); set('price', price);
    const form = document.getElementById('checkoutForm');
    form && form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const order = Object.fromEntries(data.entries());
      localStorage.setItem('lastOrder', JSON.stringify(order));
      window.location.href = 'thankyou.html';
    });
  }
  if (location.pathname.endsWith('thankyou.html')) {
    const pre = document.getElementById('orderOut');
    try {
      const order = JSON.parse(localStorage.getItem('lastOrder')||'{}');
      pre.textContent = JSON.stringify(order, null, 2);
    } catch(e){ pre.textContent = 'No order found.'; }
  }
});
