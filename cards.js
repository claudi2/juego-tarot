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
  bastos:  {name:"Bastos",  el:"Fuego",  dom:"acción, voluntad y creatividad", sym:"el basto"},
  copas:   {name:"Copas",   el:"Agua",   dom:"emoción, vínculo e intuición",   sym:"la copa"},
  espadas: {name:"Espadas", el:"Aire",   dom:"mente, palabra y conflicto",     sym:"la espada"},
  oros:    {name:"Oros",    el:"Tierra", dom:"cuerpo, trabajo y recursos",     sym:"el oro"}
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
  {n:11, name:"Paje",    core:"el aprendiz, el mensajero", court:true},
  {n:12, name:"Caballo", core:"el que actúa y busca", court:true},
  {n:13, name:"Reina",   core:"el dominio interno", court:true},
  {n:14, name:"Rey",     core:"el dominio externo", court:true}
];

// Elemento de cada Arcano Mayor (atribución Golden Dawn, simplificada).
// Se usa para la primera pista: el "tema" emocional de la carta.
var MAJOR_ELEMENT = ["aire","aire","agua","tierra","fuego","tierra","aire","agua","fuego","tierra",
                     "fuego","aire","agua","agua","fuego","tierra","fuego","aire","agua","fuego","fuego","tierra"];
var SUIT_ELEMENT = { bastos: "fuego", copas: "agua", espadas: "aire", oros: "tierra" };

var ELEMENTS = {
  fuego:  { name: "Fuego",  tema: "el impulso de actuar: ganas, coraje y deseo" },
  agua:   { name: "Agua",   tema: "lo que sientes: amor, miedo e intuición" },
  aire:   { name: "Aire",   tema: "la mente: ideas, palabras y conflictos" },
  tierra: { name: "Tierra", tema: "lo concreto: cuerpo, trabajo y seguridad" }
};

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

// Descripción de "ambiente" para la pista 1: sugiere la situación y la emoción,
// pero NO nombra el objeto del palo ni la cantidad. Así el símbolo (pista 2)
// aporta información de verdad y la escena literal queda para la pista 5.
var AMB = {
  // Mayores
  "m0":  "Alguien da un paso al vacío con la mirada alegre y una flor en la mano.",
  "m1":  "Una figura señala el cielo y la tierra: todo lo que necesita ya está sobre la mesa.",
  "m2":  "Una mujer serena guarda un libro cerrado entre dos columnas y un velo.",
  "m3":  "Una mujer con corona de estrellas descansa en un campo que ya ha dado fruto.",
  "m4":  "Un anciano severo se sienta en un trono de piedra y sostiene el mando.",
  "m5":  "Un maestro bendice a quienes escuchan y les entrega unas llaves.",
  "m6":  "Dos personas se eligen bajo la mirada de un ángel y un paisaje abierto.",
  "m7":  "Un conductor avanza sin riendas, guiando dos fuerzas que tiran en distinto sentido.",
  "m8":  "Una mujer cierra la boca de una fiera con las manos, sin violencia.",
  "m9":  "Un anciano solitario sube a lo alto con una luz pequeña en la mano.",
  "m10": "Una gran rueda gira y arrastra consigo a todas las figuras que la rodean.",
  "m11": "Una figura sostiene una balanza y un filo, y mira de frente sin titubear.",
  "m12": "Alguien cuelga cabeza abajo, tranquilo, con el rostro iluminado.",
  "m13": "Un jinete oscuro avanza sin prisa mientras a su paso todo se detiene.",
  "m14": "Un ángel equilibra dos líquidos con paciencia, con un pie dentro del agua.",
  "m15": "Dos figuras permanecen atadas por cadenas flojas ante una sombra con cuernos.",
  "m16": "Un rayo parte un edificio y dos figuras caen al vacío.",
  "m17": "Una mujer derrama agua bajo el cielo abierto, después de la tormenta.",
  "m18": "Dos animales aúllan a lo alto mientras algo emerge del agua en la oscuridad.",
  "m19": "Un niño monta un animal claro bajo un cielo limpio, entre flores altas.",
  "m20": "Una trompeta suena desde lo alto y las figuras se levantan de sus tumbas.",
  "m21": "Una figura danza dentro de una corona de hojas, rodeada de testigos.",

  // Bastos
  "bastos-1":  "Una mano aparece entre las nubes y ofrece un brote verde; al fondo, un castillo.",
  "bastos-2":  "Alguien contempla un mapa del mundo y decide por dónde empezar.",
  "bastos-3":  "Una figura mira barcos alejarse desde un acantilado: lo sembrado ya navega.",
  "bastos-4":  "Una pareja celebra bajo un palio de flores, en un hogar que empieza a serlo.",
  "bastos-5":  "Varias personas discuten y se empujan sin orden, cada una con su razón.",
  "bastos-6":  "Un jinete coronado avanza entre una multitud que lo aclama.",
  "bastos-7":  "Alguien defiende una altura con lo que tiene, mientras otros intentan subir.",
  "bastos-8":  "Todo cruza el aire a gran velocidad, como mensajes que no esperan.",
  "bastos-9":  "Un herido se apoya en lo que queda en pie y vigila el horizonte, cansado.",
  "bastos-10": "Alguien avanza encorvado bajo un peso enorme, con el pueblo aún lejos.",
  "bastos-11": "Un joven observa con curiosidad una pequeña criatura que se le acerca.",
  "bastos-12": "Un jinete se lanza al galope, con más pasión que control.",
  "bastos-13": "Una mujer sentada sostiene una flor alta y mira de frente con calidez.",
  "bastos-14": "Un hombre maduro ocupa su trono, con una criatura de fuego a sus pies.",

  // Copas
  "copas-1":  "Una mano entre las nubes ofrece algo que se desborda sobre el agua.",
  "copas-2":  "Una pareja se mira y brinda, reconociéndose como iguales.",
  "copas-3":  "Un grupo celebra en corro, entre frutas y risas compartidas.",
  "copas-4":  "Alguien sentado bajo un árbol aparta la vista de lo que se le ofrece.",
  "copas-5":  "Una figura de espaldas contempla lo que ha caído; a su lado aún queda algo en pie.",
  "copas-6":  "Un niño ofrece algo a otro en un jardín, entre ecos de otra época.",
  "copas-7":  "Varias imágenes brillan en el aire: castillos, joyas, una corona y un peligro.",
  "copas-8":  "Alguien da la espalda a lo que ya no le llena y camina hacia las montañas.",
  "copas-9":  "Una persona se sienta tranquila ante lo que ha deseado y por fin tiene.",
  "copas-10": "Una familia celebra bajo un arcoíris, en una casa emocional en paz.",
  "copas-11": "Un joven mira con sorpresa algo que asoma y se mueve, junto al mar.",
  "copas-12": "Un jinete avanza despacio, ofreciendo algo con cuidado, como quien se declara.",
  "copas-13": "Una mujer sentada junto al agua sostiene algo cerrado y escucha más de lo que habla.",
  "copas-14": "Un hombre sereno flota sobre el mar sin perder el mando de sí mismo.",

  // Espadas
  "espadas-1":  "Una mano alza un filo recto por encima de las nubes, con una corona al frente.",
  "espadas-2":  "Alguien con los ojos vendados cruza los brazos sobre el pecho y no decide.",
  "espadas-3":  "Un corazón es atravesado por varios filos bajo la lluvia.",
  "espadas-4":  "Una figura yace tendida con los ojos cerrados: el descanso obligado.",
  "espadas-5":  "Alguien recoge lo que otros abandonan, pero se queda solo en el campo.",
  "espadas-6":  "Una barca cruza el agua cargada de algo que se deja atrás, con tristeza.",
  "espadas-7":  "Alguien se aleja a escondidas llevándose lo que no es suyo.",
  "espadas-8":  "Una figura atada y con los ojos vendados se cree rodeada por todos lados.",
  "espadas-9":  "Alguien se despierta en la cama y se cubre la cara: el miedo no deja dormir.",
  "espadas-10": "Un cuerpo yace en el suelo bajo un cielo negro, sin nada que perder.",
  "espadas-11": "Un joven vigila atento con un filo en la mano, aprendiendo a mirar.",
  "espadas-12": "Un jinete carga a toda velocidad, decidido y sin mirar atrás.",
  "espadas-13": "Una mujer sostiene un filo con una mano y tiende la otra, sin crueldad.",
  "espadas-14": "Un hombre en el trono juzga con la mirada firme y un filo en la mano.",

  // Oros
  "oros-1":  "Una mano ofrece algo valioso sobre un jardín que empieza a crecer.",
  "oros-2":  "Alguien hace malabares con lo que tiene, sin perder el ritmo, mientras el mundo navega.",
  "oros-3":  "Un artesano trabaja en una obra mientras otros revisan los planos.",
  "oros-4":  "Alguien abraza lo que tiene y se sienta encima, con la ciudad detrás.",
  "oros-5":  "Unas figuras caminan bajo la nieve, fuera de una luz que no las ve.",
  "oros-6":  "Un hombre reparte con una balanza, midiendo lo que da a cada uno.",
  "oros-7":  "Un campesino se apoya en su herramienta y contempla lo que ha crecido.",
  "oros-8":  "Un artesano repite su oficio con atención, pieza tras pieza.",
  "oros-9":  "Una mujer pasea por un jardín con un ave rapaz en la mano.",
  "oros-10": "Varias generaciones se reúnen bajo un arco, con animales a los pies.",
  "oros-11": "Un joven sostiene algo valioso entre las manos y lo estudia con humildad.",
  "oros-12": "Un jinete avanza despacio por un campo arado, sin prisa pero sin parar.",
  "oros-13": "Una mujer cuida un jardín y acaricia un animal pequeño a sus pies.",
  "oros-14": "Un hombre maduro administra lo suyo entre vides, con calma y solidez."
};

// Lista unificada de 78 cartas, en orden: Mayores, Bastos, Copas, Espadas, Oros.
var CARDS = [];
var BY_ID = {};
(function () {
  MAJORS.forEach(function (m) {
    CARDS.push({
      id: "m" + m.n, arc: "mayor", n: m.n, el: MAJOR_ELEMENT[m.n], amb: AMB["m" + m.n],
      numeral: ROMAN[m.n], roman: ROMAN[m.n],
      name: m.name, kw: m.kw, scene: m.scene, mean: m.mean,
      meta: m.astro
    });
  });
  MINORS.forEach(function (r) {
    var suit = SUITS[r[0]], rank = RANKS[r[1] - 1];
    CARDS.push({
      id: r[0] + "-" + r[1], arc: "menor", suit: r[0], n: r[1], el: SUIT_ELEMENT[r[0]], amb: AMB[r[0] + "-" + r[1]],
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
