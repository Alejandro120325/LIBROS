'use strict';

// ══ DATOS — Catálogo Completo ════════════════════════════════════
const BOOKS = [
    /* ── FANTASÍA (6) ── */
    {id:1,title:"El nombre del viento",author:"Patrick Rothfuss",genre:"Fantasía",subgenre:"Fantasía épica",price:22.90,originalPrice:32.00,isbn:"0756404746",badge:"Bestseller",rating:4.9,reviews:8432,pages:662,language:"Español",publisher:"Debolsillo",year:2007,color:"linear-gradient(135deg,#8B2635 0%,#3d0f18 100%)",description:"Kvothe, el mago más temido y famoso de su época, vive escondido bajo un nombre falso como posadero en un pueblo olvidado. Cuando Cronista lo encuentra, Kvothe acepta narrar su historia en tres días. Una prosa de belleza extraordinaria.",shortDesc:"Un mago recuenta su vida épica en esta monumental obra de fantasía.",tags:["Magia","Universidad","Aventura","Épico"]},
    {id:7,title:"Harry Potter y la piedra filosofal",author:"J.K. Rowling",genre:"Fantasía",subgenre:"Fantasía juvenil",price:17.90,originalPrice:25.00,isbn:"0439708184",badge:"Icónico",rating:4.9,reviews:45231,pages:309,language:"Español",publisher:"Salamandra",year:1997,color:"linear-gradient(135deg,#722F37 0%,#1a0a0d 100%)",description:"Harry Potter ha vivido bajo la escalera de casa de sus tíos sin saber que es un mago. En Hogwarts descubrirá que es famoso por haber sobrevivido al ataque del temible Voldemort cuando era bebé. El inicio de la saga más leída de la historia.",shortDesc:"El inicio de la saga mágica más leída de la historia.",tags:["Magia","Escuela","Amistad","Aventura"]},
    {id:9,title:"El señor de los anillos",author:"J.R.R. Tolkien",genre:"Fantasía",subgenre:"Fantasía épica",price:29.90,originalPrice:42.00,isbn:"0618640150",badge:"Legendario",rating:4.9,reviews:38910,pages:1216,language:"Español",publisher:"Minotauro",year:1954,color:"linear-gradient(135deg,#3a5c1a 0%,#0f1f05 100%)",description:"En la Tierra Media, el hobbit Frodo Bolsón hereda el Anillo Único, forjado por el Señor Oscuro Sauron. Con la ayuda de la Compañía del Anillo, emprende un peligroso viaje hacia Mordor para destruir el Anillo en el Monte del Destino.",shortDesc:"La obra cumbre de la fantasía épica que lo inició todo.",tags:["Épico","Mitología","Aventura","Clásico"]},
    {id:17,title:"El camino de los reyes",author:"Brandon Sanderson",genre:"Fantasía",subgenre:"Fantasía épica",price:24.90,originalPrice:35.00,isbn:"0765326353",badge:"Epic Fantasy",rating:4.9,reviews:21543,pages:1007,language:"Español",publisher:"Nova",year:2010,color:"linear-gradient(135deg,#1a3550 0%,#08141e 100%)",description:"En el mundo de Roshar, devastado por las tormentas de alta piedra, tres personas se ven envueltas en el destino de una nación. El inicio de la saga épica más ambiciosa de la fantasía contemporánea.",shortDesc:"El inicio de la saga épica más ambiciosa de Brandon Sanderson.",tags:["Magia","Política","Épico","Cosmos"]},
    {id:18,title:"Eragon",author:"Christopher Paolini",genre:"Fantasía",subgenre:"Fantasía épica",price:16.90,originalPrice:24.00,isbn:"0375826696",badge:"Fenómeno",rating:4.5,reviews:18234,pages:509,language:"Español",publisher:"Alfaguara",year:2003,color:"linear-gradient(135deg,#2a4a20 0%,#0a1808 100%)",description:"En la tierra de Alagaësia, el joven granjero Eragon encuentra un extraño huevo azul que resulta ser el huevo de un dragón. Se convierte en el primer Jinete de Dragón en una generación.",shortDesc:"El joven granjero que se convirtió en Jinete de Dragón.",tags:["Dragones","Aventura","Magia","Juvenil"]},
    {id:19,title:"Las crónicas de Narnia",author:"C.S. Lewis",genre:"Fantasía",subgenre:"Fantasía clásica",price:18.50,originalPrice:26.00,isbn:"0064471195",badge:"Clásico",rating:4.8,reviews:29876,pages:768,language:"Español",publisher:"Harper Collins",year:1950,color:"linear-gradient(135deg,#3a1a5c 0%,#120820 100%)",description:"A través de un armario mágico, los hermanos Pevensie descubren el mundo de Narnia, habitado por animales parlantes y criaturas fantásticas dominado por la Bruja Blanca. Aslan los guiará en su destino.",shortDesc:"El armario mágico que abre la puerta al reino de Narnia.",tags:["Magia","Niños","Alegoría","Clásico"]},

    /* ── CIENCIA FICCIÓN (6) ── */
    {id:2,title:"Duna",author:"Frank Herbert",genre:"Ciencia Ficción",subgenre:"Space Opera",price:18.50,originalPrice:26.00,isbn:"0441013597",badge:"Clásico",rating:4.8,reviews:12654,pages:896,language:"Español",publisher:"Debolsillo",year:1965,color:"linear-gradient(135deg,#1a3a5c 0%,#050f1c 100%)",description:"Paul Atreides es trasladado con su familia al planeta desértico Arrakis, único lugar donde se produce la especia melange. Una obra monumental que explora la ecología, la religión y el destino.",shortDesc:"La obra maestra de la ciencia ficción. Política, ecología y destino.",tags:["Space Opera","Política","Desierto","Mesías"]},
    {id:4,title:"1984",author:"George Orwell",genre:"Ciencia Ficción",subgenre:"Distopía",price:14.90,originalPrice:22.00,isbn:"0451524934",badge:"Distopía",rating:4.8,reviews:22341,pages:388,language:"Español",publisher:"Debolsillo",year:1949,color:"linear-gradient(135deg,#1a1a1a 0%,#3d3d3d 100%)",description:"Winston Smith trabaja en el Ministerio de la Verdad. Vive en Oceanía, un estado totalitario donde el Gran Hermano lo vigila absolutamente todo. Una advertencia profética sobre el totalitarismo.",shortDesc:"La distopía definitiva sobre el control totalitario y la vigilancia.",tags:["Distopía","Totalitarismo","Política","Clásico"]},
    {id:10,title:"Fahrenheit 451",author:"Ray Bradbury",genre:"Ciencia Ficción",subgenre:"Distopía",price:15.50,originalPrice:21.00,isbn:"1451673310",badge:"Esencial",rating:4.7,reviews:16543,pages:256,language:"Español",publisher:"Debolsillo",year:1953,color:"linear-gradient(135deg,#8B3a10 0%,#2d0f04 100%)",description:"En un futuro donde los libros están prohibidos y los bomberos los queman, Guy Montag comienza a cuestionar su trabajo. Una obra visionaria sobre la censura y el pensamiento crítico.",shortDesc:"Una distopía esencial sobre la censura y el poder de los libros.",tags:["Distopía","Censura","Libros","Clásico"]},
    {id:20,title:"Fundación",author:"Isaac Asimov",genre:"Ciencia Ficción",subgenre:"Space Opera",price:17.90,originalPrice:25.00,isbn:"0553293354",badge:"Maestro",rating:4.8,reviews:19654,pages:296,language:"Español",publisher:"Debolsillo",year:1951,color:"linear-gradient(135deg,#1a2a4a 0%,#050a18 100%)",description:"El matemático Hari Seldon usa la psicohistoria para predecir la caída del Imperio Galáctico. Para reducir el período de barbarismo que seguirá, crea la Fundación.",shortDesc:"La matemática puede predecir el destino de toda la humanidad.",tags:["Galáctico","Política","Historia","Clásico"]},
    {id:21,title:"El marciano",author:"Andy Weir",genre:"Ciencia Ficción",subgenre:"Hard Science Fiction",price:18.90,originalPrice:26.00,isbn:"0804139021",badge:"Superventas",rating:4.8,reviews:22134,pages:369,language:"Español",publisher:"Planeta",year:2011,color:"linear-gradient(135deg,#5c2010 0%,#1a0803 100%)",description:"El astronauta Mark Watney es abandonado en Marte tras ser dado por muerto. Solo, con suministros para pocos meses, debe usar su ingenio y botánica para sobrevivir.",shortDesc:"Solo en Marte, la ciencia es la única forma de sobrevivir.",tags:["Marte","Supervivencia","Ciencia","Humor"]},
    {id:22,title:"Neuromante",author:"William Gibson",genre:"Ciencia Ficción",subgenre:"Cyberpunk",price:16.50,originalPrice:23.00,isbn:"0441569595",badge:"Cyberpunk",rating:4.5,reviews:11234,pages:288,language:"Español",publisher:"Minotauro",year:1984,color:"linear-gradient(135deg,#1a0a2e 0%,#060311 100%)",description:"Case, un hacker arruinado, recibe una misión extraordinaria: penetrar en una Inteligencia Artificial llamada Neuromante. La novela que fundó el género cyberpunk.",shortDesc:"La novela que inventó el ciberespacio y fundó el cyberpunk.",tags:["Cyberpunk","Hacker","IA","Futuro"]},

    /* ── THRILLER (6) ── */
    {id:23,title:"El código Da Vinci",author:"Dan Brown",genre:"Thriller",subgenre:"Thriller histórico",price:17.90,originalPrice:25.00,isbn:"0385504209",badge:"80M copias",rating:4.3,reviews:45678,pages:561,language:"Español",publisher:"Umbriel",year:2003,color:"linear-gradient(135deg,#2a1a0a 0%,#0a0603 100%)",description:"Robert Langdon es convocado al Louvre, donde aparece el cadáver del curador. La investigación lo lleva a descubrir una conspiración que podría destruir los cimientos del cristianismo.",shortDesc:"El thriller que convirtió el arte en un código secreto mortal.",tags:["Misterio","Historia","Arte","Conspiración"]},
    {id:24,title:"El silencio de los inocentes",author:"Thomas Harris",genre:"Thriller",subgenre:"Thriller psicológico",price:16.90,originalPrice:24.00,isbn:"0312924585",badge:"Icónico",rating:4.7,reviews:16543,pages:384,language:"Español",publisher:"DeBolsillo",year:1988,color:"linear-gradient(135deg,#1a1a2a 0%,#060608 100%)",description:"La agente del FBI Clarice Starling debe entrevistar al psiquiatra Hannibal Lecter para atrapar a un asesino en serie. Un duelo psicológico brillante y perturbador.",shortDesc:"El duelo psicológico que redefinió el thriller criminal.",tags:["Crimen","Psicología","FBI","Oscuro"]},
    {id:25,title:"Misery",author:"Stephen King",genre:"Thriller",subgenre:"Thriller de terror",price:15.90,originalPrice:22.00,isbn:"0451169522",badge:"Stephen King",rating:4.7,reviews:18765,pages:386,language:"Español",publisher:"DeBolsillo",year:1987,color:"linear-gradient(135deg,#1a0505 0%,#080101 100%)",description:"El escritor Paul Sheldon tiene un accidente. Annie Wilkes, su mayor fan, lo rescata y lo mantiene cautivo. Cuando descubre que Paul matará a su personaje favorito, se convierte en su pesadilla.",shortDesc:"Cuando tu mayor fan se convierte en tu peor pesadilla.",tags:["Terror","Secuestro","Claustrofóbico","King"]},
    {id:26,title:"La chica del tren",author:"Paula Hawkins",genre:"Thriller",subgenre:"Thriller psicológico",price:16.50,originalPrice:23.00,isbn:"1594634025",badge:"Bestseller",rating:4.2,reviews:32456,pages:395,language:"Español",publisher:"Planeta",year:2015,color:"linear-gradient(135deg,#1a1535 0%,#060512 100%)",description:"Rachel toma el mismo tren cada mañana. Cuando una mujer a la que observaba desaparece, se ve envuelta en la investigación. Un thriller sobre la memoria y el engaño.",shortDesc:"El tren que pasa cada día esconde un secreto mortal.",tags:["Psicológico","Suspense","Memoria","Secretos"]},
    {id:27,title:"Perdida",author:"Gillian Flynn",genre:"Thriller",subgenre:"Thriller psicológico",price:17.50,originalPrice:24.00,isbn:"0307588378",badge:"Fenómeno",rating:4.4,reviews:28934,pages:432,language:"Español",publisher:"Mondadori",year:2012,color:"linear-gradient(135deg,#2a1020 0%,#0a0308 100%)",description:"La mañana de su quinto aniversario de boda, Amy desaparece. Las pruebas apuntan a su esposo Nick, pero la historia tiene múltiples capas y engaños.",shortDesc:"El matrimonio perfecto que oculta algo absolutamente monstruoso.",tags:["Matrimonio","Manipulación","Giro","Suspense"]},
    {id:28,title:"El nombre de la rosa",author:"Umberto Eco",genre:"Thriller",subgenre:"Thriller histórico",price:19.90,originalPrice:28.00,isbn:"0156001314",badge:"Literario",rating:4.7,reviews:12345,pages:502,language:"Español",publisher:"Lumen",year:1980,color:"linear-gradient(135deg,#1a1200 0%,#070500 100%)",description:"En la Edad Media, el monje Guillermo de Baskerville investiga misteriosas muertes en una abadía benedictina. La pista lleva a un libro prohibido de Aristóteles.",shortDesc:"Un monje medieval resuelve un misterio en una abadía laberíntica.",tags:["Medieval","Misterio","Filosofía","Historia"]},

    /* ── LITERATURA (9) ── */
    {id:3,title:"Cien años de soledad",author:"Gabriel García Márquez",genre:"Literatura",subgenre:"Realismo mágico",price:19.90,originalPrice:28.00,isbn:"0060883286",badge:"Premio Nobel",rating:4.9,reviews:15820,pages:471,language:"Español",publisher:"Harper Collins",year:1967,color:"linear-gradient(135deg,#2d5a27 0%,#0a1a08 100%)",description:"La historia de la familia Buendía a lo largo de siete generaciones en Macondo. Lo maravilloso y lo cotidiano conviven naturalmente en esta obra maestra del realismo mágico.",shortDesc:"La novela fundacional del realismo mágico latinoamericano.",tags:["Realismo mágico","Latinoamérica","Familia","Épico"]},
    {id:5,title:"El alquimista",author:"Paulo Coelho",genre:"Literatura",subgenre:"Novela filosófica",price:16.50,originalPrice:23.00,isbn:"0062315005",badge:"65M copias",rating:4.7,reviews:19876,pages:208,language:"Español",publisher:"Harper Collins",year:1988,color:"linear-gradient(135deg,#8b6f2e 0%,#2d2008 100%)",description:"Santiago, un joven pastor andaluz, sueña con un tesoro en Egipto y decide seguir su Leyenda Personal. La novela en portugués más traducida de la historia.",shortDesc:"La alegoría más vendida del mundo sobre los sueños y el destino.",tags:["Filosofía","Viaje","Espiritualidad","Sueños"]},
    {id:6,title:"La sombra del viento",author:"Carlos Ruiz Zafón",genre:"Literatura",subgenre:"Novela gótica",price:20.90,originalPrice:30.00,isbn:"0143034901",badge:"Superventas",rating:4.8,reviews:9654,pages:576,language:"Español",publisher:"Planeta",year:2001,color:"linear-gradient(135deg,#2a1a3a 0%,#0d0815 100%)",description:"Barcelona, 1945. Daniel Sempere descubre en el Cementerio de los Libros Olvidados que alguien está destruyendo todas las obras de un autor maldito. Un misterio apasionante.",shortDesc:"Un laberinto de misterio y pasión en la Barcelona de posguerra.",tags:["Misterio","Barcelona","Historia","Gótico"]},
    {id:11,title:"Crimen y castigo",author:"Fiódor Dostoyevski",genre:"Literatura",subgenre:"Novela psicológica",price:17.90,originalPrice:25.00,isbn:"0140449138",badge:"Clásico ruso",rating:4.8,reviews:11234,pages:576,language:"Español",publisher:"Alianza",year:1866,color:"linear-gradient(135deg,#1a1535 0%,#080610 100%)",description:"Raskolnikov planea el asesinato de una anciana usurera creyéndose por encima de la moral. La novela sigue su desintegración psicológica atormentado por la culpa.",shortDesc:"La obra maestra de Dostoyevski sobre la culpa y la redención.",tags:["Psicológico","Rusia","Culpa","Filosofía"]},
    {id:12,title:"El gran Gatsby",author:"F. Scott Fitzgerald",genre:"Literatura",subgenre:"Novela modernista",price:13.90,originalPrice:20.00,isbn:"0743273567",badge:"Clásico EE.UU.",rating:4.5,reviews:18750,pages:208,language:"Español",publisher:"Alianza",year:1925,color:"linear-gradient(135deg,#1a3a2a 0%,#050f08 100%)",description:"Nueva York, años veinte. El misterioso millonario Jay Gatsby da fiestas legendarias para reconquistar a su amor del pasado. Una crítica mordaz al sueño americano.",shortDesc:"La crítica definitiva al sueño americano en los locos años veinte.",tags:["Sueño americano","Años 20","Romance","Clásico"]},
    {id:13,title:"Orgullo y prejuicio",author:"Jane Austen",genre:"Literatura",subgenre:"Novela romántica",price:14.50,originalPrice:20.00,isbn:"0141439513",badge:"Inmortal",rating:4.8,reviews:24567,pages:432,language:"Español",publisher:"Penguin",year:1813,color:"linear-gradient(135deg,#3a1a2a 0%,#0f0509 100%)",description:"Elizabeth Bennet y el señor Darcy protagonizan el romance más célebre de la literatura universal. Una novela irónica sobre las convenciones sociales y el amor verdadero.",shortDesc:"El romance más célebre de la literatura universal.",tags:["Romance","Inglaterra","Ironía","Clásico"]},
    {id:14,title:"El señor de las moscas",author:"William Golding",genre:"Literatura",subgenre:"Novela alegórica",price:14.90,originalPrice:21.00,isbn:"0399501487",badge:"Premio Nobel",rating:4.6,reviews:12876,pages:290,language:"Español",publisher:"Alianza",year:1954,color:"linear-gradient(135deg,#2a1a0a 0%,#0a0603 100%)",description:"Un grupo de niños británicos queda atrapado en una isla desierta. La civilización se derrumba ante la violencia. Una alegoría sobre la naturaleza humana.",shortDesc:"Una perturbadora alegoría sobre la barbarie en la naturaleza humana.",tags:["Alegoría","Supervivencia","Naturaleza humana","Clásico"]},
    {id:15,title:"Rayuela",author:"Julio Cortázar",genre:"Literatura",subgenre:"Novela experimental",price:18.90,originalPrice:27.00,isbn:"0394752848",badge:"Boom latinoam.",rating:4.6,reviews:7543,pages:736,language:"Español",publisher:"Alfaguara",year:1963,color:"linear-gradient(135deg,#0a2a3a 0%,#020c10 100%)",description:"Horacio Oliveira vive en París. Cortázar propone dos formas de leer la novela: lineal o saltando capítulos. Obra revolucionaria de la narrativa latinoamericana.",shortDesc:"La novela experimental que revolucionó la narrativa latinoamericana.",tags:["Experimental","París","Identidad","Boom latinoam."]},
    {id:16,title:"El proceso",author:"Franz Kafka",genre:"Literatura",subgenre:"Novela existencialista",price:13.50,originalPrice:19.00,isbn:"0805209999",badge:"Kafkiano",rating:4.6,reviews:9321,pages:256,language:"Español",publisher:"Alianza",year:1925,color:"linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 100%)",description:"Josef K. se despierta y es detenido sin saber de qué crimen se le acusa. Intenta descubrir la verdad en una burocracia absurda. Una obra fundamental del existencialismo.",shortDesc:"La pesadilla burocrática que definió un adjetivo universal: kafkiano.",tags:["Existencialismo","Absurdo","Burocracia","Clásico"]},

    /* ── NO FICCIÓN (6) ── */
    {id:8,title:"Sapiens",author:"Yuval Noah Harari",genre:"No Ficción",subgenre:"Historia",price:21.50,originalPrice:30.00,isbn:"0062316095",badge:"Fenómeno",rating:4.7,reviews:28943,pages:512,language:"Español",publisher:"Debate",year:2011,color:"linear-gradient(135deg,#0f3a4a 0%,#04151c 100%)",description:"¿Cómo llegó el Homo sapiens a dominar el planeta? Harari recorre 70,000 años de historia humana con una visión fascinante y provocadora.",shortDesc:"La historia de la humanidad contada de forma completamente nueva.",tags:["Historia","Humanidad","Ciencia","Evolución"]},
    {id:29,title:"Homo Deus",author:"Yuval Noah Harari",genre:"No Ficción",subgenre:"Futurología",price:22.50,originalPrice:31.00,isbn:"0062464310",badge:"Continuación",rating:4.6,reviews:17654,pages:448,language:"Español",publisher:"Debate",year:2015,color:"linear-gradient(135deg,#1a0a2e 0%,#050310 100%)",description:"Después de conquistar el hambre y la guerra, Harari explora la búsqueda de la inmortalidad y la posibilidad de convertirnos en dioses mediante la IA.",shortDesc:"¿Qué hará la humanidad cuando supere el hambre y la muerte?",tags:["Futuro","IA","Humanidad","Filosofía"]},
    {id:30,title:"Pensar rápido, pensar despacio",author:"Daniel Kahneman",genre:"No Ficción",subgenre:"Psicología cognitiva",price:23.90,originalPrice:33.00,isbn:"0374533555",badge:"Premio Nobel",rating:4.7,reviews:21456,pages:496,language:"Español",publisher:"Debate",year:2011,color:"linear-gradient(135deg,#0a1a3a 0%,#030710 100%)",description:"El Premio Nobel Kahneman revela los dos sistemas que rigen nuestro pensamiento: el rápido e intuitivo, y el lento y lógico. Muestra los sesgos de nuestras decisiones.",shortDesc:"Cómo los sesgos de nuestra mente nos llevan a decisiones irracionales.",tags:["Psicología","Economía","Decisiones","Ciencia"]},
    {id:31,title:"En busca de sentido",author:"Viktor Frankl",genre:"No Ficción",subgenre:"Psicología existencial",price:15.90,originalPrice:22.00,isbn:"0807014273",badge:"Imprescindible",rating:4.9,reviews:34567,pages:165,language:"Español",publisher:"Herder",year:1946,color:"linear-gradient(135deg,#2a2a10 0%,#0a0a03 100%)",description:"Basado en su experiencia en campos de concentración nazis, Frankl narra cómo los prisioneros con propósito tenían más probabilidades de sobrevivir.",shortDesc:"La experiencia en los campos nazis que fundó la logoterapia.",tags:["Psicología","Holocausto","Sentido","Supervivencia"]},
    {id:32,title:"El arte de la guerra",author:"Sun Tzu",genre:"No Ficción",subgenre:"Tratado clásico",price:12.90,originalPrice:18.00,isbn:"1590302257",badge:"2500 años",rating:4.6,reviews:29876,pages:96,language:"Español",publisher:"Trotta",year:"~500 a.C.",color:"linear-gradient(135deg,#2a1a0a 0%,#0a0603 100%)",description:"Escrito hace más de 2500 años, es el texto militar estratégico más influyente de la historia. Sus principios se aplican hoy en los negocios y la vida.",shortDesc:"El tratado estratégico más leído durante 2500 años.",tags:["Estrategia","Liderazgo","Clásico","China"]},
    {id:33,title:"Una breve historia del tiempo",author:"Stephen Hawking",genre:"No Ficción",subgenre:"Divulgación científica",price:19.90,originalPrice:27.00,isbn:"0553380168",badge:"10M copias",rating:4.7,reviews:25432,pages:212,language:"Español",publisher:"Crítica",year:1988,color:"linear-gradient(135deg,#0a1a3a 0%,#030710 100%)",description:"Hawking lleva al lector desde el Big Bang hasta los agujeros negros, pasando por la naturaleza del tiempo. El libro de divulgación científica más vendido de la historia.",shortDesc:"El viaje más vendido al corazón del universo y del tiempo.",tags:["Física","Cosmos","Agujeros negros","Hawking"]}
];

const NEW_RELEASES = [
    {id:101,title:"Tomorrow, and Tomorrow",author:"Gabrielle Zevin",genre:"Ficción",price:21.50,isbn:"0593321200",color:"linear-gradient(135deg,#4a2060,#1a0830)",year:2024,pages:401,rating:4.6,reviews:3421,description:"Sam y Sadie crean un juego que revoluciona la industria. Una historia sobre creatividad, amor y el precio del éxito.",tags:["Contemporánea","Amistad","Arte"]},
    {id:102,title:"Intermezzo",author:"Sally Rooney",genre:"Ficción",price:19.90,isbn:"0374611998",color:"linear-gradient(135deg,#1a3a2a,#081510)",year:2024,pages:448,rating:4.4,reviews:2187,description:"Dos hermanos muy diferentes lidian con el duelo por su padre en la Irlanda contemporánea.",tags:["Contemporánea","Familia","Amor"]},
    {id:103,title:"James",author:"Percival Everett",genre:"Literatura",price:23.00,isbn:"0385550367",color:"linear-gradient(135deg,#3a1a0a,#150800)",year:2024,pages:320,rating:4.8,reviews:4562,description:"Premio Pulitzer 2024. Reimaginación de Huckleberry Finn narrada desde la perspectiva de Jim, el esclavo.",tags:["Premio Pulitzer","Historia","Libertad"]},
    {id:104,title:"The God of the Woods",author:"Lauren Fox",genre:"Thriller",price:20.50,isbn:"0593656844",color:"linear-gradient(135deg,#1a1a4a,#080820)",year:2024,pages:384,rating:4.3,reviews:1876,description:"En un campamento de verano, una adolescente desaparece. Una novela sobre secretos familiares y misterios enterrados.",tags:["Thriller","Misterio","Familia"]},
    {id:105,title:"Orbital",author:"Samantha Harvey",genre:"Ficción",price:18.50,isbn:"0802164056",color:"linear-gradient(135deg,#2a0a3a,#0f0015)",year:2024,pages:209,rating:4.5,reviews:2341,description:"Premio Booker 2024. Seis astronautas orbitan la Tierra durante 24 horas. Una meditación sobre la humanidad.",tags:["Premio Booker","Espacio","Filosófico"]},
    {id:106,title:"The Women",author:"Kristin Hannah",genre:"Literatura",price:22.00,isbn:"1250178630",color:"linear-gradient(135deg,#0a2a1a,#001008)",year:2024,pages:512,rating:4.7,reviews:6789,description:"Vietnam, 1965. Frances McGrath se alista como enfermera. Una historia sobre las mujeres olvidadas de la guerra.",tags:["Guerra","Histórica","Mujeres"]},
    {id:107,title:"All Fours",author:"Miranda July",genre:"Ficción",price:21.00,isbn:"1594634882",color:"linear-gradient(135deg,#2a1a0a,#100800)",year:2024,pages:352,rating:4.2,reviews:1543,description:"Una artista se detiene a 30 minutos de casa. Una novela sobre la identidad femenina, la maternidad y el deseo.",tags:["Contemporánea","Identidad","Mujer"]},
    {id:108,title:"The Anxious Generation",author:"Jonathan Haidt",genre:"No Ficción",price:24.00,isbn:"0593655036",color:"linear-gradient(135deg,#1a2a3a,#080f18)",year:2024,pages:385,rating:4.6,reviews:8234,description:"¿Por qué los índices de depresión juvenil se dispararon alrededor de 2012? Los smartphones causaron una crisis.",tags:["Psicología","Tecnología","Juventud"]}
];

// ══ ESTADO ═══════════════════════════════════════════════════════
let cart = [], wishlist = [], currentFilter = 'all', toastTimer = null;
let ratingValue = 0, ratingSubmitted = false;

try { cart = JSON.parse(localStorage.getItem('folio-cart') || '[]'); } catch(e){ cart=[]; }
try { wishlist = JSON.parse(localStorage.getItem('folio-wishlist') || '[]'); } catch(e){ wishlist=[]; }

// ══ THREE.JS SCENE ═══════════════════════════════════════════════
class FolioScene {
    constructor() {
        const c = document.getElementById('three-canvas');
        if (!c || typeof THREE === 'undefined') return;
        this.canvas = c;
        this.W = c.offsetWidth || window.innerWidth * 0.58;
        this.H = c.offsetHeight || window.innerHeight;
        this.mouse = new THREE.Vector2();
        this.targetMouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.bookMeshes = [];
        this.clock = new THREE.Clock();
        this._setup();
        this._lights();
        this._books();
        this._particles();
        this._events();
        this._animate();
    }

    _setup() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: false // Optimización de rendimiento
        });
        this.renderer.setSize(this.W, this.H);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(48, this.W / this.H, 0.1, 100);
        this.camera.position.set(0, 0, 9);
    }

    _lights() {
        this.scene.add(new THREE.AmbientLight(0x111130, 2.2));
        const key = new THREE.PointLight(0xc9a84c, 5, 18);
        key.position.set(4, 6, 5);
        this.scene.add(key);
        const rim = new THREE.PointLight(0x3355cc, 2.5, 14);
        rim.position.set(-6, -1, 3);
        this.scene.add(rim);
        const fill = new THREE.DirectionalLight(0x221122, 0.8);
        fill.position.set(0, -5, 4);
        this.scene.add(fill);
    }

    _parseColors(s) {
        const m = s.match(/#[0-9a-fA-F]{6}/g);
        return m && m.length >= 2 ? [m[0], m[1]] : ['#2a2a35','#111115'];
    }

    _coverTex(book) {
        const cv = document.createElement('canvas');
        cv.width = 256; cv.height = 384;
        const ctx = cv.getContext('2d');
        const [c1, c2] = this._parseColors(book.color);
        const g = ctx.createLinearGradient(0, 0, 256, 384);
        g.addColorStop(0, c1); g.addColorStop(1, c2);
        ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 384);
        const hl = ctx.createLinearGradient(0, 0, 256, 0);
        hl.addColorStop(0, 'rgba(255,255,255,.1)'); hl.addColorStop(.5, 'rgba(255,255,255,0)');
        ctx.fillStyle = hl; ctx.fillRect(0, 0, 256, 384);
        ctx.fillStyle = '#c9a84c'; ctx.fillRect(18, 18, 3, 80);
        ctx.fillStyle = 'rgba(201,168,76,0.9)'; ctx.fillRect(18, 18, 88, 18);
        ctx.fillStyle = '#060606'; ctx.font = 'bold 10px monospace';
        ctx.fillText(book.badge.substring(0,12).toUpperCase(), 22, 30);
        ctx.font = 'bold 22px Georgia,serif';
        ctx.fillStyle = 'rgba(255,255,255,0.92)';
        const words = book.title.split(' ');
        let line = '', y = 290;
        for (const w of words) {
            const t = line + w + ' ';
            if (ctx.measureText(t).width > 218 && line) { ctx.fillText(line, 18, y); line = w + ' '; y += 28; }
            else line = t;
        }
        ctx.fillText(line, 18, y);
        ctx.font = '13px monospace'; ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fillText(book.author.substring(0,22), 18, y + 24);
        return new THREE.CanvasTexture(cv);
    }

    _spineTex(book) {
        const cv = document.createElement('canvas');
        cv.width = 64; cv.height = 384;
        const ctx = cv.getContext('2d');
        const [c1, c2] = this._parseColors(book.color);
        const g = ctx.createLinearGradient(0, 0, 0, 384);
        g.addColorStop(0, c1); g.addColorStop(1, c2);
        ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 384);
        ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.fillRect(0, 0, 64, 384);
        ctx.fillStyle = '#c9a84c'; ctx.fillRect(0, 0, 2, 384);
        ctx.save();
        ctx.translate(32, 192);
        ctx.rotate(-Math.PI / 2);
        ctx.font = 'bold 14px Georgia,serif';
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        ctx.textAlign = 'center';
        ctx.fillText(book.title.substring(0, 20), 0, 5);
        ctx.restore();
        return new THREE.CanvasTexture(cv);
    }

    _makeBook(book, pos, rot) {
        const [c1] = this._parseColors(book.color);
        const backC = new THREE.Color(c1).multiplyScalar(0.35);
        const mats = [
            new THREE.MeshPhongMaterial({ color: 0xf0e8d8, shininess: 8 }),
            new THREE.MeshPhongMaterial({ map: this._spineTex(book), shininess: 50 }),
            new THREE.MeshPhongMaterial({ color: 0xe8e0d0, shininess: 8 }),
            new THREE.MeshPhongMaterial({ color: 0xe0d8c8, shininess: 8 }),
            new THREE.MeshPhongMaterial({ map: this._coverTex(book), shininess: 70 }),
            new THREE.MeshPhongMaterial({ color: backC, shininess: 30 }),
        ];
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.9, 0.19), mats);
        mesh.castShadow = true;
        mesh.userData = { bookId: book.id };
        const group = new THREE.Group();
        group.add(mesh);
        group.position.set(pos.x, pos.y, pos.z);
        group.rotation.set(rot.x, rot.y, rot.z);
        this.scene.add(group);
        this.bookMeshes.push({ group, mesh, baseY: pos.y, phase: Math.random() * Math.PI * 2 });
        return group;
    }

    _books() {
        // 5 posiciones distribuidas simétricamente en el eje X (-4.2, -2.1, 0, 2.1, 4.2)
        // Alternamos alturas (Y) y profundidad (Z) para que no se tapen y den efecto 3D
        const positions = [
            {x: -4.2, y: 0.8, z: 0.0},   // 1. Extremo izquierdo (arriba)
            {x: -2.1, y: -1.2, z: 0.8},  // 2. Medio izquierdo (abajo, más al frente)
            {x: 0.0,  y: 1.5, z: -0.6},  // 3. Centro (arriba, un poco hacia atrás)
            {x: 2.1,  y: -1.2, z: 0.8},  // 4. Medio derecho (abajo, al frente)
            {x: 4.2,  y: 0.8, z: 0.0}    // 5. Extremo derecho (arriba)
        ];

        // Rotaciones calculadas para que los de los extremos miren ligeramente hacia el centro
        const rotations = [
            {x: 0.08,  y: 0.35,  z: -0.05}, // Izquierda: Mira a la derecha
            {x: -0.05, y: 0.15,  z: 0.04},  // Medio Izq: Mira un poco a la derecha
            {x: 0.05,  y: 0.00,  z: 0.00},  // Centro: Prácticamente de frente
            {x: -0.05, y: -0.15, z: -0.04}, // Medio Der: Mira un poco a la izquierda
            {x: 0.08,  y: -0.35, z: 0.05}   // Derecha: Mira a la izquierda
        ];

        // Cambiamos .slice(0, 6) a .slice(0, 5) para renderizar exactamente 5 libros
        BOOKS.slice(0, 5).forEach((b, i) => this._makeBook(
            b,
            new THREE.Vector3(positions[i].x, positions[i].y, positions[i].z),
            new THREE.Euler(rotations[i].x, rotations[i].y, rotations[i].z)
        ));
    }

    _particles() {
        const n = 100, pos = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
            pos[i*3] = (Math.random()-.5)*13;
            pos[i*3+1] = (Math.random()-.5)*10;
            pos[i*3+2] = (Math.random()-.5)*5;
        }
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        this.particles = new THREE.Points(g, new THREE.PointsMaterial({color: 0xc9a84c, size: 0.035, transparent: true, opacity: .45, sizeAttenuation: true}));
        this.scene.add(this.particles);
    }

    _events() {
        const getMousePos = (e) => {
            const rect = this.canvas.getBoundingClientRect();
            return {
                x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
                y: -((e.clientY - rect.top) / rect.height) * 2 + 1
            };
        };

        this.mouseMoved = false;
        this.hitsCache = [];

        window.addEventListener('mousemove', e => {
            const pos = getMousePos(e);
            this.targetMouse.x = pos.x;
            this.targetMouse.y = pos.y;
            this.mouseMoved = true;
        }, { passive: true });

        this.canvas.addEventListener('click', (e) => {
            const pos = getMousePos(e);
            const exactMouse = new THREE.Vector2(pos.x, pos.y);
            this.raycaster.setFromCamera(exactMouse, this.camera);
            const hits = this.raycaster.intersectObjects(this.bookMeshes.map(b => b.mesh));
            if (hits.length) {
                const id = hits[0].object.userData.bookId;
                if (id) openBookModalById(id);
            }
        });

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.W = this.canvas.offsetWidth;
                this.H = this.canvas.offsetHeight;
                this.camera.aspect = this.W / this.H;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(this.W, this.H);
            }, 150);
        });
    }

    _animate() {
        requestAnimationFrame(() => this._animate());
        if (document.hidden) return;

        const t = this.clock.getElapsedTime();
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.06;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.06;
        this.camera.position.x += (this.mouse.x * 0.9 - this.camera.position.x) * 0.04;
        this.camera.position.y += (this.mouse.y * 0.55 - this.camera.position.y) * 0.04;
        this.camera.lookAt(0, 0, 0);

        this.bookMeshes.forEach(({ group, phase }) => {
            group.position.y += Math.sin(t * 0.45 + phase) * 0.0025;
            group.children[0].rotation.y += 0.008;
        });

        if (this.particles) this.particles.rotation.y = t * 0.018;

        if (this.mouseMoved) {
            this.raycaster.setFromCamera(this.mouse, this.camera);
            this.hitsCache = this.raycaster.intersectObjects(this.bookMeshes.map(b => b.mesh));
            this.mouseMoved = false;
        }

        this.bookMeshes.forEach(({ group }) => {
            const target = this.hitsCache.length && this.hitsCache[0].object.parent === group ? 1.09 : 1.0;
            group.scale.lerp(new THREE.Vector3(target, target, target), 0.12);
        });

        this.canvas.style.cursor = this.hitsCache.length ? 'pointer' : 'default';
        this.renderer.render(this.scene, this.camera);
    }
}

// ══ AUTH SYSTEM ══════════════════════════════════════════════════
const Auth = {
    user: null, isLoggedIn: false,
    init() { try { const s = localStorage.getItem('folio-user'); if (s) { this.user = JSON.parse(s); this.isLoggedIn = true; } } catch(e){} },
    login(email, pass) { if (!email || !pass || pass.length < 4) return false; this.user = { email, name: email.split('@')[0] }; this.isLoggedIn = true; localStorage.setItem('folio-user', JSON.stringify(this.user)); return true; },
    register(name, email, pass) { if (!name || !email || !pass || pass.length < 6) return false; this.user = { email, name }; this.isLoggedIn = true; localStorage.setItem('folio-user', JSON.stringify(this.user)); return true; },
    logout() { this.user = null; this.isLoggedIn = false; localStorage.removeItem('folio-user'); }
};

function openAuth(tab = 'login') {
    document.getElementById('auth-overlay').classList.add('open');
    document.getElementById('auth-modal').classList.add('open');
    switchAuthTab(tab); document.body.style.overflow = 'hidden';
}
function closeAuth() {
    document.getElementById('auth-overlay').classList.remove('open');
    document.getElementById('auth-modal').classList.remove('open');
    document.body.style.overflow = '';
}
function switchAuthTab(tab) {
    document.getElementById('tab-login').classList.toggle('active', tab === 'login');
    document.getElementById('tab-register').classList.toggle('active', tab === 'register');
    document.getElementById('auth-login-form').style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById('auth-register-form').style.display = tab === 'register' ? 'block' : 'none';
    document.getElementById('auth-login-err').textContent = ''; document.getElementById('auth-reg-err').textContent = '';
}
function handleLogin() {
    const email = document.getElementById('login-email').value.trim(), pass = document.getElementById('login-pass').value;
    if (!email || !pass) { document.getElementById('auth-login-err').textContent = 'Completa todos los campos.'; return; }
    if (Auth.login(email, pass)) { closeAuth(); updateAuthUI(); showToast(`¡Bienvenido de vuelta, ${Auth.user.name}!`); }
    else { document.getElementById('auth-login-err').textContent = 'Credenciales inválidas.'; }
}
function handleRegister() {
    const name = document.getElementById('reg-name').value.trim(), email = document.getElementById('reg-email').value.trim(), pass = document.getElementById('reg-pass').value;
    if (!name || !email || !pass) { document.getElementById('auth-reg-err').textContent = 'Completa todos los campos.'; return; }
    if (pass.length < 6) { document.getElementById('auth-reg-err').textContent = 'La contraseña debe tener al menos 6 caracteres.'; return; }
    if (Auth.register(name, email, pass)) { closeAuth(); updateAuthUI(); showToast(`¡Cuenta creada! Bienvenido, ${name}!`); }
    else { document.getElementById('auth-reg-err').textContent = 'Error al crear la cuenta.'; }
}
function handleLogout() { Auth.logout(); updateAuthUI(); showToast('Sesión cerrada. ¡Hasta pronto!'); }
function updateAuthUI() {
    const out = document.getElementById('auth-logged-out'), inn = document.getElementById('auth-logged-in');
    if (Auth.isLoggedIn && Auth.user) {
        out.style.display = 'none'; inn.style.display = 'flex';
        document.getElementById('auth-avatar').textContent = Auth.user.name[0].toUpperCase();
        document.getElementById('auth-username').textContent = Auth.user.name.substring(0, 12);
    } else { out.style.display = 'flex'; inn.style.display = 'none'; }
}
function openUserMenu() {
    const d = document.getElementById('user-dropdown');
    d.style.opacity = d.style.opacity === '1' ? '0' : '1';
    d.style.pointerEvents = d.style.pointerEvents === 'all' ? 'none' : 'all';
}

// ══ THEME ════════════════════════════════════════════════════════
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('folio-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.id === `tbtn-${theme}`));
}

// ══ HELPERS ══════════════════════════════════════════════════════
const ALL_BOOKS = () => [...BOOKS, ...NEW_RELEASES];
function allBooksById(id) { return ALL_BOOKS().find(b => b.id === id); }
function renderStars(r) {
    const f = Math.floor(r), h = r%1 >= .5;
    return '★'.repeat(f)+(h?'½':'')+'☆'.repeat(5-f-(h?1:0));
}
function disc(p,o){ return Math.round((1-p/o)*100); }
function imgUrl(isbn,sz='M'){ return `https://covers.openlibrary.org/b/isbn/${isbn}-${sz}.jpg`; }
function bookImg(isbn,cls,sz='M'){
    return `<img class="${cls}" src="${imgUrl(isbn,sz)}" loading="eager" alt="" onload="this.style.opacity=1" onerror="this.remove()">`;
}

// ══ RENDER LIBROS ════════════════════════════════════════════════
function renderBooks() {
    const grid = document.getElementById('books-grid');
    grid.innerHTML = BOOKS.map(b => {
        const iw = wishlist.includes(b.id);
        return `
    <div class="book-card" id="card-${b.id}" data-genre="${b.genre}">
      <div class="book-card-inner">
        <div class="book-card-front" onclick="openBookModalById(${b.id})">
          <div class="book-cover">
            <div class="book-cover-bg" style="background:${b.color}">
              ${bookImg(b.isbn,'book-photo','M')}
              <div class="book-cover-info"><div class="book-cover-title">${b.title}</div><div class="book-cover-author">${b.author}</div></div>
            </div>
            <div class="book-badge">${b.badge}</div>
            <button class="book-wishlist-btn ${iw?'active':''}" onclick="event.stopPropagation();toggleWishlist(${b.id})" id="wish-btn-${b.id}">${iw?'♥':'♡'}</button>
          </div>
          <div class="book-info">
            <div class="book-info-title">${b.title}</div>
            <div class="book-info-author">${b.author}</div>
            <div class="book-rating"><span class="stars">${renderStars(b.rating)}</span><span class="reviews-count">(${b.reviews.toLocaleString()})</span></div>
            <div class="book-price-row">
              <span><span class="book-price">$${b.price.toFixed(2)}</span><span class="book-price-old">$${b.originalPrice.toFixed(2)}</span></span>
              <button class="add-cart-btn" onclick="event.stopPropagation();addToCart(${b.id})">+ Carrito</button>
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

    document.querySelectorAll('.book-card').forEach(card => {
        let rect = null;
        let ticking = false;

        card.addEventListener('mouseenter', () => {
            rect = card.getBoundingClientRect();
        });

        card.addEventListener('mousemove', e => {
            if (!rect || ticking) return;

            window.requestAnimationFrame(() => {
                const x = (e.clientX - rect.left) / rect.width - .5;
                const y = (e.clientY - rect.top) / rect.height - .5;
                card.style.transform = `perspective(800px) rotateY(${x*9}deg) rotateX(${-y*6}deg)`;
                ticking = false;
            });

            ticking = true;
        }, { passive: true });

        card.addEventListener('mouseleave', () => {
            rect = null;
            card.style.transform = 'perspective(800px) rotateY(0) rotateX(0)';
        });
    });
    updateCategoryCounts();
}

function renderNewReleases() {
    document.getElementById('releases-scroll').innerHTML = NEW_RELEASES.map(b => `
    <div class="release-card" onclick="openReleaseModal(${b.id})">
      <div class="release-cover">
        <div class="release-cover-inner" style="background:${b.color}">
          ${bookImg(b.isbn,'release-photo','M')}
          <div class="release-t" style="position:relative;z-index:1">${b.title}</div>
          <div class="release-a" style="position:relative;z-index:1">${b.author}</div>
        </div>
      </div>
      <div class="release-info-title">${b.title}</div>
      <div class="release-info-sub">${b.genre} · ${b.year}</div>
      <div class="release-price">$${b.price.toFixed(2)}</div>
      <button class="release-add-btn" onclick="event.stopPropagation();addToCart(${b.id})">+ Agregar al carrito</button>
    </div>`).join('');
}

// ══ FILTER & SEARCH ══════════════════════════════════════════════
function filterBooks(genre) {
    currentFilter = genre;
    document.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.toggle('active', genre==='all' ? t.textContent.trim()==='Todos' : t.textContent.trim()===genre);
    });
    let v = 0;
    document.querySelectorAll('.book-card').forEach(c => {
        const show = genre==='all' || c.dataset.genre===genre;
        c.classList.toggle('hidden', !show);
        if (show) v++;
    });
    document.getElementById('no-results').style.display = v===0?'block':'none';
    document.getElementById('section-title-books').innerHTML =
        genre==='all' ? '<em>Bestsellers</em> del momento' : `Colección de <em>${genre}</em>`;
    document.getElementById('main-search').value = '';
}
function filterByGenre(genre) { filterBooks(genre); scrollToBooks(); }
function mainSearchFilter(q) {
    const ql = q.trim().toLowerCase();
    if (!ql) { filterBooks(currentFilter); return; }
    let v = 0;
    BOOKS.forEach(b => {
        const m = [b.title,b.author,b.genre,b.subgenre,...(b.tags||[])].some(s => s.toLowerCase().includes(ql));
        const c = document.getElementById(`card-${b.id}`);
        if (c) { c.classList.toggle('hidden',!m); if (m) v++; }
    });
    document.getElementById('no-results').style.display = v===0?'block':'none';
    document.getElementById('section-title-books').innerHTML =
        v ? `Resultados para <em>"${q}"</em>` : `Sin resultados para <em>"${q}"</em>`;
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
}
function quickSearch(t) {
    document.getElementById('main-search').value = t;
    mainSearchFilter(t); scrollToBooks();
}
function updateCategoryCounts() {
    ['Fantasía','Ciencia Ficción','Thriller','Literatura','No Ficción'].forEach(g => {
        const el = document.getElementById(`cnt-${g}`);
        if (el) el.textContent = `${BOOKS.filter(b => b.genre===g).length} títulos`;
    });
}

// ══ SEARCH OVERLAY ════════════════════════════════════════════════
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
    const c = document.getElementById('search-results');
    if (!q) { c.innerHTML=''; return; }
    const res = ALL_BOOKS().filter(b =>
        b.title.toLowerCase().includes(q)||b.author.toLowerCase().includes(q)||
        b.genre.toLowerCase().includes(q)||(b.tags||[]).some(t=>t.toLowerCase().includes(q))
    ).slice(0,12);
    if (!res.length) { c.innerHTML='<div class="search-no-results">No se encontraron resultados</div>'; return; }
    c.innerHTML = res.map(b => `
    <div class="search-result-item" onclick="closeSearch();${b.id<100?`openBookModalById(${b.id})`:`openReleaseModal(${b.id})`}">
      <div class="search-result-cover-bg" style="background:${b.color}">
        ${bookImg(b.isbn,'','S')}
        <span style="font-family:var(--serif);font-size:.6rem;font-weight:700;color:#fff;position:relative;z-index:1;text-shadow:0 1px 3px rgba(0,0,0,.9)">${b.title}</span>
      </div>
      <div class="search-result-title">${b.title}</div>
      <div class="search-result-author">${b.author}</div>
      <div class="search-result-price">$${b.price.toFixed(2)}</div>
    </div>`).join('');
}

// ══ CART ══════════════════════════════════════════════════════════
function saveCart() { try { localStorage.setItem('folio-cart', JSON.stringify(cart)); } catch(e){} }
function addToCart(id) {
    const b = allBooksById(id); if (!b) return;
    const ex = cart.find(i => i.id===id);
    if (ex) ex.qty++; else cart.push({id,qty:1});
    saveCart(); updateCartCount(); renderCartUI();
    showToast(`"${b.title}" agregado al carrito`);
}
function removeFromCart(id) { cart=cart.filter(i=>i.id!==id); saveCart(); updateCartCount(); renderCartUI(); }
function updateQuantity(id,delta) {
    const item = cart.find(i=>i.id===id); if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart=cart.filter(i=>i.id!==id);
    saveCart(); updateCartCount(); renderCartUI();
}
function updateCartCount() {
    const n = cart.reduce((s,i)=>s+i.qty,0);
    document.getElementById('cart-count').textContent = n;
    document.getElementById('cart-item-count').textContent = n;
}
function getCartSubtotal() {
    return cart.reduce((s,i) => { const b=allBooksById(i.id); return s+(b?b.price*i.qty:0); }, 0);
}
function renderCartUI() {
    const c = document.getElementById('cart-items');
    const f = document.getElementById('cart-footer');
    if (!cart.length) {
        c.innerHTML=`<div class="cart-empty"><div class="cart-empty-icon">📚</div><p>Tu carrito está vacío</p><button class="cart-empty-btn" onclick="closeCart();scrollToBooks()">Explorar catálogo</button></div>`;
        f.style.display='none'; return;
    }
    f.style.display='block';
    c.innerHTML = cart.map(item => {
        const b=allBooksById(item.id); if (!b) return '';
        return `<div class="cart-item" id="cart-item-${b.id}">
      <div class="cart-item-cover" style="background:${b.color}"><img class="cart-item-img" src="${imgUrl(b.isbn,'S')}" loading="eager" alt="${b.title}" onload="this.style.opacity=1" onerror="this.remove()"></div>
      <div class="cart-item-info">
        <div class="cart-item-title">${b.title}</div>
        <div class="cart-item-author">${b.author}</div>
        <div class="cart-item-price">$${(b.price*item.qty).toFixed(2)}</div>
        <div class="cart-item-controls"><button class="qty-btn" onclick="updateQuantity(${b.id},-1)">−</button><span class="qty-display">${item.qty}</span><button class="qty-btn" onclick="updateQuantity(${b.id},1)">+</button></div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${b.id})" title="Eliminar">✕</button>
    </div>`;
    }).join('');
    const sub = getCartSubtotal(), sh = sub>=40?0:4.99;
    document.getElementById('cart-subtotal').textContent=`$${sub.toFixed(2)}`;
    const el=document.getElementById('cart-shipping');
    el.textContent=sub>=40?'Gratis':`$${sh.toFixed(2)}`; el.className=sub>=40?'free-tag':'';
    document.getElementById('cart-total').textContent=`$${(sub+sh).toFixed(2)}`;
}
function openCart() {
    document.getElementById('cart-overlay').classList.add('open');
    document.getElementById('cart-sidebar').classList.add('open');
    document.body.style.overflow='hidden'; renderCartUI();
}
function closeCart() {
    document.getElementById('cart-overlay').classList.remove('open');
    document.getElementById('cart-sidebar').classList.remove('open');
    document.body.style.overflow='';
}
function resetCart() { cart=[]; saveCart(); updateCartCount(); renderCartUI(); }

// ══ WISHLIST ══════════════════════════════════════════════════════
function saveWishlist() { try { localStorage.setItem('folio-wishlist', JSON.stringify(wishlist)); } catch(e){} }
function toggleWishlist(id) {
    const b=allBooksById(id); const i=wishlist.indexOf(id);
    if (i===-1) { wishlist.push(id); showToast(`"${b?.title}" guardado en tu lista`); }
    else { wishlist.splice(i,1); showToast(`"${b?.title}" eliminado de la lista`); }
    saveWishlist();
    const btn=document.getElementById(`wish-btn-${id}`);
    if (btn) { const a=wishlist.includes(id); btn.textContent=a?'♥':'♡'; btn.classList.toggle('active',a); }
    updateWishlistCount();
}
function updateWishlistCount() {
    const c=document.getElementById('wishlist-count');
    c.textContent=wishlist.length; c.style.display=wishlist.length?'flex':'none';
    document.getElementById('wishlist-icon').textContent=wishlist.length?'♥':'♡';
}
function openWishlistView() {
    if (!wishlist.length) { showToast('Tu lista de deseos está vacía'); return; }
    scrollToBooks();
    requestAnimationFrame(() => {
        document.querySelectorAll('.book-card').forEach(c => c.classList.toggle('hidden',!wishlist.includes(parseInt(c.id.replace('card-','')))));
        document.getElementById('section-title-books').innerHTML='Mi lista de <em>deseos</em>';
        document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));
        showToast(`Mostrando ${wishlist.length} libro(s) de tu lista`);
    });
}

// ══ BOOK MODAL ════════════════════════════════════════════════════
function openBookModal(book, isRelease=false) {
    if (!book) return;
    const iw=wishlist.includes(book.id);
    const dv=book.originalPrice?disc(book.price,book.originalPrice):null;
    document.getElementById('book-modal-content').innerHTML=`
    <div>
      <div class="modal-cover">
        <div class="modal-cover-gradient" style="background:${book.color}"></div>
        ${bookImg(book.isbn,'','L')}
        <div class="modal-cover-text"><div class="modal-cover-title">${book.title}</div><div class="modal-cover-author">${book.author}</div></div>
      </div>
      <div style="margin-top:1rem;display:flex;flex-wrap:wrap;gap:.4rem">${(book.tags||[]).map(t=>`<span class="modal-tag">${t}</span>`).join('')}</div>
    </div>
    <div class="modal-info">
      <span class="modal-genre-badge">${book.subgenre||book.genre}${book.year?' · '+book.year:''}</span>
      <h2 class="modal-title">${book.title}</h2>
      <div class="modal-author">${book.author}</div>
      <div class="modal-rating"><span class="modal-stars">${renderStars(book.rating)}</span><span class="modal-reviews">${book.rating}/5 · ${book.reviews?.toLocaleString()} reseñas</span></div>
      <p class="modal-desc">${book.description}</p>
      <div class="modal-meta">
        ${book.publisher?`<div class="modal-meta-row"><span class="modal-meta-label">Editorial</span><span class="modal-meta-value">${book.publisher}</span></div>`:''}
        ${book.year?`<div class="modal-meta-row"><span class="modal-meta-label">Año</span><span class="modal-meta-value">${book.year}</span></div>`:''}
        ${book.pages?`<div class="modal-meta-row"><span class="modal-meta-label">Páginas</span><span class="modal-meta-value">${book.pages}</span></div>`:''}
        ${book.language?`<div class="modal-meta-row"><span class="modal-meta-label">Idioma</span><span class="modal-meta-value">${book.language}</span></div>`:''}
      </div>
      <div class="modal-price-block">
        <span class="modal-price">$${book.price.toFixed(2)}</span>
        ${book.originalPrice?`<span class="modal-price-old">$${book.originalPrice.toFixed(2)}</span><span class="modal-discount">-${dv}%</span>`:'<span style="font-family:var(--mono);font-size:.75rem;color:#555">Novedad 2026</span>'}
      </div>
      <div class="modal-actions">
        <button class="modal-add-cart" onclick="addToCart(${book.id});closeBookModal()">+ Agregar al carrito</button>
        ${!isRelease?`<button class="modal-wishlist-btn ${iw?'active':''}" id="modal-wish-${book.id}" onclick="toggleWishlist(${book.id});this.classList.toggle('active');this.textContent=wishlist.includes(${book.id})?'♥ En lista':'♡ Guardar'">${iw?'♥ En lista':'♡ Guardar'}</button>`:''}
      </div>
    </div>`;
    document.getElementById('book-modal-content').querySelectorAll('img').forEach(img => { img.onload = () => img.style.opacity = 1; });
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

// ══ CHECKOUT ════════════════════════════════════════════════════
function openCheckout() {
    if (!cart.length) { showToast('Tu carrito está vacío'); return; }
    closeCart(); renderCheckoutSummary();
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
        const b = allBooksById(item.id); if (!b) return '';
        return `
    <div class="checkout-item">
      <div class="checkout-item-cover" style="background:${b.color};position:relative;overflow:hidden">
        ${bookImg(b.isbn,'','S')}
      </div>
      <div style="flex:1;min-width:0">
        <div class="checkout-item-title">${b.title}</div>
        <div class="checkout-item-qty">${b.author} × ${item.qty}</div>
      </div>
      <div class="checkout-item-price">$${(b.price*item.qty).toFixed(2)}</div>
    </div>`;
    }).join('');
    const sub = getCartSubtotal();
    document.getElementById('co-subtotal').textContent = `$${sub.toFixed(2)}`;
    document.getElementById('co-total').textContent = `$${(sub + (sub >= 40 ? 0 : 4.99)).toFixed(2)}`;
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
        {id:'ch-name',err:'err-name',msg:'Ingresa tu nombre'},
        {id:'ch-email',err:'err-email',msg:'Email inválido',fn:v=>/\S+@\S+\.\S+/.test(v)},
        {id:'ch-address',err:'err-address',msg:'Ingresa tu dirección'},
        {id:'ch-city',err:'err-city',msg:'Ingresa tu ciudad'}
    ];
    if (document.querySelector('input[name="payment"]:checked')?.value === 'card') {
        rules.push(
            {id:'ch-card',err:'err-card',msg:'16 dígitos',fn:v=>v.replace(/\s/g,'').length===16},
            {id:'ch-expiry',err:'err-expiry',msg:'MM/AA',fn:v=>/^\d{2}\/\d{2}$/.test(v)},
            {id:'ch-cvv',err:'err-cvv',msg:'CVV',fn:v=>v.length>=3}
        );
    }
    rules.forEach(r => {
        const inp = document.getElementById(r.id); if (!inp) return;
        const val = inp.value.trim(); const valid = val && (r.fn ? r.fn(val) : true);
        inp.classList.toggle('error', !valid);
        document.getElementById(r.err).textContent = valid ? '' : r.msg;
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
        document.getElementById('order-code').textContent = 'Código: FOL-' + Date.now().toString(36).toUpperCase().slice(-8);
        btn.textContent = 'Confirmar pedido →'; btn.disabled = false;
    }, 1600);
}

// ══ NEWSLETTER ════════════════════════════════════════════════
function subscribeNewsletter() {
    const inp = document.getElementById('newsletter-email');
    const msg = document.getElementById('newsletter-msg');
    const email = inp.value.trim();
    msg.style.display = 'block';
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        inp.classList.add('error'); msg.className = 'newsletter-msg error'; msg.textContent = 'Por favor ingresa un email válido.'; return;
    }
    inp.classList.remove('error'); msg.className = 'newsletter-msg success';
    msg.textContent = `✓ ¡Bienvenido al club! Te enviaremos novedades a ${email}`;
    inp.value = ''; showToast('¡Suscripción exitosa!');
}

// ══ TOAST ════════════════════════════════════════════════════
function showToast(msg) {
    const el = document.getElementById('toast');
    document.getElementById('toast-text').textContent = '✓  ' + msg;
    el.classList.add('show'); clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

// ══ SCROLL HELPERS ═══════════════════════════════════════════
function scrollToBooks()      { document.getElementById('catalogo')?.scrollIntoView({behavior:'smooth',block:'start'}); }
function scrollToReleases()   { document.getElementById('novedades')?.scrollIntoView({behavior:'smooth',block:'start'}); }
function scrollToCategories() { document.getElementById('categorias')?.scrollIntoView({behavior:'smooth',block:'start'}); }
function scrollToNewsletter() { document.getElementById('newsletter')?.scrollIntoView({behavior:'smooth',block:'start'}); }
function scrollToTop()        { window.scrollTo({top:0,behavior:'smooth'}); }

// ══ KEYBOARD ═════════════════════════════════════════════════
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSearch(); closeBookModal(); closeCart(); closeCheckout(); closeRating(); closeAuth(); }
});

// ══ SCROLL REVEAL ════════════════════════════════════════════
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger').forEach(el => revealObs.observe(el));

// ══ RATING SYSTEM ═════════════════════════════════════════════
const RATING_LABELS = {
    0:'Pasa el cursor sobre las estrellas', 0.5:'½★ — Deficiente', 1:'★ — Muy malo', 1.5:'★½ — Malo',
    2:'★★ — Regular', 2.5:'★★½ — Aceptable', 3:'★★★ — Bueno', 3.5:'★★★½ — Muy bueno',
    4:'★★★★ — Excelente', 4.5:'★★★★½ — Sobresaliente', 5:'★★★★★ — ¡Perfecto!'
};
function openRating() {
    const modal = document.getElementById('rating-modal');
    modal.classList.add('open'); document.body.style.overflow = 'hidden';
    const saved = localStorage.getItem('folio-rating');
    if (saved) { ratingValue = parseFloat(saved); ratingSubmitted = true; updateStarDisplay(ratingValue); showRatingResult(ratingValue); }
    else { ratingSubmitted = false; ratingValue = 0; document.getElementById('rating-result').style.display = 'none'; document.getElementById('rating-stars-container').style.display = 'flex'; document.getElementById('rating-label').style.display = 'block'; document.getElementById('rating-submit-btn').style.display = 'none'; updateStarDisplay(0); document.getElementById('rating-label').textContent = RATING_LABELS[0]; }
}
function closeRating() { document.getElementById('rating-modal').classList.remove('open'); document.body.style.overflow = ''; }
function resetRating() {
    ratingSubmitted = false; ratingValue = 0; localStorage.removeItem('folio-rating');
    document.getElementById('rating-result').style.display = 'none'; document.getElementById('rating-stars-container').style.display = 'flex'; document.getElementById('rating-label').style.display = 'block'; document.getElementById('rating-submit-btn').style.display = 'none';
    updateStarDisplay(0); document.getElementById('rating-label').textContent = RATING_LABELS[0];
    document.getElementById('fab-star').textContent = '★'; document.getElementById('fab-text').textContent = 'Calificar';
}
function updateStarDisplay(rating) {
    document.querySelectorAll('.rs-star').forEach((star, i) => {
        const val = i + 1;
        if (rating >= val) star.className = 'rs-star full';
        else if (rating >= val - 0.5) star.className = 'rs-star half';
        else star.className = 'rs-star empty';
    });
}
function submitRating() {
    if (ratingValue === 0) { showToast('Selecciona una calificación primero'); return; }
    localStorage.setItem('folio-rating', ratingValue); ratingSubmitted = true; showRatingResult(ratingValue); showToast(`¡Gracias! Calificaste Folio con ${ratingValue}★`);
    document.getElementById('fab-star').textContent = '★'; document.getElementById('fab-text').textContent = `${ratingValue}★`;
}
function showRatingResult(rating) {
    document.getElementById('rating-result').style.display = 'flex'; document.getElementById('rating-stars-container').style.display = 'none'; document.getElementById('rating-label').style.display = 'none'; document.getElementById('rating-submit-btn').style.display = 'none';
    document.querySelector('.rating-result-stars').innerHTML = [1,2,3,4,5].map(i => {
        if (rating >= i) return '<span class="rs-star full" style="font-size:2rem">★</span>';
        if (rating >= i - 0.5) return '<span class="rs-star half" style="font-size:2rem">★</span>';
        return '<span class="rs-star empty" style="font-size:2rem">★</span>';
    }).join('');
    document.querySelector('.rating-result-text').textContent = `Tu calificación: ${rating}/5 — ${RATING_LABELS[rating]?.split(' — ')[1] || ''}`;
}
function initRatingStars() {
    const container = document.getElementById('rating-stars-container'); if (!container) return;
    container.addEventListener('mousemove', e => {
        if (ratingSubmitted) return;
        const rect = container.getBoundingClientRect(); const x = e.clientX - rect.left; const sw = rect.width / 5;
        const idx = Math.min(4, Math.floor(x / sw)); const within = (x - idx * sw) / sw;
        const hover = within < 0.5 ? idx + 0.5 : idx + 1;
        updateStarDisplay(hover); document.getElementById('rating-label').textContent = RATING_LABELS[hover] || '';
    });
    container.addEventListener('mouseleave', () => {
        if (ratingSubmitted) return;
        updateStarDisplay(ratingValue); document.getElementById('rating-label').textContent = RATING_LABELS[ratingValue] || RATING_LABELS[0];
    });
    container.addEventListener('click', e => {
        if (ratingSubmitted) return;
        const rect = container.getBoundingClientRect(); const x = e.clientX - rect.left; const sw = rect.width / 5;
        const idx = Math.min(4, Math.floor(x / sw)); const within = (x - idx * sw) / sw;
        ratingValue = within < 0.5 ? idx + 0.5 : idx + 1;
        updateStarDisplay(ratingValue); document.getElementById('rating-label').textContent = RATING_LABELS[ratingValue];
        document.getElementById('rating-submit-btn').style.display = 'block';
    });
}

// ══ NAV SCROLL ═══════════════════════════════════════════════
function initNavScroll() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            nav.classList.toggle('scrolled', window.scrollY > 60);
            ticking = false;
        });
    }, { passive: true });
}

// ══ INIT ════════════════════════════════════════════════════
(function init() {
    Auth.init();
    updateAuthUI();
    renderBooks();
    renderNewReleases();
    updateCartCount();
    updateWishlistCount();
    renderCartUI();
    initRatingStars();
    initNavScroll();

    if (typeof THREE !== 'undefined') new FolioScene();

    const savedTheme = localStorage.getItem('folio-theme') || 'default';
    setTheme(savedTheme);

    const savedRating = localStorage.getItem('folio-rating');
    if (savedRating) {
        document.getElementById('fab-text').textContent = `${savedRating}★`;
        ratingValue = parseFloat(savedRating); ratingSubmitted = true;
    }
})();