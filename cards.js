// Datos del tarot: 22 Arcanos Mayores + 56 Arcanos Menores.
// Los menores se construyen a partir de palo x rango, para que el juego
// pueda enseñar el SISTEMA (qué significa un 5, qué significa Copas)
// en lugar de 56 datos sueltos.

var ROMAN = ["0","I","II","III","IV","V","VI","VII","VIII","IX","X",
             "XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"];

var MAJORS = [
  {n:0,  name:"El Loco",                astro:"Aire · Urano",       kw:["inicio","libertad","salto de fe"],       scene:"Un joven al borde de un precipicio, con un perro y una flor blanca", mean:"Empezar sin miedo y confiar en el camino."},
  {n:1,  name:"El Mago",                astro:"Mercurio",           kw:["voluntad","habilidad","manifestar"],      scene:"Una mesa con bastos, copa, espada y moneda, y un infinito sobre su cabeza", mean:"Tienes ya las herramientas: úsalas."},
  {n:2,  name:"La Sacerdotisa",         astro:"Luna",               kw:["intuición","secreto","misterio"],         scene:"Una mujer entre dos columnas, con un velo de granadas a su espalda", mean:"Escucha lo que sabes sin que nadie te lo diga."},
  {n:3,  name:"La Emperatriz",          astro:"Venus",              kw:["abundancia","naturaleza","creatividad"],  scene:"Una mujer en un campo de trigo, con corona de estrellas", mean:"Crear, cuidar y dejar crecer."},
  {n:4,  name:"El Emperador",           astro:"Aries",              kw:["estructura","autoridad","estabilidad"],   scene:"Un trono de piedra con cabezas de carnero", mean:"Orden, límites y liderazgo firme."},
  {n:5,  name:"El Hierofante",          astro:"Tauro",              kw:["tradición","enseñanza","instituciones"],  scene:"Una figura religiosa con dos discípulos y llaves cruzadas", mean:"Aprender de lo establecido y de un maestro."},
  {n:6,  name:"Los Enamorados",         astro:"Géminis",            kw:["elección","amor","unión"],                scene:"Un hombre y una mujer desnudos bajo un ángel", mean:"Una decisión del corazón que alinea tus valores."},
  {n:7,  name:"El Carro",               astro:"Cáncer",             kw:["determinación","victoria","control"],     scene:"Un auriga sin riendas y dos esfinges, una clara y otra oscura", mean:"Avanzar con voluntad dominando fuerzas opuestas."},
  {n:8,  name:"La Fuerza",              astro:"Leo",                kw:["coraje","paciencia","compasión"],         scene:"Una mujer que calma a un león con las manos", mean:"El verdadero poder es suave y paciente."},
  {n:9,  name:"El Ermitaño",            astro:"Virgo",              kw:["introspección","soledad","guía"],         scene:"Un anciano en una cima con una linterna con estrella", mean:"Mirar hacia dentro para encontrar tu luz."},
  {n:10, name:"La Rueda de la Fortuna", astro:"Júpiter",            kw:["ciclos","destino","cambio"],              scene:"Una rueda con letras, una esfinge, una serpiente y Anubis", mean:"Todo gira: nada dura ni arriba ni abajo."},
  {n:11, name:"La Justicia",            astro:"Libra",              kw:["equilibrio","verdad","consecuencias"],    scene:"Una figura con espada en una mano y balanza en la otra", mean:"Actúa con verdad: cosechas lo que siembras."},
  {n:12, name:"El Colgado",             astro:"Neptuno · Agua",     kw:["pausa","entrega","nueva perspectiva"],    scene:"Un hombre colgado de un pie, sereno y con un halo", mean:"Detenerte y ver las cosas del revés."},
  {n:13, name:"La Muerte",              astro:"Escorpio",           kw:["final","transformación","renacer"],       scene:"Un esqueleto a caballo con un estandarte con rosa blanca", mean:"Cerrar una etapa para que empiece otra."},
  {n:14, name:"La Templanza",           astro:"Sagitario",          kw:["moderación","armonía","paciencia"],       scene:"Un ángel que pasa agua de una copa a otra, con un pie en el agua", mean:"Mezclar con medida y encontrar el punto medio."},
  {n:15, name:"El Diablo",              astro:"Capricornio",        kw:["ataduras","tentación","materialismo"],    scene:"Una figura con cuernos y una pareja encadenada con cadenas flojas", mean:"Lo que te ata, a menudo, lo has aceptado tú."},
  {n:16, name:"La Torre",               astro:"Marte",              kw:["ruptura","revelación","caos"],            scene:"Una torre golpeada por un rayo y figuras que caen", mean:"Lo falso se derrumba de golpe para dejar ver la verdad."},
  {n:17, name:"La Estrella",            astro:"Acuario",            kw:["esperanza","calma","renovación"],         scene:"Una mujer desnuda vertiendo agua bajo una gran estrella", mean:"Después de la tormenta, confianza y sanación."},
  {n:18, name:"La Luna",                astro:"Piscis",             kw:["ilusión","miedo","subconsciente"],        scene:"Un perro y un lobo aúllan a la luna, y un cangrejo sale del agua", mean:"No todo es lo que parece: atraviesa la duda."},
  {n:19, name:"El Sol",                 astro:"Sol",                kw:["alegría","vitalidad","claridad"],         scene:"Un niño desnudo sobre un caballo blanco, con girasoles", mean:"Éxito simple, calor y verdad a la vista."},
  {n:20, name:"El Juicio",              astro:"Fuego · Plutón",     kw:["llamada","renacimiento","balance"],       scene:"Un ángel con trompeta y figuras que se alzan de sus tumbas", mean:"Despertar y responder a quien estás llamado a ser."},
  {n:21, name:"El Mundo",               astro:"Saturno",            kw:["plenitud","cierre","logro"],              scene:"Una bailarina en una corona de laurel, con cuatro figuras en las esquinas", mean:"Un ciclo completo: celebra lo logrado."}
];

var SUITS = {
  bastos:  {name:"Bastos",  el:"Fuego",  dom:"acción, voluntad y creatividad"},
  copas:   {name:"Copas",   el:"Agua",   dom:"emoción, vínculo e intuición"},
  espadas: {name:"Espadas", el:"Aire",   dom:"mente, palabra y conflicto"},
  oros:    {name:"Oros",    el:"Tierra", dom:"cuerpo, trabajo y recursos"}
};

// El rango es la mitad del sistema: lo que está pasando.
var RANKS = [
  {n:1,  name:"As",      core:"el potencial puro, la semilla"},
  {n:2,  name:"Dos",     core:"la dualidad y la primera elección"},
  {n:3,  name:"Tres",    core:"el primer crecimiento, lo que se comparte"},
  {n:4,  name:"Cuatro",  core:"la estabilidad y la pausa"},
  {n:5,  name:"Cinco",   core:"la crisis, la pérdida y el ajuste"},
  {n:6,  name:"Seis",    core:"la armonía recuperada, el intercambio"},
  {n:7,  name:"Siete",   core:"la prueba y la evaluación"},
  {n:8,  name:"Ocho",    core:"el movimiento y el progreso"},
  {n:9,  name:"Nueve",   core:"la plenitud, el casi-final"},
  {n:10, name:"Diez",    core:"la culminación y el cierre del ciclo"},
  {n:11, name:"Sota",    core:"el aprendiz, el mensajero", court:true},
  {n:12, name:"Caballo", core:"el que actúa y busca", court:true},
  {n:13, name:"Reina",   core:"el dominio interno", court:true},
  {n:14, name:"Rey",     core:"el dominio externo", court:true}
];

// [palo, rango, palabras clave, escena, significado]
var MINORS = [
  // ── BASTOS · fuego · acción ──────────────────────────────
  ["bastos",1,["chispa","inicio","impulso"],"Una mano sale de una nube con un bastón en brote; un castillo al fondo","La energía creativa aparece: es el momento de empezar algo."],
  ["bastos",2,["planificación","decisión","horizonte"],"Un hombre con un globo terráqueo contempla un bastón fijado a un muro","Tienes la visión; toca elegir el rumbo antes de actuar."],
  ["bastos",3,["expansión","espera","visión"],"Una figura mira barcos desde un acantilado, junto a tres bastones clavados","Lo sembrado empieza a crecer; tu mirada ya está lejos."],
  ["bastos",4,["celebración","hogar","estabilidad"],"Cuatro bastones con guirnalda y dos figuras celebrando bajo un palio","Una base firme y motivo para celebrar lo construido."],
  ["bastos",5,["conflicto","competencia","tensión"],"Cinco jóvenes se enzarzan con sus bastones en una refriega desordenada","Rivalidad y roces: energía dispersa que pide dirección."],
  ["bastos",6,["victoria","reconocimiento","avance"],"Un jinete con corona de laurel pasa ante una multitud que lo aclama","El esfuerzo recibe su premio y el camino se abre."],
  ["bastos",7,["defensa","perseverancia","posición"],"Un hombre en lo alto de una colina defiende su puesto con un bastón","Mantén tu terreno: tienes ventaja, pero hay que sostenerla."],
  ["bastos",8,["rapidez","noticias","movimiento"],"Ocho bastones cruzan el aire como flechas sobre un paisaje abierto","Todo se acelera: mensajes, viajes y avances repentinos."],
  ["bastos",9,["resistencia","cautela","cansancio"],"Un hombre herido se apoya en un bastón y vigila a los otros ocho","Estás cerca del final; protege lo logrado sin bajar la guardia."],
  ["bastos",10,["carga","responsabilidad","esfuerzo"],"Una figura carga diez bastones y camina hacia un pueblo","Demasiado peso: cumples, pero a costa de agotarte."],
  ["bastos",11,["curiosidad","aprendiz","entusiasmo"],"Un joven sostiene un bastón y observa una salamandra en su mano","Una chispa nueva de entusiasmo pide ser explorada."],
  ["bastos",12,["impulso","aventura","pasión"],"Un jinete sobre un caballo encabritado, con armadura de salamandras","Actuar con pasión, aunque el impulso pueda desbordarse."],
  ["bastos",13,["carisma","confianza","calidez"],"Una reina sentada con un bastón y un girasol en la mano","Liderar desde la calidez y la seguridad en una misma."],
  ["bastos",14,["liderazgo","visión","mando"],"Un rey en su trono con una salamandra a sus pies y un bastón en la mano","Dirigir con visión propia y asumir el mando."],

  // ── COPAS · agua · emoción ──────────────────────────────
  ["copas",1,["apertura","amor","plenitud emocional"],"Una mano de una nube ofrece una copa desbordante sobre un estanque con lirios","El corazón se abre: empieza un ciclo emocional."],
  ["copas",2,["unión","reciprocidad","pacto"],"Dos figuras se miran y brindan, con un caduceo alado sobre ellas","Un vínculo de igual a igual, donde ambos se reconocen."],
  ["copas",3,["amistad","celebración","comunidad"],"Tres mujeres danzan en corro con copas alzadas entre frutos","Alegría compartida: la abundancia se disfruta en compañía."],
  ["copas",4,["apatía","desinterés","oportunidad ignorada"],"Una figura sentada bajo un árbol ignora la copa que le ofrece una nube","El desencanto te hace no ver lo que sí se te ofrece."],
  ["copas",5,["pérdida","duelo","arrepentimiento"],"Una figura encapuchada mira tres copas volcadas; detrás quedan dos en pie","Lamentas lo perdido y no ves lo que aún conservas."],
  ["copas",6,["nostalgia","infancia","recuerdos"],"Un niño ofrece una copa a otro en un jardín, entre recuerdos","El pasado vuelve con dulzura: úsalo como raíz, no como refugio."],
  ["copas",7,["ilusión","fantasía","opciones"],"Siete copas flotan entre nubes con castillos, joyas, serpientes y una corona","Demasiadas fantasías compiten; hay que distinguir el deseo real."],
  ["copas",8,["abandono","búsqueda","retirada"],"Una figura da la espalda a ocho copas apiladas y camina hacia las montañas","Dejar atrás lo que ya no llena para buscar algo con sentido."],
  ["copas",9,["satisfacción","deseo cumplido","bienestar"],"Un hombre satisfecho se sienta ante nueve copas alineadas en un arco","El deseo cumplido: disfruta sin miedo a que se acabe."],
  ["copas",10,["plenitud","familia","armonía"],"Una pareja y sus hijos celebran bajo un arco de diez copas y un arcoíris","La plenitud afectiva: un hogar emocional en paz."],
  ["copas",11,["ternura","mensaje","sensibilidad"],"Un joven mira una copa de la que sale un pez, junto al mar","Una emoción nueva o un mensaje del corazón."],
  ["copas",12,["romance","idealismo","propuesta"],"Un jinete avanza despacio con una copa, sobre un caballo tranquilo","Ofrecer el corazón con calma, o dejarse llevar por un ideal."],
  ["copas",13,["empatía","intuición","cuidado"],"Una reina sentada al borde del agua sostiene una copa cerrada y adornada","Escuchar y cuidar desde la intuición, sin perderte en el otro."],
  ["copas",14,["madurez emocional","serenidad","contención"],"Un rey en su trono flota sobre el mar con una copa y un cetro","Sentir mucho y aun así sostener el timón."],

  // ── ESPADAS · aire · mente ──────────────────────────────
  ["espadas",1,["claridad","verdad","decisión"],"Una mano alza una espada recta con corona, entre nubes y montañas","Una idea cortante: la verdad dicha sin rodeos."],
  ["espadas",2,["duda","bloqueo","tregua"],"Una figura con los ojos vendados sostiene dos espadas cruzadas sobre el pecho","No decidir también es una decisión; retira la venda."],
  ["espadas",3,["dolor","traición","verdad hiriente"],"Un corazón atravesado por tres espadas bajo un cielo de lluvia","Una verdad que duele, pero que permite sanar."],
  ["espadas",4,["descanso","retiro","recuperación"],"Un caballero yace en un sepulcro, con tres espadas en la pared y una bajo él","Alto obligatorio: retirarse para recuperar fuerzas."],
  ["espadas",5,["derrota","ventaja injusta","conflicto"],"Un hombre recoge espadas caídas mientras otros dos se alejan al fondo","Ganar a cualquier precio también tiene un costo."],
  ["espadas",6,["transición","huida","alivio"],"Una barca cruza el agua con una figura encapuchada y seis espadas clavadas","Alejarte de lo que duele: un traslado necesario, aunque triste."],
  ["espadas",7,["engaño","estrategia","sigilo"],"Un hombre se aleja a escondidas con cinco espadas, dejando dos atrás","Actuar con astucia puede rozar la trampa."],
  ["espadas",8,["encierro","parálisis","victimismo"],"Una figura atada y vendada entre ocho espadas clavadas en el suelo","Los límites parecen absolutos, pero las espadas no te encierran."],
  ["espadas",9,["angustia","insomnio","culpa"],"Una figura sentada en la cama se cubre la cara ante nueve espadas en la pared","El miedo vive más en la cabeza que en los hechos."],
  ["espadas",10,["final","derrumbe","cierre definitivo"],"Un cuerpo tendido con diez espadas clavadas en la espalda, bajo un cielo oscuro","Tocar fondo: ya no queda nada que perder, y eso libera."],
  ["espadas",11,["curiosidad","vigilancia","mensaje"],"Un joven en guardia sostiene una espada en un terreno ventoso","Observar y preguntar: una mente despierta que aún aprende."],
  ["espadas",12,["prisa","ataque","convicción"],"Un jinete carga a toda velocidad con la espada en alto","Actuar con convicción, cuidando no atropellar a nadie."],
  ["espadas",13,["lucidez","honestidad","límites"],"Una reina sentada con una espada recta y la otra mano extendida","Pensar con claridad y decir la verdad sin crueldad."],
  ["espadas",14,["autoridad mental","juicio","ley"],"Un rey en su trono sostiene una espada recta y mira de frente","Decidir desde la razón y hacer cumplir lo justo."],

  // ── OROS · tierra · materia ─────────────────────────────
  ["oros",1,["oportunidad","semilla","prosperidad"],"Una mano sostiene una moneda con una estrella sobre un jardín frondoso","Una oportunidad concreta: siémbrala y dará fruto."],
  ["oros",2,["equilibrio","adaptación","malabares"],"Una figura danza con dos monedas unidas por un lazo, con barcos al fondo","Sostener dos frentes a la vez sin perder el ritmo."],
  ["oros",3,["colaboración","oficio","reconocimiento"],"Un escultor trabaja en una iglesia mientras dos figuras revisan planos","El trabajo bien hecho se nota, y se hace en equipo."],
  ["oros",4,["control","ahorro","posesión"],"Una figura abraza una moneda y se sienta sobre otras dos, con una ciudad detrás","Aferrarse por miedo cierra la puerta a lo nuevo."],
  ["oros",5,["escasez","exclusión","pobreza"],"Dos mendigos caminan bajo la nieve junto a una vidriera iluminada","Sentirte fuera, aunque la ayuda esté más cerca de lo que crees."],
  ["oros",6,["generosidad","intercambio","equilibrio material"],"Un hombre con una balanza reparte monedas entre dos mendigos","Dar y recibir con medida justa."],
  ["oros",7,["paciencia","evaluación","espera"],"Un campesino apoya la azada y contempla una enredadera con siete monedas","La cosecha llega a su tiempo: revisa y ten paciencia."],
  ["oros",8,["dedicación","aprendizaje","oficio"],"Un artesano talla una moneda tras otra, con las anteriores colgadas","La maestría nace de repetir con atención."],
  ["oros",9,["independencia","disfrute","logro"],"Una mujer en un jardín con un halcón en la mano, entre nueve monedas","Disfrutar con calma lo que tu esfuerzo ha construido."],
  ["oros",10,["legado","familia","estabilidad material"],"Una familia y un anciano bajo un arco, con diez monedas y perros","Lo construido trasciende: patrimonio y herencia."],
  ["oros",11,["estudio","proyecto","promesa"],"Un joven contempla una moneda que sostiene en las manos, en un campo","Aprender algo concreto con constancia y humildad."],
  ["oros",12,["constancia","trabajo","rutina"],"Un jinete avanza despacio con una moneda en la mano sobre un campo arado","Avanzar sin prisa, pero sin detenerse."],
  ["oros",13,["cuidado","abundancia","practicidad"],"Una reina sentada en un jardín sostiene una moneda y acaricia un conejo","Cuidar lo cotidiano: el bienestar se construye en lo concreto."],
  ["oros",14,["prosperidad","solidez","gestión"],"Un rey en su trono con una moneda y un cetro, rodeado de vides","Administrar con solidez y disfrutar de lo logrado."]
];

// Lista unificada de 78 cartas, en orden: Mayores, Bastos, Copas, Espadas, Oros.
var CARDS = [];
var BY_ID = {};
(function () {
  MAJORS.forEach(function (m) {
    CARDS.push({
      id: "m" + m.n, arc: "mayor", n: m.n,
      numeral: ROMAN[m.n], roman: ROMAN[m.n],
      name: m.name, kw: m.kw, scene: m.scene, mean: m.mean,
      meta: m.astro
    });
  });
  MINORS.forEach(function (r) {
    var suit = SUITS[r[0]], rank = RANKS[r[1] - 1];
    CARDS.push({
      id: r[0] + "-" + r[1], arc: "menor", suit: r[0], n: r[1],
      numeral: rank.court ? rank.name : ROMAN[r[1]],
      court: !!rank.court,
      name: rank.name + " de " + suit.name,
      kw: r[2], scene: r[3], mean: r[4],
      meta: suit.el + " · " + suit.dom,
      core: rank.core, domain: suit.dom
    });
  });
  CARDS.forEach(function (c) { BY_ID[c.id] = c; });
})();
