'use strict';

// ══ DATOS — Catálogo completo ════════════════════════════════════
const BOOKS = [
    {
        id:1, title:"El nombre del viento", author:"Patrick Rothfuss",
        genre:"Fantasía", subgenre:"Fantasía épica",
        price:22.90, originalPrice:32.00, isbn:"0756404746",
        badge:"Bestseller", rating:4.9, reviews:8432, pages:662,
        language:"Español", publisher:"Debolsillo", year:2007,
        color:"linear-gradient(135deg,#8B2635 0%,#3d0f18 100%)",
        description:"Kvothe, el mago más temido y famoso de su época, vive escondido bajo un nombre falso como posadero en un pueblo olvidado. Cuando Cronista, el biógrafo más reputado de su tiempo, lo encuentra, Kvothe acepta narrar su historia en tres días. Desde una infancia como hijo de trovadores itinerantes, la trágica pérdida de sus padres a manos de los Chandrian, su supervivencia en las calles de Tarbean, hasta su brillante admisión en la Universidad donde persigue los secretos de la magia. Una prosa de belleza extraordinaria.",
        shortDesc:"Un mago recuenta su vida épica en esta monumental obra de fantasía.",
        tags:["Magia","Universidad","Aventura","Épico"]
    },
    {
        id:2, title:"Duna", author:"Frank Herbert",
        genre:"Ciencia Ficción", subgenre:"Space Opera",
        price:18.50, originalPrice:26.00, isbn:"0441013597",
        badge:"Clásico", rating:4.8, reviews:12654, pages:896,
        language:"Español", publisher:"Debolsillo", year:1965,
        color:"linear-gradient(135deg,#1a3a5c 0%,#050f1c 100%)",
        description:"En el lejano futuro, el universo es gobernado por un Imperio feudal interestelar. Paul Atreides es trasladado con su familia al planeta desértico Arrakis, único lugar donde se produce la especia melange, la sustancia más valiosa del universo. Una obra monumental que explora la ecología, la religión, la política y el destino de un joven destinado a convertirse en el mesías de un pueblo nómada. La saga de ciencia ficción más vendida de todos los tiempos.",
        shortDesc:"La obra maestra de la ciencia ficción. Política, ecología y destino.",
        tags:["Space Opera","Política","Desierto","Mesías"]
    },
    {
        id:3, title:"Cien años de soledad", author:"Gabriel García Márquez",
        genre:"Literatura", subgenre:"Realismo mágico",
        price:19.90, originalPrice:28.00, isbn:"0060883286",
        badge:"Premio Nobel", rating:4.9, reviews:15820, pages:471,
        language:"Español", publisher:"Harper Collins", year:1967,
        color:"linear-gradient(135deg,#2d5a27 0%,#0a1a08 100%)",
        description:"La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. En este universo lo maravilloso y lo cotidiano conviven naturalmente: llueven flores amarillas, una mujer sube al cielo en cuerpo y alma, los muertos conviven con los vivos. Una epopeya sobre el amor, la soledad, la guerra y el tiempo que transformó para siempre la literatura latinoamericana y mundial. Premio Nobel de Literatura 1982.",
        shortDesc:"La novela fundacional del realismo mágico latinoamericano.",
        tags:["Realismo mágico","Latinoamérica","Familia","Épico"]
    },
    {
        id:4, title:"1984", author:"George Orwell",
        genre:"Ciencia Ficción", subgenre:"Distopía",
        price:14.90, originalPrice:22.00, isbn:"0451524934",
        badge:"Distopía", rating:4.8, reviews:22341, pages:388,
        language:"Español", publisher:"Debolsillo", year:1949,
        color:"linear-gradient(135deg,#1a1a1a 0%,#3d3d3d 100%)",
        description:"Winston Smith trabaja en el Ministerio de la Verdad reescribiendo documentos históricos para adaptarlos a la versión oficial del Partido. Vive en Oceanía, un estado totalitario donde el Gran Hermano lo vigila absolutamente todo. Una advertencia profética sobre el totalitarismo, la vigilancia masiva y el poder destructor de la propaganda que resulta más urgente que nunca en el siglo XXI.",
        shortDesc:"La distopía definitiva sobre el control totalitario y la vigilancia.",
        tags:["Distopía","Totalitarismo","Política","Clásico"]
    },
    {
        id:5, title:"El alquimista", author:"Paulo Coelho",
        genre:"Literatura", subgenre:"Novela filosófica",
        price:16.50, originalPrice:23.00, isbn:"0062315005",
        badge:"65M copias", rating:4.7, reviews:19876, pages:208,
        language:"Español", publisher:"Harper Collins", year:1988,
        color:"linear-gradient(135deg,#8b6f2e 0%,#2d2008 100%)",
        description:"Santiago, un joven pastor andaluz, sueña con un tesoro escondido en las pirámides de Egipto. Decide emprender un viaje siguiendo su Leyenda Personal, encontrando en el camino a una gitana, un rey disfrazado y un poderoso alquimista. Esta alegoría espiritual sobre seguir nuestros sueños es la novela en portugués más traducida de la historia, con más de 65 millones de copias vendidas en 80 países.",
        shortDesc:"La alegoría más vendida del mundo sobre los sueños y el destino.",
        tags:["Filosofía","Viaje","Espiritualidad","Sueños"]
    },
    {
        id:6, title:"La sombra del viento", author:"Carlos Ruiz Zafón",
        genre:"Literatura", subgenre:"Novela gótica",
        price:20.90, originalPrice:30.00, isbn:"0143034901",
        badge:"Superventas", rating:4.8, reviews:9654, pages:576,
        language:"Español", publisher:"Planeta", year:2001,
        color:"linear-gradient(135deg,#2a1a3a 0%,#0d0815 100%)",
        description:"Barcelona, 1945. Daniel Sempere elige en el Cementerio de los Libros Olvidados un libro de Julián Carax. Cuando intenta encontrar más obras del misterioso autor, descubre que alguien está destruyendo todos sus libros. Comienza así una aventura fascinante por los secretos más oscuros de la Barcelona de posguerra. Un laberinto de misterio, amor y tragedia ambientado en la ciudad condal.",
        shortDesc:"Un laberinto de misterio y pasión en la Barcelona de posguerra.",
        tags:["Misterio","Barcelona","Historia","Gótico"]
    },
    {
        id:7, title:"Harry Potter y la piedra filosofal", author:"J.K. Rowling",
        genre:"Fantasía", subgenre:"Fantasía juvenil",
        price:17.90, originalPrice:25.00, isbn:"0439708184",
        badge:"Icónico", rating:4.9, reviews:45231, pages:309,
        language:"Español", publisher:"Salamandra", year:1997,
        color:"linear-gradient(135deg,#722F37 0%,#1a0a0d 100%)",
        description:"Harry Potter ha vivido bajo la escalera de casa de sus tíos sin saber que es un mago. El día de su undécimo cumpleaños, Hagrid llega con una carta que cambiará su vida. En Hogwarts descubrirá que es famoso por haber sobrevivido al ataque del temible Voldemort cuando era bebé. El inicio de la saga de fantasía más leída de la historia con más de 500 millones de copias vendidas.",
        shortDesc:"El inicio de la saga mágica más leída de la historia.",
        tags:["Magia","Escuela","Amistad","Aventura"]
    },
    {
        id:8, title:"Sapiens", author:"Yuval Noah Harari",
        genre:"No Ficción", subgenre:"Historia",
        price:21.50, originalPrice:30.00, isbn:"0062316095",
        badge:"Fenómeno", rating:4.7, reviews:28943, pages:512,
        language:"Español", publisher:"Debate", year:2011,
        color:"linear-gradient(135deg,#0f3a4a 0%,#04151c 100%)",
        description:"¿Cómo llegó el Homo sapiens a dominar el planeta? Harari recorre 70,000 años de historia humana con una visión fascinante y provocadora. Desde el origen del lenguaje y las primeras comunidades hasta la revolución agrícola, los imperios y el capitalismo global. Una obra que replantea radicalmente lo que creemos saber sobre nuestra especie, su increíble ascenso y su incierto futuro tecnológico.",
        shortDesc:"La historia de la humanidad contada de forma completamente nueva.",
        tags:["Historia","Humanidad","Ciencia","Evolución"]
    },
    {
        id:9, title:"El señor de los anillos", author:"J.R.R. Tolkien",
        genre:"Fantasía", subgenre:"Fantasía épica",
        price:29.90, originalPrice:42.00, isbn:"0618640150",
        badge:"Legendario", rating:4.9, reviews:38910, pages:1216,
        language:"Español", publisher:"Minotauro", year:1954,
        color:"linear-gradient(135deg,#3a5c1a 0%,#0f1f05 100%)",
        description:"En la Tierra Media, el hobbit Frodo Bolsón hereda el Anillo Único, forjado por el Señor Oscuro Sauron para dominar a todos los seres. Con la ayuda de la Compañía del Anillo, Frodo emprende un peligroso viaje hacia Mordor para destruir el Anillo en las llamas del Monte del Destino. La obra cumbre de la fantasía épica moderna, que inventó un género y creó un universo completo con su propia mitología, idiomas e historia.",
        shortDesc:"La obra cumbre de la fantasía épica que lo inició todo.",
        tags:["Épico","Mitología","Aventura","Clásico"]
    },
    {
        id:10, title:"Fahrenheit 451", author:"Ray Bradbury",
        genre:"Ciencia Ficción", subgenre:"Distopía",
        price:15.50, originalPrice:21.00, isbn:"1451673310",
        badge:"Esencial", rating:4.7, reviews:16543, pages:256,
        language:"Español", publisher:"Debolsillo", year:1953,
        color:"linear-gradient(135deg,#8B3a10 0%,#2d0f04 100%)",
        description:"En un futuro donde los libros están prohibidos y los bomberos los queman, Guy Montag es un bombero que comienza a cuestionar su trabajo al conocer a Clarisse, una joven que le hace ver la belleza del mundo. Una obra visionaria sobre la censura, el pensamiento crítico, el poder de la literatura y el peligro de las sociedades que prefieren el entretenimiento vacío a la reflexión profunda.",
        shortDesc:"Una distopía esencial sobre la censura y el poder de los libros.",
        tags:["Distopía","Censura","Libros","Clásico"]
    },
    {
        id:11, title:"Crimen y castigo", author:"Fiódor Dostoyevski",
        genre:"Literatura", subgenre:"Novela psicológica",
        price:17.90, originalPrice:25.00, isbn:"0140449138",
        badge:"Clásico ruso", rating:4.8, reviews:11234, pages:576,
        language:"Español", publisher:"Alianza", year:1866,
        color:"linear-gradient(135deg,#1a1535 0%,#080610 100%)",
        description:"Raskolnikov, un estudiante pobre en San Petersburgo, planea y ejecuta el asesinato de una anciana usurera, convenciéndose de que ciertos hombres superiores están por encima de la ley moral. La novela sigue la desintegración psicológica del protagonista, atormentado por la culpa, perseguido por el sagaz inspector Porfiry. Una exploración magistral de la conciencia humana, la culpa y la redención.",
        shortDesc:"La obra maestra de Dostoyevski sobre la culpa y la redención.",
        tags:["Psicológico","Rusia","Culpa","Filosofía"]
    },
    {
        id:12, title:"El gran Gatsby", author:"F. Scott Fitzgerald",
        genre:"Literatura", subgenre:"Novela modernista",
        price:13.90, originalPrice:20.00, isbn:"0743273567",
        badge:"Clásico EE.UU.", rating:4.5, reviews:18750, pages:208,
        language:"Español", publisher:"Alianza", year:1925,
        color:"linear-gradient(135deg,#1a3a2a 0%,#050f08 100%)",
        description:"Nueva York, años veinte. Nick Carraway se convierte en vecino y testigo de Jay Gatsby, un misterioso millonario que da fiestas legendarias con un único propósito: reconquistar a Daisy Buchanan, el amor de su pasado. Una crítica mordaz al sueño americano, la frivolidad de la clase alta y la inevitable corrupción de los ideales, narrada con una prosa de una belleza lírica incomparable.",
        shortDesc:"La crítica definitiva al sueño americano en los locos años veinte.",
        tags:["Sueño americano","Años 20","Romance","Clásico"]
    },
    {
        id:13, title:"Orgullo y prejuicio", author:"Jane Austen",
        genre:"Literatura", subgenre:"Novela romántica",
        price:14.50, originalPrice:20.00, isbn:"0141439513",
        badge:"Inmortal", rating:4.8, reviews:24567, pages:432,
        language:"Español", publisher:"Penguin", year:1813,
        color:"linear-gradient(135deg,#3a1a2a 0%,#0f0509 100%)",
        description:"Elizabeth Bennet y el señor Darcy protagonizan uno de los romances más célebres de la literatura universal. En la Inglaterra rural del siglo XIX, la señora Bennet se obsesiona con casar a sus cinco hijas con hombres de fortuna. Una novela brillante, irónica y llena de humor sobre las convenciones sociales, los prejuicios de clase y la búsqueda del amor verdadero frente a los matrimonios de conveniencia.",
        shortDesc:"El romance más célebre de la literatura universal, de vigor eterno.",
        tags:["Romance","Inglaterra","Ironía","Clásico"]
    },
    {
        id:14, title:"El señor de las moscas", author:"William Golding",
        genre:"Literatura", subgenre:"Novela alegórica",
        price:14.90, originalPrice:21.00, isbn:"0399501487",
        badge:"Premio Nobel", rating:4.6, reviews:12876, pages:290,
        language:"Español", publisher:"Alianza", year:1954,
        color:"linear-gradient(135deg,#2a1a0a 0%,#0a0603 100%)",
        description:"Un grupo de niños británicos queda atrapado en una isla desierta tras un accidente aéreo durante una guerra nuclear. Al principio intentan organizarse democráticamente, pero la civilización pronto se derrumba ante la violencia y el miedo. Una poderosa alegoría sobre la naturaleza inherentemente violenta del ser humano y la fragilidad de la civilización. Premio Nobel de Literatura 1983.",
        shortDesc:"Una perturbadora alegoría sobre la barbarie oculta en la naturaleza humana.",
        tags:["Alegoría","Supervivencia","Naturaleza humana","Clásico"]
    },
    {
        id:15, title:"Rayuela", author:"Julio Cortázar",
        genre:"Literatura", subgenre:"Novela experimental",
        price:18.90, originalPrice:27.00, isbn:"0394752848",
        badge:"Boom latinoam.", rating:4.6, reviews:7543, pages:736,
        language:"Español", publisher:"Alfaguara", year:1963,
        color:"linear-gradient(135deg,#0a2a3a 0%,#020c10 100%)",
        description:"Horacio Oliveira vive en París con la Maga y un grupo de intelectuales bohemios. Cortázar propone dos formas de leer la novela: de forma lineal, o saltando entre capítulos siguiendo un tablero de instrucciones, como en el juego de rayuela. Una obra que revolucionó la narrativa latinoamericana con su estructura innovadora, su humor, su lirismo y su profunda exploración de la identidad y el sentido de la existencia.",
        shortDesc:"La novela experimental que revolucionó la narrativa latinoamericana.",
        tags:["Experimental","París","Identidad","Boom latinoam."]
    },
    {
        id:16, title:"El proceso", author:"Franz Kafka",
        genre:"Literatura", subgenre:"Novela existencialista",
        price:13.50, originalPrice:19.00, isbn:"0805209999",
        badge:"Kafkiano", rating:4.6, reviews:9321, pages:256,
        language:"Español", publisher:"Alianza", year:1925,
        color:"linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 100%)",
        description:"Josef K. se despierta una mañana y es detenido sin saber el crimen del que se le acusa. A lo largo de la novela, intenta desesperadamente descubrir la naturaleza de su juicio en una burocracia absurda y kafkiana. Una obra fundamental del existencialismo que anticipa los regímenes totalitarios del siglo XX y reflexiona sobre la alienación del individuo frente a las instituciones de poder.",
        shortDesc:"La pesadilla burocrática que definió un adjetivo universal: kafkiano.",
        tags:["Existencialismo","Absurdo","Burocracia","Clásico"]
    }
];

const NEW_RELEASES = [
    {id:101,title:"Tomorrow, and Tomorrow",author:"Gabrielle Zevin",genre:"Ficción",price:21.50,isbn:"0593321200",color:"linear-gradient(135deg,#4a2060,#1a0830)",year:2024,pages:401,rating:4.6,reviews:3421,description:"Sam y Sadie se conocen de niños compartiendo su amor por los videojuegos. Décadas después, crean un juego que revoluciona la industria. Una historia sobre creatividad, amor y el precio del éxito.",tags:["Contemporánea","Amistad","Arte"]},
    {id:102,title:"Intermezzo",author:"Sally Rooney",genre:"Ficción",price:19.90,isbn:"0374611998",color:"linear-gradient(135deg,#1a3a2a,#081510)",year:2024,pages:448,rating:4.4,reviews:2187,description:"Dos hermanos muy diferentes lidian con el duelo por su padre. Peter, abogado exitoso, e Ivan, ajedrecista introvertido, navegan el dolor y el amor de maneras opuestas en la Irlanda contemporánea.",tags:["Contemporánea","Familia","Amor"]},
    {id:103,title:"James",author:"Percival Everett",genre:"Literatura",price:23.00,isbn:"0385550367",color:"linear-gradient(135deg,#3a1a0a,#150800)",year:2024,pages:320,rating:4.8,reviews:4562,description:"Premio Pulitzer 2024. Una reimaginación radical de Huckleberry Finn narrada desde la perspectiva de Jim, el esclavo. Una obra que confronta la historia con urgencia contemporánea.",tags:["Premio Pulitzer","Historia","Libertad"]},
    {id:104,title:"The God of the Woods",author:"Lauren Fox",genre:"Thriller",price:20.50,isbn:"0593656844",color:"linear-gradient(135deg,#1a1a4a,#080820)",year:2024,pages:384,rating:4.3,reviews:1876,description:"En un campamento de verano de 1978, una adolescente desaparece. Décadas antes, otra niña del mismo lugar también desapareció. Una novela sobre secretos familiares y misterios enterrados.",tags:["Thriller","Misterio","Familia"]},
    {id:105,title:"Orbital",author:"Samantha Harvey",genre:"Ficción",price:18.50,isbn:"0802164056",color:"linear-gradient(135deg,#2a0a3a,#0f0015)",year:2024,pages:209,rating:4.5,reviews:2341,description:"Premio Booker 2024. Seis astronautas orbitan la Tierra durante 24 horas. Una meditación lírica sobre la humanidad, el planeta y nuestra pequeñez en el cosmos.",tags:["Premio Booker","Espacio","Filosófico"]},
    {id:106,title:"The Women",author:"Kristin Hannah",genre:"Literatura",price:22.00,isbn:"1250178630",color:"linear-gradient(135deg,#0a2a1a,#001008)",year:2024,pages:512,rating:4.7,reviews:6789,description:"Vietnam, 1965. Frances McGrath se alista como enfermera de combate. Una poderosa historia sobre las mujeres olvidadas de la guerra de Vietnam y la generación que pagó el precio.",tags:["Guerra","Histórica","Mujeres"]},
    {id:107,title:"All Fours",author:"Miranda July",genre:"Ficción",price:21.00,isbn:"1594634882",color:"linear-gradient(135deg,#2a1a0a,#100800)",year:2024,pages:352,rating:4.2,reviews:1543,description:"Una artista sale en coche de Los Ángeles a Nueva York pero se detiene a 30 minutos de casa. Una novela audaz sobre la identidad femenina, la maternidad y el deseo.",tags:["Contemporánea","Identidad","Mujer"]},
    {id:108,title:"The Anxious Generation",author:"Jonathan Haidt",genre:"No Ficción",price:24.00,isbn:"0593655036",color:"linear-gradient(135deg,#1a2a3a,#080f18)",year:2024,pages:385,rating:4.6,reviews:8234,description:"¿Por qué los índices de depresión juvenil se dispararon alrededor de 2012? Haidt argumenta que los smartphones han causado una crisis de salud mental sin precedentes en toda una generación.",tags:["Psicología","Tecnología","Juventud"]}
];

// ══ ESTADO ═══════════════════════════════════════════════════════
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let toastTimer = null;

// Cargar desde localStorage de forma segura
try { cart = JSON.parse(localStorage.getItem('folio-cart') || '[]'); } catch(e){ cart=[]; }
try { wishlist = JSON.parse(localStorage.getItem('folio-wishlist') || '[]'); } catch(e){ wishlist=[]; }

// ══ PARTICLES (solo en el hero, optimizado) ══════════════════════
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let W = 0, H = 0, particles = [];

function resizeCanvas() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
}

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * W; this.y = Math.random() * H;
        this.size = Math.random() * 1.3 + .3;
        this.vx = (Math.random() - .5) * .28; this.vy = (Math.random() - .5) * .28;
        this.opacity = Math.random() * .45 + .08;
        this.gold = Math.random() > .72;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.gold ? `rgba(201,168,76,${this.opacity})` : `rgba(255,255,255,${this.opacity * .5})`;
        ctx.fill();
    }
}

function initParticles() {
    resizeCanvas();
    particles = [];
    const count = Math.min(70, Math.floor(W * H / 14000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
}

let frameCount = 0;
function animParticles() {
    if (!document.hidden) {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        // Conexiones cada 2 frames para mejor rendimiento
        if (frameCount % 2 === 0) {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const d = dx * dx + dy * dy;
                    if (d < 8000) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(201,168,76,${.05 * (1 - d / 8000)})`;
                        ctx.lineWidth = .5;
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }
        frameCount++;
    }
    requestAnimationFrame(animParticles);
}

initParticles();
animParticles();
window.addEventListener('resize', initParticles, { passive: true });

// ══ PARALLAX HERO ════════════════════════════════════════════════
const bookScene = document.getElementById('book-scene');
let ticking = false;
document.addEventListener('mousemove', e => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
        if (bookScene) {
            const xRot = (e.clientY / innerHeight - .5) * 18;
            const yRot = (e.clientX / innerWidth - .5) * -22;
            bookScene.style.animation = 'none';
            bookScene.style.transform = `rotateX(${8 + xRot}deg) rotateY(${-15 + yRot}deg)`;
        }
        ticking = false;
    });
}, { passive: true });

// ══ NAV SCROLL ═══════════════════════════════════════════════════
window.addEventListener('scroll', () => {
    document.getElementById('main-nav').style.background =
        scrollY > 60 ? 'rgba(8,8,8,.96)' : 'rgba(8,8,8,.7)';
}, { passive: true });

// ══ HELPERS ══════════════════════════════════════════════════════
const ALL_BOOKS = () => [...BOOKS, ...NEW_RELEASES];

function allBooksById(id) { return ALL_BOOKS().find(b => b.id === id); }

function renderStars(r) {
    const f = Math.floor(r), h = r % 1 >= .5;
    return '★'.repeat(f) + (h ? '½' : '') + '☆'.repeat(5 - f - (h ? 1 : 0));
}

function disc(price, orig) { return Math.round((1 - price / orig) * 100); }

function imgUrl(isbn, size = 'M') {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
}

function bookImg(isbn, cls, size = 'M') {
    return `<img class="${cls}" src="${imgUrl(isbn, size)}" loading="eager" alt="" onload="this.style.opacity=1" onerror="this.remove()">`;
}

// ══ RENDER LIBROS ════════════════════════════════════════════════
function renderBooks() {
    const grid = document.getElementById('books-grid');
    grid.innerHTML = BOOKS.map(b => {
        const inWish = wishlist.includes(b.id);
        return `
    <div class="book-card" id="card-${b.id}" data-genre="${b.genre}">
      <div class="book-card-inner">
        <div class="book-card-front" onclick="openBookModalById(${b.id})">
          <div class="book-cover">
            <div class="book-cover-bg" style="background:${b.color}">
              ${bookImg(b.isbn, 'book-photo', 'M')}
              <div class="book-cover-info">
                <div class="book-cover-title">${b.title}</div>
                <div class="book-cover-author">${b.author}</div>
              </div>
            </div>
            <div class="book-badge">${b.badge}</div>
            <button class="book-wishlist-btn ${inWish ? 'active' : ''}"
              onclick="event.stopPropagation(); toggleWishlist(${b.id})"
              id="wish-btn-${b.id}">${inWish ? '♥' : '♡'}</button>
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
          <div class="back-stars">${renderStars(b.rating)} <span style="font-family:var(--mono);font-size:.52rem;color:var(--muted)">${b.rating}/5</span></div>
          <div class="back-title">${b.title}</div>
          <div class="back-genre">${b.subgenre}</div>
          <div class="back-desc">${b.shortDesc}</div>
          <div class="back-meta-mini">
            <div class="back-meta-item">Páginas<span>${b.pages}</span></div>
            <div class="back-meta-item">Año<span>${b.year}</span></div>
            <div class="back-meta-item">Idioma<span>${b.language}</span></div>
            <div class="back-meta-item">Descuento<span style="color:var(--gold)">-${disc(b.price,b.originalPrice)}%</span></div>
          </div>
          <div class="back-actions">
            <button class="back-btn" onclick="addToCart(${b.id})">+ Carrito</button>
            <button class="back-detail-btn" onclick="openBookModalById(${b.id})">Ver más</button>
          </div>
        </div>
      </div>
    </div>`;
    }).join('');

    // Tilt 3D (solo en front)
    document.querySelectorAll('.book-card').forEach(card => {
        const inner = card.querySelector('.book-card-inner');
        card.addEventListener('mousemove', e => {
            if (inner.style.transform.includes('180')) return;
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - .5;
            const y = (e.clientY - r.top) / r.height - .5;
            inner.style.transform = `perspective(800px) rotateY(${x * 9}deg) rotateX(${-y * 6}deg)`;
        }, { passive: true });
        card.addEventListener('mouseleave', () => {
            if (!inner.style.transform.includes('180')) inner.style.transform = '';
        });
    });

    updateCategoryCounts();
}

function renderNewReleases() {
    document.getElementById('releases-scroll').innerHTML = NEW_RELEASES.map(b => `
    <div class="release-card" onclick="openReleaseModal(${b.id})">
      <div class="release-cover">
        <div class="release-cover-inner" style="background:${b.color}">
          ${bookImg(b.isbn, 'release-photo', 'M')}
          <div class="release-t" style="position:relative;z-index:1">${b.title}</div>
          <div class="release-a" style="position:relative;z-index:1">${b.author}</div>
        </div>
      </div>
      <div class="release-info-title">${b.title}</div>
      <div class="release-info-sub">${b.genre} · ${b.year}</div>
      <div class="release-price">$${b.price.toFixed(2)}</div>
      <button class="release-add-btn" onclick="event.stopPropagation(); addToCart(${b.id})">+ Agregar al carrito</button>
    </div>`).join('');
}

// ══ FILTER & SEARCH ══════════════════════════════════════════════
function filterBooks(genre) {
    currentFilter = genre;
    document.querySelectorAll('.filter-tab').forEach(t => {
        const label = t.textContent.trim();
        t.classList.toggle('active',
            genre === 'all' ? label === 'Todos' : label === genre
        );
    });
    let visible = 0;
    document.querySelectorAll('.book-card').forEach(card => {
        const show = genre === 'all' || card.dataset.genre === genre;
        card.classList.toggle('hidden', !show);
        if (show) visible++;
    });
    document.getElementById('no-results').style.display = visible === 0 ? 'block' : 'none';
    document.getElementById('section-title-books').innerHTML =
        genre === 'all' ? '<em>Bestsellers</em> del momento' : `Colección de <em>${genre}</em>`;
    document.getElementById('main-search').value = '';
}

function filterByGenre(genre) { filterBooks(genre); scrollToBooks(); }

function mainSearchFilter(query) {
    const q = query.trim().toLowerCase();
    if (!q) { filterBooks(currentFilter); return; }
    let visible = 0;
    BOOKS.forEach(b => {
        const match = [b.title, b.author, b.genre, b.subgenre, ...(b.tags||[])]
            .some(s => s.toLowerCase().includes(q));
        const card = document.getElementById(`card-${b.id}`);
        if (card) { card.classList.toggle('hidden', !match); if (match) visible++; }
    });
    document.getElementById('no-results').style.display = visible === 0 ? 'block' : 'none';
    document.getElementById('section-title-books').innerHTML =
        visible ? `Resultados para <em>"${query}"</em>` : `Sin resultados para <em>"${query}"</em>`;
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
}

function quickSearch(term) {
    document.getElementById('main-search').value = term;
    mainSearchFilter(term);
    scrollToBooks();
}

function updateCategoryCounts() {
    ['Fantasía','Ciencia Ficción','Thriller','Literatura','No Ficción'].forEach(g => {
        const el = document.getElementById(`cnt-${g}`);
        if (el) el.textContent = `${BOOKS.filter(b => b.genre === g).length} títulos`;
    });
}

// ══ SEARCH OVERLAY ═══════════════════════════════════════════════
function openSearch() {
    document.getElementById('search-overlay').classList.add('open');
    setTimeout(() => document.getElementById('search-overlay-input').focus(), 250);
    document.body.style.overflow = 'hidden';
}
function closeSearch() {
    document.getElementById('search-overlay').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('search-overlay-input').value = '';
    document.getElementById('search-results').innerHTML = '';
}
function handleLiveSearch(query) {
    const q = query.trim().toLowerCase();
    const container = document.getElementById('search-results');
    if (!q) { container.innerHTML = ''; return; }
    const results = ALL_BOOKS().filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.genre.toLowerCase().includes(q) ||
        (b.tags||[]).some(t => t.toLowerCase().includes(q))
    ).slice(0, 12);
    if (!results.length) {
        container.innerHTML = '<div class="search-no-results">No se encontraron resultados</div>';
        return;
    }
    container.innerHTML = results.map(b => `
    <div class="search-result-item" onclick="closeSearch(); ${b.id < 100 ? `openBookModalById(${b.id})` : `openReleaseModal(${b.id})`}">
      <div class="search-result-cover-bg" style="background:${b.color}">
        ${bookImg(b.isbn, '', 'S')}
        <span style="font-family:var(--serif);font-size:.6rem;font-weight:700;color:#fff;position:relative;z-index:1;text-shadow:0 1px 3px rgba(0,0,0,.9)">${b.title}</span>
      </div>
      <div class="search-result-title">${b.title}</div>
      <div class="search-result-author">${b.author}</div>
      <div class="search-result-price">$${b.price.toFixed(2)}</div>
    </div>`).join('');
    container.querySelectorAll('img').forEach(img => { img.onload = () => img.style.opacity = 1; });
}

// ══ CART — Completamente reescrito sin bugs ═══════════════════════
function saveCart() {
    try { localStorage.setItem('folio-cart', JSON.stringify(cart)); } catch(e){}
}

function addToCart(bookId) {
    const book = allBooksById(bookId);
    if (!book) return;
    const existing = cart.find(i => i.id === bookId);
    if (existing) { existing.qty++; }
    else { cart.push({ id: bookId, qty: 1 }); }
    saveCart();
    updateCartCount();
    renderCartUI();
    showToast(`"${book.title}" agregado al carrito`);
}

function removeFromCart(bookId) {
    cart = cart.filter(i => i.id !== bookId);
    saveCart();
    updateCartCount();
    renderCartUI();
}

function updateQuantity(bookId, delta) {
    const item = cart.find(i => i.id === bookId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== bookId);
    }
    saveCart();
    updateCartCount();
    renderCartUI();
}

function updateCartCount() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById('cart-count').textContent = total;
    document.getElementById('cart-item-count').textContent = total;
}

function getCartSubtotal() {
    return cart.reduce((s, item) => {
        const b = allBooksById(item.id);
        return s + (b ? b.price * item.qty : 0);
    }, 0);
}

// ── Renderizado del carrito: solo innerHTML, sin mover nodos DOM ─
function renderCartUI() {
    const container = document.getElementById('cart-items');
    const footer = document.getElementById('cart-footer');

    if (!cart.length) {
        // Estado vacío: renderizado como HTML puro
        container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">📚</div>
        <p>Tu carrito está vacío</p>
        <button class="cart-empty-btn" onclick="closeCart(); scrollToBooks()">Explorar catálogo</button>
      </div>`;
        footer.style.display = 'none';
        return;
    }

    // Estado con items
    footer.style.display = 'block';

    container.innerHTML = cart.map(item => {
        const b = allBooksById(item.id);
        if (!b) return '';
        const coverHTML = `
      <div class="cart-item-cover" style="background:${b.color}">
        <img class="cart-item-img" src="${imgUrl(b.isbn, 'S')}"
          loading="eager" alt="${b.title}"
          onload="this.style.opacity=1"
          onerror="this.remove()">
      </div>`;
        return `
      <div class="cart-item" id="cart-item-${b.id}">
        ${coverHTML}
        <div class="cart-item-info">
          <div class="cart-item-title">${b.title}</div>
          <div class="cart-item-author">${b.author}</div>
          <div class="cart-item-price">$${(b.price * item.qty).toFixed(2)}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQuantity(${b.id}, -1)">−</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" onclick="updateQuantity(${b.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${b.id})" title="Eliminar">✕</button>
      </div>`;
    }).join('');

    // Actualizar totales
    const subtotal = getCartSubtotal();
    const shipping = subtotal >= 40 ? 0 : 4.99;
    const total = subtotal + shipping;
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    const shippingEl = document.getElementById('cart-shipping');
    shippingEl.textContent = subtotal >= 40 ? 'Gratis' : `$${shipping.toFixed(2)}`;
    shippingEl.className = subtotal >= 40 ? 'free-tag' : '';
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
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

// ══ WISHLIST ══════════════════════════════════════════════════════
function saveWishlist() {
    try { localStorage.setItem('folio-wishlist', JSON.stringify(wishlist)); } catch(e){}
}

function toggleWishlist(bookId) {
    const book = allBooksById(bookId);
    const idx = wishlist.indexOf(bookId);
    if (idx === -1) { wishlist.push(bookId); showToast(`"${book?.title}" guardado en tu lista`); }
    else { wishlist.splice(idx, 1); showToast(`"${book?.title}" eliminado de la lista`); }
    saveWishlist();
    // Actualizar botón en grid
    const btn = document.getElementById(`wish-btn-${bookId}`);
    if (btn) {
        const active = wishlist.includes(bookId);
        btn.textContent = active ? '♥' : '♡';
        btn.classList.toggle('active', active);
    }
    updateWishlistCount();
}

function updateWishlistCount() {
    const cnt = document.getElementById('wishlist-count');
    cnt.textContent = wishlist.length;
    cnt.style.display = wishlist.length ? 'flex' : 'none';
    document.getElementById('wishlist-icon').textContent = wishlist.length ? '♥' : '♡';
}

function openWishlistView() {
    if (!wishlist.length) { showToast('Tu lista de deseos está vacía'); return; }
    scrollToBooks();
    requestAnimationFrame(() => {
        document.querySelectorAll('.book-card').forEach(card => {
            const id = parseInt(card.id.replace('card-', ''));
            card.classList.toggle('hidden', !wishlist.includes(id));
        });
        document.getElementById('section-title-books').innerHTML = 'Mi lista de <em>deseos</em>';
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        showToast(`Mostrando ${wishlist.length} libro(s) de tu lista`);
    });
}

// ══ BOOK MODAL ════════════════════════════════════════════════════
function openBookModal(book, isRelease = false) {
    if (!book) return;
    const inWish = wishlist.includes(book.id);
    const discVal = book.originalPrice ? disc(book.price, book.originalPrice) : null;
    const addFn = isRelease ? `addToCart(${book.id})` : `addToCart(${book.id})`;

    document.getElementById('book-modal-content').innerHTML = `
    <div>
      <div class="modal-cover">
        <div class="modal-cover-gradient" style="background:${book.color}"></div>
        ${bookImg(book.isbn, '', 'L')}
        <div class="modal-cover-text">
          <div class="modal-cover-title">${book.title}</div>
          <div class="modal-cover-author">${book.author}</div>
        </div>
      </div>
      <div style="margin-top:1rem;display:flex;flex-wrap:wrap;gap:.4rem">
        ${(book.tags||[]).map(t => `<span class="modal-tag">${t}</span>`).join('')}
      </div>
    </div>
    <div class="modal-info">
      <span class="modal-genre-badge">${book.subgenre || book.genre}${book.year ? ' · '+book.year : ''}</span>
      <h2 class="modal-title">${book.title}</h2>
      <div class="modal-author">${book.author}</div>
      <div class="modal-rating">
        <span class="modal-stars">${renderStars(book.rating)}</span>
        <span class="modal-reviews">${book.rating}/5 · ${book.reviews?.toLocaleString()} reseñas</span>
      </div>
      <p class="modal-desc">${book.description}</p>
      <div class="modal-meta">
        ${book.publisher ? `<div class="modal-meta-row"><span class="modal-meta-label">Editorial</span><span class="modal-meta-value">${book.publisher}</span></div>` : ''}
        ${book.year ? `<div class="modal-meta-row"><span class="modal-meta-label">Año</span><span class="modal-meta-value">${book.year}</span></div>` : ''}
        ${book.pages ? `<div class="modal-meta-row"><span class="modal-meta-label">Páginas</span><span class="modal-meta-value">${book.pages}</span></div>` : ''}
        ${book.language ? `<div class="modal-meta-row"><span class="modal-meta-label">Idioma</span><span class="modal-meta-value">${book.language}</span></div>` : ''}
      </div>
      <div class="modal-price-block">
        <span class="modal-price">$${book.price.toFixed(2)}</span>
        ${book.originalPrice ? `<span class="modal-price-old">$${book.originalPrice.toFixed(2)}</span><span class="modal-discount">-${discVal}%</span>` : '<span style="font-family:var(--mono);font-size:.75rem;color:#555">Novedad 2024</span>'}
      </div>
      <div class="modal-actions">
        <button class="modal-add-cart" onclick="${addFn}; closeBookModal()">+ Agregar al carrito</button>
        ${!isRelease ? `
        <button class="modal-wishlist-btn ${inWish ? 'active' : ''}" id="modal-wish-${book.id}"
          onclick="toggleWishlist(${book.id}); document.getElementById('modal-wish-${book.id}').classList.toggle('active'); this.textContent=wishlist.includes(${book.id})?'♥ En lista':'♡ Guardar'">
          ${inWish ? '♥ En lista' : '♡ Guardar'}
        </button>` : ''}
      </div>
    </div>`;

    document.getElementById('book-modal-content').querySelectorAll('img').forEach(img => {
        img.onload = () => img.style.opacity = 1;
        img.onerror = () => img.remove();
    });

    document.getElementById('book-modal-overlay').classList.add('open');
    document.getElementById('book-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function openBookModalById(id) { openBookModal(BOOKS.find(b => b.id === id), false); }
function openReleaseModal(id) { openBookModal(NEW_RELEASES.find(b => b.id === id), true); }

function closeBookModal() {
    document.getElementById('book-modal-overlay').classList.remove('open');
    document.getElementById('book-modal').classList.remove('open');
    document.body.style.overflow = '';
}

// ══ CHECKOUT ══════════════════════════════════════════════════════
function openCheckout() {
    if (!cart.length) { showToast('Tu carrito está vacío'); return; }
    closeCart();
    renderCheckoutSummary();
    document.getElementById('checkout-inner').style.display = 'grid';
    document.getElementById('order-success').style.display = 'none';
    document.getElementById('checkout-overlay').classList.add('open');
    document.getElementById('checkout-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeCheckout() {
    document.getElementById('checkout-overlay').classList.remove('open');
    document.getElementById('checkout-modal').classList.remove('open');
    document.body.style.overflow = '';
}
function renderCheckoutSummary() {
    document.getElementById('checkout-items').innerHTML = cart.map(item => {
        const b = allBooksById(item.id);
        if (!b) return '';
        return `
    <div class="checkout-item">
      <div class="checkout-item-cover" style="background:${b.color}">
        ${bookImg(b.isbn, '', 'S')}
      </div>
      <div style="flex:1;min-width:0">
        <div class="checkout-item-title">${b.title}</div>
        <div class="checkout-item-qty">${b.author} × ${item.qty}</div>
      </div>
      <div class="checkout-item-price">$${(b.price*item.qty).toFixed(2)}</div>
    </div>`;
    }).join('');
    document.querySelectorAll('#checkout-items img').forEach(img => { img.onload = () => img.style.opacity = 1; });
    const sub = getCartSubtotal();
    const total = sub + (sub >= 40 ? 0 : 4.99);
    document.getElementById('co-subtotal').textContent = `$${sub.toFixed(2)}`;
    document.getElementById('co-total').textContent = `$${total.toFixed(2)}`;
}
function selectPayment(input) {
    document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
    input.closest('.payment-method').classList.add('active');
    document.getElementById('card-fields').classList.toggle('hidden', input.value !== 'card');
}
function formatCard(input) {
    const v = input.value.replace(/\D/g,'').slice(0,16);
    input.value = v.match(/.{1,4}/g)?.join(' ') || v;
}
function formatExpiry(input) {
    let v = input.value.replace(/\D/g,'');
    if (v.length >= 2) v = v.slice(0,2)+'/'+v.slice(2,4);
    input.value = v;
}
function validateCheckout() {
    let ok = true;
    const rules = [
        {id:'ch-name',  err:'err-name',   msg:'Ingresa tu nombre'},
        {id:'ch-email', err:'err-email',  msg:'Email inválido', fn:v=>/\S+@\S+\.\S+/.test(v)},
        {id:'ch-address',err:'err-address',msg:'Ingresa tu dirección'},
        {id:'ch-city',  err:'err-city',   msg:'Ingresa tu ciudad'}
    ];
    const pay = document.querySelector('input[name="payment"]:checked')?.value;
    if (pay === 'card') {
        rules.push(
            {id:'ch-card',  err:'err-card',  msg:'16 dígitos requeridos', fn:v=>v.replace(/\s/g,'').length===16},
            {id:'ch-expiry',err:'err-expiry',msg:'Formato MM/AA', fn:v=>/^\d{2}\/\d{2}$/.test(v)},
            {id:'ch-cvv',   err:'err-cvv',   msg:'CVV inválido', fn:v=>v.length>=3}
        );
    }
    rules.forEach(r => {
        const inp = document.getElementById(r.id);
        if (!inp) return;
        const val = inp.value.trim();
        const valid = val && (r.fn ? r.fn(val) : true);
        inp.classList.toggle('error', !valid);
        const errEl = document.getElementById(r.err);
        if (errEl) errEl.textContent = valid ? '' : r.msg;
        if (!valid) ok = false;
    });
    return ok;
}
function submitOrder() {
    if (!validateCheckout()) { showToast('Completa todos los campos requeridos'); return; }
    const btn = document.querySelector('.checkout-submit-btn');
    btn.textContent = 'Procesando...'; btn.disabled = true;
    setTimeout(() => {
        document.getElementById('checkout-inner').style.display = 'none';
        document.getElementById('order-success').style.display = 'flex';
        document.getElementById('order-code').textContent =
            'Código: FOL-' + Date.now().toString(36).toUpperCase().slice(-8);
        btn.textContent = 'Confirmar pedido →'; btn.disabled = false;
    }, 1600);
}

// ══ NEWSLETTER ════════════════════════════════════════════════════
function subscribeNewsletter() {
    const inp = document.getElementById('newsletter-email');
    const msg = document.getElementById('newsletter-msg');
    const email = inp.value.trim();
    msg.style.display = 'block';
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        inp.classList.add('error');
        msg.className = 'newsletter-msg error';
        msg.textContent = 'Por favor ingresa un email válido.';
        return;
    }
    inp.classList.remove('error');
    msg.className = 'newsletter-msg success';
    msg.textContent = `✓ ¡Bienvenido al club! Te enviaremos novedades a ${email}`;
    inp.value = '';
    showToast('¡Suscripción exitosa!');
}

// ══ TOAST ═════════════════════════════════════════════════════════
function showToast(msg) {
    const el = document.getElementById('toast');
    document.getElementById('toast-text').textContent = '✓  ' + msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

// ══ SCROLL HELPERS ════════════════════════════════════════════════
function scrollToBooks()      { document.getElementById('catalogo')?.scrollIntoView({behavior:'smooth',block:'start'}); }
function scrollToReleases()   { document.getElementById('novedades')?.scrollIntoView({behavior:'smooth',block:'start'}); }
function scrollToCategories() { document.getElementById('categorias')?.scrollIntoView({behavior:'smooth',block:'start'}); }
function scrollToNewsletter() { document.getElementById('newsletter')?.scrollIntoView({behavior:'smooth',block:'start'}); }
function scrollToTop()        { window.scrollTo({top:0,behavior:'smooth'}); }

// ══ KEYBOARD ESCAPE ═══════════════════════════════════════════════
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSearch(); closeBookModal(); closeCart(); closeCheckout(); }
});

// ══ SCROLL REVEAL ═════════════════════════════════════════════════
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger')
    .forEach(el => revealObs.observe(el));

// ══ INIT ══════════════════════════════════════════════════════════
(function init() {
    renderBooks();
    renderNewReleases();
    updateCartCount();
    updateWishlistCount();
    renderCartUI(); // Estado inicial del carrito
})();