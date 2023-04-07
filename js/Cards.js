function getCards(){
    return ([
        {
            id: 0,
            name: "EL LOCO",
            description: "Carencia de sentido común. Potencial fuerza de voluntad y destreza. El espíritu en busca de experiencia. Audacia, extravagancia. Negligencia, poca reflexión. Desorientación, inmadurez, desequilibrio. Ligereza. Indiscreción y superficialidad.",
            invert: "Pasiones y obsesiones, indecisión, irracionalidad, apatía, complicaciones. Decisiones equivocadas, caída, abandono, inmovilización. Locura. Desborde psíquico y/o emocional. Viaje obstaculizado."
        },

        {
            id: 1,
            name: "EL MAGO EL ALQUIMISTA, EL PRESTIDIGITADOR",
            description: "Originalidad. Iniciativa, centro de acción, inteligencia espontánea. Posesión de sí mismo, autonomía, emancipación de todo prejuicio. Elocuencia, destreza, habilidad, finura, diplomacia. Abogado, orador, diplomático o político.",
            invert: "Carente de escrúpulos, arribista, intrigrante, embustero, pillo, estafador, charlatán. Indecisión, ineptitud, voluntad débil, retraso, inseguridad. Voluntad aplicada a malos fines."
        },
        {
            id: 2,
            name: "LA SACERDOTISA",
            description: "Paciencia, silencio, discreción, reserva, meditación, modestia, resignación y piedad. Decisión meditada.",
            invert: "Disimulo, intenciones ocultas, rencor, pereza, intolerancia, fanatismo. Se vuelve pesada y pasiva, es como una carga. Retraso, tensión y torpeza en las relaciones. Decisión inmeditada."
        },
        {
            id: 3,
            name: "LA EMPERATRIZ",
            description: "Comprensión, inteligencia, instrucción. Encanto, afabilidad, elegancia, distinción. Cortesía, abundancia, riqueza. Matrimonio, fecundidad, dulzura.",
            invert: "Afectación, pose, frivolidad, coquetería, vanidad. Desdén, presunción. Lujo innecesario. Sensible a los halagos. Falta de refinamiento. Discusiones en todos los planos. Esterilidad."

        },
        {
            id: 4,
            name: "EL EMPERADOR",
            description: "Poder, voluntad, energía, certeza, constancia, firmeza, rigor, exactitud, equidad y positivismo. Realización. Protector poderoso.",
            invert: "Testarudez, falta de idealismo. Adversario obstinado. Caída, pérdida de los bienes."
        },
        {
            id: 5,
            name: "EL SUMO SACERDOTE, EL PAPA",
            description: "Sabiduría, perseverancia, enseñanzas, consejos equitativos, generosidad e indulgencia, mansedumbre. Ayuda de los superiores, organización. La carga que representa al consultante (usted), en la forma de la voz interior. Dogma.",
            invert: "Jefe sentencioso, excesivamente crítico, moralista estrecho de miras, profesor autoritario, teórico limitado, consejero desprovisto de sentido práctico, carencia de apoyo espiritual. Inconvencional, ilógico, supersticioso, incapaz de actuar coherente y racionalmente."
        },
        {
            id: 6,
            name: "LOS ENAMORADOS",
            description: "Elección o decisión. Unión, matrimonio, amor, la unión de los opuestos, atracción, balance, apertura a la inspiración. Pruebas superadas. Armonía de la vida interior y el mundo exterior.",
            invert: "Desorden, fracaso, divorcio, amor desgraciado y contrariedades de todo tipo. Matrimonio frustrado, tentación peligrosa. Peligro de ser seducido. Inconducta, libertinaje y debilidad. Peleas, infidelidad. Inestabilidad emocional."

        },
        {
            id: 7,
            name: "EL CARRO",
            description: "Triunfo, victoria, superación de obstáculos, esperanza, conquista. Buena noticia inesperada. Gran autocontrol, habilidad para determinar el propio destino. Gran fuerza física y mental. Velocidad. Viaje.",
            invert: "Desorden generalizado. Enfermedad. Peligroso descontrol. Peligro de un accidente violento. Malas noticias. Fatiga. Falta de tacto. Mala conducta. Actividad afiebrada y sin reposo."

        },
        {
            id: 8,
            name: "LA JUSTICIA",
            description: "Justicia, armonía, equidad, integridad, regla de conducta, firme propósito, acción de juzgar, moderación en todas las cosas. Independencia de espíritu. Para mantener el balance ciertas cosas deben ser sacrificadas. Puede estar relacionada con asuntos legales, juicios, matrimonios, divorcios, etc.",
            invert: "Fanatismo, injusticia, severidad en el juicio, abuso, acusaciones falsas. Inseguridad. Marañas legales. Inseguridad. Falta de un apropiado balance."
        },
        {
            id: 9,
            name: "EL ERMITAÑO, EL PEREGRINO",
            description: "Prudencia, sabiduría, paciencia, silencio, avance espiritual, inspiración divina, circunspección. Retiro del mundo, soledad. Peregrinaje. Puede ser un maestro. La realización de un balance y progresar.",
            invert: "Inmadurez, vicios, oscuridad, testarudez, traición, engaño. Misantropía, misoginia, celibato. Persona excesivamente tímida e insociable. Enemigos ocultos. Prudencia que sobra o que falta."
        },
        {
            id: 10,
            name: "LA RUEDA DE LA FORTUNA",
            description: "Cambio, evolución, éxito, buena fortuna, destino. Felicidad, abundancia. Nuevas condiciones. Abundancia, crecimiento.",
            invert: "La transformación se efectuará dificultosamente pero se hará de todos modos. Progreso retardado, Retroceso."
        },
        {
            id: 11,
            name: "LA FUERZA",
            description: "Sublimación o regulación de las pasiones y bajos instintos. Poder, energía, gran amor. El espíritu que domina la materia. Acción, coraje, éxito. Poderosa voluntad y gran fuerza física. La fuerza interior que domestica la bestia. Poder sobre los animales.",
            invert: "Discordia, ruina. Debilidad, testarudez, abuso de poder. Impaciencia, temeridad, grosería, insensibilidad. dureza, crueldad, furor."
        },
        {
            id: 12,
            name: "EL COLGADO",
            description: "Fortaleza, sabiduría. Limitaciones auto impuestas. Iniciación, prueba. Redención a través del sacrificio, pérdida. Poder profético. Decisiones suspendidas. Elección que requiere contemplación.",
            invert: "Arrogancia, egotismo, resistencia a las influencias espirituales. Materialismo. Esfuerzo desperdiciado. Falsa profecía. Fracaso. Falta de límites, falta de franqueza, carencia de sacrificio."
        },
        {
            id: 13,
            name: "LA MUERTE",
            description: "Transformación completa. Muerta y renacimiento. El fin de algo. Evolución desde un estado a otro superior. Cambio provechoso.",
            invert: "Estancamiento, muerte, petrificación. Enfermedad incurable. Matrimonio roto. Falta de oportunidades, esperanza deshecha."
        },
        {
            id: 14,
            name: "LA TEMPLANZA",
            description: "Consideración cuidadosa, paciencia, moderación, adaptación, compostura, reflexión. Paciencia uniendo dos opuestos, combinándolos cuidadosamente. Buen matrimonio. Trabajando en armonía con otros, habilidad directiva. Algo se está preparando. Gran talento y creatividad. Luchando por trascendencia a través del trabajo. Alquimia. La unión de los opuestos refinada por el fuego de la voluntad.",
            invert: "Desorden, conflicto, mala combinación, peleas. Posibilidad de naufragio. Desarreglos."
        },
        {
            id: 15,
            name: "EL DIABLO",
            description: "Destino (bueno o malo). Poder de seducción, impulso ciego, tentación, obsesión. Desviación sexual. Un estado mental confuso. Las pasiones carnales descontroladas.",
            invert: "Carta dañina, fatalidad, mal uso de la fuerza. Debilidad, ceguera, desorden. Efectos maléficos. La patética condición humana que prefiere la ilusión a la verdad."
        },
        {
            id: 16,
            name: "LA TORRE",
            description: "Cambios repentinos sin otra alternativa. Colapso, escape de la prisión o liberación de ataduras, accidente. Los planes fracasarán, las intenciones no se realizarán. El dedo de Dios. Bancarrota. Muerte súbita.",
            invert: "Confusión completa. Ganar la libertad a un gran costo. Falsas acusaciones, opresión. Castigo que resulta de los excesos cometidos, enfermedad. Error presuntuoso que no sabe rectificarse a tiempo."
        },
        {
            id: 17,
            name: "LA ESTRELLA",
            description: "Esperanza, ayuda inesperada, perspicacia y claridad de visión, inspiración, flexibilidad. Un gran amor será dado y recibido. Buena salud. Carta totalmente espiritual",
            invert: "Arrogancia, pesimismo, testarudez. enfermedad, error de juicio. Impotencia psíquica, reestructuración, privación y abandono."
        },
        {
            id: 18,
            name: "LA LUNA",
            description: "Intuición, umbral de un importante cambio, camino difícil y oscuro, desarrollo de poderes psíquicos. Navegación, experimentación, trabajo penoso.",
            invert: "Peligros no vistos, enemigos ocultos, alucinación, autoengaño, histeria, desorientación. Inestabilidad, embustes, trampas, falso saber, carácter neurótico. Escándalo, secreto que se hace público, chantajista."
        },
        {
            id: 19,
            name: "EL SOL",
            description: "Gloria. Felicidad material. Matrimonio o relación feliz, colaboración. Exito. Placer, energía, motivación, inspiración.",
            invert: "Molestias, disimulos, arrogancia, vanidad. Compromiso o trabajo perdido. Tanteo en la oscuridad, desorientación. Deseo de figurar."
        },
        {
            id: 20,
            name: "EL JUICIO",
            description: "Cambio radical, resurrección a una vida nueva. Trabajo (o vida) bien hecha. Voluntad para iniciar algo nuevo. Buen juicio y discernimiento. Poder creativo e influencia sobre la familia y la carrera laboral. Capacidad de perdonar. Despertar. Dictámenes judiciales favorable.",
            invert: "Vacilación espiritual, debilidad, juicio o decisión equivocada. Enfermedad, separación. Dictamen judicial adverso. Error sobre sí mismo y sobre los otros. Decisión postergada."
        },
        {
            id: 21,
            name: "EL MUNDO",
            description: "Suceso garantizado. Recompensas recibidas. Viaje, emigración (dentro del mismo continente), cambio de lugar de residencia. Compra o venta de tierras.",
            invert: "Obstáculos, estancamiento, estorbos. Necesidad de trabajar muy duro para alcanzar el éxito."
        },
        {
            id: 22,
            name: "CABALLERO [REY] DE BASTOS",
            description: "Hombre atrevido, rápido y generoso. Apasionado y fuerte. Paternalista y orgulloso. Puede ser un caballero del campo, generalmente casado. Herencia inesperada, un buen matrimonio.",
            invert: "Despótico, intolerante, prejuicioso, mal intencionado."
        },
        {
            id: 23,
            name: "REINA DE BASTOS",
            description: "Mujer amable, energética, pero calma. Conservadora, pragmática y autoritaria. Fructífera en mente y cuerpo.",
            invert: "Dominante, celosa, dogmática e irracional. Rápida para ofenderse."
        },
        {
            id: 24,
            name: "PRÍNCIPE [CABALLERO] DE BASTOS",
            description: "Un hombre joven y energético, veloz y atrevido. Puede ser noble y generoso, pero también violento y apresurado.",
            invert: "Celoso, débil e intolerante. Pelea, discordia, frustración."
        },
        {
            id: 25,
            name: "PRINCESA [SOTA] DE BASTOS",
            description: "Joven y brillante. Entusiasta y atrevido. Un mensajero o portador de noticias.",
            invert: "Joven frívolo, teatral y hueco. Cruel, opresivo."
        },
        {
            id: 26,
            name: "10 DE BASTOS",
            description: "Opresión. Desequilibrio y egocentrismo. Pesada carga. Fuerza desligada de las fuentes espirituales. Un problema se resolverá pronto.",
            invert: "Molestias, traición, separación, emigración, algunas pérdidas. Esterilidad."
        },
        {
            id: 27,
            name: "9 DE BASTOS",
            description: "Fuerza, capacidad de soportar una larga lucha o esfuerzo y finalmente lograr la victoria. Recuperación de la salud. Fuerza en reserva. Buen arreglo.",
            invert: "Debilidad, retrasos, suspensión, adversidad. Mala salud."
        },
        {
            id: 28,
            name: "8 DE BASTOS",
            description: "Velocidad. Decisión apresurada. Viaje aéreo, mensajes, cartas de amor. Hiperactividad. Grandes esperanzas.",
            invert: "Oposición, celos. Retraso en los negocios o en los asuntos amorosos."
        },
        {
            id: 29,
            name: "7 DE BASTOS",
            description: "Valor. Victoria a través del coraje. Esfuerzo, lucha, fiera competición. Cierto éxito. Negociación, contrato.",
            invert: "Complicación, dificultad, inseguridad y miedo. Embarazo. Falsa apariencia."
        },
        {
            id: 30,
            name: "6 DE BASTOS",
            description: "Victoria después de un conflicto. Buenas noticias, progreso. Ayudando a los amigos.",
            invert: "Aplazamiento. Insolencia, excesivo orgullo. Traición, aprensión."
        },
        {
            id: 31,
            name: "5 DE BASTOS",
            description: "Conflicto, competición, juicio, obstáculos, oposición. Violencia, pelea.",
            invert: "Peligrosa indecisión, traición, complicación."
        },
        {
            id: 32,
            name: "4 DE BASTOS",
            description: "Completa realización. Asentamiento, paz, armonía. Romance, matrimonio, sociedad.",
            invert: "Inseguridad, incomodidad, desconfianza, Contradicciones. Felicidad incompleta"
        },
        {
            id: 33,
            name: "3 DE BASTOS",
            description: "Virtud. Fuerza establecida, realización de la esperanza, nobleza. Cooperación, asociación.",
            invert: "Inconsistencia, decepción, engaño. Robo, pérdida."
        },
        {
            id: 34,
            name: "2 DE BASTOS",
            description: "Dominio. Madurez. Audacia con autocontrol. Influencia.",
            invert: "Disturbios. Indiferencia o desprecio de las consecuencias. Miedo, enfermedad."
        },
        {
            id: 35,
            name: "AS DE BASTOS",
            description: "Creación, nacimiento. El poder o habilidad para iniciar o para seguir adelante un plan o tarea con energía. Capacidad para realizar emprendimientos y determinación. Comienzo de una empresa, aventura, invención o algo nuevo.",
            invert: "Disturbios. Indiferencia o desprecio de las consecuencias. Miedo, enfermedad."
        },
        {
            id: 36,
            name: "REY DE COPAS",
            description: "Un hombre que conoce de leyes o comercio, pero también interesado en ciencia, arte, religión o filosofía. Un buen amigo, liberal, idealista y creativo. Amable y dispuesto a tomar alguna responsabilidad o brindar ayuda.",
            invert: "Un hombre superficial, que se entusiasma fácilmente pero sin profundidad ni firmeza de carácter. Indigno de confianza, mentiroso, despiadado y vicioso."
        },
        {
            id: 37,
            name: "Reina de Copas",
            description: "Soñadora, tranquila, poética, imaginativa, amable, pero no dispuesta a tomar muchas molestias para ayudar a otro.",
            invert: "Mujer deshonesta y viciosa. Indigna de confianza."
        },
        {
            id: 38,
            name: "CABALLERO DE COPAS",
            description: "Un hombre joven, quizás un artista, gracioso y poético. Es un soñador indolente de placeres sensuales. Puede significar un mensajero, una proposición o una invitación.",
            invert: "Perezoso y engañoso. Disoluto y despiadado."
        },
        {
            id: 39,
            name: "PRINCESA - SOTA DE COPAS",
            description: "Joven tranquilo y estudioso, pero también dulce y soñador. Noticias o proposición.",
            invert: "Un libertino sensual que no es perjudicial pero tampoco sirve de ayuda. Noticies desagradables. Adulador, egocéntrico."
        },
        {
            id: 40,
            name: "10 DE COPAS",
            description: "Saciedad. Amor y contentamiento perfectos. Paz, amistad.",
            invert: "Disipación, pérdida de la amistad, traición. Cosas desperdiciadas."
        },
        {
            id: 41,
            name: "9 DE COPAS",
            description: "Felicidad. Exito y bienestar material completo. Usted conseguirá lo que anhela.",
            invert: "Imperfección, engaño, intemperancia. Usted conseguirá lo que no quiere."
        },
        {
            id: 42,
            name: "8 DE COPAS",
            description: "Indolencia, inestabilidad. Suceso material abandonado, quizás en pos de algo más alto. Interés que se esfuma. Vagabundeo.",
            invert: "Alegría, felicidad. Un nuevo amor o un nuevo interés en las cosas materiales."
        },
        {
            id: 43,
            name: "7 DE COPAS",
            description: "Corrupción. Expectativas necias. Sueños ilusorios, decepción, intoxicación, adición a las drogas.",
            invert: "Nueva voluntad. Decisión inteligente. Viajes cortos."
        },
        {
            id: 44,
            name: "6 DE COPAS",
            description: "Placer. Felicidad que viene desde el pasado. Nostalgia. Exito.",
            invert: "Inseguridad. Vivir demasiado en el pasado. Asociados o amigos que no valen nada. Herencia."
        },
        {
            id: 45,
            name: "5 DE COPAS",
            description: "Desengaño. Desgracia inesperada. Pérdida parcial. Amistad o amor perdido. Herencia.",
            invert: "Felicidad nueva. Regreso de un viejo amor o un amigo. Alianza."
        },
        {
            id: 46,
            name: "4 DE COPAS",
            description: "Lujos. Abandono al deseo. Nueva ambición.",
            invert: "Lujos que no traen la felicidad. Descontento con el éxito material. Momento para hacer un cambio decisivo en la vida."
        },
        {
            id: 47,
            name: "3 DE COPAS",
            description: "Abundancia. Placer, hospitalidad, éxito. Las buenas cosas de la vida.",
            invert: "Excesos en el comer, el beber o la sensualidad. Pasión desenfrenada. Sexo sin amor."
        },
        {
            id: 48,
            name: "2 DE COPAS",
            description: "Amor, armonía, cálida amistad. Relación estrecha con un alma gemela. Buena carta para los negocios y el amor.",
            invert: "Oposición, falso amor, disparates, malentendidos."
        },
        {
            id: 49,
            name: "AS DE COPAS",
            description: "Armonía, fertilidad, felicidad. Inicio de un gran amor.",
            invert: "Discordia, falso amor, inestabilidad."
        },
        {
            id: 50,
            name: "REY DE ESPADAS",
            description: "Este hombre puede ser un muy poderoso aliado o un buen consejero. Es inteligente, autocontrolado y tiene alguna autoridad. Es moderno y analítico. Esta carta también puede significar un juicio.",
            invert: "Hombre engañoso y malicioso. Puede ser un enemigo peligroso, violento y poderoso."
        },
        {
            id: 51,
            name: "REINA DE ESPADAS",
            description: "Una mujer elegante pero severa. Es perspicaz y tiene muy buen juicio. Puede ser una danzarina, una viuda o una mujer sin hijos. Esta carta también significa privación y duelo.",
            invert: "Maliciosamente juguetona. Enemiga peligrosa. Celosa e intolerante."
        },
        {
            id: 52,
            name: "PRÍNCIPE [CABALLERO] DE ESPADAS",
            description: "Hombre joven, audaz, inteligente y animoso. Puede ser un tanto dominante e inestable, pero tiene las mejores intenciones.",
            invert: "Despiadado, fanático, extravagante, tiránico y agresivo. Enemigo peligroso."
        },
        
    

            /*
## (54) PRÍNCESA [SOTA] DE ESPADAS

Persona joven, lógica y penetrante. Con mucha destreza física y mental. Espionaje, mensajes.

### INVERTIDA:

Frívolo, vengativo y taimado. Indiscreción, impotencia. Perturbación

inesperada.

## (55) 10 DE ESPADAS

Ruina. Derrota total. Muerte. El final de una ilusión.

### INVERTIDA:

Exito transitorio. Mejoría.

## (56) 9 DE ESPADAS

Crueldad, sufrimiento, miseria, enfermedad, martirio. Una pesada carga. Puede ser la muerte de un ser amado.

### INVERTIDA:

Paciencia, fe, esperanza, altruismo.

## (57) 8 DE ESPADAS

Interferencia, restricción. Enfermedad temporal o cautiverio. Indecisión.

### INVERTIDA:

Nuevos inicios. Libertad de las ataduras del pasado.

## (58) 7 DE ESPADAS

Futilidad. Resultado parcial o impredecible. Sueños, vacilación. Viaje por tierra.

### INVERTIDA:

Peleas, calumnias. Decepción en la familia o con una amistad.

## (59) 6 DE ESPADAS

Ciencia. Viaje por agua, revelación, estudio. Esfuerzo inteligente. Exito después de gran ansiedad.

### INVERTIDA:

Estancamiento. Resultado desfavorable. Orgullo intelectual.

## (60) 5 DE ESPADAS

Derrota. Fracaso, pérdida. Falta de fuerza. Separación, mentiras, muerte.

### INVERTIDA:

Peligro de pérdida o derrota. Funeral. Debilidad.

## (61) 4 DE ESPADAS

Tregua. Soledad, estancamiento. Recuperación de la salud luego de una enfermedad. Exilio. Retirada.

### INVERTIDA:

Actividad renovada. Sorpresa. Se recomienda prudencia y economía.

## (62) 3 DE ESPADAS

Pena. Separación, peleas, lágrimas. Retraso, ausencia.

### INVERTIDA:

Confusión, pérdida, error.

## (63) 2 DE ESPADAS

Paz. Fuerzas balanceadas. Fortaleza. Amistad.

### INVERTIDA:

Deslealtad. Cambios, a veces en la dirección equivocada. Peleas.

## (64) AS DE ESPADAS

Conquista. Triunfo logrado a pesar de los problemas. Actividad intensa. Gestación o parto.

### INVERTIDA:

Desastre o conquista seguida por un desastre. Gran pérdida. Muerte violenta. Infertilidad.

## (65) CABALLERO [REY] DE OROS

Un hombre casado, adinero y entendido en asuntos monetarios. Paciente y trabajador. El es un jefe experimentado y un aliado de confianza.

### INVERTIDA:

Hombre vicioso y avaro. Cuídese de jugadores o especuladores. Fácil de sobornar. El puede ser un hombre peligroso.

## (66) REINA DE OROS

Mujer encantadora y generosa. Pragmática y tranquila, pero ambiciosa. Opulencia, seguridad.

### INVERTIDA:

Dada a tonterías y temperamental. Rápida para desconfiar y excesivamente temerosa del fracaso. Negligente,

## (67) PRÍNCIPE [CABALLERO] DE OROS

Hombre maduro, digno de confianza, trabajador y responsable. Un

administrador capacitado. Asuntos importantes relacionados con dinero.

### INVERTIDA:

Hombre tonto, peresozo, descuidado o torpe. Estancamiento.

## (68) PRINCESA [SOTA] DE OROS

Una persona joven instruída, cuidadosa y reflexiva. Buena capacidad administrativa, amabilidad y benevolencia. Portador de buenas noticias o mensajes.

### INVERTIDA:

Despilfarrador, ilógico. Joven rebelde. Malas noticias. Pérdida de dinero.

        }
    ]);
 */
    {
        id: 68,
        name: "10 DE OROS",
        description: "Riqueza. Fortuna material completa. Asuntos de familia, herencia, casa familiar.",
        invert: "Desgracia en la familia. Pérdida de una herencia. Tenga cuidado con los proyectos aventurados."
    },
    {
        id: 69,
        name: "9 DE OROS",
        description: "Ganancia. Sabiduría práctica limitado al hogar y los asuntos cotidianos. Estabilidad, soledad, herencia.",
        invert: "Pérdidas materiales o de la amistad. Proyecto cancelado. Tenga cuidado con los bribones."
    },
    {
        id: 70,
        name: "8 DE OROS",
        description: "Prudencia. El primer paso en una provechosa profesión. Aprendiendo un negocio o profesión. Habilidad en asuntos materiales. Una morocha.",
        invert: "Avaricia. Egocentrismo infantil. Vanidad."
    },
    {
        id: 71,
        name: "7 DE OROS",
        description: "Fracaso, derrota, pérdida de dinero. Trabajo duro pero con poca ganancia. Avaricia.",
        invert: "Exito retrasado después de un trabajo duro. Trabajo realizado por amor al trabajo, pero sin esperar retribuciones materiales."
    },
    {
        id: 72,
        name: "6 DE OROS",
        description: "Éxito. Ganancia y poder materiales. Capacidad de compartir con otros la riqueza.",
        invert: "Ganancia temporal. Prodigalidad, ostentación de la riqueza, soborno."
    },
    {
        id: 73,
        name: "5 DE OROS",
        description: "Preocupaciones. Pérdida de dinero o del empleo. Pobreza, derrota. Buena suerte en el amor, amantes, amor o amistad que se encuentra en el medio de los problemas.",
        invert: "Nuevo empleo u oportunidad. Trabajo productivo. Mala suerte en el amor."
    },
    {
        id: 74,
        name: "4 DE OROS",
        description: "Poder. Ganancia y seguridad materiales. Un regalo o una herencia. Una niña. Avaricia.",
        invert: "Prejuicio, limitación. Estancamiento o pérdida material. Gasto desmedido de dinero."
    },
    {
        id: 75,
        name: "3 DE OROS",
        description: "Trabajos. Tarea bien realizada. Transacciones comerciales. Progreso y crecimiento en la profesión elegida. Dignidad. Un niño.",
        invert: "Habilidad o conocimiento insuficiente para lograr lo que se pretende. Trabajo inútil. Carencia de seriedad."
    },
    {
        id: 76,
        name: "2 DE OROS",
        description: "Cambio. Alternación de ganancia y pérdida. Equilibrio en el medio del cambio. Habilidad para adaptarse a nuevas circunstancias. Algunas complicaciones. Temperamento inestable.",
        invert: "Inseguridad. Dificultad para adaptarse a nuevas circunstancias."
    },
    {
        id: 77,
        name: "3 DE BASTOS",
        description: "El comienzo de la prosperidad y la riqueza. Placer y belleza.",
        invert: "El exito se retrasa o no trae la felicidad esperada. Avaricia."
    }
       

    ])
        
}


