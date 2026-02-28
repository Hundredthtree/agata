const products = [
  {
    id: "p1",
    name: "Dior Sauvage EDP",
    category: "designer",
    note: "Bergamot, ambroxan, biber",
    price: 179,
    image: "assets/perfumes/p1.jpg",
  },
  {
    id: "p2",
    name: "YSL Black Opium",
    category: "designer",
    note: "Kafa, vanilija, bijeli cvijet",
    price: 169,
    image: "assets/perfumes/p2.jpg",
  },
  {
    id: "p3",
    name: "Carolina Herrera 212 VIP Men",
    category: "designer",
    note: "Vodka, limeta, amber",
    price: 149,
    image: "assets/perfumes/p3.jpg",
  },
  {
    id: "p4",
    name: "Armani My Way",
    category: "designer",
    note: "Tuberoza, bergamot, kedar",
    price: 159,
    image: "assets/perfumes/p4.jpg",
  },
  {
    id: "p5",
    name: "Dolce & Gabbana The Only One Intense",
    category: "designer",
    note: "Neroli, kokos, vanilija",
    price: 169,
    image: "assets/perfumes/p5.jpg",
  },
  {
    id: "p6",
    name: "Versace Eros Blue",
    category: "designer",
    note: "Menta, jabuka, tonka",
    price: 145,
    image: "assets/perfumes/p6.jpg",
  },
  {
    id: "p7",
    name: "Versace Eros Flame Red",
    category: "designer",
    note: "Mandarina, biber, tonka",
    price: 149,
    image: "assets/perfumes/p7.jpg",
  },
  {
    id: "p8",
    name: "Paco Rabanne One Million",
    category: "designer",
    note: "Cimet, amber, koža",
    price: 155,
    image: "assets/perfumes/p8.jpg",
  },
  {
    id: "p9",
    name: "Tom Ford Neroli Portofino",
    category: "tom-ford",
    note: "Neroli, citrusi, amber",
    price: 239,
    image: "assets/perfumes/p9.jpg",
  },
  {
    id: "p10",
    name: "Tom Ford Black Orchid",
    category: "tom-ford",
    note: "Crna orhideja, čokolada, pačuli",
    price: 199,
    image: "assets/perfumes/p10.jpg",
  },
  {
    id: "p11",
    name: "Tom Ford Noir Extreme",
    category: "tom-ford",
    note: "Kardamom, kulfi, sandalovina",
    price: 209,
    image: "assets/perfumes/p11.jpg",
  },
  {
    id: "p12",
    name: "Tom Ford Oud Wood",
    category: "tom-ford",
    note: "Oud, kardamom, vanilija",
    price: 259,
    image: "assets/perfumes/p12.jpg",
  },
  {
    id: "p13",
    name: "Tom Ford Tobacco Vanille",
    category: "tom-ford",
    note: "Duhan, vanilija, kakao",
    price: 269,
    image: "assets/perfumes/p13.jpg",
  },
  {
    id: "p14",
    name: "Tom Ford Lost Cherry",
    category: "tom-ford",
    note: "Trešnja, badem, tonka",
    price: 279,
    image: "assets/perfumes/p14.jpg",
  },
  {
    id: "p15",
    name: "Xerjoff Naxos",
    category: "xerjoff",
    note: "Med, duhan, lavanda",
    price: 279,
    image: "assets/perfumes/p15.jpg",
  },
  {
    id: "p16",
    name: "Xerjoff Erba Pura",
    category: "xerjoff",
    note: "Citrusi, voće, amber",
    price: 259,
    image: "assets/perfumes/p16.jpg",
  },
  {
    id: "p17",
    name: "Xerjoff Alexandria II",
    category: "xerjoff",
    note: "Lavanda, ruža, oud",
    price: 289,
    image: "assets/perfumes/p17.jpg",
  },
  {
    id: "p18",
    name: "Xerjoff More Than Words",
    category: "xerjoff",
    note: "Voćne note, oud, amber",
    price: 269,
    image: "assets/perfumes/p18.jpg",
  },
  {
    id: "p19",
    name: "Lancome La Vie Est Belle",
    category: "designer",
    note: "Iris, pačuli, praline",
    price: 159,
    image: "assets/perfumes/p19.jpg",
  },
  {
    id: "p20",
    name: "Versace Bright Crystal",
    category: "designer",
    note: "Yuzu, božur, mošus",
    price: 145,
    image: "assets/perfumes/p20.jpg",
  },
  {
    id: "p21",
    name: "Emporio Armani He (Male)",
    category: "designer",
    note: "Yuzu, kardamom, sandalovina",
    price: 149,
    image: "assets/perfumes/p21.jpg",
  },
  {
    id: "p22",
    name: "Giorgio Armani Stronger With You",
    category: "designer",
    note: "Kesten, vanilija, amber drvo",
    price: 189,
    image: "assets/perfumes/p22.jpg",
  },
  {
    id: "p23",
    name: "Creed Aventus",
    category: "creed",
    note: "Ananas, breza, mošus",
    price: 299,
    image: "assets/perfumes/p23.jpg",
  },
  {
    id: "p24",
    name: "Creed Green Irish Tweed",
    category: "creed",
    note: "Verbena, list ljubičice, ambergris",
    price: 279,
    image: "assets/perfumes/p24.jpg",
  },
  {
    id: "p25",
    name: "Creed Silver Mountain Water",
    category: "creed",
    note: "Bergamot, crni ribiz, mošus",
    price: 269,
    image: "assets/perfumes/p25.jpg",
  },
  {
    id: "p26",
    name: "Creed Royal Oud",
    category: "creed",
    note: "Pink biber, cedar, oud",
    price: 299,
    image: "assets/perfumes/p26.jpg",
  },
  {
    id: "p27",
    name: "Creed Millesime Imperial",
    category: "creed",
    note: "Morska so, citrus, sandalovina",
    price: 289,
    image: "assets/perfumes/p27.jpg",
  },
  {
    id: "p28",
    name: "Creed Virgin Island Water",
    category: "creed",
    note: "Kokos, limeta, bijeli rum",
    price: 269,
    image: "assets/perfumes/p28.jpg",
  },
  {
    id: "p29",
    name: "Maison Francis Kurkdjian Baccarat Rouge 540",
    category: "designer",
    note: "Šafran, jasmin, ambergris",
    price: 299,
    image: "assets/perfumes/p29.jpg",
  },
  {
    id: "p30",
    name: "Carolina Herrera Good Girl",
    category: "designer",
    note: "Badem, tuberoza, tonka",
    price: 169,
    image: "assets/perfumes/p30.jpg",
  },
  {
    id: "p31",
    name: "Versace Crystal Noir",
    category: "designer",
    note: "Gardenija, amber, sandalovina",
    price: 159,
    image: "assets/perfumes/p31.jpg",
  },
  {
    id: "p32",
    name: "Hugo Boss Green (In Motion)",
    category: "designer",
    note: "Citrusi, kardamom, drvene note",
    price: 139,
    image: "assets/perfumes/p32.jpg",
  },
  {
    id: "p33",
    name: "Armani Code for Men",
    category: "designer",
    note: "Bergamot, cvijet masline, tonka",
    price: 179,
    image: "assets/perfumes/p33.jpg",
  },
];

const storageKey = "agata-cart-v1";
let activeFilter = "all";
let cart = JSON.parse(localStorage.getItem(storageKey) || "[]");
const categoryLabels = {
  designer: "Designer",
  "tom-ford": "Tom Ford",
  xerjoff: "Xerjoff",
  creed: "Creed",
};

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutTotal = document.getElementById("checkoutTotal");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const checkoutModal = document.getElementById("checkoutModal");
const successModal = document.getElementById("successModal");
const successText = document.getElementById("successText");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const imageStage = document.getElementById("imageStage");
const zoomValue = document.getElementById("zoomValue");

let previewItems = [];
let previewIndex = 0;
let currentZoom = 1.3;

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

function formatKM(value) {
  return `${value.toFixed(0)} KM`;
}

function renderProducts() {
  const list =
    activeFilter === "all"
      ? products
      : products.filter((item) => item.category === activeFilter);

  productGrid.innerHTML = list
    .map(
      (item) => `
      <article class="product-card reveal">
        <div
          class="product-art"
          data-preview="${item.id}"
          role="button"
          tabindex="0"
          aria-label="Otvori sliku parfema ${item.name}"
        >
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="product-meta">
          <div>
            <h3>${item.name}</h3>
            <p>${item.note}</p>
          </div>
          <span class="tag">${categoryLabels[item.category] || item.category}</span>
        </div>
        <div class="product-bottom">
          <strong class="price">${formatKM(item.price)}</strong>
          <button class="btn btn-small" data-add="${item.id}">Dodaj u korpu</button>
        </div>
      </article>
    `
    )
    .join("");
}

function getVisibleProducts() {
  return activeFilter === "all"
    ? [...products]
    : products.filter((item) => item.category === activeFilter);
}

function updateZoom(value) {
  currentZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
  modalImage.style.transform = `scale(${currentZoom})`;
  zoomValue.textContent = `${Math.round(currentZoom * 100)}%`;
}

function loadPreviewImage() {
  const item = previewItems[previewIndex];
  if (!item) {
    return;
  }
  modalImage.src = item.image;
  modalImage.alt = item.name;
  updateZoom(1.3);
}

function openImageModal(productId) {
  if (!imageModal || !modalImage) {
    return;
  }

  previewItems = getVisibleProducts();
  previewIndex = previewItems.findIndex((item) => item.id === productId);
  if (previewIndex < 0) {
    previewItems = [...products];
    previewIndex = previewItems.findIndex((item) => item.id === productId);
  }
  if (previewIndex < 0) {
    return;
  }

  loadPreviewImage();
  imageModal.showModal();
}

function showPreviewOffset(offset) {
  if (!previewItems.length) {
    return;
  }
  previewIndex = (previewIndex + offset + previewItems.length) % previewItems.length;
  loadPreviewImage();
}

function getProduct(id) {
  return products.find((item) => item.id === id);
}

function saveCart() {
  localStorage.setItem(storageKey, JSON.stringify(cart));
}

function addToCart(id) {
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  renderCart();
}

function updateQty(id, change) {
  cart = cart
    .map((item) =>
      item.id === id ? { ...item, qty: Math.max(0, item.qty + change) } : item
    )
    .filter((item) => item.qty > 0);

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}

function calculateTotal() {
  return cart.reduce((sum, row) => {
    const product = getProduct(row.id);
    return sum + (product ? product.price * row.qty : 0);
  }, 0);
}

function renderCart() {
  const totalQty = cart.reduce((sum, row) => sum + row.qty, 0);
  cartCount.textContent = totalQty;

  if (!cart.length) {
    cartItems.innerHTML = "<p>Korpa je trenutno prazna.</p>";
    cartTotal.textContent = "0 KM";
    checkoutTotal.textContent = "0 KM";
    return;
  }

  cartItems.innerHTML = cart
    .map((row) => {
      const product = getProduct(row.id);
      if (!product) {
        return "";
      }
      return `
        <article class="cart-item">
          <div class="cart-item-main">
            <img class="cart-thumb" src="${product.image}" alt="${product.name}" loading="lazy" />
            <div class="cart-item-copy">
              <div class="cart-item-top">
                <strong>${product.name}</strong>
                <button class="remove-item" data-remove="${row.id}" aria-label="Ukloni">Ukloni</button>
              </div>
              <span>${product.note}</span>
            </div>
          </div>
          <div class="qty-controls">
            <button data-qty="${row.id}" data-change="-1" aria-label="Smanji">−</button>
            <b>${row.qty}</b>
            <button data-qty="${row.id}" data-change="1" aria-label="Povećaj">+</button>
            <span>${formatKM(product.price * row.qty)}</span>
          </div>
        </article>
      `;
    })
    .join("");

  const total = calculateTotal();
  const totalFormatted = formatKM(total);
  cartTotal.textContent = totalFormatted;
  checkoutTotal.textContent = totalFormatted;
}

function openCart() {
  cartPanel.classList.add("open");
  overlay.classList.add("show");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartPanel.classList.remove("open");
  overlay.classList.remove("show");
  cartPanel.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (event) => {
  const previewEl = event.target.closest("[data-preview]");
  if (previewEl) {
    openImageModal(previewEl.dataset.preview);
    return;
  }

  const addId = event.target.getAttribute("data-add");
  if (addId) {
    addToCart(addId);
    openCart();
  }

  const qtyId = event.target.getAttribute("data-qty");
  const change = Number(event.target.getAttribute("data-change"));
  if (qtyId && change) {
    updateQty(qtyId, change);
  }

  const removeId = event.target.getAttribute("data-remove");
  if (removeId) {
    removeFromCart(removeId);
  }
});

productGrid.addEventListener("keydown", (event) => {
  if (!event.target.matches("[data-preview]")) {
    return;
  }
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openImageModal(event.target.dataset.preview);
  }
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document
      .querySelectorAll(".filter")
      .forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts();
  });
});

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!cart.length) {
    alert("Korpa je prazna. Dodajte parfem prije naplate.");
    return;
  }
  checkoutModal.showModal();
});

document.getElementById("cancelCheckout").addEventListener("click", () => {
  checkoutModal.close();
});

document.getElementById("checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (!cart.length) {
    checkoutModal.close();
    return;
  }

  const form = new FormData(event.currentTarget);
  const orderId = `AG-${Date.now().toString().slice(-6)}`;
  const total = formatKM(calculateTotal());

  successText.textContent = `Hvala, ${form.get(
    "fullName"
  )}. Narudžba ${orderId} je evidentirana. Ukupan iznos: ${total}. Potvrda i detalji dostave biće poslani na vaš telefon ${form.get(
    "phone"
  )}.`;

  cart = [];
  saveCart();
  renderCart();

  checkoutModal.close();
  closeCart();
  successModal.showModal();
  event.currentTarget.reset();
  document.getElementById("city").value = "Doboj";
});

document.getElementById("closeSuccess").addEventListener("click", () => {
  successModal.close();
});

document.getElementById("closeImageModal").addEventListener("click", () => {
  imageModal.close();
});

document.getElementById("imagePrev").addEventListener("click", () => {
  showPreviewOffset(-1);
});

document.getElementById("imageNext").addEventListener("click", () => {
  showPreviewOffset(1);
});

document.getElementById("zoomIn").addEventListener("click", () => {
  updateZoom(currentZoom + ZOOM_STEP);
});

document.getElementById("zoomOut").addEventListener("click", () => {
  updateZoom(currentZoom - ZOOM_STEP);
});

document.getElementById("zoomReset").addEventListener("click", () => {
  updateZoom(1.3);
});

imageStage.addEventListener(
  "wheel",
  (event) => {
    if (!imageModal.open) {
      return;
    }
    event.preventDefault();
    if (event.deltaY < 0) {
      updateZoom(currentZoom + ZOOM_STEP);
    } else {
      updateZoom(currentZoom - ZOOM_STEP);
    }
  },
  { passive: false }
);

modalImage.addEventListener("dblclick", () => {
  updateZoom(currentZoom > 1.9 ? 1.3 : 2.4);
});

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    imageModal.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (!imageModal.open) {
    return;
  }

  if (event.key === "ArrowLeft") {
    showPreviewOffset(-1);
  } else if (event.key === "ArrowRight") {
    showPreviewOffset(1);
  } else if (event.key === "+" || event.key === "=") {
    updateZoom(currentZoom + ZOOM_STEP);
  } else if (event.key === "-" || event.key === "_") {
    updateZoom(currentZoom - ZOOM_STEP);
  } else if (event.key === "Escape") {
    imageModal.close();
  }
});

document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("emailInput");
  alert(`Hvala na prijavi, ${email.value}! Popust 10% je aktiviran.`);
  event.currentTarget.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
