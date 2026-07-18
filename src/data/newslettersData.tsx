import React from 'react';

export const newslettersData = [
  {
    id: "1",
    tag: "NEWSLETTER 1",
    title: "NUESTRO DÍA",
    subtitle: "(Cómo si solo tuviéramos uno)",
    excerpt: "El 4 de febrero, fue el Día Mundial del Cáncer. El propósito de este día es sensibilizar...",
    isPublished: true,
    intro: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          <strong>El 4 de febrero fue el Día Mundial del Cáncer.</strong> El propósito de este día es sensibilizar, concienciar y movilizar a la sociedad para avanzar en la prevención, detección temprana, tratamiento y control. 
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
          Aun así, los datos muestran un <strong>incremento del número de casos</strong>. El cáncer de mama es el tumor más frecuente en mujeres diagnosticadas en España.
        </p>
      </>
    ),
    diana: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          Una amiga con sentido del humor me preguntó: “¿tengo que felicitarte?”. Me hizo pensar que para eso suelen estar las fechas señaladas.
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          Independientemente del tipo de cáncer que sufras, <strong>enfrentarte a este diagnóstico sigue siendo duro</strong> a pesar de que la supervivencia haya mejorado. Tu vida se para de golpe. Tu vocabulario se llena de palabras con un nuevo significado: infiltrante, acumulativo, tratamiento, hidratación, esperanza. 
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          Tu entorno sigue su rutina, pensando cómo ayudarte, mientras tu cuerpo se prepara para mantener una lucha interna de la que quieres salir vencedor@. Todo sigue su curso. <strong>Entras en una rueda de tiempos que no te deja pensar.</strong> Tus días los marca la enfermedad. Te enfocas en superar cada etapa establecida en el protocolo, racionando fuerzas para lo que queda. <strong>Tu mente va aguantando y de repente, explota.</strong> Seguramente cuando tú y los demás menos lo esperabais.
        </p>
        <p className="text-xl md:text-2xl font-bold text-brand-black text-center mt-12 max-w-2xl mx-auto">
          ¿Tú también has explotado Diana?
        </p>
      </>
    ),
    expertos: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          Parecía que el aumento en la esperanza de vida era uno de los factores determinantes. Sin embargo, <strong>la incidencia de esta enfermedad en pacientes jóvenes también se está incrementando</strong>.
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
          Muchos especialistas coinciden en que <strong>intervenciones en el estilo de vida</strong> (peso saludable, menos alcohol, actividad física) y el <strong>mejor acceso a prevención</strong> y screening temprano son claves para contrarrestar estas tendencias.
        </p>
      </>
    ),
    reflexionando: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        El Día Mundial del Cáncer <strong>será una fiesta cuando consigamos que la investigación acabe erradicando la enfermedad</strong>. Porque el cáncer no es solo un tema médico sino también social, humano y colectivo. Todos podemos aportar nuestro granito de arena.
      </p>
    ),
    recomendaciones: [
      {
        title: "Asociación Española Contra el Cáncer (AECC)",
        text: "Ofrece apoyo psicológico, social y económico, además de financiar investigación.",
        link: "https://www.contraelcancer.es/es"
      },
      {
        title: "Federación Española de Cáncer de Mama (FECMA)",
        text: "Agrupa asociaciones de pacientes y promueve derechos, información y sensibilización.",
        link: "https://www.fecma.org/"
      }
    ]
  },
  {
    id: "2",
    tag: "NEWSLETTER 2",
    title: "SABE RICO, DUELE DESPUÉS",
    subtitle: "",
    excerpt: "En España estudios recientes estiman que alrededor del 40% de la dieta infantil proviene de ultraprocesados.",
    isPublished: true,
    intro: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        En España estudios recientes estiman que <strong>alrededor del 40% de la dieta infantil proviene de ultraprocesados</strong>. Un tercio de los adultos admiten consumirlos tres o más días por semana. En las últimas 3 décadas, el aporte calórico de estos alimentos <strong>ha pasado del 11% al 32%</strong>.
      </p>
    ),
    diana: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          ¿A quién le amarga un dulce? Hoy he tenido la mala idea de ir a comprar al super después de comer. Me he aprendido la pirámide nutricional de memoria con sus cinco niveles y sus recomendaciones adecuadas de consumo. Me he pasado varios meses comiendo como un pajarito alimentos de todos los colores posibles sin que ninguno tuviera el sabor de siempre. 
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          Sé que tengo que cuidar mi alimentación. Creo que ya lo hacía. Pero ahora que empiezo a recuperar los sabores, <strong>mis ojillos se van a esos donuts cargados de azúcar que me hacen salivar</strong> (y mira que tengo la boca seca con los efectos secundarios).
        </p>
        <p className="text-xl md:text-2xl font-bold text-brand-black text-center mt-12 max-w-2xl mx-auto">
          ¿Soy yo la única a la que le apetece más el dulce después de la quimioterapia?
        </p>
      </>
    ),
    expertos: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Los alimentos ultraprocesados están diseñados para ser <strong>altamente adictivos y fáciles de consumir en exceso</strong>. Tienden a aportar calorías vacías, azúcares añadidos, grasas de mala calidad y aditivos. Desplazan alimentos ricos en nutrientes protectores como frutas, legumbres y pescado.
      </p>
    ),
    reflexionando: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Los efectos que los tratamientos provocan en nuestros cuerpos son muy diferentes. <strong>A mí me quitaron el hambre por completo.</strong> Inapetencia total hacia lo muy sano y hacia lo poco sano. Estoy convencida que debemos cuidar lo que ponemos en el carro. Evita ir a comprar sin hambre. Con exceso de hambre, tampoco es lo mejor. <strong>Hazte una lista y síguela a rajatabla para disminuir tentaciones.</strong> No está demostrado que comer bien cure o evite que un bicho venga a verte, pero seguro que ayuda. Y mucho.
      </p>
    ),
    recomendaciones: [
      {
        title: "Guía de nutrición:",
        text: "La actividad principal del Grupo GEICAM es el diseño y realización de estudios y ensayos clínicos.",
        link: "http://www.geicam.org"
      },
      {
        title: "Recetas de cocina:",
        text: "Aquí encontrarás recetas adaptadas a muchas situaciones.",
        link: "https://oncoalicia.com/"
      }
    ]
  },
  {
    id: "3",
    tag: "NEWSLETTER 3",
    title: "¡A MOVERSE!",
    subtitle: "",
    excerpt: "Está demostrado que el ejercicio moderado reduce la fatiga en un 20–30% frente a los pacientes sedentarios.",
    isPublished: true,
    intro: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Está demostrado que <strong>el ejercicio moderado</strong> (caminar, bicicleta estática, entrenamiento combinado aeróbico + fuerza) durante el tratamiento oncológico, <strong>reduce la fatiga en un 20–30%</strong> frente a los pacientes sedentarios. Mejora la energía general y la tolerancia a las actividades diarias.
      </p>
    ),
    diana: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          Nunca olvidaré el momento en que la enfermera de práctica avanzada me puso delante un papel con un listado de posibles efectos secundarios (a mí y a mi hija Marta, nos pareció más largo que el baile del chiki chiki). Nos entró esa risa nerviosa tan típica en momentos de máxima tensión.
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          “No tienes por qué sufrirlos todos” me dijo. Todo un reto para mí. Para cada efecto secundario, había una recomendación. <strong>Frente al cansancio, ejercicio. Si te estriñes, ejercicio.</strong> Si hay fatiga muscular, ejercicio. Alteraciones cardiacas, ejercicio. Yo que pensaba que podría aprovechar el tiempo de tratamiento para leer y ver series tumbada en el sofá…
        </p>
        <p className="text-xl md:text-2xl font-bold text-brand-black text-center mt-12 max-w-2xl mx-auto">
          Y tu, Diana ¿cuántas sentadillas eres capaz de hacer en 30 segundos?
        </p>
      </>
    ),
    expertos: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Especialistas en oncología y rehabilitación consideran que el ejercicio estructurado y supervisado <strong>mejora la calidad de vida de las pacientes</strong> durante y después del tratamiento, reduciendo fatiga, ansiedad y depresión, e incrementando la capacidad funcional.
      </p>
    ),
    reflexionando: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Hay momentos durante el proceso en los que no puedes tirar de tu alma, ni de tu cuerpo. Solo te apetece tumbarte en horizontal sin ver ni oír, mientras te encierras en tus pensamientos. A veces es muy tentador meterte en ese agujero, pero <strong>intenta forzarte y despegar tu culo del sofá</strong>. Tu cuerpo y en el fondo también tu mente, te lo agradecerán.
      </p>
    ),
    recomendaciones: [
      {
        title: "Guía general:",
        text: "Porque informarse es el primer paso para empoderarse como paciente y mejorar tu bienestar.",
        link: "https://www.aquiparavivir.es/"
      },
      {
        title: "Oncofitness:",
        text: "Actividad física para pacientes oncológicos.",
        link: "https://www.google.com/search?q=Oncofitness&rlz=1C5CHFA_enES997ES1030&oq=Oncofitness&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABjvBTIKCAIQABiABBiiBDIHCAMQABjvBTIKCAQQABiABBiiBDIKCAUQABiABBiiBNIBBzE0NGowajSoAgCwAgE&sourceid=chrome&ie=UTF-8"
      }
    ]
  },
  {
    id: "4",
    tag: "NEWSLETTER 4",
    title: "VIVIR EN NUESTRA CABEZA",
    subtitle: "",
    excerpt: "En España, la meditación y el mindfulness están cada vez más presentes tanto en aplicaciones de bienestar como en investigación científica.",
    isPublished: true,
    intro: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        En España, <strong>la meditación y el mindfulness están cada vez más presentes</strong> tanto en aplicaciones de bienestar como en investigación científica. Hay evidencia de beneficios en salud mental y física. La meditación no “relaja” el cerebro, lo vuelve más activo, complejo y flexible. Un novato entiende la meditación como “un cerebro en reposo”, pero la ciencia concluye que es todo lo contrario.
      </p>
    ),
    diana: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          Yo no soy de mucho meditar. Me cuesta encontrar la calma incluso durmiendo y las actividades que se publicitan como relajantes a mí me acaban poniendo nerviosa. En el estudio Diana hemos podido asistir a sesiones de “terapia cognitiva aplicada al mindfulness” donde Miguel, nuestro psicólogo favorito😊, insistía en la necesidad de <strong>abandonar el piloto automático</strong> para darnos cuenta realmente de lo que estamos haciendo en cada momento.
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          Había un ejercicio que se llama “escáner corporal”. Consiste en recorrer nuestro cuerpo con los ojos cerrados, desde los pies a la cabeza, <strong>prestando atención plena a las sensaciones, sin juzgarlas</strong>. Mala mezcla para mí: atención plena, sin juzgar. Es un rato extraño si no estás acostumbrada. Pero esos ratos acabaron ayudándome.
        </p>
        <p className="text-xl md:text-2xl font-bold text-brand-black text-center mt-12 max-w-2xl mx-auto">
          Y tu, ¿eres de meditar?
        </p>
      </>
    ),
    expertos: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        La meditación y el mindfulness han sido estudiados cada vez más como intervenciones complementarias. Aunque no curan el cáncer, hay evidencia científica que muestra varios efectos positivos –especialmente en el <strong>bienestar psicológico y la calidad de vida</strong>– cuando se incorporan como parte del cuidado integral.
      </p>
    ),
    reflexionando: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Combina todas las actividades que puedas para ayudar al equilibrio entre tu nueva mente y tu nuevo cuerpo. <strong>Necesitas calma dentro de la tormenta</strong> y debes aprender a buscarla en el desorden que supone esta enfermedad. Prueba con la meditación.
      </p>
    ),
    recomendaciones: [
      {
        title: "Insight Timer:",
        text: "Miles de meditaciones gratuitas.",
        link: "https://insighttimer.com/"
      },
      {
        title: "Headspace:",
        text: "Series de mindfulness y manejo del estrés.",
        link: "https://www.headspace.com/"
      },
      {
        title: "Calm:",
        text: "Meditación de sueño y respiración.",
        link: "https://www.calm.com/"
      }
    ]
  },
  {
    id: "5",
    tag: "NEWSLETTER 5",
    title: "¡MÚSICA ERES TU!",
    subtitle: "",
    excerpt: "La musicoterapia reduce significativamente los síntomas de ansiedad, la depresión y el dolor.",
    isPublished: true,
    intro: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        La musicoterapia <strong>reduce significativamente los síntomas de ansiedad, la depresión y el dolor</strong>. El baile añade la mejora cardiovascular, la tonificación muscular, mejora la flexibilidad, la coordinación, el equilibrio y la postura. ¡Y quema calorías!
      </p>
    ),
    diana: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          Mi madre era bailona. Discotequera, diría yo, de las que recuerdas moviéndose en la pista disfrutando. Eso no se hereda, pero se imita porque de alguna manera acabas llevándolo en la sangre.
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          Tengo una amiga, Fátima, que durante todo el proceso de quimioterapia se ha dedicado a mandarme una canción prácticamente a diario. En cuanto recibía su canción, <strong>me ponía a “mover el esqueleto”</strong> (expresión de los tiempos de mi madre).
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          Mi cuerpo y mi mente imagino que, como los vuestros, necesitaba un tipo de música distinta en cada momento. Dependiendo del día, dependiendo del ritmo, dependiendo del estado del cuerpo y del cerebro. <strong>Mi alma me pedía música.</strong>
        </p>
        <p className="text-xl md:text-2xl font-bold text-brand-black text-center mt-12 max-w-2xl mx-auto">
          ¿Qué música te levanta del sofá?
        </p>
      </>
    ),
    expertos: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Estudios con resonancia magnética funcional muestran cómo <strong>la música activa múltiples áreas cerebrales</strong> (memoria, emoción, movimiento). En oncología puede ayudar en el apoyo emocional y la regulación del estado de ánimo.
      </p>
    ),
    reflexionando: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        La música me ha hecho compañía. Ha sido una <strong>manera de conectar con mis sentimientos y dejarlos ir</strong>. Apóyate en ella; desde la Quinta sinfonía de Beethoven al heavy metal. Encuentra tu música. Disfrutarás.
      </p>
    ),
    recomendaciones: [
      {
        title: "dianaTbaila:",
        text: "Listas de Spotify para mover el cuerpo.",
        link: "https://open.spotify.com/playlist/1iDDb5i6imOHOZXjYbZyK6?si=SBi_e-nET6eiNZ_fj5I07w"
      },
      {
        title: "Banda Sonora serie “This is us”:",
        text: "Una maravilla para acompañar emociones.",
        link: "https://open.spotify.com/playlist/07iwJGOrINNNRw6Moc7Auu?si=tjmZuqJbQFWR_lqoiuPYFg"
      },
      {
        title: "Lista de grandes éxitos discotequeros:",
        text: "Para levantar el ánimo al instante.",
        link: "https://open.spotify.com/playlist/3zwsjgB1O0NIWFmaaiTX8M"
      }
    ]
  },
  {
    id: "6",
    tag: "NEWSLETTER 6",
    title: "MI BOLA DE BILLAR",
    subtitle: "",
    excerpt: "Entre el 50% y el 70% de pacientes oncológicos con alopecia, reportan angustia emocional significativa.",
    isPublished: true,
    intro: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Entre el 50% y el 70% de pacientes oncológicos con alopecia, reportan <strong>angustia emocional significativa</strong>. Entre el 30% y el 40% lo describen como uno de los efectos secundarios más traumáticos del tratamiento. En mujeres con cáncer de mama, el impacto suele ser mayor porque <strong>el cabello está fuertemente ligado a la identidad femenina</strong> y la imagen corporal.
      </p>
    ),
    diana: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          No estaba especialmente orgullosa de mi pelo. Hasta que lo perdí. Me quejaba de tenerlo demasiado liso, demasiado fino, demasiado canoso. De jovencita, cuando el casco para la moto todavía no era obligatorio, cogía “la vespino” con el pelo mojado para conseguir más volumen.
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          Yo estoy entre ese 30-40% de los que lo describen esta pérdida como uno de los efectos más traumáticos. Siguiendo la recomendación de una buena amiga Diana, <strong>me lo rapé en mi peluquería, de espaldas al espejo</strong>, antes de quedarme con los mechones en la mano. Estuve cerca de un mes sin poder ver “mi versión zen” reflejada en algún sitio. A pesar de tener un cráneo “monísimo” como me decían los pocos privilegiados que vieron mi bola de billar.
        </p>
        <p className="text-xl md:text-2xl font-bold text-brand-black text-center mt-12 max-w-2xl mx-auto">
          ¿Qué ha supuesto para ti Diana?
        </p>
      </>
    ),
    expertos: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        La calvicie es un efecto secundario frecuente pero generalmente reversible. Tiene un <strong>impacto emocional real que merece especial atención</strong>. Existen algunas medidas preventivas como el enfriamiento del cuero cabelludo. Puede ser necesario y beneficioso un apoyo psicológico.
      </p>
    ),
    reflexionando: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        <strong>No hay una forma “correcta” de vivir este despeinado permanente.</strong> Afecta a nuestra imagen, a cómo nos vemos delante del espejo. Nadie debe insistir en que es una tontería pensando que ayuda. Aunque en el fondo pueda serlo, dejemos que cada una gestione su cabeza pelona como mejor lo considere.
      </p>
    ),
    recomendaciones: [
      {
        title: "Beauty Studio Center:",
        text: "Especialistas en belleza y estética oncológica.",
        link: "https://share.google/cSmYW3z7LFQalgIGp"
      },
      {
        title: "Fundación Kalida:",
        text: "Acompañamiento integral para personas con cáncer.",
        link: "https://www.fundaciokalida.org/es/"
      }
    ]
  },
  {
    id: "7",
    tag: "NEWSLETTER 7",
    title: "SOBREVIVÍ A LA QUIMIO",
    subtitle: "AHORA HABLEMOS DE SEXO 💗🔥",
    excerpt: "La mayoría de mujeres con cáncer de mama experimentan efectos negativos en su sexualidad.",
    isPublished: true,
    intro: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        La mayoría de mujeres con cáncer de mama experimentan <strong>efectos negativos en su sexualidad</strong>. Hasta un 98% manifiestan que los efectos secundarios dificultan su intimidad sexual y un alto porcentaje los siguen notando después del tratamiento.
      </p>
    ),
    diana: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          Sequedad vaginal, disminución de la libido, dolor durante el sexo, dificultad para el orgasmo, bajo nivel de energía... ¿Qué si tengo ganas de qué? Esto también viene sin manual de instrucciones. Uno de los últimos apartados que te señalan el día que te detallan los efectos secundarios es: <strong>disminución del apetito sexual</strong>.
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          En mi caso, no me entraba nada, ni de comida ni de sexo. Mi apetito se fue de viaje. Lejos, muy lejos. Te sientes poco atractiva, cansada, seca y sabes que un bicho sigue instalado en uno de tus pechos. <strong>Le intentas poner ganas porque piensas en tu pareja más que en ti, pero no sale bien.</strong>
        </p>
        <p className="text-xl md:text-2xl font-bold text-brand-black text-center mt-12 max-w-2xl mx-auto">
          ¿Tú también te has quedado seca, Diana?
        </p>
      </>
    ),
    expertos: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        La sexualidad debe abordarse como parte del tratamiento y la recuperación, <strong>no como un tema opcional o tabú</strong>. Esto significa que hablar de deseo, placer, intimidad y relaciones debería formar parte de las consultas, tanto como hablar de efectos físicos o tratamientos médicos.
      </p>
    ),
    reflexionando: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Si tienes pareja durante el recorrido por este viaje maldito, habla mucho con ella. Explícale cómo te sientes y pídele a él o ella que se sincere también. <strong>La sexualidad no desaparece, pero puede ser distinta.</strong> No rompas la comunicación. Comparte lo que sientes. Busca apoyo médico y emocional si lo necesitas.
      </p>
    ),
    recomendaciones: [
      {
        title: "Explora y Comunícate:",
        text: "Hablar abiertamente con profesionales y tu pareja es el primer paso.",
        link: "#"
      },
      {
        title: "Búsqueda de especialistas:",
        text: "Se admiten sugerencias y recursos en nuestra comunidad.",
        link: "#"
      }
    ]
  },
  {
    id: "8",
    tag: "NEWSLETTER 8",
    title: "CEREBRO A LA PLANCHA",
    subtitle: "(cortesía de la quimio)",
    excerpt: "Hasta 8 de cada 10 personas en tratamiento con quimioterapia experimentan 'niebla mental'.",
    isPublished: true,
    intro: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Hasta 8 de cada 10 personas en tratamiento con quimioterapia experimentan <strong>"niebla mental"</strong>. En la mayoría de los casos los síntomas mejoran con el tiempo, pero en un grupo de pacientes pueden persistir durante meses o incluso años, aunque con intensidad variable.
      </p>
    ),
    diana: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          Nadie me había hablado del <strong>“quimiocerebro” (chemo brain)</strong> hasta que varias Dianas compartimos nuestros despistes en una clase de crossfit. Al principio nos hizo gracia y lo atribuimos a la fatiga generalizada, pero pronto descubrimos que estaba descrita como otro de los posibles efectos secundarios.
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          Es una sensación extraña, <strong>como si tu cabeza se hubiera ralentizado</strong>. Tus neuronas parecen desconectadas: te cuesta encontrar las palabras adecuadas, te olvidas de algunos detalles, te despistas de manera más frecuente. Resulta que esa “azotea” que se encargaba de ayudarte a sobrellevar lo que te estaba pasando físicamente, también ha decidido dar por saco.
        </p>
        <p className="text-xl md:text-2xl font-bold text-brand-black text-center mt-12 max-w-2xl mx-auto">
          ¿Cómo va tu niebla, Diana?
        </p>
      </>
    ),
    expertos: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        El "quimiocerebro" existe. No es "despiste" ni falta de interés, sino un <strong>cambio cognitivo asociado al cáncer y sus tratamientos</strong>. Se trata de un fenómeno multifactorial que puede estar influenciado por el propio cáncer, la inflamación, la fatiga, la ansiedad o la depresión. 
      </p>
    ),
    reflexionando: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Iniciarte en este viaje por el cáncer es un <strong>proceso de no retorno a ser la persona que eras</strong>. Tienes que recomponer tu cuerpo física y mentalmente. Creo que esta enfermedad y sus efectos secundarios han conseguido que lo que menos me importe en estos momentos es tener unas buenas tetas.
      </p>
    ),
    recomendaciones: [
      {
        title: "OncoLink:",
        text: "Recursos y explicaciones detalladas sobre el quimiocerebro.",
        link: "https://es.oncolink.org/apoyar/efectos-secundarios/neurological-side-effects/cerebro-de-chemo/disfuncion-cognitiva-quimiocerebro"
      }
    ]
  },
  {
    id: "9",
    tag: "NEWSLETTER 9",
    title: "¿Y SI VUELVE?",
    subtitle: "La fiesta de la incertidumbre",
    excerpt: "El cáncer puede desaparecer, pero el miedo a que vuelva acompaña a cuatro de cada cinco supervivientes durante años.",
    isPublished: false,
    intro: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        El cáncer puede desaparecer, pero el <strong>miedo a que vuelva acompaña a cuatro de cada cinco supervivientes</strong> durante años. Después del tratamiento, una de las preocupaciones más frecuentes es que el cáncer regrese. Y esto también tiene un nombre: <strong>“Scanxiety”</strong> (combinación de scan y anxiety). Ansiedad asociada a los estudios de control.
      </p>
    ),
    diana: (
      <>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-6 max-w-2xl mx-auto">
          No sabía que ir acojonada a las revisiones tras haber pasado un cáncer tenía un nombre científico tan bonito. Después de mi primer cáncer hace 14 años, había conseguido sobrellevar esos momentos. Se acaba el tratamiento, se alargan los períodos entre revisiones, todo el mundo te felicita... <strong>Y tú piensas que igual estás exagerando.</strong>
        </p>
        <p className="text-lg md:text-xl text-brand-black leading-relaxed mb-8 max-w-2xl mx-auto">
          Aunque cueste creerlo, <strong>el alta oncológica no es el final</strong> para los que atravesamos esta enfermedad. Cuando te dan el diagnóstico, una parte de nuestro cerebro cortocircuita y el miedo a tener que pasar otra vez por ese calvario se instala en un rinconcito que se despierta cada vez que tienes un nuevo control. 
        </p>
        <p className="text-xl md:text-2xl font-bold text-brand-black text-center mt-12 max-w-2xl mx-auto">
          ¿Tú también sufres cada vez que te toca una revisión?
        </p>
      </>
    ),
    expertos: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        El miedo a la recurrencia no es un signo de debilidad ni de negatividad, sino una <strong>respuesta normal tras haber vivido una experiencia potencialmente traumática</strong> como es el cáncer. Aprender a convivir con cierta incertidumbre suele ser una parte importante de la recuperación emocional.
      </p>
    ),
    reflexionando: (
      <p className="text-lg md:text-xl text-brand-black leading-relaxed max-w-2xl mx-auto">
        Soy una defensora de la actitud positiva y el buen humor. Creo en la importancia de seguir trabajando el cuerpo y la mente para encontrar un equilibrio saludable. Aún así, <strong>cada revisión sigue siendo mi “espada de Damocles”</strong> porque simboliza la amenaza permanente de que la enfermedad pueda reaparecer.
      </p>
    ),
    recomendaciones: [
      {
        title: "Terapias de aceptación y compromiso (ACT):",
        text: "Herramientas psicológicas para aprender a convivir con la incertidumbre.",
        link: "https://psicologiaymente.com/clinica/terapia-aceptacion-compromiso"
      },
      {
        title: "ACBS:",
        text: "Association for Contextual Behavioral Science es la organización internacional de referencia en ACT.",
        link: "https://contextualscience.org/"
      }
    ]
  }
];