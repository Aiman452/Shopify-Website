/**
 * CHICAGO PAULIE'S — Shopify Theme JavaScript
 * Native Shopify Cart API & Interactive Menu
 */

// Local fallback menu items
const defaultMenuItems = [
  {
    id: 1,
    name: "Classic Chicago Hot Dog",
    category: "dogs",
    price: 6.99,
    tag: "Bestseller",
    tagType: "tag-bestseller",
    desc: "100% Vienna Beef hot dog on a steamed S. Rosen's poppy seed bun, dragged through the garden: yellow mustard, bright green relish, freshly chopped onions, juicy red tomato wedges, crisp pickle spear, sport peppers, and a dash of celery salt.",
    ingredients: "Vienna Beef • Poppy Seed Bun • Sport Peppers • Relish",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "Original Italian Beef (Dipped)",
    category: "beef",
    price: 11.99,
    tag: "Signature",
    tagType: "tag-bestseller",
    desc: "Thinly sliced, slow-roasted seasoned beef piled high into a crusty Turano French roll, completely dipped in savory au jus gravy and topped with your choice of sweet peppers or spicy giardiniera.",
    ingredients: "Slow-Roasted Beef • French Roll • Au Jus Gravy • Giardiniera",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "Double Smash Cheesy Burger",
    category: "burgers",
    price: 10.49,
    tag: "Crowd Fav",
    tagType: "tag-bestseller",
    desc: "Two fresh USDA Choice beef patties smashed crispy with caramelized lacy edges, melted American cheese, griddled onions, house pickles, and Paulie’s secret street sauce on a toasted brioche bun.",
    ingredients: "Double Smashed Patties • American Cheese • Street Sauce",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "The Combo (Beef + Polish)",
    category: "beef",
    price: 13.99,
    tag: "Heavyweight",
    tagType: "tag-bestseller",
    desc: "A charred Maxwell Polish sausage layered inside a Turano roll, smothered with sliced Italian beef, drenched in hot au jus, and topped with fiery hot giardiniera.",
    ingredients: "Italian Beef • Polish Sausage • Hot Giardiniera • Gravy",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name: "Maxwell Street Polish Sausage",
    category: "polish",
    price: 7.99,
    tag: "Classic",
    tagType: "",
    desc: "Grilled natural-casing Polish sausage served on a warm bun, piled high with heaps of sweet caramelized grilled onions, yellow mustard, and spicy whole sport peppers.",
    ingredients: "Grilled Polish • Sweet Grilled Onions • Mustard • Peppers",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    name: "Fire-Cracker Spicy Dog",
    category: "dogs",
    price: 7.49,
    tag: "Spicy",
    tagType: "tag-spicy",
    desc: "Vienna beef dog with spicy chipotle mustard, habanero-infused neon relish, grilled jalapeños, and fiery sport peppers on a poppy seed bun.",
    ingredients: "Spicy Mustard • Jalapeños • Sport Peppers • Celery Salt",
    image: "https://images.unsplash.com/photo-1627054234594-5735cf91104e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7,
    name: "Loaded Cheese Crinkle Fries",
    category: "sides",
    price: 5.49,
    tag: "Popular",
    tagType: "",
    desc: "Golden crispy crinkle-cut fries smothered in piping-hot aged cheddar cheese sauce, bacon crumbles, and fresh chopped scallions.",
    ingredients: "Crinkle Cut Fries • Cheddar Sauce • Bacon • Scallions",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    name: "Gravy Bread (Side of Au Jus)",
    category: "sides",
    price: 3.99,
    tag: "Chicago Secret",
    tagType: "",
    desc: "A warm crusty Turano French loaf fully submerged in our slow-simmered, herb-packed Italian beef au jus gravy. Pure comfort.",
    ingredients: "Turano French Loaf • Simmered Au Jus Gravy",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 9,
    name: "Hand-Spun Chocolate Malt Shake",
    category: "drinks",
    price: 5.99,
    tag: "Sweet",
    tagType: "",
    desc: "Rich vanilla bean ice cream spun thick with Ghirardelli chocolate, malt powder, and topped with whipped cream and a cherry.",
    ingredients: "Vanilla Custard • Chocolate • Malt • Whipped Cream",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 10,
    name: "Green River Soda (Chicago Classic)",
    category: "drinks",
    price: 2.99,
    tag: "Windy City Fav",
    tagType: "",
    desc: "The authentic vintage lime-flavored soda iconic to Chicago since 1919. Served ice-cold.",
    ingredients: "Authentic Green River Lime Soda • Ice",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80"
  }
];

let cart = [];

// DOM Elements
const menuGrid = document.getElementById("menuGrid");
const filterTabs = document.querySelectorAll(".filter-tab");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartItemsList = document.getElementById("cartItemsList");
const cartCountBadge = document.getElementById("cartCountBadge");
const cartFooter = document.getElementById("cartFooter");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartSavings = document.getElementById("cartSavings");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

// Fetch Native Shopify Cart if running inside Shopify
async function syncNativeShopifyCart() {
  try {
    const res = await fetch('/cart.js');
    if (res.ok) {
      const shopifyCart = await res.json();
      if (shopifyCart.items && shopifyCart.items.length > 0) {
        cart = shopifyCart.items.map(item => ({
          id: item.id,
          name: item.product_title || item.title,
          price: item.price / 100,
          qty: item.quantity,
          image: item.image,
          shopifyVariantId: item.variant_id
        }));
        updateCartUI();
        return;
      }
    }
  } catch (e) {
    // Not running inside Shopify environment or offline
  }
}

// Render Menu Cards
function renderMenu(category = "all") {
  if (!menuGrid) return;
  menuGrid.innerHTML = "";

  const filteredItems = category === "all" 
    ? defaultMenuItems 
    : defaultMenuItems.filter(item => item.category === category);

  filteredItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy">
        ${item.tag ? `<span class="menu-tag ${item.tagType}">${item.tag}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-title-row">
          <h3 class="menu-item-title">${item.name}</h3>
          <span class="menu-item-price">$${item.price.toFixed(2)}</span>
        </div>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <span class="item-ingredients">${item.ingredients}</span>
          <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
            <i class="fa-solid fa-plus"></i> Add to Order
          </button>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// Category Filter Handling
filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const category = tab.getAttribute("data-category");
    renderMenu(category);
  });
});

// Cart Functions
async function addToCart(itemId) {
  const item = defaultMenuItems.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(i => i.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  // If item has a shopifyVariantId, sync with native /cart/add.js
  if (item.shopifyVariantId) {
    try {
      await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.shopifyVariantId, quantity: 1 })
      });
    } catch (_) {}
  }

  updateCartUI();
  openCartDrawer();
}

function changeQty(itemId, delta) {
  const itemIndex = cart.findIndex(i => i.id === itemId);
  if (itemIndex === -1) return;

  cart[itemIndex].qty += delta;

  if (cart[itemIndex].qty <= 0) {
    cart.splice(itemIndex, 1);
  }

  updateCartUI();
}

function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCountBadge) cartCountBadge.textContent = totalQty;

  if (cart.length === 0) {
    if (cartItemsList) {
      cartItemsList.innerHTML = `
        <div class="empty-cart-state">
          <i class="fa-solid fa-basket-shopping empty-icon"></i>
          <p>Your bag is currently empty.</p>
          <span>Add some delicious Chicago classics from the menu!</span>
        </div>
      `;
    }
    if (cartFooter) cartFooter.style.display = "none";
    return;
  }

  if (cartFooter) cartFooter.style.display = "flex";
  if (cartItemsList) {
    cartItemsList.innerHTML = "";

    let subtotal = 0;

    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;

      const row = document.createElement("div");
      row.className = "cart-item-row";
      row.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-price">$${item.price.toFixed(2)} ea</span>
        </div>
        <div class="cart-qty-ctrls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span><strong>${item.qty}</strong></span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      `;
      cartItemsList.appendChild(row);
    });

    const savings = subtotal * 0.25;
    if (cartSubtotal) cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (cartSavings) cartSavings.textContent = `-$${savings.toFixed(2)} vs Apps`;
    if (cartTotal) cartTotal.textContent = `$${subtotal.toFixed(2)}`;
  }
}

// Drawer Controls
function openCartDrawer() {
  if (cartDrawer) cartDrawer.classList.add("open");
  if (cartOverlay) cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  if (cartDrawer) cartDrawer.classList.remove("open");
  if (cartOverlay) cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

if (cartToggleBtn) cartToggleBtn.addEventListener("click", openCartDrawer);
if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

// Checkout Action: Redirects to native Shopify /checkout
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    // Navigate directly to Shopify's secure hosted checkout
    window.location.href = '/checkout';
  });
}

// Mobile Menu Toggle
if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Sticky Header Glass Effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("mainHeader");
  if (header) {
    if (window.scrollY > 40) {
      header.style.padding = "0.6rem 0";
      header.style.background = "rgba(13, 15, 18, 0.95)";
    } else {
      header.style.padding = "1rem 0";
      header.style.background = "var(--color-bg-glass)";
    }
  }
});

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  renderMenu("all");
  syncNativeShopifyCart();
});
