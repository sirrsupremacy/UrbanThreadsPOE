// js/app.js
const stripe = Stripe("YOUR_PUBLISHABLE_KEY"); // from Stripe Dashboard

document.getElementById("checkout-button")?.addEventListener("click", async () => {
  const response = await fetch("/create-checkout-session", { method: "POST" });
  const session = await response.json();

  // Redirect to Stripe checkout
  stripe.redirectToCheckout({ sessionId: session.id });
});
document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  const form=document.getElementById('checkoutForm'); if(form){form.addEventListener('submit',e=>{e.preventDefault();window.location.href='thankyou.html';});}
});

