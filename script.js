'use strict';

// ══ DATOS ══════════════════════════════════════════════════════
const BOOKS = [
    {
        id: 1, title: "El nombre del viento", author: "Patrick Rothfuss",
        genre: "Fantasía", subgenre: "Fantasía épica",
        price: 22.90, originalPrice: 32.00, isbn: "0756404746",
        badge: "Bestseller", rating: 4.9, reviews: 8432, pages: 662,
        language: "Español", publisher: "Debolsillo", year: 2007,
        color: "linear-gradient(135deg,#8B2635 0%,#3d0f18 100%)",
        description: "Kvothe, el mago más temido y famoso de su época, vive escondido bajo un nombre falso como posadero. Cuando Cronista, el biógrafo más reputado de su tiempo, lo descubre, Kvothe accede a narrar su historia en tres días. Esta es la crónica de su ascenso desde una infancia en una troupe de artistas itinerantes, la trágica muerte de sus padres a manos de los misteriosos Chandrian, su supervivencia en las calles de Tarbean como mendigo, hasta su brillante admisión en la Universidad donde busca los secretos de la magia y la verdad sobre sus perseguidores.",
        shortDesc: "Un mago recuenta su vida épica en esta monumental obra de fantasía.",
        tags: ["Magia", "Universidad", "Aventura", "Épico"]
    },
    {
        id: 2, title: "Duna", author: "Frank Herbert",
        genre: "Ciencia Ficción", subgenre: "Space Opera",
        price: 18.50, originalPrice: 26.00, isbn: "0441013597",
        badge: "Clásico", rating: 4.8, reviews: 12654, pages: 896,
        language: "Español", publisher: "Debolsillo", year: 1965,
        color: "linear-gradient(135deg,#1a3a5c 0%,#050f1c 100%)",
        description: "En el lejano futuro, el universo es gobernado por un Imperio feudal interestelar. Paul Atreides, heredero de la Casa Atreides, es trasladado junto a su familia al planeta desértico Arrakis, único lugar donde se produce la 'especia melange', la sustancia más valiosa del universo que permite el viaje interestelar. Duna es una magnífica mezcla de aventura y misticismo, ecología y política que narra la historia de un joven destinado a convertirse en el mesías de un pueblo nómada.",
        shortDesc: "La obra maestra de la ciencia ficción. Política, ecología y destino.",
        tags: ["Space Opera", "Política", "Desierto", "Mesías"]
    },
    {
        id: 3, title: "Cien años de soledad", author: "Gabriel García Márquez",
        genre: "Literatura", subgenre: "Realismo mágico",
        price: 19.90, originalPrice: 28.00, isbn: "0060883286",
        badge: "Premio Nobel", rating: 4.9, reviews: 15820, pages: 471,
        language: "Español", publisher: "Harper Collins", year: 1967,
        color: "linear-gradient(135deg,#2d5a27 0%,#0a1a08 100%)",
        description: "La novela narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo, fundado por el patriarca José Arcadio Buendía. En Macondo lo maravilloso y lo cotidiano conviven de forma natural: llueve flores amarillas, una mujer sube al cielo en cuerpo y alma, los muertos conviven con los vivos. García Márquez teje una historia épica sobre el amor, la soledad, la guerra y el tiempo, creando una obra que transformó para siempre la literatura latinoamericana y mundial.",
        shortDesc: "La novela fundacional del realismo mágico latinoamericano.",
        tags: ["Realismo mágico", "Latinoamérica", "Familia", "Épico"]
    },
    {
        id: 4, title: "1984", author: "George Orwell",
        genre: "Ciencia Ficción", subgenre: "Distopía",
        price: 14.90, originalPrice: 22.00, isbn: "0451524934",
        badge: "Distopía", rating: 4.8, reviews: 22341, pages: 388,
        language: "Español", publisher: "Debolsillo", year: 1949,
        color: "linear-gradient(135deg,#1a1a1a 0%,#3d3d3d 100%)",
        description: "Winston Smith trabaja en el Ministerio de la Verdad reescribiendo documentos históricos para que se adapten a la versión oficial del Partido. Vive en Oceanía, un estado totalitario donde el Gran Hermano lo vigila absolutamente todo. Cuando se enamora de Julia y entra en contacto con la resistencia, descubre que la rebelión tiene un precio devastador. Una advertencia profética sobre el totalitarismo, la vigilancia masiva y el poder destructor de la propaganda.",
        shortDesc: "La distopía definitiva sobre el control totalitario y la vigilancia.",
        tags: ["Distopía", "Totalitarismo", "Política", "Futuro"]
    },
    {
        id: 5, title: "El alquimista", author: "Paulo Coelho",
        genre: "Literatura", subgenre: "Novela filosófica",
        price: 16.50, originalPrice: 23.00, isbn: "0062315005",
        badge: "65M copias", rating: 4.7, reviews: 19876, pages: 208,
        language: "Español", publisher: "Harper Collins", year: 1988,
        color: "linear-gradient(135deg,#8b6f2e 0%,#2d2008 100%)",
        description: "Santiago, un joven pastor andaluz, sueña repetidamente con un tesoro escondido en las pirámides de Egipto. Decide emprender un viaje siguiendo su Leyenda Personal, encontrando en el camino una gitana misteriosa, un rey disfrazado que le habla del alma del mundo, un mercader cristalero y un poderoso alquimista. Esta alegoría espiritual narra la historia universal de seguir nuestros sueños y aprender el lenguaje que el universo usa para comunicarse con nosotros.",
        shortDesc: "La alegoría más vendida del mundo sobre los sueños y el destino.",
        tags: ["Filosofía", "Viaje", "Espiritualidad", "Sueños"]
    },
    {
        id: 6, title: "La sombra del viento", author: "Carlos Ruiz Zafón",
        genre: "Literatura", subgenre: "Novela gótica",
        price: 20.90, originalPrice: 30.00, isbn: "0143034901",
        badge: "Superventas", rating: 4.8, reviews: 9654, pages: 576,
        language: "Español", publisher: "Planeta", year: 2001,
        color: "linear-gradient(135deg,#2a1a3a 0%,#0d0815 100%)",
        description: "Barcelona, 1945. Daniel Sempere, hijo de un librero, es llevado al Cementerio de los Libros Olvidados, un laberinto secreto donde miles de libros aguardan ser salvados del olvido. Allí elige un libro: La sombra del viento, de Julián Carax. Cuando intenta encontrar más obras del misterioso autor, descubre que alguien está destruyendo sistemáticamente todos sus libros. Comienza así una aventura fascinante que lo llevará a los secretos más oscuros de la Barcelona de posguerra.",
        shortDesc: "Un laberinto de misterio y pasión en la Barcelona de posguerra.",
        tags: ["Misterio", "Barcelona", "Historia", "Literatura"]
    },
    {
        id: 7, title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling",
        genre: "Fantasía", subgenre: "Fantasía juvenil",
        price: 17.90, originalPrice: 25.00, isbn: "0439708184",
        badge: "Icónico", rating: 4.9, reviews: 45231, pages: 309,
        language: "Español", publisher: "Salamandra", year: 1997,
        color: "linear-gradient(135deg,#722F37 0%,#1a0a0d 100%)",
        description: "Harry Potter ha vivido toda su vida bajo la escalera de casa de sus tíos, sin saber que es un mago. El día de su decimoprimer cumpleaños, Hagrid, el guardabosques del colegio Hogwarts, aparece con una carta que cambiará su vida para siempre. Allí descubrirá que es famoso en el mundo mágico por haber sobrevivido siendo bebé al ataque del temible Voldemort, y que sus padres no murieron en un accidente de coche, sino a manos del mago más oscuro de todos los tiempos.",
        shortDesc: "El inicio de la saga mágica más leída de la historia.",
        tags: ["Magia", "Escuela", "Amistad", "Aventura"]
    },
    {
        id: 8, title: "Sapiens", author: "Yuval Noah Harari",
        genre: "No Ficción", subgenre: "Historia",
        price: 21.50, originalPrice: 30.00, isbn: "0062316095",
        badge: "Fenómeno", rating: 4.7, reviews: 28943, pages: 512,
        language: "Español", publisher: "Debate", year: 2011,
        color: "linear-gradient(135deg,#0f3a4a 0%,#04151c 100%)",
        description: "¿Cómo llegó el Homo sapiens a dominar el planeta? Harari recorre 70,000 años de historia humana con una visión fascinante y a menudo provocadora. Desde la aparición del lenguaje y las primeras comunidades hasta la revolución agrícola, los imperios, las religiones monoteístas y el capitalismo global. Una obra que replantea radicalmente todo lo que creemos saber sobre nuestra especie, su increíble ascenso y su incierto futuro.",
        shortDesc: "La historia de la humanidad contada de forma completamente nueva.",
        tags: ["Historia", "Humanidad", "Ciencia", "Evolución"]
    }
];

const NEW_RELEASES = [
    { id:101, title:"Tomorrow, and Tomorrow", author:"Gabrielle Zevin", genre:"Ficción", price:21.50, isbn:"0593321200", color:"linear-gradient(135deg,#4a2060,#1a0830)", year:2024, pages:401, rating:4.6, reviews:3421, description:"Sam y Sadie se conocen de niños compartiendo su amor por los videojuegos. Décadas después, crean juntos un juego que revoluciona la industria. Una historia sobre creatividad, amor, amistad y el precio del éxito.", tags:["Contemporánea","Amistad","Arte","Videojuegos"] },
    { id:102, title:"Intermezzo", author:"Sally Rooney", genre:"Ficción", price:19.90, isbn:"0374611998", color:"linear-gradient(135deg,#1a3a2a,#081510)", year:2024, pages:448, rating:4.4, reviews:2187, description:"Dos hermanos muy diferentes lidian con el duelo por la pérdida de su padre. Peter, abogado exitoso, e Ivan, ajedrecista introvertido, navegan el dolor y el amor de maneras opuestas.", tags:["Contemporánea","Familia","Amor","Irlanda"] },
    { id:103, title:"James", author:"Percival Everett", genre:"Literatura", price:23.00, isbn:"0385550367", color:"linear-gradient(135deg,#3a1a0a,#150800)", year:2024, pages:320, rating:4.8, reviews:4562, description:"Premio Pulitzer 2024. Una reimaginación radical de Huckleberry Finn narrada desde la perspectiva de Jim, el esclavo. Una obra que confronta la historia de la esclavitud con urgencia contemporánea.", tags:["Premio Pulitzer","Historia","Libertad","Raza"] },
    { id:104, title:"The God of the Woods", author:"Lauren Fox", genre:"Thriller", price:20.50, isbn:"0593656844", color:"linear-gradient(135deg,#1a1a4a,#080820)", year:2024, pages:384, rating:4.3, reviews:1876, description:"En un campamento de verano en 1978, una adolescente desaparece. Décadas antes, otra niña del mismo lugar también desapareció. Una novela sobre secretos familiares, privilegios y misterios.", tags:["Thriller","Misterio","Familia","Naturaleza"] },
    { id:105, title:"Orbital", author:"Samantha Harvey", genre:"Ficción", price:18.50, isbn:"0802164056", color:"linear-gradient(135deg,#2a0a3a,#0f0015)", year:2024, pages:209, rating:4.5, reviews:2341, description:"Premio Booker 2024. Seis astronautas orbitan la Tierra durante 24 horas. Una meditación lírica sobre la humanidad, el planeta y nuestra pequeñez en el cosmos.", tags:["Premio Booker","Espacio","Poético","Filosófico"] },
    { id:106, title:"The Women", author:"Kristin Hannah", genre:"Literatura", price:22.00, isbn:"1250178630", color:"linear-gradient(135deg,#0a2a1a,#001008)", year:2024, pages:512, rating:4.7, reviews:6789, description:"Vietnam, 1965. Frances McGrath se alista como enfermera de combate. Una poderosa historia sobre las mujeres olvidadas de Vietnam y el precio invisible que paga una generación entera.", tags:["Guerra","Histórica","Mujeres","Vietnam"] },
    { id:107, title:"All Fours", author:"Miranda July", genre:"Ficción", price:21.00, isbn:"1594634882", color:"linear-gradient(135deg,#2a1a0a,#100800)", year:2024, pages:352, rating:4.2, reviews:1543, description:"Una artista sale en coche de Los Ángeles a Nueva York, pero se detiene en un motel a 30 minutos de casa. Una novela audaz sobre la identidad femenina, la maternidad y el deseo.", tags:["Contemporánea","Identidad","Mujer","Arte"] },
    { id:108, title:"The Anxious Generation", author:"Jonathan Haidt", genre:"No Ficción", price:24.00, isbn:"0593655036", color:"linear-gradient(135deg,#1a2a3a,#080f18)", year:2024, pages:385, rating:4.6, reviews:8234, description:"¿Por qué los índices de depresión y ansiedad juvenil se dispararon alrededor de 2012? Haidt argumenta que los smartphones han causado una crisis de salud mental sin precedentes.", tags:["Psicología","Tecnología","Juventud","Sociedad"] }
];

// ══ ESTADO ═════════════════════════════════════════════════════
let cart = JSON.parse(localStorage.getItem('folio-cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('folio-wishlist') || '[]');
let currentFilter = 'all';
let toastTimer = null;

// ══ CURSOR ══════════════════════════════════════════════════════
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});
(function animRing() {
    rx += (mx - rx) * .12; ry += (my - ry) * .12;
    cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px';
    requestAnimationFrame(animRing);
})();
document.addEventListener('mouseover', e => {
    const el = e.target.closest('button,a,[onclick],.cat-card,.book-card,.release-card,.search-tag,.filter-tab');
    if (el) {
        cursor.style.width = '20px'; cursor.style.height = '20px';
        cursorRing.style.width = '60px'; cursorRing.style.height = '60px';
        cursorRing.style.borderColor = 'var(--gold2)';
    } else {
        cursor.style.width = '12px'; cursor.style.height = '12px';
        cursorRing.style.width = '40px'; cursorRing.style.height = '40px';
        cursorRing.style.borderColor = 'var(--gold)';
    }
});

// ══ PARTICLES ═══════════════════════════════════════════════════
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];
function resizeCanvas() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
resizeCanvas(); window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * W; this.y = Math.random() * H;
        this.size = Math.random() * 1.5 + .3;
        this.speedX = (Math.random() - .5) * .3; this.speedY = (Math.random() - .5) * .3;
        this.opacity = Math.random() * .5 + .1;
        this.color = Math.random() > .7 ? '201,168,76' : '255,255,255';
    }
    update() { this.x += this.speedX; this.y += this.speedY; if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset(); }
    draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = `rgba(${this.color},${this.opacity})`; ctx.fill(); }
}
for (let i = 0; i < 120; i++) particles.push(new Particle());

function animParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x, dy = particles[a].y - particles[b].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 100) { ctx.beginPath(); ctx.strokeStyle = `rgba(201,168,76,${.06 * (1 - d / 100)})`; ctx.lineWidth = .5; ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke(); }
        }
    }
    requestAnimationFrame(animParticles);
}
animParticles();

// ══ RENDER BOOKS ════════════════════════════════════════════════
function renderStars(rating) {
    const full = Math.floor(rating), half = rating % 1 >= .5;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
}

function getDiscount(price, orig) { return Math.round((1 - price / orig) * 100); }

function imgTag(isbn, cls = '') {
    return `<img class="${cls}" src="https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg" alt="" onload="this.style.opacity=1" onerror="this.remove()">`;
}

function renderBooks() {
    const grid = document.getElementById('books-grid');
    const wishIds = wishlist;
    grid.innerHTML = BOOKS.map(b => {
        const inWish = wishIds.includes(b.id);
        const disc = getDiscount(b.price, b.originalPrice);
        return `
    <div class="book-card" id="card-${b.id}" data-genre="${b.genre}" onclick="openBookModalById(${b.id})">
      <div class="book-card-inner">
        <div class="book-card-front">
          <div class="book-cover">
            <div class="book-cover-bg" style="background:${b.color}">
              ${imgTag(b.isbn, 'book-photo')}
              <div class="book-cover-info">
                <div class="book-cover-title">${b.title}</div>
                <div class="book-cover-author">${b.author}</div>
              </div>
            </div>
            <div class="book-badge">${b.badge}</div>
            <button class="book-wishlist-btn ${inWish ? 'active' : ''}" id="wish-${b.id}"
              onclick="event.stopPropagation(); toggleWishlist(${b.id})">${inWish ? '♥' : '♡'}</button>
          </div>
          <div class="book-info">
            <div class="book-info-title">${b.title}</div>
            <div class="book-info-author">${b.author}</div>
            <div class="book-rating">
              <span class="stars">${renderStars(b.rating)}</span>
              <span class="reviews-count">(${b.reviews.toLocaleString()})</span>
            </div>
            <div class="book-price-row">
              <span>
                <span class="book-price">$${b.price.toFixed(2)}</span>
                <span class="book-price-old">$${b.originalPrice.toFixed(2)}</span>
              </span>
              <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${b.id})">+ Carrito</button>
            </div>
          </div>
        </div>
        <div class="book-card-back">
          <div class="back-stars">${renderStars(b.rating)} <span style="font-family:var(--mono);font-size:.55rem;color:var(--muted)">${b.rating}/5</span></div>
          <div class="back-title">${b.title}</div>
          <div class="back-genre">${b.subgenre}</div>
          <div class="back-desc">${b.shortDesc}</div>
          <div class="back-meta-mini">
            <div class="back-meta-item">Páginas<span>${b.pages}</span></div>
            <div class="back-meta-item">Año<span>${b.year}</span></div>
            <div class="back-meta-item">Idioma<span>${b.language}</span></div>
            <div class="back-meta-item">Descuento<span style="color:var(--gold)">-${disc}%</span></div>
          </div>
          <div class="back-actions">
            <button class="back-btn" onclick="event.stopPropagation(); addToCart(${b.id})">+ Carrito</button>
            <button class="back-detail-btn" onclick="event.stopPropagation(); openBookModalById(${b.id})">Ver más</button>
          </div>
        </div>
      </div>
    </div>`;
    }).join('');

    // Tilt effect
    document.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            if (card.querySelector('.book-card-inner').style.transform.includes('180')) return;
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - .5;
            const y = (e.clientY - r.top) / r.height - .5;
            card.querySelector('.book-card-inner').style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 6}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            const inner = card.querySelector('.book-card-inner');
            inner.style.transform = '';
        });
    });

    updateCategoryCounts();
}

function renderNewReleases() {
    document.getElementById('releases-scroll').innerHTML = NEW_RELEASES.map(b => `
    <div class="release-card" onclick="openReleaseModal(${b.id})">
      <div class="release-cover">
        <div class="release-cover-inner" style="background:${b.color}">
          ${imgTag(b.isbn, 'release-photo')}
          <div class="release-t" style="position:relative;z-index:1">${b.title}</div>
          <div class="release-a" style="position:relative;z-index:1">${b.author}</div>
        </div>
      </div>
      <div class="release-info-title">${b.title}</div>
      <div class="release-info-sub">${b.genre} · ${b.year}</div>
      <div class="release-price">$${b.price.toFixed(2)}</div>
      <button class="release-add-btn" onclick="event.stopPropagation(); addToCartRelease(${b.id})">+ Agregar al carrito</button>
    </div>`).join('');
}

// ══ FILTER & SEARCH ═════════════════════════════════════════════
function filterBooks(genre) {
    currentFilter = genre;
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.filter-tab').forEach(t => {
        if (t.textContent.trim() === (genre === 'all' ? 'Todos' : genre)) t.classList.add('active');
        if (genre === 'all' && t.textContent.trim() === 'Todos') t.classList.add('active');
    });
    const cards = document.querySelectorAll('.book-card');
    let visible = 0;
    cards.forEach(card => {
        const match = genre === 'all' || card.dataset.genre === genre;
        card.classList.toggle('hidden', !match);
        if (match) visible++;
    });
    document.getElementById('no-results').style.display = visible === 0 ? 'block' : 'none';
    const titleEl = document.getElementById('section-title-books');
    titleEl.innerHTML = genre === 'all' ? '<em>Bestsellers</em> del momento'
        : `Colección de <em>${genre}</em>`;
}

function filterByGenre(genre) {
    filterBooks(genre);
    scrollToBooks();
}

function mainSearchFilter(query) {
    const q = query.toLowerCase().trim();
    if (!q) { filterBooks(currentFilter); return; }
    const cards = document.querySelectorAll('.book-card');
    let visible = 0;
    BOOKS.forEach(b => {
        const match = b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
            || b.genre.toLowerCase().includes(q) || b.subgenre.toLowerCase().includes(q)
            || b.tags.some(t => t.toLowerCase().includes(q));
        const card = document.getElementById(`card-${b.id}`);
        if (card) { card.classList.toggle('hidden', !match); if (match) visible++; }
    });
    document.getElementById('no-results').style.display = visible === 0 ? 'block' : 'none';
    const titleEl = document.getElementById('section-title-books');
    titleEl.innerHTML = visible > 0 ? `Resultados para <em>"${query}"</em>` : `Sin resultados para <em>"${query}"</em>`;
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
}

function quickSearch(term) {
    document.getElementById('main-search').value = term;
    mainSearchFilter(term);
    scrollToBooks();
}

function updateCategoryCounts() {
    const genres = ['Fantasía', 'Ciencia Ficción', 'Thriller', 'Literatura', 'No Ficción'];
    genres.forEach(g => {
        const el = document.getElementById(`cnt-${g}`);
        if (el) { const n = BOOKS.filter(b => b.genre === g).length + (g === 'Literatura' ? 3 : g === 'Fantasía' ? 2 : 1); el.textContent = `${n}+ títulos`; }
    });
}

// ══ SEARCH OVERLAY ══════════════════════════════════════════════
function openSearch() {
    document.getElementById('search-overlay').classList.add('open');
    setTimeout(() => document.getElementById('search-overlay-input').focus(), 300);
    document.body.style.overflow = 'hidden';
}
function closeSearch() {
    document.getElementById('search-overlay').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('search-overlay-input').value = '';
    document.getElementById('search-results').innerHTML = '';
}
function handleLiveSearch(query) {
    const q = query.toLowerCase().trim();
    const container = document.getElementById('search-results');
    if (!q) { container.innerHTML = ''; return; }
    const all = [...BOOKS, ...NEW_RELEASES];
    const results = all.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || b.genre.toLowerCase().includes(q));
    if (!results.length) { container.innerHTML = '<div class="search-no-results">No se encontraron resultados</div>'; return; }
    container.innerHTML = results.map(b => `
    <div class="search-result-item" onclick="closeSearch(); ${b.id < 100 ? `openBookModalById(${b.id})` : `openReleaseModal(${b.id})`}">
      <div class="search-result-cover-bg" style="background:${b.color}">
        ${imgTag(b.isbn, '')}
        <span style="font-family:var(--serif);font-size:.6rem;font-weight:700;color:#fff;position:relative;z-index:1;text-shadow:0 1px 3px rgba(0,0,0,.8)">${b.title}</span>
      </div>
      <div class="search-result-title">${b.title}</div>
      <div class="search-result-author">${b.author}</div>
      <div class="search-result-price">$${b.price.toFixed(2)}</div>
    </div>`).join('');
    container.querySelectorAll('img').forEach(img => { img.onload = () => img.style.opacity = 1; });
}

// ══ CART ════════════════════════════════════════════════════════
function saveCart() { localStorage.setItem('folio-cart', JSON.stringify(cart)); }

function addToCart(bookId) {
    const book = [...BOOKS, ...NEW_RELEASES].find(b => b.id === bookId);
    if (!book) return;
    const existing = cart.find(item => item.id === bookId);
    if (existing) { existing.qty++; } else { cart.push({ id: bookId, qty: 1 }); }
    saveCart(); renderCartUI(); updateCartCount();
    showToast(`"${book.title}" agregado al carrito`);
}
function addToCartRelease(id) { addToCart(id); }

function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    saveCart(); renderCartUI(); updateCartCount();
}

function updateQuantity(bookId, delta) {
    const item = cart.find(i => i.id === bookId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(bookId);
    else { saveCart(); renderCartUI(); updateCartCount(); }
}

function updateCartCount() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById('cart-count').textContent = total;
    document.getElementById('cart-item-count').textContent = total;
}

function getCartTotal() {
    return cart.reduce((s, item) => {
        const b = [...BOOKS, ...NEW_RELEASES].find(b => b.id === item.id);
        return s + (b ? b.price * item.qty : 0);
    }, 0);
}

function renderCartUI() {
    const container = document.getElementById('cart-items');
    const footer = document.getElementById('cart-footer');
    const emptyEl = document.getElementById('cart-empty');
    if (!cart.length) {
        container.innerHTML = ''; container.appendChild(emptyEl); emptyEl.style.display = 'flex';
        footer.style.display = 'none'; return;
    }
    emptyEl.style.display = 'none'; footer.style.display = 'block';
    container.innerHTML = cart.map(item => {
        const b = [...BOOKS, ...NEW_RELEASES].find(b => b.id === item.id);
        if (!b) return '';
        return `
    <div class="cart-item">
      <div class="cart-item-cover">
        <div class="cart-item-cover-bg" style="background:${b.color}">
          ${imgTag(b.isbn, '')}
        </div>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-title">${b.title}</div>
        <div class="cart-item-author">${b.author}</div>
        <div class="cart-item-price">$${(b.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQuantity(${b.id},-1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="updateQuantity(${b.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${b.id})" title="Eliminar">✕</button>
    </div>`;
    }).join('');
    container.querySelectorAll('img').forEach(img => { img.onload = () => img.style.opacity = 1; });
    const subtotal = getCartTotal();
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = subtotal >= 40 ? 'Gratis' : '$4.99';
    document.getElementById('cart-total').textContent = `$${(subtotal + (subtotal >= 40 ? 0 : 4.99)).toFixed(2)}`;
}

function openCart() {
    document.getElementById('cart-overlay').classList.add('open');
    document.getElementById('cart-sidebar').classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCartUI();
}
function closeCart() {
    document.getElementById('cart-overlay').classList.remove('open');
    document.getElementById('cart-sidebar').classList.remove('open');
    document.body.style.overflow = '';
}

function resetCart() {
    cart = []; saveCart(); updateCartCount(); renderCartUI();
}

// ══ WISHLIST ════════════════════════════════════════════════════
function saveWishlist() { localStorage.setItem('folio-wishlist', JSON.stringify(wishlist)); }

function toggleWishlist(bookId) {
    const idx = wishlist.indexOf(bookId);
    const book = [...BOOKS, ...NEW_RELEASES].find(b => b.id === bookId);
    if (idx === -1) {
        wishlist.push(bookId);
        showToast(`"${book?.title}" guardado en tu lista de deseos`);
    } else {
        wishlist.splice(idx, 1);
        showToast(`"${book?.title}" eliminado de tu lista de deseos`);
    }
    saveWishlist();
    const btn = document.getElementById(`wish-${bookId}`);
    if (btn) { btn.textContent = wishlist.includes(bookId) ? '♥' : '♡'; btn.classList.toggle('active', wishlist.includes(bookId)); }
    updateWishlistCount();
}

function updateWishlistCount() {
    const cnt = document.getElementById('wishlist-count');
    cnt.textContent = wishlist.length;
    cnt.style.display = wishlist.length > 0 ? 'flex' : 'none';
    document.getElementById('wishlist-icon').textContent = wishlist.length > 0 ? '♥' : '♡';
}

function openWishlistView() {
    if (!wishlist.length) { showToast('Tu lista de deseos está vacía'); return; }
    // Filter to show only wished books
    filterBooks('all');
    scrollToBooks();
    const cards = document.querySelectorAll('.book-card');
    cards.forEach(card => {
        const id = parseInt(card.id.replace('card-', ''));
        card.classList.toggle('hidden', !wishlist.includes(id));
    });
    document.getElementById('section-title-books').innerHTML = 'Mi lista de <em>deseos</em>';
    showToast(`Mostrando ${wishlist.length} libro(s) de tu lista de deseos`);
}

// ══ BOOK MODAL ══════════════════════════════════════════════════
function openBookModalById(id) {
    const book = BOOKS.find(b => b.id === id);
    if (!book) return;
    const inWish = wishlist.includes(id);
    const disc = getDiscount(book.price, book.originalPrice);
    document.getElementById('book-modal-content').innerHTML = `
    <div class="modal-cover-wrap">
      <div class="modal-cover">
        <div class="modal-cover-gradient" style="background:${book.color}"></div>
        ${imgTag(book.isbn, '')}
        <div class="modal-cover-text" style="position:absolute;bottom:0;left:0;right:0;padding:1.2rem 1rem;z-index:2">
          <div class="modal-cover-title">${book.title}</div>
          <div class="modal-cover-author">${book.author}</div>
        </div>
      </div>
      <div style="margin-top:1.2rem;display:flex;gap:.5rem;flex-wrap:wrap">
        ${book.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
      </div>
    </div>
    <div class="modal-info">
      <span class="modal-genre-badge">${book.subgenre}</span>
      <h2 class="modal-title">${book.title}</h2>
      <div class="modal-author">${book.author}</div>
      <div class="modal-rating">
        <span class="modal-stars">${renderStars(book.rating)}</span>
        <span class="modal-reviews">${book.rating}/5 · ${book.reviews.toLocaleString()} reseñas</span>
      </div>
      <p class="modal-desc">${book.description}</p>
      <div class="modal-meta">
        <div class="modal-meta-row"><span class="modal-meta-label">Editorial</span><span class="modal-meta-value">${book.publisher}</span></div>
        <div class="modal-meta-row"><span class="modal-meta-label">Año</span><span class="modal-meta-value">${book.year}</span></div>
        <div class="modal-meta-row"><span class="modal-meta-label">Páginas</span><span class="modal-meta-value">${book.pages}</span></div>
        <div class="modal-meta-row"><span class="modal-meta-label">Idioma</span><span class="modal-meta-value">${book.language}</span></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:.8rem;margin-bottom:1.2rem">
        <span class="modal-price">$${book.price.toFixed(2)}</span>
        <span class="modal-price-old">$${book.originalPrice.toFixed(2)}</span>
        <span class="modal-discount">-${disc}%</span>
      </div>
      <div class="modal-actions">
        <button class="modal-add-cart" onclick="addToCart(${book.id}); closeBookModal()">+ Agregar al carrito</button>
        <button class="modal-wishlist-btn ${inWish ? 'active' : ''}" id="modal-wish-${book.id}" onclick="toggleWishlist(${book.id}); this.classList.toggle('active'); this.textContent=wishlist.includes(${book.id})?'♥ En lista':'♡ Guardar'">
          ${inWish ? '♥ En lista' : '♡ Guardar'}
        </button>
      </div>
    </div>`;

    document.getElementById('book-modal-content').querySelector('img')?.addEventListener('load', function() { this.style.opacity = 1; });
    document.getElementById('book-modal-overlay').classList.add('open');
    document.getElementById('book-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function openReleaseModal(id) {
    const book = NEW_RELEASES.find(b => b.id === id);
    if (!book) return;
    document.getElementById('book-modal-content').innerHTML = `
    <div class="modal-cover-wrap">
      <div class="modal-cover">
        <div class="modal-cover-gradient" style="background:${book.color}"></div>
        ${imgTag(book.isbn, '')}
        <div style="position:absolute;bottom:0;left:0;right:0;padding:1.2rem 1rem;z-index:2">
          <div class="modal-cover-title">${book.title}</div>
          <div class="modal-cover-author">${book.author}</div>
        </div>
      </div>
      <div style="margin-top:1.2rem;display:flex;gap:.5rem;flex-wrap:wrap">
        ${book.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
      </div>
    </div>
    <div class="modal-info">
      <span class="modal-genre-badge">${book.genre} · ${book.year}</span>
      <h2 class="modal-title">${book.title}</h2>
      <div class="modal-author">${book.author}</div>
      <div class="modal-rating">
        <span class="modal-stars">${renderStars(book.rating)}</span>
        <span class="modal-reviews">${book.rating}/5 · ${book.reviews.toLocaleString()} reseñas</span>
      </div>
      <p class="modal-desc">${book.description}</p>
      <div class="modal-meta">
        <div class="modal-meta-row"><span class="modal-meta-label">Páginas</span><span class="modal-meta-value">${book.pages}</span></div>
        <div class="modal-meta-row"><span class="modal-meta-label">Año</span><span class="modal-meta-value">${book.year}</span></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:.8rem;margin-bottom:1.2rem">
        <span class="modal-price">$${book.price.toFixed(2)}</span>
        <span class="modal-price-old" style="font-size:.8rem;color:#555;font-family:var(--mono)">Novedad 2024</span>
      </div>
      <div class="modal-actions">
        <button class="modal-add-cart" onclick="addToCartRelease(${book.id}); closeBookModal()">+ Agregar al carrito</button>
      </div>
    </div>`;
    document.getElementById('book-modal-content').querySelector('img')?.addEventListener('load', function() { this.style.opacity = 1; });
    document.getElementById('book-modal-overlay').classList.add('open');
    document.getElementById('book-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeBookModal() {
    document.getElementById('book-modal-overlay').classList.remove('open');
    document.getElementById('book-modal').classList.remove('open');
    document.body.style.overflow = '';
}

// ══ CHECKOUT ════════════════════════════════════════════════════
function openCheckout() {
    if (!cart.length) { showToast('Tu carrito está vacío'); return; }
    closeCart();
    renderCheckoutSummary();
    document.getElementById('checkout-overlay').classList.add('open');
    document.getElementById('checkout-modal').classList.add('open');
    document.getElementById('checkout-inner').style.display = 'grid';
    document.getElementById('order-success').style.display = 'none';
    document.body.style.overflow = 'hidden';
}
function closeCheckout() {
    document.getElementById('checkout-overlay').classList.remove('open');
    document.getElementById('checkout-modal').classList.remove('open');
    document.body.style.overflow = '';
}

function renderCheckoutSummary() {
    const container = document.getElementById('checkout-items');
    container.innerHTML = cart.map(item => {
        const b = [...BOOKS, ...NEW_RELEASES].find(b => b.id === item.id);
        if (!b) return '';
        return `
    <div class="checkout-item">
      <div class="checkout-item-cover">
        <div class="checkout-item-cover-bg" style="background:${b.color};width:100%;height:100%;position:relative">
          ${imgTag(b.isbn, '')}
        </div>
      </div>
      <div style="flex:1;min-width:0">
        <div class="checkout-item-title">${b.title}</div>
        <div class="checkout-item-qty">${b.author} × ${item.qty}</div>
      </div>
      <div class="checkout-item-price">$${(b.price * item.qty).toFixed(2)}</div>
    </div>`;
    }).join('');
    container.querySelectorAll('img').forEach(img => { img.onload = () => img.style.opacity = 1; });
    const subtotal = getCartTotal();
    const total = subtotal + (subtotal >= 40 ? 0 : 4.99);
    document.getElementById('co-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('co-total').textContent = `$${total.toFixed(2)}`;
}

function selectPayment(input) {
    document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
    input.closest('.payment-method').classList.add('active');
    const cardFields = document.getElementById('card-fields');
    cardFields.classList.toggle('hidden', input.value !== 'card');
}

function formatCard(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 16);
    input.value = v.match(/.{1,4}/g)?.join(' ') || v;
}
function formatExpiry(input) {
    let v = input.value.replace(/\D/g, '');
    if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2, 4);
    input.value = v;
}

function validateCheckout() {
    let ok = true;
    const fields = [
        { id: 'ch-name', err: 'err-name', msg: 'Ingresa tu nombre' },
        { id: 'ch-email', err: 'err-email', msg: 'Ingresa un email válido', validate: v => /\S+@\S+\.\S+/.test(v) },
        { id: 'ch-address', err: 'err-address', msg: 'Ingresa tu dirección' },
        { id: 'ch-city', err: 'err-city', msg: 'Ingresa tu ciudad' }
    ];
    const paymentVal = document.querySelector('input[name="payment"]:checked')?.value;
    if (paymentVal === 'card') {
        fields.push(
            { id: 'ch-card', err: 'err-card', msg: 'Ingresa el número de tarjeta', validate: v => v.replace(/\s/g, '').length === 16 },
            { id: 'ch-expiry', err: 'err-expiry', msg: 'Formato MM/AA', validate: v => /^\d{2}\/\d{2}$/.test(v) },
            { id: 'ch-cvv', err: 'err-cvv', msg: 'CVV inválido', validate: v => v.length >= 3 }
        );
    }
    fields.forEach(f => {
        const input = document.getElementById(f.id);
        const errEl = document.getElementById(f.err);
        const val = input.value.trim();
        const valid = val && (f.validate ? f.validate(val) : true);
        input.classList.toggle('error', !valid);
        if (errEl) errEl.textContent = valid ? '' : f.msg;
        if (!valid) ok = false;
    });
    return ok;
}

function submitOrder() {
    if (!validateCheckout()) { showToast('Por favor completa todos los campos requeridos'); return; }
    const btn = document.querySelector('.checkout-submit-btn');
    btn.textContent = 'Procesando...'; btn.disabled = true;
    setTimeout(() => {
        const code = 'FOL-' + Date.now().toString(36).toUpperCase();
        document.getElementById('checkout-inner').style.display = 'none';
        document.getElementById('order-success').style.display = 'flex';
        document.getElementById('order-code').textContent = `Código de pedido: ${code}`;
    }, 1800);
}

function closeAllModals() { closeCheckout(); closeBookModal(); closeCart(); }

// ══ NEWSLETTER ══════════════════════════════════════════════════
function subscribeNewsletter() {
    const input = document.getElementById('newsletter-email');
    const msg = document.getElementById('newsletter-msg');
    const email = input.value.trim();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        input.classList.add('error');
        msg.style.display = 'block'; msg.className = 'newsletter-msg error';
        msg.textContent = 'Por favor ingresa un email válido.'; return;
    }
    input.classList.remove('error');
    msg.style.display = 'block'; msg.className = 'newsletter-msg success';
    msg.textContent = `✓ ¡Bienvenido al club! Te enviaremos novedades a ${email}`;
    input.value = '';
    showToast('¡Suscripción exitosa! Revisa tu email');
}

// ══ TOAST ═══════════════════════════════════════════════════════
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-text').textContent = '✓ ' + msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ══ SCROLL HELPERS ══════════════════════════════════════════════
function scrollToBooks() { document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function scrollToReleases() { document.getElementById('novedades')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function scrollToCategories() { document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function scrollToNewsletter() { document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ══ PARALLAX & NAV ══════════════════════════════════════════════
const bookScene = document.querySelector('.book-scene');
if (bookScene) {
    document.addEventListener('mousemove', e => {
        const xRot = (e.clientY / innerHeight - .5) * 20;
        const yRot = (e.clientX / innerWidth - .5) * -25;
        bookScene.style.animation = 'none';
        bookScene.style.transform = `rotateX(${8 + xRot}deg) rotateY(${-15 + yRot}deg)`;
    });
}

window.addEventListener('scroll', () => {
    document.querySelector('nav').style.background = scrollY > 80 ? 'rgba(8,8,8,.96)' : 'rgba(8,8,8,.7)';
});

// Escape key closes modals/search
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeSearch(); closeBookModal(); closeCart(); closeCheckout();
    }
});

// ══ SCROLL REVEAL ═══════════════════════════════════════════════
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger').forEach(el => revealObserver.observe(el));

// ══ INIT ════════════════════════════════════════════════════════
(function init() {
    renderBooks();
    renderNewReleases();
    updateCartCount();
    updateWishlistCount();

    // Init payment method visual state
    const checkedPM = document.querySelector('input[name="payment"]:checked');
    if (checkedPM) checkedPM.closest('.payment-method').classList.add('active');
})();