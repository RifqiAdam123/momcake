/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById('menuToggle');

const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', isOpen);
});

/* Tutup menu setelah memilih navigasi */

document.querySelectorAll('#mainNav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});

/* =========================================
   FILTER MENU
========================================= */

const filters = document.querySelectorAll('.filter');

const products = document.querySelectorAll('.product-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => {
      item.classList.remove('active');
    });

    filter.classList.add('active');

    const category = filter.dataset.filter;

    products.forEach((product) => {
      if (category === 'all' || product.dataset.category === category) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  });
});

/* =========================================
   PESAN PRODUK VIA WHATSAPP
========================================= */

const phone = '6281290135512';

document.querySelectorAll('.order-product').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const product = button.dataset.product;

    const message = `Halo MOM CAKE, saya tertarik dengan ${product}. Apakah masih tersedia dan bisa dipesan?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  });
});

/* =========================================
   TESTIMONI SLIDER
========================================= */

const testimonials = [
  ['“Cake-nya lembut dan rasanya pas. Packaging-nya juga cantik, cocok banget untuk hadiah.”', '— Pelanggan MOM CAKE'],

  ['“Pesanan custom-nya sesuai request dan komunikasinya mudah. Hasilnya cantik!”', '— Pelanggan MOM CAKE'],

  ['“Dessert box-nya enak, manisnya pas dan cocok untuk kumpul keluarga.”', '— Pelanggan MOM CAKE'],
];

let testimonialIndex = 0;

const testimonialContent = document.getElementById('testimonialContent');

function renderTestimonial() {
  const current = testimonials[testimonialIndex];

  testimonialContent.innerHTML = `

        <blockquote>
            ${current[0]}
        </blockquote>

        <strong>
            ${current[1]}
        </strong>

    `;
}

/* Tombol sebelumnya */

document.getElementById('prevTestimonial').addEventListener('click', () => {
  testimonialIndex--;

  if (testimonialIndex < 0) {
    testimonialIndex = testimonials.length - 1;
  }

  renderTestimonial();
});

/* Tombol berikutnya */

document.getElementById('nextTestimonial').addEventListener('click', () => {
  testimonialIndex++;

  if (testimonialIndex >= testimonials.length) {
    testimonialIndex = 0;
  }

  renderTestimonial();
});

/* =========================================
   ANIMASI SCROLL
========================================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08,
  }
);

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});

/* =========================================
   ACTIVE NAVBAR
========================================= */

const sections = document.querySelectorAll('main section[id]');

const navLinks = document.querySelectorAll(".nav a[href^='#']");

window.addEventListener('scroll', () => {
  let current = 'home';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 160) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

/* =========================================
   TAHUN FOOTER
========================================= */

document.getElementById('year').textContent = new Date().getFullYear();
