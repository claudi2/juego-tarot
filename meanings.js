// Lecturas extendidas para el modo En mano.
// Referencia: A. E. Waite, The Pictorial Key to the Tarot (1911), dominio público.
// Redacción propia y orientativa: no reproduce el texto de Waite.
// Campos: up (derecho), rev (invertido), love, friends, work.
// Los contextos incluyen el matiz al derecho y el invertido en el mismo párrafo.
var DEEP = {
  "m0": {
    up: "El Loco representa el comienzo absoluto: una energía libre, curiosa y sin mapa que se lanza porque confía en el camino. Habla de permisos, frescura y de la valentía de dar el primer paso aunque no estén todas las respuestas. También recuerda que jugar y equivocarse forma parte de aprender.",
    rev: "Invertido, el impulso se vuelve imprudencia o, al contrario, miedo a empezar. Puede señalar falta de plan, ingenuidad, dispersión o una huida que se disfraza de libertad. A veces eres tú quien se queda al borde del precipicio esperando una garantía que nunca llega.",
    love: "Al derecho, trae frescura, aventura y ganas de conocer sin etiquetas; puede ser un flechazo o un reinicio. Invertida, avisa de impulsividad, miedo al compromiso o de alguien que promete libertad pero no se queda.",
    friends: "Al derecho, suma amistades espontáneas, planes improvisados y una mirada sin prejuicios. Invertida, puede hablar de contactos poco fiables, inmadurez o de alguien que desaparece cuando la cosa se pone seria.",
    work: "Al derecho, favorece proyectos nuevos, emprendimientos y tareas creativas donde hay que improvisar. Invertida, pide planificación: el entusiasmo solo no sostiene un proyecto ni paga las facturas."
  },
  "m1": {
    up: "El Mago es la capacidad de reunir voluntad, recursos y palabra para convertir una idea en algo real. Habla de talento, iniciativa y del poder de nombrar lo que quieres. Es una carta de acción consciente: no basta con desear, hay que ponerse a ello.",
    rev: "Invertido, el Mago advierte de energía dispersa, talento sin foco o uso manipulador de la palabra. Puede indicar promesas que no se cumplen, atajos dudosos o la sensación de que tienes las herramientas pero no te atreves a usarlas.",
    love: "Al derecho, hay química, comunicación y ganas de conquistar; también puede señalar una relación que empieza con mucha iniciativa. Invertida, cuidado con el encanto que manipula, los celos o las palabras que no se corresponden con los hechos.",
    friends: "Al derecho, eres quien conecta, propone y mueve al grupo. Invertida, puede aparecer el amigo que promete mucho y concreta poco, o un ambiente de rumores.",
    work: "Al derecho, es una carta excelente para lanzar, negociar, vender o mostrar tu habilidad. Invertida, habla de improvisación excesiva, promesas comerciales dudosas o falta de foco."
  },
  "m2": {
    up: "La Sacerdotisa guarda lo que todavía no se puede decir: intuición, silencio y conocimiento profundo. Invita a escuchar la voz interior y a no precipitar decisiones cuando falta información. A veces la respuesta está en lo que no se dice.",
    rev: "Invertida, puede señalar intuición ignorada, secretos que pesan o confusión entre lo que imaginas y lo que sabes. También habla de aislamiento, desconfianza o de información que se oculta.",
    love: "Al derecho, hay una conexión profunda y reservada, con mucha intuición y necesidad de intimidad. Invertida, puede haber silencios, celos o una persona que no muestra sus cartas.",
    friends: "Al derecho, eres el confidente o la amiga que escucha sin juzgar. Invertida, advierte de secretos, malentendidos o de una amistad que se enfrió por no hablar claro.",
    work: "Al derecho, favorece la investigación, la estrategia y los proyectos que maduran en silencio. Invertida, pide cuidado con información incompleta, rumores o decisiones tomadas a ciegas."
  },
  "m3": {
    up: "La Emperatriz es la energía de lo que crece cuando se cuida: abundancia, creatividad, placer y fertilidad en sentido amplio. Habla de nutrir un proyecto, un vínculo o tu propio cuerpo. También recuerda que recibir y disfrutar no es egoísmo.",
    rev: "Invertida, la abundancia se bloquea por el exceso de control, el descuido o la dependencia. Puede hablar de creatividad estancada, celos, sobreprotección o de dar tanto que te olvidas de ti.",
    love: "Al derecho, hay ternura, sensualidad y ganas de construir un nido; el vínculo se cuida con gestos concretos. Invertida, puede aparecer la sobreprotección, la dependencia emocional o el miedo a que el otro se aleje.",
    friends: "Al derecho, eres la amistad que cuida, alimenta y celebra tus logros. Invertida, puede haber celos, posesividad o una relación que se sostiene solo desde el sacrificio.",
    work: "Al derecho, es una buena carta para proyectos creativos, enseñanza, jardinería, salud y todo lo que pida paciencia y cuidado. Invertida, advierte de estancamiento, falta de reconocimiento o de cargar con más de lo que te corresponde."
  },
  "m4": {
    up: "El Emperador representa el orden que sostiene: límites, estructura, autoridad y capacidad de proteger. Habla de tomar el mando con criterio y de construir algo que dure. También recuerda que la firmeza sin escucha se vuelve rigidez.",
    rev: "Invertido, el poder se desordena: rigidez, control excesivo, abuso de autoridad o falta de estabilidad. Puede señalar un jefe difícil, un padre ausente o tu propia dificultad para poner límites.",
    love: "Al derecho, busca compromiso, seguridad y reglas claras; puede ser una relación estable y protectora. Invertida, avisa de dominación, celos o de una pareja que confunde amor con control.",
    friends: "Al derecho, eres la persona que organiza, protege y sostiene al grupo. Invertida, puede haber amistades que mandan demasiado o vínculos donde siempre cedes tú.",
    work: "Al derecho, favorece puestos de responsabilidad, sistemas, planificación y negocios sólidos. Invertida, habla de microgestión, burocracia o de un liderazgo que no escucha."
  },
  "m5": {
    up: "El Hierofante es la tradición que enseña: escuela, normas, rituales y pertenencia. Habla de aprender de alguien con experiencia o de seguir un camino probado. También puede señalar la necesidad de dar estructura a una búsqueda espiritual.",
    rev: "Invertido, cuestiona la autoridad y los dogmas: quieres salir de la norma o te sientes atrapado en ella. Puede indicar rebeldía, hipocresía institucional o una enseñanza que ya no te sirve.",
    love: "Al derecho, busca una relación formal, estable y reconocida por el entorno; puede hablar de compromiso o de valores compartidos. Invertida, cuestiona las etiquetas, las bodas por obligación o las diferencias de creencias.",
    friends: "Al derecho, hay un grupo, una comunidad o un mentor que te sostiene. Invertida, advierte de presión social, chismes o de una amistad que se basa en aparentar.",
    work: "Al derecho, favorece la formación, la enseñanza, las instituciones y los procesos claros. Invertida, señala burocracia, jefes dogmáticos o un ambiente donde no se permite preguntar."
  },
  "m6": {
    up: "Los Enamorados hablan de una elección que compromete el corazón y los valores. No es solo romance: es decidir qué quieres y con quién quieres caminar. La carta pide coherencia entre lo que sientes y lo que eliges.",
    rev: "Invertida, la elección se vuelve duda, tentación o desalineación. Puede hablar de una relación que no encaja, de un triángulo, de indecisión o de elegir por miedo a perder.",
    love: "Al derecho, hay atracción, reciprocidad y una decisión consciente de estar con alguien. Invertida, puede señalar dudas, infidelidad, dependencia o una relación que choca con tus valores.",
    friends: "Al derecho, hay afinidad y lealtad; una amistad que se elige. Invertida, puede aparecer un conflicto de valores o una tercera persona que tensa el vínculo.",
    work: "Al derecho, favorece alianzas, sociedades y decisiones vocacionales alineadas con lo que amas. Invertida, advierte de socios incompatibles o de elegir un trabajo solo por seguridad."
  },
  "m7": {
    up: "El Carro es la voluntad que avanza: dirección, disciplina y victoria sobre fuerzas opuestas. Habla de tomar las riendas y de no dejar que las emociones o el entorno decidan por ti. También puede señalar viajes o cambios de rumbo.",
    rev: "Invertido, la voluntad se dispersa: falta de dirección, impulsividad, obstáculos o agresividad. Puede indicar que fuerzas opuestas te arrastran porque no has marcado un rumbo.",
    love: "Al derecho, la relación avanza con decisión, proyectos compartidos y superación de obstáculos. Invertida, puede haber luchas de poder, prisas o una pareja que quiere controlar el rumbo.",
    friends: "Al derecho, eres un aliado que empuja al grupo hacia una meta. Invertida, puede aparecer competencia, terquedad o amistades que solo aparecen cuando hay que ganar.",
    work: "Al derecho, es una carta de ambición, ascensos y proyectos que requieren constancia. Invertida, habla de esfuerzo mal dirigido, agotamiento o de querer abarcar demasiado."
  },
  "m8": {
    up: "La Fuerza es el poder suave: coraje, paciencia y compasión para domesticar lo instintivo. Habla de sostener sin gritar, de resistir sin romperte y de confiar en tu capacidad. A veces el valor más grande es quedarte y no huir.",
    rev: "Invertida, aparece la fuerza mal usada: impaciencia, rabia contenida, inseguridad o abuso. Puede indicar que estás forzando una situación o que te exiges más de lo que puedes.",
    love: "Al derecho, hay ternura, lealtad y capacidad de atravesar crisis sin dañar al otro. Invertida, puede señalar celos, control emocional o una relación donde la paciencia se agotó.",
    friends: "Al derecho, eres la calma que ayuda a otros a regularse. Invertida, puede haber resentimiento, orgullo o una amistad que se sostiene por miedo a la soledad.",
    work: "Al derecho, favorece la perseverancia, el liderazgo sereno y los trabajos que requieren temple. Invertida, advierte de estrés, impulsividad o de cargar con responsabilidades que no te tocan."
  },
  "m9": {
    up: "El Ermitaño busca la verdad en silencio: retiro, introspección y una luz que se enciende dentro. Habla de hacer una pausa para escucharte y de aprender de tu propia experiencia. También puede representar a un guía o maestro.",
    rev: "Invertido, el retiro se vuelve aislamiento: soledad no elegida, miedo a conectar o negativa a pedir ayuda. Puede indicar que te has quedado demasiado tiempo en tu cueva o que huyes de una conversación.",
    love: "Al derecho, necesitas espacio para pensar y la relación se beneficia de silencios honestos. Invertida, puede haber distancia emocional, frialdad o una pareja que se esconde.",
    friends: "Al derecho, eres el amigo que aconseja con calma y sin invadir. Invertida, advierte de aislamiento, orgullo o de una amistad que se enfrió por falta de presencia.",
    work: "Al derecho, favorece la investigación, el estudio profundo y el trabajo solitario. Invertida, puede señalar desmotivación, aislamiento en el equipo o falta de dirección."
  },
  "m10": {
    up: "La Rueda de la Fortuna habla de ciclos, cambios y de ese giro de la vida que no controlas. Trae oportunidades, golpes de suerte y la certeza de que nada permanece igual. La clave es adaptarte y aprender del movimiento.",
    rev: "Invertida, el ciclo se atasca: mala racha, resistencia al cambio o repetición de un patrón. Puede indicar que esperas que la suerte lo haga todo o que te aferras a una etapa que ya terminó.",
    love: "Al derecho, puede aparecer un encuentro fortuito o un cambio de etapa en la relación. Invertida, habla de altibajos, idas y venidas o de una historia que se repite.",
    friends: "Al derecho, el círculo social cambia y llegan personas nuevas. Invertida, advierte de amistades de conveniencia o de volver a caer en la misma dinámica.",
    work: "Al derecho, trae oportunidades, cambios de puesto o golpes de suerte. Invertida, señala inestabilidad, mal momento o un proyecto que depende demasiado del azar."
  },
  "m11": {
    up: "La Justicia pide mirar los hechos con honestidad y asumir las consecuencias. Habla de equilibrio, contratos, decisiones justas y de la verdad que pesa. También recuerda que la balanza no siempre es rápida, pero tiende a ajustarse.",
    rev: "Invertida, la justicia se tuerce: engaño, favoritismos, culpa o evitación de responsabilidades. Puede indicar una situación desigual o una decisión que tomas desde el miedo.",
    love: "Al derecho, hay honestidad, igualdad y acuerdos claros; una relación que se sostiene en la verdad. Invertida, puede haber desequilibrio, mentiras o una pareja que no asume su parte.",
    friends: "Al derecho, eres justo y leal; pones límites claros. Invertida, advierte de traiciones, chismes o de una amistad donde siempre das más.",
    work: "Al derecho, favorece contratos, negociaciones, auditorías y decisiones éticas. Invertida, habla de injusticias, cláusulas abusivas o de un ambiente laboral poco transparente."
  },
  "m12": {
    up: "El Colgado es la pausa que cambia la mirada: entrega, paciencia y sacrificio voluntario. Habla de soltar el control y ver la situación desde otro ángulo. A veces no hacer nada es la acción más sabia.",
    rev: "Invertido, la pausa se vuelve estancamiento: indecisión, martirio o resistencia a cambiar. Puede indicar que estás esperando una señal que no llega o que te sacrificas sin sentido.",
    love: "Al derecho, la relación pide tiempo, paciencia y una nueva perspectiva. Invertida, puede haber limbo, silencios eternos o una persona que se hace la víctima.",
    friends: "Al derecho, ayudas a otros a ver las cosas con calma y empatía. Invertida, advierte de amistades que se quedan en la queja o de un sacrificio que nadie te pidió.",
    work: "Al derecho, favorece la reflexión, los proyectos en pausa y las soluciones no convencionales. Invertida, señala procrastinación, bloqueo o un trabajo que no avanza."
  },
  "m13": {
    up: "La Muerte no es una amenaza: es el final de una etapa y el espacio que se abre para lo nuevo. Habla de transformación profunda, de soltar lo que ya no vive y de aceptar el cambio. Duele, pero limpia.",
    rev: "Invertida, el cambio se resiste: miedo a soltar, estancamiento o una etapa que se alarga de más. Puede indicar que te aferras a algo que ya terminó o que el final se está viviendo a medias.",
    love: "Al derecho, una relación cambia de forma o termina para dar paso a otra etapa. Invertida, puede haber miedo a la ruptura, celos o una pareja que se queda por costumbre.",
    friends: "Al derecho, algunas amistades se cierran y otras se transforman. Invertida, advierte de vínculos que se sostienen por miedo a la soledad.",
    work: "Al derecho, favorece reestructuraciones, cambios de carrera y cierres de proyectos. Invertida, señala un trabajo que ya no te llena pero no te atreves a dejar."
  },
  "m14": {
    up: "La Templanza busca la medida justa: paciencia, equilibrio y la mezcla precisa entre dos extremos. Habla de sanación lenta, de integrar partes de ti y de no precipitarte. Es una carta de armonía que se construye con constancia.",
    rev: "Invertida, el equilibrio se rompe: exceso, impaciencia, conflictos o falta de medida. Puede indicar que estás mezclando mal los tiempos o que intentas controlar lo que solo necesita reposo.",
    love: "Al derecho, hay armonía, cuidado y una relación que encuentra su ritmo. Invertida, puede haber descompensación, celos o una pareja que va a velocidades distintas.",
    friends: "Al derecho, eres el mediador que calma y busca puntos en común. Invertida, advierte de drama, excesos o de una amistad que no respeta tus tiempos.",
    work: "Al derecho, favorece la colaboración, la sanación de equipos y los proyectos a largo plazo. Invertida, habla de agotamiento, mala gestión del tiempo o de soluciones extremas."
  },
  "m15": {
    up: "El Diablo muestra lo que te ata: deseos, miedos, dependencias y pactos que aceptaste sin darte cuenta. No siempre es maldad; muchas veces es la comodidad de una jaula conocida. La carta pide nombrar la cadena para poder soltarla.",
    rev: "Invertido, llega la conciencia y la posibilidad de liberarte. Puede indicar que estás viendo una dependencia, cortando un vínculo tóxico o saliendo de una tentación. También advierte de una liberación a medias.",
    love: "Al derecho, hay atracción intensa, pasión y también dependencia o celos. Invertida, puede aparecer la liberación de una relación tóxica o la conciencia de un patrón que se repite.",
    friends: "Al derecho, advierte de amistades que te consumen o de dinámicas de control. Invertida, favorece cortar lazos, poner límites y recuperar tu espacio.",
    work: "Al derecho, habla de un trabajo que te retiene por dinero, estatus o miedo. Invertida, señala la salida, aunque implique renunciar a una seguridad aparente."
  },
  "m16": {
    up: "La Torre es la crisis que derriba lo falso para que veas la verdad. Habla de rupturas, revelaciones y de estructuras que no estaban bien construidas. El derrumbe asusta, pero también libera.",
    rev: "Invertida, la crisis se retrasa o se vive hacia dentro: miedo al cambio, tensión contenida o un derrumbe que evitas. Puede indicar que sostienes una fachada que ya no se tiene en pie.",
    love: "Al derecho, una verdad incómoda sacude la relación; puede haber ruptura o un cambio radical. Invertida, advierte de conflictos no hablados o de una pareja que evita mirar lo evidente.",
    friends: "Al derecho, una amistad se rompe o se revela una traición. Invertida, puede haber reconciliación tras una crisis o una ruptura que se pospone.",
    work: "Al derecho, trae despidos, reestructuraciones o el fin de un proyecto. Invertida, señala inestabilidad, miedo al despido o un ambiente laboral tenso."
  },
  "m17": {
    up: "La Estrella es la calma después del derrumbe: esperanza, sanación y confianza en que lo nuevo puede crecer. Habla de inspiración, de fe y de dejarte ver sin máscaras. Es una carta de renovación lenta pero real.",
    rev: "Invertida, la esperanza se nubla: desánimo, desconexión o miedo a que nada cambie. Puede indicar que estás mirando solo lo que falta y no ves los pequeños brotes de recuperación.",
    love: "Al derecho, hay ternura, confianza y ganas de sanar; una relación que te devuelve la fe. Invertida, puede aparecer desilusión, distancia o miedo a volver a confiar.",
    friends: "Al derecho, eres una presencia luminosa que acompaña sin invadir. Invertida, advierte de aislamiento, envidia o de una amistad que se apagó.",
    work: "Al derecho, favorece la vocación, la creatividad y los proyectos que nacen de la ilusión. Invertida, habla de desmotivación, falta de rumbo o de una idea que aún no encuentra forma."
  },
  "m18": {
    up: "La Luna ilumina lo que no se ve: intuición, sueños, miedos y zonas de sombra. Habla de incertidumbre, de emociones que suben y de no fiarte de las apariencias. La clave es atravesar la niebla sin perder el centro.",
    rev: "Invertida, la niebla empieza a disiparse: claridad, verdad que emerge y miedos que pierden fuerza. También puede señalar confusión, autoengaño o ansiedad que no te deja ver.",
    love: "Al derecho, hay atracción magnética, pero también dudas, celos o secretos. Invertida, puede llegar la claridad sobre una relación o el final de una etapa de confusión.",
    friends: "Al derecho, advierte de malentendidos, rumores o amistades que no muestran todo. Invertida, favorece hablar claro y ver quién está de verdad.",
    work: "Al derecho, pide cautela con contratos, información incompleta o promesas vagas. Invertida, ayuda a descubrir la verdad y a tomar decisiones con más luz."
  },
  "m19": {
    up: "El Sol es claridad, alegría y éxito simple: las cosas salen a la luz y se disfrutan sin tanta complicación. Habla de vitalidad, confianza y de mostrarte tal como eres. También puede señalar un logro que se celebra.",
    rev: "Invertido, la alegría se nubla: optimismo excesivo, expectativas poco realistas o un éxito que no llena. Puede indicar que estás forzando la positividad y evitando mirar lo que duele.",
    love: "Al derecho, hay felicidad, transparencia y ganas de compartir; una relación cálida y visible. Invertida, puede haber celos, vanidad o una expectativa de amor idealizado.",
    friends: "Al derecho, la amistad se celebra, se ríe y se muestra sin vergüenza. Invertida, advierte de envidia, protagonismo o de una alegría que se usa como máscara.",
    work: "Al derecho, trae reconocimiento, éxito y proyectos que florecen. Invertida, habla de agotamiento, exceso de confianza o de un logro que no colma."
  },
  "m20": {
    up: "El Juicio es el despertar a una llamada: una verdad que ya no puedes ignorar, un balance y un renacimiento. Habla de segundas oportunidades, de perdonar y de responder a quien estás llamado a ser. Es una carta de conciencia y decisión.",
    rev: "Invertida, la llamada se ignora: autocrítica, culpa, miedo a cambiar o un pasado que no se cierra. Puede indicar que te juzgas con dureza o que esperas una señal externa para actuar.",
    love: "Al derecho, puede haber reconciliación, una segunda oportunidad o una conversación que lo cambia todo. Invertida, advierte de asuntos pendientes, juicios y miedo a comprometerte.",
    friends: "Al derecho, una amistad se reencuentra o se perdona. Invertida, puede haber reproches, cuentas pendientes o una relación que no termina de cerrarse.",
    work: "Al derecho, favorece evaluaciones, cambios de vocación y decisiones que responden a tu propósito. Invertida, señala miedo al cambio, síndrome del impostor o un balance que evitas."
  },
  "m21": {
    up: "El Mundo es la culminación: un ciclo que se completa, logros que se integran y la sensación de estar en tu lugar. Habla de plenitud, viajes, expansión y de celebrar lo recorrido. También puede indicar el inicio de una etapa más amplia.",
    rev: "Invertido, el cierre queda incompleto: proyectos sin terminar, metas que se retrasan o una sensación de que falta algo. Puede indicar miedo a cerrar, éxito parcial o un ciclo que no acaba de cerrarse.",
    love: "Al derecho, hay plenitud, compromiso y una relación que se siente completa. Invertida, puede haber un cierre pendiente, distancia o la sensación de que falta una pieza.",
    friends: "Al derecho, celebramos un círculo que se siente familia. Invertida, advierte de despedidas, distancia o de una amistad que no termina de encajar.",
    work: "Al derecho, trae éxito, expansión internacional o el cierre de un gran proyecto. Invertida, habla de tareas pendientes, reconocimiento incompleto o de un ciclo que se alarga."
  },
  "bastos-1": {
    up: "El As de Bastos es la chispa creadora: una idea, un deseo o un proyecto que pide acción. Habla de entusiasmo, potencial y de ese impulso que aparece cuando algo te enciende. Es el momento de dar el primer paso, aunque sea pequeño.",
    rev: "Invertido, la chispa se apaga o se dispersa: falta de dirección, bloqueo creativo o un entusiasmo que no encuentra cauce. Puede indicar que esperas la motivación perfecta o que empiezas cosas sin terminarlas.",
    love: "Al derecho, hay atracción, deseo y ganas de iniciar algo; puede ser un flechazo. Invertida, avisa de pasión que se enfría, impulsividad o de un deseo que no se concreta.",
    friends: "Al derecho, una amistad nueva o un plan que despierta energía. Invertida, puede haber entusiasmo pasajero o falta de compromiso.",
    work: "Al derecho, es una gran carta para lanzar un proyecto, emprender o proponer una idea. Invertida, pide planificar antes de actuar y cuidar la dispersión."
  },
  "bastos-2": {
    up: "El Dos de Bastos es la visión que busca rumbo: tienes el mundo en la mano, pero aún no has elegido el camino. Habla de planificación, ambición y de la tensión entre quedarte y salir. Es una carta de decisiones estratégicas.",
    rev: "Invertido, la visión se bloquea: miedo a elegir, planes que no se concretan o falta de horizonte. Puede indicar que te quedas en la idea por miedo al riesgo.",
    love: "Al derecho, hay ganas de proyectar, pero también dudas sobre el rumbo de la relación. Invertida, puede aparecer indecisión, distancia o una pareja que no se compromete.",
    friends: "Al derecho, planeáis algo juntos y miráis más allá de lo inmediato. Invertida, advierte de planes que se quedan en palabras.",
    work: "Al derecho, favorece la estrategia, la expansión y la búsqueda de nuevas oportunidades. Invertida, habla de falta de planificación o de un proyecto que no arranca."
  },
  "bastos-3": {
    up: "El Tres de Bastos es la expansión que empieza a dar frutos: miras el horizonte y esperas que lleguen los barcos. Habla de paciencia activa, visión a largo plazo y de confiar en lo sembrado. También puede señalar viajes o negocios que se abren.",
    rev: "Invertido, la espera se vuelve frustración: retrasos, falta de visión o un proyecto que no termina de crecer. Puede indicar que miras demasiado lejos y descuidas lo que ya tienes.",
    love: "Al derecho, la relación mira hacia el futuro y se permite soñar. Invertida, puede haber distancia, planes que se retrasan o expectativas poco realistas.",
    friends: "Al derecho, el grupo crece y se abren nuevas experiencias. Invertida, advierte de planes que se cancelan o de una amistad que se enfría por la distancia.",
    work: "Al derecho, trae oportunidades de expansión, alianzas y nuevos mercados. Invertida, señala demoras, falta de previsión o inversiones que no rinden."
  },
  "bastos-4": {
    up: "El Cuatro de Bastos es la celebración de una base firme: hogar, comunidad y motivo para festejar lo construido. Habla de estabilidad emocional, pertenencia y de disfrutar el descanso después del esfuerzo. Es una carta de arraigo.",
    rev: "Invertido, la estabilidad se tambalea: conflictos en casa, celebraciones aplazadas o una sensación de no pertenecer. Puede indicar que la base que creías firme necesita ajustes.",
    love: "Al derecho, hay compromiso, hogar y ganas de celebrar el vínculo. Invertida, puede haber tensiones familiares, convivencia difícil o un compromiso que se pospone.",
    friends: "Al derecho, la amistad se vive como familia y se celebra. Invertida, advierte de roces, exclusiones o de un grupo que ya no te hace sentir en casa.",
    work: "Al derecho, favorece equipos estables, inauguraciones y proyectos que echan raíces. Invertida, habla de un ambiente inestable o de un éxito que no se comparte."
  },
  "bastos-5": {
    up: "El Cinco de Bastos es la refriega: competencia, roces y energías dispersas que buscan dirección. Habla de conflictos abiertos, rivalidad y de la necesidad de ordenar el caos. No es una carta de destrucción, sino de tensión que puede enseñar.",
    rev: "Invertido, el conflicto se evita o se interioriza: tensión contenida, rivalidad soterrada o miedo a discutir. También puede indicar el final de una pelea y la búsqueda de tregua.",
    love: "Al derecho, hay discusiones, celos o competencia por el poder. Invertida, puede aparecer la evitación del conflicto o una tregua que aún no resuelve nada.",
    friends: "Al derecho, el grupo está revuelto y cada uno tira para su lado. Invertida, advierte de rencores callados o de una amistad que se desgasta por no hablar.",
    work: "Al derecho, hay competencia, roces de equipo o una lucha por el reconocimiento. Invertida, señala conflictos no resueltos o una competencia que se vuelve desleal."
  },
  "bastos-6": {
    up: "El Seis de Bastos es el reconocimiento del esfuerzo: la victoria que se celebra y el camino que se abre. Habla de confianza, liderazgo y de recibir el aplauso por lo logrado. También puede indicar noticias positivas.",
    rev: "Invertido, el reconocimiento falta o se vuelve vanidad: éxito sin aplauso, arrogancia o miedo a ser visto. Puede indicar que dependes demasiado de la aprobación externa.",
    love: "Al derecho, la relación se siente orgullosa y visible; hay gestos de reconocimiento. Invertida, puede haber celos, competencia o una pareja que no valora lo que haces.",
    friends: "Al derecho, tus logros se celebran y el grupo te apoya. Invertida, advierte de envidia o de una amistad que solo está en los momentos buenos.",
    work: "Al derecho, trae ascensos, premios y proyectos que reciben luz verde. Invertida, habla de falta de reconocimiento o de un éxito que se vuelve presión."
  },
  "bastos-7": {
    up: "El Siete de Bastos es la defensa de lo ganado: mantienes tu posición aunque estés en minoría. Habla de perseverancia, coraje y de sostener tus ideas frente a la crítica. Tienes ventaja, pero hay que cuidarla.",
    rev: "Invertido, la defensa se vuelve agotamiento: te sientes desbordado, cedes o atacas por inseguridad. Puede indicar que estás luchando por algo que ya no merece la pena.",
    love: "Al derecho, hay que defender el vínculo frente a opiniones externas o celos. Invertida, puede aparecer cansancio, desconfianza o una relación que se siente atacada.",
    friends: "Al derecho, sostienes a tus amigos y tus principios. Invertida, advierte de aislamiento, paranoia o de una amistad que se vuelve una trinchera.",
    work: "Al derecho, defiendes tu proyecto, tu puesto o tus ideas con firmeza. Invertida, señala agotamiento, conflicto constante o falta de apoyo."
  },
  "bastos-8": {
    up: "El Ocho de Bastos es la aceleración: noticias, viajes, mensajes y avances que llegan de golpe. Habla de movimiento, rapidez y de que las cosas por fin se desbloquean. A veces pide no perder el rumbo en la prisa.",
    rev: "Invertido, el movimiento se atasca: retrasos, mensajes que no llegan o energía dispersa. Puede indicar que actúas con prisa sin dirección o que el cambio se pospone.",
    love: "Al derecho, hay comunicación intensa, encuentros rápidos o una relación que avanza. Invertida, puede haber malentendidos, mensajes cruzados o distancia.",
    friends: "Al derecho, llegan noticias, planes y reencuentros. Invertida, advierte de planes cancelados o de una amistad que se enfría por falta de comunicación.",
    work: "Al derecho, favorece lanzamientos, viajes de trabajo y decisiones rápidas. Invertida, habla de demoras, desorden o de proyectos que se dispersan."
  },
  "bastos-9": {
    up: "El Nueve de Bastos es la resistencia: estás cerca del final y proteges lo logrado con cautela. Habla de coraje cansado, de cicatrices y de no bajar la guardia. También puede indicar que ya has superado lo peor.",
    rev: "Invertido, la resistencia se quiebra: agotamiento, paranoia o ganas de rendirte. Puede indicar que te aferras a una batalla que ya terminó o que no te permites descansar.",
    love: "Al derecho, hay lealtad y ganas de cuidar la relación, aunque estés cansado. Invertida, puede aparecer desconfianza, distancia o miedo a salir herido.",
    friends: "Al derecho, eres el amigo que se queda en las malas. Invertida, advierte de aislamiento o de una amistad que se sostiene por inercia.",
    work: "Al derecho, perseveras y defiendes tu trabajo en la recta final. Invertida, señala agotamiento, desmotivación o un esfuerzo que ya no compensa."
  },
  "bastos-10": {
    up: "El Diez de Bastos es la carga: has asumido demasiadas responsabilidades y avanzas aunque cueste. Habla de esfuerzo, deber y de la recta final de un proyecto. También recuerda que pedir ayuda no es fracasar.",
    rev: "Invertido, la carga se vuelve insostenible: agotamiento, delegación forzada o ganas de soltarlo todo. Puede indicar que estás cargando con lo que no te corresponde.",
    love: "Al derecho, la relación pesa por responsabilidades, rutina o sacrificios. Invertida, puede haber agotamiento, desequilibrio o la necesidad de repartir la carga.",
    friends: "Al derecho, eres quien sostiene al grupo, a veces en exceso. Invertida, advierte de resentimiento o de una amistad que solo te pide.",
    work: "Al derecho, hay mucho trabajo, presión y responsabilidades acumuladas. Invertida, señala agotamiento, delegación o la urgencia de poner límites."
  },
  "bastos-11": {
    up: "El Paje de Bastos es la curiosidad que despierta: una idea nueva, un deseo de explorar y ganas de probar. Habla de entusiasmo, aprendizaje y de una chispa que pide ser atendida. Es una invitación a jugar con lo que te ilusiona.",
    rev: "Invertido, la chispa se vuelve dispersión: entusiasmo que dura poco, impaciencia o falta de foco. Puede indicar que empiezas muchas cosas y no terminas ninguna.",
    love: "Al derecho, hay coqueteo, curiosidad y ganas de conocer a alguien. Invertida, puede ser un interés pasajero o una persona que no se compromete.",
    friends: "Al derecho, una amistad nueva o un plan que te devuelve energía. Invertida, advierte de inmadurez, chismes o de un entusiasmo que se apaga.",
    work: "Al derecho, favorece aprender, proponer y empezar proyectos con ilusión. Invertida, pide constancia y foco antes de lanzarte."
  },
  "bastos-12": {
    up: "El Caballo de Bastos es la pasión en movimiento: actuar con impulso, aventura y convicción. Habla de viajes, cambios rápidos y de dejarte llevar por lo que te enciende. Su sombra es la impaciencia.",
    rev: "Invertido, la pasión se desborda: impulsividad, prisas, cambios sin rumbo o agresividad. Puede indicar que actúas antes de pensar o que el entusiasmo se convierte en exigencia.",
    love: "Al derecho, hay deseo, aventura y una relación que se mueve rápido. Invertida, puede haber inconstancia, celos o decisiones impulsivas.",
    friends: "Al derecho, eres el amigo que propone aventuras y anima al grupo. Invertida, advierte de promesas incumplidas o de un carácter explosivo.",
    work: "Al derecho, favorece la acción, los viajes y los proyectos que requieren decisión. Invertida, señala falta de planificación, dispersión o conflictos por impaciencia."
  },
  "bastos-13": {
    up: "La Reina de Bastos es carisma, confianza y calidez: lidera desde la seguridad en sí misma y contagia entusiasmo. Habla de creatividad, independencia y de brillar sin pedir permiso. También puede indicar una persona magnética.",
    rev: "Invertida, el carisma se vuelve inseguridad o control: celos, necesidad de aprobación, carácter dominante o miedo a no ser suficiente. Puede indicar que estás apagando tu luz para encajar.",
    love: "Al derecho, hay atracción, pasión y una relación que se vive con confianza. Invertida, puede aparecer celos, posesividad o una autoestima que depende del otro.",
    friends: "Al derecho, eres la amiga que anima, celebra y sostiene. Invertida, advierte de protagonismo, envidia o de una amistad que compite.",
    work: "Al derecho, favorece el liderazgo creativo, la visibilidad y los proyectos propios. Invertida, habla de inseguridad, conflictos de ego o de un liderazgo que no escucha."
  },
  "bastos-14": {
    up: "El Rey de Bastos es la visión que se convierte en dirección: liderazgo, criterio y capacidad de inspirar a otros. Habla de asumir el mando, tomar decisiones y sostener un proyecto con carácter. También puede indicar un mentor o una figura de autoridad creativa.",
    rev: "Invertido, la autoridad se vuelve imposición: arrogancia, terquedad, impulsividad o abuso de poder. Puede indicar un líder que no escucha o tu propia dificultad para delegar.",
    love: "Al derecho, hay compromiso, iniciativa y una relación con proyectos claros. Invertida, puede aparecer dominación, egoísmo o una pareja que decide por los dos.",
    friends: "Al derecho, eres el amigo que orienta y protege. Invertida, advierte de actitudes mandonas o de una amistad que gira alrededor de un solo ego.",
    work: "Al derecho, favorece el liderazgo, la estrategia y los negocios con visión. Invertida, señala mal liderazgo, conflictos de poder o decisiones precipitadas."
  },
  "copas-1": {
    up: "El As de Copas es el corazón que se abre: una emoción nueva, amor, ternura o una inspiración que nace. Habla de receptividad, plenitud emocional y de permitirte sentir sin controlarlo todo. Es el inicio de un ciclo afectivo.",
    rev: "Invertido, la emoción se bloquea: dificultad para abrirte, vacío, autoexigencia o un amor que no encuentra cauce. Puede indicar que das mucho hacia fuera y poco hacia ti.",
    love: "Al derecho, hay amor naciente, ternura y ganas de entregarte. Invertida, puede aparecer miedo a querer, dependencia o una emoción contenida.",
    friends: "Al derecho, una amistad se vuelve más profunda y sincera. Invertida, advierte de distancia emocional o de una amistad que no se siente correspondida.",
    work: "Al derecho, favorece la creatividad, el cuidado y los proyectos que nacen del corazón. Invertida, habla de desmotivación o de un ambiente frío."
  },
  "copas-2": {
    up: "El Dos de Copas es el encuentro de iguales: un vínculo recíproco donde ambos se reconocen y se eligen. Habla de amor, amistad, pacto y de la alegría de sentirse visto. Es una carta de unión consciente.",
    rev: "Invertido, el vínculo se desequilibra: malentendidos, ruptura, celos o una relación donde uno da más que el otro. Puede indicar que falta reciprocidad o que el pacto se rompió.",
    love: "Al derecho, hay reciprocidad, atracción y ganas de construir juntos. Invertida, puede haber desencuentro, dependencia o una relación que ya no está en sintonía.",
    friends: "Al derecho, hay una amistad de alma, lealtad y apoyo mutuo. Invertida, advierte de celos, competencia o de una amistad que se rompe por falta de honestidad.",
    work: "Al derecho, favorece sociedades, alianzas y acuerdos equilibrados. Invertida, habla de socios incompatibles o de un contrato que no beneficia a ambos."
  },
  "copas-3": {
    up: "El Tres de Copas es la alegría compartida: amistad, celebración y comunidad. Habla de disfrutar lo bueno en compañía y de sentir que perteneces. También puede indicar un reencuentro o una fiesta.",
    rev: "Invertido, la celebración se agria: chismes, exclusión, excesos o una amistad que se rompe. Puede indicar que la alegría se usa para tapar tensiones.",
    love: "Al derecho, hay complicidad, risas y ganas de compartir la relación con otros. Invertida, puede aparecer celos, terceros o una relación que se descuida por la vida social.",
    friends: "Al derecho, el grupo te sostiene y celebra contigo. Invertida, advierte de rumores, envidia o de una amistad que se queda en la superficie.",
    work: "Al derecho, favorece el trabajo en equipo, la colaboración y los logros compartidos. Invertida, señala conflictos de grupo, chismes o falta de reconocimiento."
  },
  "copas-4": {
    up: "El Cuatro de Copas es el desencanto: estás tan mirando lo que falta que no ves la oportunidad que se te ofrece. Habla de apatía, aburrimiento y de una pausa emocional que pide atención. La carta invita a levantar la mirada.",
    rev: "Invertido, el desencanto empieza a moverse: recuperas interés, aceptas una propuesta o sales de la apatía. También puede indicar que la oportunidad ya pasó por no verla a tiempo.",
    love: "Al derecho, hay desinterés, rutina o una relación que se siente estancada. Invertida, puede llegar un nuevo interés o la decisión de reactivar el vínculo.",
    friends: "Al derecho, te aíslas o no valoras los planes que te proponen. Invertida, vuelves a conectar y a aceptar invitaciones.",
    work: "Al derecho, hay desmotivación o una oportunidad que ignoras. Invertida, señala un cambio de actitud o una propuesta que por fin aceptas."
  },
  "copas-5": {
    up: "El Cinco de Copas es el duelo: la mirada atrapada en lo perdido, el arrepentimiento y la tristeza. Habla de una pérdida real, pero también de las dos copas que siguen en pie. La carta pide llorar lo que se fue sin olvidar lo que queda.",
    rev: "Invertido, el duelo empieza a cerrarse: aceptación, perdón, alivio o la decisión de mirar hacia delante. También puede indicar que te quedas demasiado tiempo en la culpa.",
    love: "Al derecho, hay pena, ruptura o nostalgia por lo que pudo ser. Invertida, llega la aceptación o la posibilidad de reconstruir.",
    friends: "Al derecho, una amistad se rompe o te sientes defraudado. Invertida, favorece el perdón y la reconciliación.",
    work: "Al derecho, hay pérdida de oportunidades, fracaso o arrepentimiento. Invertida, señala recuperación, aprendizaje y nuevas opciones."
  },
  "copas-6": {
    up: "El Seis de Copas es la nostalgia: recuerdos, infancia y el pasado que vuelve con dulzura. Habla de raíces, inocencia y de personas que regresan. La carta pide usar el pasado como raíz, no como refugio.",
    rev: "Invertido, el pasado se vuelve refugio o lastre: idealización, dependencia de lo que fue o dificultad para crecer. Puede indicar que necesitas soltar una nostalgia que no te deja avanzar.",
    love: "Al derecho, puede volver un amor del pasado o hay ternura de conocidos. Invertida, advierte de idealización, comparaciones o de una relación que vive de recuerdos.",
    friends: "Al derecho, reencuentros, amistades de infancia y complicidad. Invertida, puede haber amistades que se quedaron en el pasado o dependencia emocional.",
    work: "Al derecho, favorece aprender de la experiencia y retomar proyectos antiguos. Invertida, señala estancamiento o miedo a salir de la zona conocida."
  },
  "copas-7": {
    up: "El Siete de Copas es el mundo de las fantasías: opciones, sueños y deseos que compiten por tu atención. Habla de imaginación, pero también de la necesidad de discernir qué es real. La carta pide bajar los pies a la tierra.",
    rev: "Invertido, la niebla se disipa: claridad, decisión y elección realista. También puede indicar que te engañas con una fantasía o que el exceso de opciones te paraliza.",
    love: "Al derecho, hay ilusión, idealización o varias personas en el horizonte. Invertida, puede llegar la claridad sobre quién te conviene o el fin de un espejismo.",
    friends: "Al derecho, el grupo sueña y hace planes que quizá no se cumplen. Invertida, advierte de falsas promesas o de amistades que no son lo que parecen.",
    work: "Al derecho, hay muchas ideas y pocas concretas; pide foco. Invertida, favorece elegir una opción y ponerte a ello."
  },
  "copas-8": {
    up: "El Ocho de Copas es la retirada: dejar atrás lo que ya no llena para buscar algo con más sentido. Habla de una decisión valiente, aunque triste, y de la necesidad de escuchar tu verdad. No es huida: es búsqueda.",
    rev: "Invertido, la retirada se vuelve duda: miedo a dejar, regreso a lo que ya no sirve o una huida sin rumbo. Puede indicar que te quedas por costumbre o que no te atreves a irte.",
    love: "Al derecho, decides alejarte de una relación que no te llena. Invertida, puede haber indecisión, retorno o miedo a la soledad.",
    friends: "Al derecho, te alejas de un grupo que ya no te representa. Invertida, advierte de volver a un lugar que te hace daño.",
    work: "Al derecho, favorece cambiar de trabajo o dejar un proyecto sin sentido. Invertida, señala estancamiento o miedo a buscar algo mejor."
  },
  "copas-9": {
    up: "El Nueve de Copas es el deseo cumplido: satisfacción, bienestar y la alegría de conseguir lo que querías. Habla de disfrutar sin culpa y de reconocer tus logros. También puede indicar un momento de comodidad.",
    rev: "Invertido, la satisfacción se vuelve superficial: exceso, insatisfacción o un deseo que no llena. Puede indicar que persigues placeres inmediatos y descuidas lo que de verdad importa.",
    love: "Al derecho, hay disfrute, complicidad y deseos compartidos. Invertida, puede aparecer egoísmo, exceso o una relación que se queda en lo superficial.",
    friends: "Al derecho, celebramos y disfrutamos de la compañía. Invertida, advierte de excesos, vanidad o de amistades que solo están para lo bueno.",
    work: "Al derecho, trae satisfacción, logros y recompensas. Invertida, habla de complacencia, exceso de confianza o de un éxito que no colma."
  },
  "copas-10": {
    up: "El Diez de Copas es la plenitud afectiva: familia, hogar y armonía emocional. Habla de sentirte en casa, de vínculos que sostienen y de un ciclo afectivo que se completa. Es una carta de alegría compartida.",
    rev: "Invertido, la armonía familiar se rompe: conflictos, distancia o un ideal de familia que no se corresponde con la realidad. Puede indicar que buscas una perfección que nadie puede dar.",
    love: "Al derecho, hay compromiso, hogar y un proyecto de vida compartido. Invertida, puede haber tensiones familiares, expectativas o una relación que no encaja en el entorno.",
    friends: "Al derecho, la amistad se siente como familia. Invertida, advierte de conflictos, celos o de un grupo que excluye.",
    work: "Al derecho, favorece equipos estables, ambiente familiar y proyectos con propósito. Invertida, señala conflictos internos o un clima laboral tenso."
  },
  "copas-11": {
    up: "El Paje de Copas es la sensibilidad que despierta: una emoción nueva, un mensaje del corazón o una intuición creativa. Habla de ternura, curiosidad y de permitirte soñar. También puede indicar una noticia afectiva.",
    rev: "Invertido, la sensibilidad se vuelve inmadurez: cambios de humor, fantasía, dependencia o dificultad para expresar lo que sientes. Puede indicar un mensaje que no llega o una emoción que se desborda.",
    love: "Al derecho, hay coqueteo, ternura y ganas de conocer. Invertida, puede ser un amor idealizado, un mensaje confuso o una persona que no madura.",
    friends: "Al derecho, una amistad nueva o un gesto de cariño. Invertida, advierte de susceptibilidad, rumores o de una amistad que se queda en lo superficial.",
    work: "Al derecho, favorece la creatividad, la intuición y los proyectos artísticos. Invertida, habla de falta de foco, sensibilidad a la crítica o de una idea que no se concreta."
  },
  "copas-12": {
    up: "El Caballo de Copas es el romance que avanza: una propuesta, un gesto romántico o un ideal que se pone en marcha. Habla de seducción, imaginación y de seguir al corazón con cierta calma. También puede indicar una persona encantadora.",
    rev: "Invertido, el romance se vuelve espejismo: promesas vacías, idealización, celos o manipulación emocional. Puede indicar que te dejas llevar por la fantasía y no ves los hechos.",
    love: "Al derecho, hay romanticismo, invitaciones y ganas de conquistar. Invertida, puede aparecer un amor que no es lo que parece o una persona que huye del compromiso.",
    friends: "Al derecho, eres un amigo detallista y afectuoso. Invertida, advierte de drama, dependencia o de alguien que juega con los sentimientos.",
    work: "Al derecho, favorece la creatividad, la diplomacia y los proyectos con alma. Invertida, señala falta de realismo, promesas incumplidas o un ambiente emocionalmente inestable."
  },
  "copas-13": {
    up: "La Reina de Copas es la empatía que cuida: intuición, ternura y capacidad de escuchar lo que no se dice. Habla de un amor maduro, de sostener sin invadir y de confiar en tu sensibilidad. También puede indicar una figura maternal.",
    rev: "Invertida, el cuidado se vuelve dependencia: celos, inseguridad, sacrificio excesivo o dificultad para poner límites. Puede indicar que te pierdes en las emociones de los demás.",
    love: "Al derecho, hay ternura, comprensión y un vínculo emocional profundo. Invertida, puede aparecer codependencia, celos o una entrega que te vacía.",
    friends: "Al derecho, eres el refugio emocional del grupo. Invertida, advierte de dramas, chismes o de una amistad que absorbe toda tu energía.",
    work: "Al derecho, favorece el cuidado, la enseñanza y los trabajos con personas. Invertida, habla de agotamiento emocional o de límites poco claros."
  },
  "copas-14": {
    up: "El Rey de Copas es la madurez emocional: sentir mucho y aun así sostener el timón. Habla de serenidad, contención y de un liderazgo que cuida. También puede indicar un consejero o una figura paternal.",
    rev: "Invertido, la contención se vuelve frialdad o manipulación: emociones reprimidas, control, victimismo o dependencia. Puede indicar que usas la calma como máscara.",
    love: "Al derecho, hay estabilidad, cuidado y una relación emocionalmente segura. Invertida, puede aparecer frialdad, manipulación o una pareja que no muestra lo que siente.",
    friends: "Al derecho, eres el amigo sereno al que se acude en crisis. Invertida, advierte de distancia emocional o de una amistad que controla.",
    work: "Al derecho, favorece el liderazgo sereno, la diplomacia y la gestión de equipos. Invertida, señala un ambiente emocionalmente manipulador o un liderazgo frío."
  },
  "espadas-1": {
    up: "El As de Espadas es la claridad que corta: una idea, una verdad o una decisión que no admite rodeos. Habla de lucidez, comunicación y de ver las cosas como son. Es una carta de pensamiento afilado.",
    rev: "Invertido, la claridad se vuelve confusión: malentendidos, palabras duras, ideas dispersas o una verdad que se oculta. Puede indicar que usas la razón para herir o para evadir.",
    love: "Al derecho, hay honestidad y conversaciones claras. Invertida, puede haber malentendidos, críticas o una verdad que duele.",
    friends: "Al derecho, una conversación sincera aclara el aire. Invertida, advierte de chismes, juicios o palabras que hieren.",
    work: "Al derecho, favorece la estrategia, la escritura y las decisiones basadas en datos. Invertida, habla de desorden mental, errores de comunicación o de un conflicto de ideas."
  },
  "espadas-2": {
    up: "El Dos de Espadas es la tregua tensa: una decisión que no tomas, una venda en los ojos y dos opciones que parecen iguales. Habla de duda, bloqueo y de la necesidad de mirar la verdad. No decidir también es decidir.",
    rev: "Invertido, la venda se cae: llega la decisión, la claridad o el fin de la parálisis. También puede indicar que evitas una elección por miedo o que la información que falta aparece.",
    love: "Al derecho, hay indecisión, silencios o una relación en punto muerto. Invertida, puede llegar una decisión o una conversación que rompe el bloqueo.",
    friends: "Al derecho, evitas posicionarte en un conflicto. Invertida, te obligas a elegir y a poner límites.",
    work: "Al derecho, hay una decisión laboral pendiente o un contrato en pausa. Invertida, favorece resolver la duda y actuar."
  },
  "espadas-3": {
    up: "El Tres de Espadas es la herida de la verdad: dolor, traición o una noticia que rompe. Habla de una pena que necesita ser nombrada para sanar. No es una carta de castigo eterno, sino de limpieza.",
    rev: "Invertido, la herida empieza a cerrar: perdón, alivio, recuperación o la decisión de soltar. También puede indicar que el dolor se reprime o que una traición sigue sin resolverse.",
    love: "Al derecho, hay desengaño, ruptura o celos. Invertida, llega la sanación o la posibilidad de perdonar.",
    friends: "Al derecho, una amistad se rompe por una traición. Invertida, favorece la reconciliación o el cierre.",
    work: "Al derecho, hay críticas, conflictos o una verdad incómoda. Invertida, señala recuperación y aprendizaje."
  },
  "espadas-4": {
    up: "El Cuatro de Espadas es el retiro necesario: una pausa, descanso y recuperación después de una crisis. Habla de bajar las armas, dormir y dejar que el cuerpo se repare. No es rendirse: es reponer fuerzas.",
    rev: "Invertido, el descanso se vuelve inquietud: insomnio, agotamiento o la sensación de que no puedes parar. Puede indicar que necesitas un retiro más profundo o que ya es hora de volver a la acción.",
    love: "Al derecho, la relación necesita calma y espacio para sanar. Invertida, puede haber tensión, insomnio o una pareja que no se permite descansar.",
    friends: "Al derecho, te retiras un tiempo para cuidarte. Invertida, advierte de aislamiento o de un grupo que no respeta tu pausa.",
    work: "Al derecho, favorece vacaciones, baja o pausa antes de decidir. Invertida, señala agotamiento o un ritmo insostenible."
  },
  "espadas-5": {
    up: "El Cinco de Espadas es la victoria vacía: ganar a cualquier precio, el conflicto y la sensación de quedarse solo. Habla de una lucha donde todos pierden algo. La carta invita a preguntarte si merece la pena.",
    rev: "Invertido, llega la tregua o el arrepentimiento: ganas de reparar, de dejar la pelea o de reconocer tu parte. También puede indicar que sigues atrapado en un conflicto que no te conviene.",
    love: "Al derecho, hay discusiones, orgullo o una lucha de poder. Invertida, puede aparecer la reconciliación o la decisión de alejarte.",
    friends: "Al derecho, una amistad se convierte en competencia. Invertida, advierte de reconciliación o de un conflicto que se cierra.",
    work: "Al derecho, hay rivalidad, juegos sucios o un éxito que cuesta caro. Invertida, favorece negociar y dejar de competir."
  },
  "espadas-6": {
    up: "El Seis de Espadas es la travesía: dejar atrás lo que duele y avanzar hacia aguas más calmadas. Habla de transición, mudanza y de un alivio que llega despacio. No es una huida, es un traslado necesario.",
    rev: "Invertido, la travesía se atasca: equipaje emocional, resistencia al cambio o un problema que te sigue. Puede indicar que te vas sin cerrar lo que quedó pendiente.",
    love: "Al derecho, la relación entra en una etapa más tranquila o se aleja de una crisis. Invertida, puede haber asuntos sin resolver o miedo a empezar de nuevo.",
    friends: "Al derecho, te alejas de un ambiente tóxico y buscas paz. Invertida, advierte de que el pasado te sigue o de una amistad que no se cierra.",
    work: "Al derecho, favorece mudanzas, cambios de equipo o salir de un ambiente difícil. Invertida, señala resistencia al cambio o problemas que se llevan al nuevo trabajo."
  },
  "espadas-7": {
    up: "El Siete de Espadas es la astucia: estrategia, sigilo y la tentación de conseguir algo por un atajo. Habla de ingenio, pero también de la línea fina entre la inteligencia y la trampa. La carta pide honestidad contigo.",
    rev: "Invertido, la máscara se cae: confesión, exposición o la conciencia de un engaño. También puede indicar que te engañas a ti mismo o que alguien te está ocultando algo.",
    love: "Al derecho, hay secretos, celos o una persona que no muestra todas sus cartas. Invertida, puede llegar la verdad o el fin de una mentira.",
    friends: "Al derecho, advierte de chismes, traiciones o de un amigo que actúa por interés. Invertida, favorece la honestidad y la reparación.",
    work: "Al derecho, hay estrategia, competencia o información que se oculta. Invertida, señala la verdad que sale a la luz o un engaño que se descubre."
  },
  "espadas-8": {
    up: "El Ocho de Espadas es la jaula mental: te sientes atrapado, pero las espadas no te encierran. Habla de parálisis, miedo y de una limitación que en gran parte es interna. La carta pide mirar los barrotes con otros ojos.",
    rev: "Invertido, la jaula se abre: liberación, claridad y recuperación del poder personal. También puede indicar que sigues atrapado en una historia de víctima.",
    love: "Al derecho, hay sensación de encierro, celos o miedo a hablar. Invertida, llega la liberación o la decisión de poner límites.",
    friends: "Al derecho, te aíslas o sientes que no puedes ser tú. Invertida, vuelves a conectar y a pedir ayuda.",
    work: "Al derecho, hay bloqueo, miedo a equivocarte o un ambiente que limita. Invertida, favorece salir de la parálisis y tomar decisiones."
  },
  "espadas-9": {
    up: "El Nueve de Espadas es la angustia: el miedo vive más en la cabeza que en los hechos. Habla de insomnio, culpa y pensamientos que se repiten. La carta pide sacar los miedos de la oscuridad.",
    rev: "Invertido, la angustia empieza a ceder: apoyo, alivio o la posibilidad de mirar los miedos de frente. También puede indicar que el miedo se está volviendo crónico.",
    love: "Al derecho, hay preocupación, celos o miedo a perder. Invertida, puede llegar la calma o la necesidad de hablar de lo que angustia.",
    friends: "Al derecho, te sientes solo con tus pensamientos. Invertida, favorece pedir apoyo y dejar de cargar solo.",
    work: "Al derecho, hay estrés, presión o miedo a fallar. Invertida, señala alivio o la necesidad de poner límites."
  },
  "espadas-10": {
    up: "El Diez de Espadas es tocar fondo: un final doloroso, una traición o la sensación de que ya no queda nada. Habla de un cierre definitivo que, al no dejar nada, también libera. La carta anuncia que lo peor ya pasó.",
    rev: "Invertido, comienza la recuperación: sobrevivir, levantarse y ver el amanecer. También puede indicar que te resistes a cerrar una etapa o que el dolor se alarga.",
    love: "Al derecho, hay ruptura, traición o un final que duele. Invertida, llega la recuperación o la decisión de cerrar de verdad.",
    friends: "Al derecho, una amistad se rompe o te sientes traicionado. Invertida, favorece la reconstrucción y el perdón.",
    work: "Al derecho, hay despido, fracaso o un proyecto que termina. Invertida, señala recuperación y nuevas oportunidades."
  },
  "espadas-11": {
    up: "El Paje de Espadas es la mente despierta: curiosidad, observación y ganas de preguntar. Habla de aprender, investigar y decir lo que piensas. También puede indicar un mensaje o una noticia.",
    rev: "Invertido, la mente se dispersa: chismes, prisa, palabras impulsivas o falta de escucha. Puede indicar que hablas sin pensar o que alguien usa la información para dañar.",
    love: "Al derecho, hay conversaciones interesantes y curiosidad por conocer. Invertida, puede haber malentendidos, celos o una persona que juega con la información.",
    friends: "Al derecho, eres el amigo curioso que pregunta y descubre. Invertida, advierte de rumores o de una amistad que se mete donde no debe.",
    work: "Al derecho, favorece la investigación, el análisis y los proyectos que requieren aprender. Invertida, señala errores de comunicación o falta de foco."
  },
  "espadas-12": {
    up: "El Caballo de Espadas es la convicción que se lanza: decisión, velocidad y ganas de defender una idea. Habla de coraje mental y de actuar con determinación. Su sombra es la prisa que atropella.",
    rev: "Invertido, la convicción se vuelve agresividad: palabras duras, impulsividad, terquedad o conflictos innecesarios. Puede indicar que estás luchando por tener razón más que por resolver.",
    love: "Al derecho, hay pasión, conversaciones intensas y ganas de avanzar. Invertida, puede aparecer conflicto, crítica o una pareja que se impone.",
    friends: "Al derecho, defiendes a los tuyos con valentía. Invertida, advierte de discusiones, orgullo o de una amistad que se vuelve competitiva.",
    work: "Al derecho, favorece la acción, la estrategia y las decisiones rápidas. Invertida, señala conflictos, errores por prisa o un liderazgo agresivo."
  },
  "espadas-13": {
    up: "La Reina de Espadas es la lucidez: honestidad, límites claros y una mente que no se deja engañar. Habla de decir la verdad sin crueldad y de proteger tu espacio. También puede indicar una mujer independiente.",
    rev: "Invertida, la lucidez se vuelve frialdad: crítica, amargura, aislamiento o palabras que hieren. Puede indicar que usas la razón como escudo o que te exiges demasiado.",
    love: "Al derecho, hay honestidad, independencia y límites sanos. Invertida, puede aparecer frialdad, celos o una pareja que juzga.",
    friends: "Al derecho, eres la amiga que dice la verdad con respeto. Invertida, advierte de sarcasmo, distancia o de una amistad que se vuelve crítica.",
    work: "Al derecho, favorece la comunicación clara, la ética y la toma de decisiones. Invertida, señala un ambiente frío o palabras que dañan."
  },
  "espadas-14": {
    up: "El Rey de Espadas es la autoridad mental: lógica, justicia y capacidad de decidir con la cabeza fría. Habla de liderazgo, ley y verdad. También puede indicar un mentor o una figura de autoridad intelectual.",
    rev: "Invertido, la autoridad se vuelve abuso: manipulación, frialdad, juicios injustos o uso del poder para controlar. Puede indicar un jefe déspota o tu propia dificultad para escuchar.",
    love: "Al derecho, hay estabilidad, conversaciones maduras y reglas claras. Invertida, puede aparecer frialdad, control o una pareja que racionaliza todo.",
    friends: "Al derecho, eres el amigo que aconseja con objetividad. Invertida, advierte de juicios, distancia o de una amistad que se vuelve autoritaria.",
    work: "Al derecho, favorece el liderazgo, la ley y las decisiones estratégicas. Invertida, señala abuso de poder, burocracia o un ambiente sin empatía."
  },
  "oros-1": {
    up: "El As de Oros es la semilla material: una oportunidad concreta, un proyecto o un recurso que puede crecer. Habla de prosperidad, trabajo y de algo que pide ser sembrado con paciencia. Es una carta de potencial tangible.",
    rev: "Invertido, la oportunidad se pierde o se desperdicia: falta de planificación, miedo a invertir o una semilla que no encuentra tierra. Puede indicar una oportunidad que aún no está madura.",
    love: "Al derecho, hay estabilidad, gestos concretos y ganas de construir. Invertida, puede aparecer inseguridad material o una relación que se queda en lo práctico.",
    friends: "Al derecho, una amistad que se demuestra con hechos. Invertida, advierte de intereses o de una amistad que no se cultiva.",
    work: "Al derecho, es una gran carta para empezar un negocio, un trabajo o una inversión. Invertida, pide planificar y no dejar pasar la oportunidad."
  },
  "oros-2": {
    up: "El Dos de Oros es el malabarismo: sostener dos frentes a la vez sin perder el ritmo. Habla de adaptación, flexibilidad y de equilibrar tiempo, dinero o energía. La carta pide organización.",
    rev: "Invertido, el equilibrio se rompe: desorden, sobrecarga, deudas o falta de tiempo. Puede indicar que intentas abarcar demasiado y no priorizas.",
    love: "Al derecho, hay que equilibrar la relación con otras áreas de la vida. Invertida, puede aparecer desatención, celos o falta de tiempo.",
    friends: "Al derecho, haces malabares para ver a todos. Invertida, advierte de amistades que se sienten abandonadas o de falta de presencia.",
    work: "Al derecho, favorece la multitarea, la adaptación y los ingresos variados. Invertida, señala desorganización, estrés o problemas financieros."
  },
  "oros-3": {
    up: "El Tres de Oros es el oficio reconocido: trabajo bien hecho, colaboración y maestría. Habla de aprender de otros, de construir en equipo y de recibir reconocimiento por tu labor. También puede indicar una formación.",
    rev: "Invertido, el trabajo se descoordina: falta de colaboración, críticas, mediocridad o reconocimiento que no llega. Puede indicar que no estás valorando tu propio oficio.",
    love: "Al derecho, la relación se construye con esfuerzo y proyectos compartidos. Invertida, puede haber falta de sintonía o desigualdad en el esfuerzo.",
    friends: "Al derecho, el grupo colabora y se apoya. Invertida, advierte de competitividad o de una amistad que no aporta.",
    work: "Al derecho, favorece el trabajo en equipo, la formación y los proyectos artesanales. Invertida, señala conflictos, falta de reconocimiento o trabajo mal hecho."
  },
  "oros-4": {
    up: "El Cuatro de Oros es la seguridad que se aferra: control, ahorro y miedo a perder. Habla de estabilidad material, pero también de la rigidez que cierra la puerta a lo nuevo. La carta invita a soltar un poco.",
    rev: "Invertido, el control se afloja: generosidad, apertura o, al contrario, pérdida de seguridad y miedo a la escasez. Puede indicar que necesitas revisar tu relación con el dinero.",
    love: "Al derecho, hay posesividad, celos o miedo a entregarte. Invertida, puede llegar la apertura o la conciencia de una dependencia.",
    friends: "Al derecho, proteges tu círculo y eres leal, pero puedes cerrarte. Invertida, advierte de egoísmo o de miedo a compartir.",
    work: "Al derecho, favorece el ahorro, la estabilidad y la protección de recursos. Invertida, señala rigidez, miedo a invertir o pérdidas."
  },
  "oros-5": {
    up: "El Cinco de Oros es la escasez: sentirte fuera, con frío o sin recursos, aunque la ayuda esté cerca. Habla de dificultades materiales y de la vergüenza que a veces impide pedir. La carta pide mirar alrededor.",
    rev: "Invertido, la escasez empieza a remitir: ayuda, recuperación o salida de una situación difícil. También puede indicar que te aíslas en la queja y no ves los apoyos.",
    love: "Al derecho, hay sensación de abandono, inseguridad o carencia afectiva. Invertida, puede llegar apoyo o la decisión de pedir ayuda.",
    friends: "Al derecho, te sientes excluido o incapaz de pedir. Invertida, favorece reconectar y aceptar compañía.",
    work: "Al derecho, hay dificultades económicas, desempleo o exclusión. Invertida, señala recuperación, ayuda o nuevas oportunidades."
  },
  "oros-6": {
    up: "El Seis de Oros es el intercambio justo: dar y recibir con medida, generosidad y equilibrio. Habla de ayuda, apoyo y de relaciones donde el poder no se aprovecha. También puede indicar una donación o un préstamo.",
    rev: "Invertido, el intercambio se desequilibra: deudas, ayudas con condiciones o desigualdad. Puede indicar que das demasiado o que recibes de alguien que te hace sentir en deuda.",
    love: "Al derecho, hay reciprocidad, cuidado y gestos generosos. Invertida, puede aparecer desequilibrio, interés o una relación donde uno siempre da.",
    friends: "Al derecho, la amistad se sostiene en el apoyo mutuo. Invertida, advierte de favores con factura o de una amistad interesada.",
    work: "Al derecho, favorece la generosidad, los acuerdos justos y el apoyo económico. Invertida, señala deudas, explotación o condiciones abusivas."
  },
  "oros-7": {
    up: "El Siete de Oros es la espera de la cosecha: revisar lo sembrado y confiar en su tiempo. Habla de paciencia, evaluación y de un esfuerzo que aún no da frutos. La carta pide no arrancar la planta para ver si crece.",
    rev: "Invertido, la espera se vuelve impaciencia: frustración, inversión sin retorno o sensación de perder el tiempo. Puede indicar que necesitas cambiar de estrategia.",
    love: "Al derecho, la relación pide tiempo y cuidado; los frutos llegan. Invertida, puede haber impaciencia, dudas o sensación de estancamiento.",
    friends: "Al derecho, inviertes tiempo en amistades que merecen la pena. Invertida, advierte de esfuerzo no correspondido.",
    work: "Al derecho, favorece la planificación, la evaluación y las inversiones a largo plazo. Invertida, señala impaciencia, malas inversiones o esfuerzo desperdiciado."
  },
  "oros-8": {
    up: "El Ocho de Oros es la dedicación: aprender, practicar y perfeccionar un oficio con constancia. Habla de maestría, atención al detalle y de un trabajo que se construye paso a paso. La carta valora el proceso.",
    rev: "Invertido, la dedicación se vuelve perfeccionismo o rutina vacía: falta de foco, trabajo repetitivo o miedo a equivocarte. Puede indicar que necesitas recuperar el sentido de lo que haces.",
    love: "Al derecho, la relación se cuida con pequeños gestos y constancia. Invertida, puede aparecer rutina, desatención o perfeccionismo.",
    friends: "Al derecho, cultivas las amistades con tiempo y presencia. Invertida, advierte de relaciones que se vuelven obligación.",
    work: "Al derecho, favorece el aprendizaje, la formación y el trabajo artesanal. Invertida, señala estancamiento, errores por cansancio o falta de motivación."
  },
  "oros-9": {
    up: "El Nueve de Oros es la independencia lograda: disfrutar con calma lo que tu esfuerzo ha construido. Habla de autosuficiencia, bienestar y de un lujo merecido. También puede indicar una persona que se basta a sí misma.",
    rev: "Invertido, la independencia se vuelve aislamiento o dependencia: miedo a disfrutar, trabajo excesivo o una seguridad que se apoya en lo material. Puede indicar que confundes tener con ser.",
    love: "Al derecho, hay estabilidad, independencia y disfrute compartido. Invertida, puede aparecer soledad, dependencia económica o miedo a comprometerse.",
    friends: "Al derecho, disfrutas de tu espacio y de amistades que no te invaden. Invertida, advierte de aislamiento o de relaciones basadas en el interés.",
    work: "Al derecho, trae éxito, independencia económica y disfrute de lo logrado. Invertida, señala sobreesfuerzo, soledad o un éxito vacío."
  },
  "oros-10": {
    up: "El Diez de Oros es el legado: familia, patrimonio y estabilidad que trasciende. Habla de lo construido a largo plazo, de herencias y de un bienestar que se comparte. También puede indicar tradición familiar.",
    rev: "Invertido, el legado se rompe: conflictos familiares, pérdidas materiales o una estructura que no sostiene. Puede indicar que el éxito económico no compensa la falta de vínculo.",
    love: "Al derecho, hay proyecto de familia, estabilidad y compromiso a largo plazo. Invertida, puede haber tensiones familiares, herencias o diferencias de valores.",
    friends: "Al derecho, la amistad se siente como una familia que perdura. Invertida, advierte de conflictos, envidias o de un grupo que se rompe.",
    work: "Al derecho, favorece la estabilidad, la empresa familiar y los proyectos a largo plazo. Invertida, señala pérdidas, conflictos de intereses o falta de continuidad."
  },
  "oros-11": {
    up: "El Paje de Oros es la promesa de algo concreto: estudiar, aprender y empezar un proyecto con constancia. Habla de curiosidad práctica, humildad y de una oportunidad que pide trabajo. También puede indicar una formación.",
    rev: "Invertido, la promesa se queda en el aire: procrastinación, falta de compromiso o metas poco realistas. Puede indicar que te dispersas o que no terminas lo que empiezas.",
    love: "Al derecho, hay interés sincero y ganas de construir algo estable. Invertida, puede ser una promesa que no se cumple o falta de madurez.",
    friends: "Al derecho, una amistad nueva que se cultiva con hechos. Invertida, advierte de falta de constancia o de alguien que solo promete.",
    work: "Al derecho, favorece el estudio, la formación y los proyectos que requieren constancia. Invertida, señala procrastinación, falta de compromiso o metas poco realistas."
  },
  "oros-12": {
    up: "El Caballo de Oros es la constancia que avanza: trabajo metódico, paciencia y compromiso con lo que se hace. Habla de rutina saludable, esfuerzo sostenido y de resultados que llegan con el tiempo. Su sombra es la rigidez.",
    rev: "Invertido, la constancia se vuelve estancamiento: pereza, trabajo repetitivo, terquedad o exceso de rutina. Puede indicar que estás tan pegado al método que no ves otras posibilidades.",
    love: "Al derecho, hay estabilidad, lealtad y un vínculo que se cuida con hechos. Invertida, puede aparecer rutina, monotonía o una relación que se sostiene por obligación.",
    friends: "Al derecho, eres el amigo fiable que cumple lo que promete. Invertida, advierte de distancia, terquedad o de una amistad que se vuelve aburrida.",
    work: "Al derecho, favorece la productividad, la disciplina y los proyectos a largo plazo. Invertida, señala estancamiento, trabajo mecánico o falta de motivación."
  },
  "oros-13": {
    up: "La Reina de Oros es la abundancia que se cuida: practicidad, generosidad y capacidad de crear un hogar o un proyecto estable. Habla de nutrir con hechos, de administrar bien los recursos y de disfrutar lo construido. También puede indicar una figura maternal práctica.",
    rev: "Invertida, el cuidado se vuelve negligencia o control: desorden, inseguridad material, sobreprotección o dificultad para poner límites. Puede indicar que te olvidas de ti por atender a los demás.",
    love: "Al derecho, hay estabilidad, ternura práctica y un proyecto de vida compartido. Invertida, puede aparecer dependencia económica, desatención o una relación que se vuelve rutina.",
    friends: "Al derecho, eres la amiga que cuida, organiza y sostiene. Invertida, advierte de celos, posesividad o de una amistad que se siente obligación.",
    work: "Al derecho, favorece la gestión, la administración y los proyectos que requieren constancia. Invertida, señala desorden, agotamiento o falta de reconocimiento."
  },
  "oros-14": {
    up: "El Rey de Oros es la prosperidad consolidada: seguridad, gestión y capacidad de hacer crecer lo que ya existe. Habla de éxito material, estabilidad y de un liderazgo práctico. También puede indicar un empresario o un mentor.",
    rev: "Invertido, la prosperidad se vuelve codicia o rigidez: avaricia, materialismo, malas inversiones o abuso de poder. Puede indicar que el dinero o el estatus se han convertido en el centro.",
    love: "Al derecho, hay compromiso, seguridad y una relación que se construye con bases sólidas. Invertida, puede aparecer frialdad, control económico o una pareja que prioriza lo material.",
    friends: "Al derecho, eres el amigo que ayuda con recursos y consejo práctico. Invertida, advierte de interés, envidia o de una amistad que se mide por lo que tienes.",
    work: "Al derecho, favorece el liderazgo, la gestión y los negocios rentables. Invertida, señala codicia, malas decisiones financieras o un ambiente laboral rígido."
  }
};
