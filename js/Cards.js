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

            /*

## [XI] LA FUERZA

Sublimación o regulación de las pasiones y bajos instintos. Poder, energía, gran amor. El espíritu que domina la materia. Acción, coraje, éxito. Poderosa voluntad y gran fuerza física. La fuerza interior que domestica la bestia. Poder sobre los animales.

### INVERTIDA:

Discordia, ruina. Debilidad, testarudez, abuso de poder. Impaciencia, temeridad, grosería, insensibilidad. dureza, crueldad, furor.

## [XII] EL COLGADO

Fortaleza, sabiduría. Limitaciones auto impuestas. Iniciación, prueba. Redención a través del sacrificio, pérdida. Poder profético. Decisiones suspendidas. Elección que requiere contemplación.

### INVERTIDA:

Arrogancia, egotismo, resistencia a las influencias espirituales. Materialismo. Esfuerzo desperdiciado. Falsa profecía. Fracaso. Falta de límites, falta de franqueza, carencia de sacrificio.

## [XIII] LA MUERTE

Transformación completa. Muerta y renacimiento. El fin de algo. Evolución desde un estado a otro superior. Cambio provechoso.

### INVERTIDA:

Estancamiento, muerte, petrificación. Enfermedad incurable. Matrimonio roto. Falta de oportunidades, esperanza deshecha.

## [XIV] LA TEMPLANZA

Consideración cuidadosa, paciencia, moderación, adaptación, compostura, reflexión. Paciencia uniendo dos opuestos, combinándolos cuidadosamente. Buen matrimonio. Trabajando en armonía con otros, habilidad directiva. Algo se está preparando. Gran talento y creatividad. Luchando por trascendencia a través del trabajo. Alquimia. La unión de los opuestos refinada por el fuego de la voluntad.

### INVERTIDA:

Desorden, conflicto, mala combinación, peleas. Posibilidad de naufragio. Desarreglos.

## [XV] EL DIABLO

Destino (bueno o malo). Poder de seducción, impulso ciego, tentación, obsesión. Desviación sexual. Un estado mental confuso. Las pasiones carnales descontroladas.

### INVERTIDA:

Carta dañina, fatalidad, mal uso de la fuerza. Debilidad, ceguera, desorden. Efectos maléficos. La patética condición humana que prefiere la ilusión a la verdad.

## [XVI] LA TORRE

Cambios repentinos sin otra alternativa. Colapso, escape de la prisión o liberación de ataduras, accidente. Los planes fracasarán, las intenciones no se realizarán. El "dedo de Dios". Bancarrota. Muerte súbita.

### INVERTIDA:

Confusión completa. Ganar la libertad a un gran costo. Falsas acusaciones, opresión. Castigo que resulta de los excesos cometidos, enfermedad. Error presuntuoso que no sabe rectificarse a tiempo.

## [XVII] LA ESTRELLA

Esperanza, ayuda inesperada, perspicacia y claridad de visión, inspiración, flexibilidad. Un gran amor será dado y recibido. Buena salud. Carta totalmente espiritual.

### INVERTIDA:

Arrogancia, pesimismo, testarudez. enfermedad, error de juicio. Impotencia psíquica, reestructuración, privación y abandono.

## [XVIII] LA LUNA

Intuición, umbral de un importante cambio, camino difícil y oscuro, desarrollo de poderes psíquicos. Navegación, experimentación, trabajo penoso.

### INVERTIDA:

Peligros no vistos, enemigos ocultos, alucinación, autoengaño, histeria, desorientación. Inestabilidad, embustes, trampas, falso saber, carácter neurótico. Escándalo, secreto que se hace público, chantajista.

## [XIX] EL SOL

Gloria. Felicidad material. Matrimonio o relación feliz, colaboración. Exito. Placer, energía, motivación, inspiración.

### INVERTIDA:

Molestias, disimulos, arrogancia, vanidad. Compromiso o trabajo perdido. Tanteo en la oscuridad, desorientación. Deseo de figurar.

## [XX] EL JUICIO

Cambio radical, resurrección a una vida nueva. Trabajo (o vida) bien hecha. Voluntad para iniciar algo nuevo. Buen juicio y discernimiento. Poder creativo e influencia sobre la familia y la carrera laboral. Capacidad de perdonar. Despertar. Dictámenes judiciales favorable.

### INVERTIDA:

Vacilación espiritual, debilidad, juicio o decisión equivocada. Enfermedad, separación. Dictamen judicial adverso. Error sobre sí mismo y sobre los otros. Decisión postergada.

## [XXI] EL MUNDO

Suceso garantizado. Recompensas recibidas. Viaje, emigración (dentro del mismo continente), cambio de lugar de residencia. Compra o venta de tierras.

### INVERTIDA:

Obstáculos, estancamiento, estorbos. Necesidad de trabajar muy duro para alcanzar el éxito.

## (23) CABALLERO [REY] DE BASTOS

Hombre atrevido, rápido y generoso. Apasionado y fuerte. Paternalista y orgulloso. Puede ser un caballero del campo, generalmente casado. Herencia inesperada, un buen matrimonio.

### INVERTIDA:

Despótico, intolerante, prejuicioso, mal intencionado.

## (24) REINA DE BASTOS

Mujer amable, energética, pero calma. Conservadora, pragmática y

autoritaria. Fructífera en mente y cuerpo.

### INVERTIDA:

Dominante, celosa, dogmática e irracional. Rápida para ofenderse.

## (25) PRÍNCIPE [CABALLERO] DE BASTOS

Un hombre joven y energético, veloz y atrevido. Puede ser noble y generoso, pero también violento y apresurado.

### INVERTIDA:

Celoso, débil e intolerante. Pelea, discordia, frustración.

## (26) PRINCESA [SOTA] DE BASTOS

Joven y brillante. Entusiasta y atrevido. Un mensajero o portador de noticias.

### INVERTIDA:

Joven frívolo, teatral y hueco. Cruel, opresivo.

## (27) 10 DE BASTOS

Opresión. Desequilibrio y egocentrismo. Pesada carga. Fuerza desligada de las fuentes espirituales. Un problema se resolverá pronto.

### INVERTIDA:

Molestias, traición, separación, emigración, algunas pérdidas. Esterilidad.

## (28) 9 DE BASTOS

Fuerza, capacidad de soportar una larga lucha o esfuerzo y finalmente lograr la victoria. Recuperación de la salud. Fuerza en reserva. Buen arreglo.

### INVERTIDA:

Debilidad, retrasos, suspensión, adversidad. Mala salud.

## (29) 8 DE BASTOS

Velocidad. Decisión apresurada. Viaje aéreo, mensajes, cartas de amor. Hiperactividad. Grandes esperanzas.

### INVERTIDA:

Oposición, celos. Retraso en los negocios o en los asuntos amorosos.

## (30) 7 DE BASTOS

Valor. Victoria a través del coraje. Esfuerzo, lucha, fiera competición. Cierto éxito. Negociación, contrato.

### INVERTIDA:

Complicación, dificultad, inseguridad y miedo. Embarazo. Falsa apariencia.

## (31) 6 DE BASTOS

Victoria después de un conflicto. Buenas noticias, progreso. Ayudando a los amigos.

### INVERTIDA:

Aplazamiento. Insolencia, excesivo orgullo. Traición, aprensión.

### (32) 5 DE BASTOS

Conflicto, competición, juicio, obstáculos, oposición. Violencia, pelea.

### INVERTIDA:

Peligrosa indecisión, traición, complicación.

## (33) 4 DE BASTOS

Completa realización. Asentamiento, paz, armonía. Romance, matrimonio, sociedad.

### INVERTIDA:

Inseguridad, incomodidad, desconfianza, Contradicciones. Felicidad

incompleta.

## (34) 3 DE BASTOS

Virtud. Fuerza establecida, realización de la esperanza, nobleza.

Cooperación, asociación.

### INVERTIDA:

Inconsistencia, decepción, engaño. Robo, pérdida.

## (35) 2 DE BASTOS

Dominio. Madurez. Audacia con autocontrol. Influencia.

### INVERTIDA:

Disturbios. Indiferencia o desprecio de las consecuencias. Miedo,

enfermedad.

## (36) AS DE BASTOS

Creación, nacimiento. El poder o habilidad para iniciar o para seguir

adelante un plan o tarea con energía. Capacidad para realizar emprendimientos y determinación. Comienzo de una empresa, aventura, invención o algo nuevo.

### INVERTIDA:

Caída. Perder o postergar alguna cosa (empleo, emprendimiento, etc.). Falsos comienzos.

## (37) CABALLERO [REY] DE COPAS

Un hombre que conoce de leyes o comercio, pero también interesado en ciencia, arte, religión o filosofía. Un buen amigo, liberal, idealista y creativo. Amable y dispuesto a tomar alguna responsabilidad o brindar ayuda.

### INVERTIDA:

Un hombre superficial, que se entusiasma fácilmente pero sin profundidad ni firmeza de carácter. Indigno de confianza, mentiroso, despiadado y vicioso.

## (38) Reina de Copas

Soñadora, tranquila, poética, imaginativa, amable, pero no dispuesta a tomar muchas molestias para ayudar a otro.

### INVERTIDA:

Mujer deshonesta y viciosa. Indigna de confianza.

## (39) PRÍNCIPE [CABALLERO] DE COPAS

Un hombre joven, quizás un artista, gracioso y poético. Es un soñador indolente de placeres sensuales. Puede significar un mensajero, una proposición o una invitación.

### INVERTIDA:

Perezoso y engañoso. Disoluto y despiadado.

## (40) PRINCESA [SOTA] DE COPAS

Joven tranquilo y estudioso, pero también dulce y soñador. Noticias o proposición.

### INVERTIDA:

Un libertino sensual que no es perjudicial pero tampoco sirve de ayuda. Noticies desagradables. Adulador, egocéntrico.

## (41) 10 DE COPAS

Saciedad. Amor y contentamiento perfectos. Paz, amistad.

### INVERTIDA:

Disipación, pérdida de la amistad, traición. Cosas desperdiciadas.

## (42) 9 DE COPAS

Felicidad. Exito y bienestar material completo. Usted conseguirá lo que anhela.

### INVERTIDA:

Imperfección, engaño, intemperancia. Usted conseguirá lo que no quiere.

## (43) 8 DE COPAS

Indolencia, inestabilidad. Suceso material abandonado, quizás en pos de algo más alto. Interés que se esfuma. Vagabundeo.

### INVERTIDA:

Alegría, felicidad. Un nuevo amor o un nuevo interés en las cosas materiales.

## (44) 7 DE COPAS

Corrupción. Expectativas necias. Sueños ilusorios, decepción, intoxicación, adición a las drogas.

### INVERTIDA:

Nueva voluntad. Decisión inteligente. Viajes cortos.

## (45) 6 DE COPAS

Placer. Felicidad que viene desde el pasado. Nostalgia. Exito.

### INVERTIDA:

Inseguridad. Vivir demasiado en el pasado. Asociados o amigos que no valen nada. Herencia.

## (46) 5 DE COPAS

Desengaño. Desgracia inesperada. Pérdida parcial. Amistad o amor

perdido. Herencia.

### INVERTIDA:

Felicidad nueva. Regreso de un viejo amor o un amigo. Alianza.

## (47) 4 DE COPAS

Lujos. Abandono al deseo. Nueva ambición.

### INVERTIDA:

Lujos que no traen la felicidad. Descontento con el éxito material. Momento para hacer un cambio decisivo en la vida.

## (48) 3 DE COPAS

Abundancia. Placer, hospitalidad, éxito. Las buenas cosas de la vida.

### INVERTIDA:

Excesos en el comer, el beber o la sensualidad. Pasión desenfrenada. Sexo sin amor.

## (49) 2 DE COPAS

Amor, armonía, cálida amistad. Relación estrecha con un alma gemela. Buena carta para los negocios y el amor.

### INVERTIDA:

Oposición, falso amor, disparates, malentendidos.

## (50) AS DE COPAS

Armonía, fertilidad, felicidad. Inicio de un gran amor.

### INVERTIDA:

Discordia, falso amor, inestabilidad.

## (51) CABALLERO [REY] DE ESPADAS

Este hombre puede ser un muy poderoso aliado o un buen consejero. Es inteligente, autocontrolado y tiene alguna autoridad. Es moderno y analítico. Esta carta también puede significar un juicio.

### INVERTIDA:

Hombre engañoso y malicioso. Puede ser un enemigo peligroso, violento y poderoso.

## (52) REINA DE ESPADAS

Una mujer elegante pero severa. Es perspicaz y tiene muy buen juicio. Puede ser una danzarina, una viuda o una mujer sin hijos. Esta carta también significa privación y duelo.

### INVERTIDA:

Maliciosamente juguetona. Enemiga peligrosa. Celosa e intolerante.

## (53) PRÍNCIPE [CABALLERO] DE ESPADAS

Hombre joven, audaz, inteligente y animoso. Puede ser un tanto dominante e inestable, pero tiene las mejores intenciones.

### INVERTIDA:

Despiadado, fanático, extravagante, tiránico y agresivo. Enemigo peligroso.

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

## (69) 10 DE OROS

Riqueza. Fortuna material completa. Asuntos de familia, herencia, casa familiar.

### INVERTIDA:

Desgracia en la familia. Pérdida de una herencia. Tenga cuidado con los proyectos aventurados.

## (70) 9 DE OROS

Ganancia. Sabiduría práctica limitado al hogar y los asuntos cotidianos. Estabilidad, soledad, herencia.

### INVERTIDA:

Pérdidas materiales o de la amistad. Proyecto cancelado. Tenga cuidado con los bribones.

## (71) 8 DE OROS

Prudencia. El primer paso en una provechosa profesión. Aprendiendo un negocio o profesión. Habilidad en asuntos materiales. Una morocha.

### INVERTIDA:

Avaricia. Egocentrismo infantil. Vanidad.

## (72) 7 DE OROS

Fracaso, derrota, pérdida de dinero. Trabajo duro pero con poca ganancia. Avaricia.

### INVERTIDA:

Exito retrasado después de un trabajo duro. Trabajo realizado por amor al trabajo, pero sin esperar retribuciones materiales.

## (73) 6 DE OROS

Éxito. Ganancia y poder materiales. Capacidad de compartir con otros la riqueza.

### INVERTIDA:

Ganancia temporal. Prodigalidad, ostentación de la riqueza, soborno.

## (74) 5 DE OROS

Preocupaciones. Pérdida de dinero o del empleo. Pobreza, derrota. Buena suerte en el amor, amantes, amor o amistad que se encuentra en el medio de los problemas.

### INVERTIDA:

Nuevo empleo u oportunidad. Trabajo productivo. Mala suerte en el amor.

## (75) 4 DE OROS

Poder. Ganancia y seguridad materiales. Un regalo o una herencia. Una niña. Avaricia.

### INVERTIDA:

Prejuicio, limitación. Estancamiento o pérdida material. Gasto desmedido de dinero.

## (76) 3 DE OROS

Trabajos. Tarea bien realizada. Transacciones comerciales. Progreso y crecimiento en la profesión elegida. Dignidad. Un niño.

### INVERTIDA:

Habilidad o conocimiento insuficiente para lograr lo que se pretende. Trabajo inútil. Carencia de seriedad.

## (77) 2 DE OROS

Cambio. Alternación de ganancia y pérdida. Equilibrio en el medio del cambio. Habilidad para adaptarse a nuevas circunstancias. Algunas complicaciones. Temperamento inestable.

### INVERTIDA:

Inseguridad. Dificultad para adaptarse a nuevas circunstancias.

## (78) AS DE OROS

El comienzo de la prosperidad y la riqueza. Placer y belleza.
        }
    ]);
 */
        },


    


    ])
        
}


