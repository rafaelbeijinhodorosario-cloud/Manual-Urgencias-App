export interface TableData {
  headers: string[]
  rows: string[][]
  caption?: string
}

export interface ContentSection {
  id: string
  title: string
  level: 1 | 2 | 3
  content?: string
  bullets?: string[]
  numberedList?: string[]
  table?: TableData
  keyPoints?: string[]
}

export interface ChapterContent {
  id: string
  number: number
  title: string
  authors: string[]
  sections: ContentSection[]
  keyPointsRemember?: string[]
}

export const chaptersContent: ChapterContent[] = [
  {
    id: 'cap-01',
    number: 1,
    title: 'Servicio de Urgencias. Estructura y Organización. Aspectos Generales',
    authors: ['Carlos Bibiano Guillén', 'Juan Rubio Gallego', 'Consolación Aranda Higuero'],
    sections: [
      {
        id: 'sec-1-intro',
        title: 'Introducción',
        level: 1,
        content: 'Los Servicios de urgencias (SU) cada día son más demandados por los pacientes. Esta respuesta a la demanda implica una mayor complejidad de los procesos clínicos y organizativos de los SU. En los últimos tiempos múltiples razones han provocado la profesionalización de los SU y esto ha provocado que la atención de los pacientes sea más homogénea, con un gran esfuerzo organizativo, de formación y de gestión. Solamente en el año 2015 se atendió en los hospitales españoles a cerca de 28.223.086 pacientes, de los cuales más del 75% se atendieron en los hospitales públicos.',
      },
      {
        id: 'sec-1-mision',
        title: 'Misión de la Medicina de Urgencias',
        level: 2,
        content: 'La misión de la Medicina de urgencias es atender y resolver mediante el diagnóstico precoz y el tratamiento cualquier situación que ponga en riesgo la vida del paciente o suponga una amenaza vital para el mismo o para algunos de sus órganos. Todo SU debe tener un Plan Funcional donde se detallen los distintos procesos asistenciales que se realizan en Urgencias.',
      },
      {
        id: 'sec-1-saturacion',
        title: 'Saturación del Servicio de Urgencias',
        level: 2,
        content: 'La saturación del SU es un problema importante y generalizado en la mayoría de los países de nuestro entorno. Representa un problema de todo el hospital y no exclusivamente de Urgencias.',
        table: {
          headers: ['Criterio de saturación'],
          rows: [
            ['Pacientes pendiente de ingreso > 10%'],
            ['Pacientes con estancia > 4 h > 90%'],
            ['Retraso en el triaje > 5 min'],
            ['Índice de ocupación del SUH > 100%'],
            ['Retraso en la valoración diagnóstica de pacientes > 30 min'],
            ['Alta no comunicada de pacientes > 5%']
          ],
          caption: 'Criterios de saturación del Servicio de Urgencias hospitalario'
        }
      },
      {
        id: 'sec-1-causas-saturacion',
        title: 'Causas de Saturación',
        level: 3,
        bullets: [
          'Pacientes pendientes de ingreso en hospitalización',
          'Estructura física inadecuada de los SU y adaptabilidad limitada a la sobredemanda',
          'Falta de previsión en períodos de mayor afluencia de pacientes',
          'Personal sanitario insuficiente o con inadecuada preparación',
          'Falta de organización y retraso de los ingresos hospitalarios',
          'Retraso en la realización del ingreso o en el transporte en ambulancia'
        ]
      },
      {
        id: 'sec-1-organizacion',
        title: 'Organización',
        level: 1,
        content: 'Los SUH deben proporcionar una asistencia multidisciplinar. Tienen que cumplir una serie de requisitos funcionales, estructurales y organizativos con el fin de garantizar la atención urgente y emergente, cumpliendo siempre unas condiciones de calidad, eficiencia y seguridad adecuadas.',
      },
      {
        id: 'sec-1-atencion-medica',
        title: 'La Atención Médica en Urgencias Comprende',
        level: 2,
        bullets: [
          'Triaje: clasificación de los pacientes con el fin de priorizar la asistencia sanitaria y asignar el recurso asistencial adecuado a los pacientes que acuden a los SUH',
          'Atención a la urgencia vital (emergencia, politraumatizado, reanimación cardiopulmonar [RCP])',
          'Atención a la patología urgente clínicamente objetivable',
          'Atención a la patología menos urgente y no urgente con respuesta adaptada a la solicitud',
          'Observación clínica: el funcionamiento de la observación es equiparable al de una unidad de hospitalización, donde se podrán realizar el tratamiento y la valoración de la evolución'
        ]
      },
      {
        id: 'sec-1-recomendaciones',
        title: 'Recomendaciones de Organización',
        level: 2,
        bullets: [
          'Deben funcionar las 24 h del día todos los días del año',
          'Existencia de un responsable médico y de un responsable de Enfermería',
          'Protocolos de actuación con los distintos servicios',
          'Los SUH deben disponer de un sistema de triaje',
          'El tiempo máximo de observación-valoración del paciente en un SUH no ha de sobrepasar las 24 h',
          'Si el paciente debe permanecer más de 6 h en Urgencias, se recomienda que sea atendido en la UO',
          'Ningún paciente pendiente de ingreso debe permanecer más de 12 h desde que se ordena el mismo en los SUH',
          'El 90% de los pacientes atendidos en Urgencias tienen que ser dados de alta, ingresados o trasladados a otro centro en 4 h',
          'Protocolización de la actividad médica y de Enfermería los procesos y procedimientos más frecuentes',
          'Protocolización del funcionamiento del equipo en la RCP',
          'Se recomienda el cumplimiento de los estándares de seguridad del paciente',
          'Informe de alta firmado y con identificación del responsable atendido'
        ]
      },
      {
        id: 'sec-1-estructura',
        title: 'Estructura',
        level: 2,
        content: 'El SU debe estar diferenciado del resto de niveles asistenciales del hospital, tales como hospitalización y consulta externa, y señalado de forma adecuada. Los SUH deben disponer de accesos para vehículos y peatones adecuados, recepción y clasificación de los pacientes que precisan atención urgente, salas de espera para familiares, consultas y boxes de exploración, área de observación (camas y sillones), salas especiales (aislamiento, yesos, Psiquiatría, curas...) y salas auxiliares (almacén de material, despachos, salas de descanso, habitaciones de guardia, etc.).'
      },
      {
        id: 'sec-1-triaje',
        title: 'Triaje',
        level: 2,
        content: 'Permite una gestión del riesgo clínico y una valoración de los pacientes en función del grado de urgencia para poder manejar adecuadamente y con seguridad la demanda asistencial. Se trata primero a los pacientes más graves. Debe ser estructurado y evaluar de forma rápida la gravedad de cada paciente, de una manera reglada, válida y reproducible.',
      },
      {
        id: 'sec-1-funciones-triaje',
        title: 'Funciones del Triaje',
        level: 3,
        bullets: [
          'Identificar a los pacientes con riesgo vital',
          'Priorizar en función del nivel de clasificación',
          'Asegurar la reevaluación de los pacientes en espera',
          'Asignar el área más adecuada a cada paciente',
          'Aportar información acerca del proceso asistencial',
          'Ayudar a corregir las situaciones de saturación del SU y disminuir la congestión de las áreas de tratamiento',
          'Suministrar información para mejorar el funcionamiento del SU con el objetivo de optimizar los recursos y lograr una gestión de calidad'
        ]
      },
      {
        id: 'sec-1-niveles-priorizacion',
        title: 'Niveles de Priorización',
        level: 3,
        table: {
          headers: ['Nivel', 'Gravedad', 'Urgencia', 'Categoría', 'Tiempo de Atención'],
          rows: [
            ['I', 'Máxima', 'Reanimación', 'Rojo', 'Inmediato'],
            ['II', 'Alta', 'Emergencia', 'Naranja', 'Inmediato enfermería / 7 min médico'],
            ['III', 'Media', 'Urgente', 'Amarillo', '45 min'],
            ['IV', 'Baja', 'Menos urgente', 'Verde', '120 min'],
            ['V', 'Mínima', 'No urgente', 'Azul', '240 min']
          ],
          caption: 'Sistema de triaje de 5 niveles'
        }
      },
      {
        id: 'sec-1-triaje-avanzado',
        title: 'Otras Formas de Triaje',
        level: 3,
        bullets: [
          'Triaje avanzado: variación del triaje estructurado donde se establecen protocolos específicos de acuerdo con la prioridad asignada, permitiendo solicitar analíticas o radiologías antes de la consulta médica',
          'Triaje multidisciplinar: equipo formado siempre por un médico y un enfermero, donde la valoración inicial es realizada por un médico quien solicita pruebas complementarias iniciales'
        ]
      },
      {
        id: 'sec-1-unidades',
        title: 'Unidades Funcionales',
        level: 1,
        content: 'En los últimos años, debido principalmente al continuo aumento de la demanda, a la saturación de los SUH y a la búsqueda de diferentes métodos alternativos a la hospitalización convencional, han surgido diferentes formas de organización con el fin de lograr una asistencia de mayor calidad.'
      },
      {
        id: 'sec-1-uo',
        title: 'Unidades de Observación',
        level: 2,
        content: 'Si el paciente tiene que permanecer más de 6 h en el SUH, debe ser atendido en las Unidades de Observación (UO), dotadas de cama o sillones, con una estancia máxima de 24 h. Deben ser imprescindibles dentro de la organización del SU. Se recomienda que en las UO existan protocolos de ingreso y derivación y alta claramente detallados y que tengan una capacidad mínima para atender el 10% de la demanda urgente diaria.'
      },
      {
        id: 'sec-1-uce',
        title: 'Unidad de Corta Estancia',
        level: 2,
        content: 'Son áreas dependientes desde el punto de vista organizativo de los SUH con criterios de ingreso de pacientes determinados por protocolos con una duración no superior a 72 h. Los objetivos principales de la Unidad de Corta Estancia (UCE) son optimizar las estancias hospitalarias de los pacientes con enfermedades crónicas y mejorar el drenaje de los pacientes.'
      },
      {
        id: 'sec-1-udt',
        title: 'Unidades de Dolor Torácico',
        level: 2,
        content: 'El objetivo principal de estas unidades es identificar de forma precoz a los pacientes con síndrome coronario agudo que tiene indicación de reperfusión precoz. No solamente tienen unas implicaciones pronósticas muy importantes, sino que también evitan altas hospitalarias equivocadas. Las Unidades de Dolor Torácico (UDT) han demostrado poder realizar diagnósticos correctos y precoces.'
      },
      {
        id: 'sec-1-semicriticos',
        title: 'Unidades de Semicríticos',
        level: 2,
        content: 'Cada vez más se están estableciendo áreas en los SU donde atender a pacientes agudos, sobre todo durante las primeras 4 h, que necesitan una mayor carga de trabajo para su estabilización.'
      }
    ],
    keyPointsRemember: [
      'Los SUH deben proporcionar una asistencia multidisciplinar cumpliendo condiciones de calidad, eficiencia y seguridad',
      'El triaje es esencial para valorar la calidad de un SU y debe ser la puerta de entrada a una asistencia eficaz y eficiente',
      'Los sistemas de triaje estructurado se basan en escalas de 5 niveles de priorización',
      'Las Unidades de Observación son imprescindibles en la organización del SU con estancia máxima de 24 h',
      'La saturación del SU es un problema de todo el hospital, no exclusivamente de Urgencias'
    ]
  },
  {
    id: 'cap-02',
    number: 2,
    title: 'Aspectos Médico-Legales en Urgencias',
    authors: ['Rafael Velayos Rubio', 'Ian Pérez López', 'Carlos Bibiano Guillén'],
    sections: [
      {
        id: 'sec-2-intro',
        title: 'Introducción y Definición',
        level: 1,
        content: 'Para cualquier profesional, es necesario un conocimiento básico de las normas y leyes que regulan su actividad habitual. El médico de Urgencias debe por tanto conocer y ajustarse al ordenamiento jurídico, con la dificultad añadida del entorno que le rodea: en muchas ocasiones con un tiempo limitado de ejecución, con pocas posibilidades de asesoramiento legal y sometido a la presión de las decisiones asistenciales intrínsecas al Servicio de Urgencias (SU).'
      },
      {
        id: 'sec-2-admision',
        title: 'Admisión en el Servicio de Urgencias',
        level: 1,
        content: ''
      },
      {
        id: 'sec-2-traslados',
        title: 'Traslados Forzosos',
        level: 2,
        content: 'El traslado urgente a un centro hospitalario puede ser considerado por cualquiera de los médicos responsables de atención extrahospitalaria (Atención Primaria, Unidad de Salud Mental, Centro Coordinador de Emergencias Extrahospitalarias) o por los agentes de los Cuerpos y Fuerzas de Seguridad del Estado (CFSE) tras contacto con el Centro de Coordinación de Emergencias. Los traslados forzosos deben comunicarse a la Guardia de Psiquiatría, ya que será esta especialidad la que determine la necesidad de ingreso involuntario y comunicará el hecho al Juzgado de Guardia.'
      },
      {
        id: 'sec-2-fallecido',
        title: 'Paciente Fallecido en el Traslado',
        level: 2,
        content: 'Ningún médico está obligado a firmar un Certificado de defunción. Un fallecimiento debe ser objeto de judicialización si su causa puede ser violenta, desconocida o sospechosa de criminalidad. No debería certificarse si no existe ningún médico que haya atendido al paciente en los últimos momentos o que conozca las patologías previas. En general, no se recomienda certificar muertes de posible causa traumática, tóxica o por asfixia o muertes súbitas sospechosas de criminalidad.'
      },
      {
        id: 'sec-2-intoxicados',
        title: 'Pacientes Intoxicados. Cadena de Custodia',
        level: 2,
        content: 'Ante un paciente con sospecha de intoxicación el facultativo debe plantearse inicialmente si a la misma se le pueden vincular repercusiones médico-legales. Si la intoxicación puede tener repercusiones médico-legales, debe respetarse en todo momento la cadena de custodia en toma, transporte, procesamiento y almacenaje de la misma hasta su traslado al Instituto Nacional de Toxicología.',
        bullets: [
          'La cadena de custodia es el procedimiento destinado a avalar la individualización, seguridad y preservación de los elementos materiales y evidencias',
          'Debe cumplimentarse un impreso con hora, fecha, nombre y firma de participantes, motivos de extracción y resumen de historia clínica',
          'Si la solicitud la realizan los CFSE, el paciente debe estar consciente y dar su consentimiento',
          'En caso de no estar consciente o no dar consentimiento, no se puede realizar la extracción salvo orden judicial'
        ]
      },
      {
        id: 'sec-2-procedimiento',
        title: 'Procedimiento Diagnóstico y Terapéutico',
        level: 1,
        content: ''
      },
      {
        id: 'sec-2-historia',
        title: 'Historia Clínica',
        level: 2,
        content: 'Es el instrumento esencial de registro de información del que se valen todos los profesionales que participan en el proceso asistencial y además un derecho del paciente. Constituye un elemento susceptible de ser analizado desde el punto de vista jurídico para confirmar el cumplimiento de los deberes impuestos por la ley, por lo que debe cumplir unos estándares adecuados de calidad.',
        bullets: [
          'Se deben identificar los profesionales participantes',
          'Debe ser veraz, comprensible, ordenada y actualizada',
          'Reflejar elementos "positivos" y "negativos" pertinentes según el procedimiento diagnóstico',
          'Los diagnósticos de sospecha y diagnóstico diferencial deben quedar reflejados de forma explícita',
          'Desde un punto de vista legal, la información contenida se presume cierta salvo prueba en contrario'
        ]
      },
      {
        id: 'sec-2-excepciones-info',
        title: 'Excepciones para Compartir Información Clínica',
        level: 3,
        bullets: [
          'Situaciones de emergencia en las que el paciente no pueda consentir',
          'Riesgo para la salud pública (tuberculosis)',
          'Menores',
          'Incapacidad judicial (por sentencia o en casos de deterioro cognitivo grave)',
          'Incapacidad transitoria (intoxicaciones graves)',
          'Casos en que la información pueda considerarse perjudicial para el paciente (privilegio terapéutico)'
        ]
      },
      {
        id: 'sec-2-consentimiento',
        title: 'Consentimiento Informado',
        level: 2,
        content: 'El artículo 3 de la Ley de Autonomía del paciente define el consentimiento informado como la conformidad libre, voluntaria y consciente de un paciente, manifestada en el pleno uso de sus facultades, después de recibir la información adecuada para que tenga lugar una actuación que afecta a su salud.',
        bullets: [
          'Todo procedimiento debe regirse por el principio de una información veraz transmitida de forma verbal, comprensible e individualizada',
          'La información debe entenderse como un proceso gradual y continuado a lo largo del proceso asistencial',
          'La información debe ir dirigida fundamentalmente al paciente',
          'Para procedimientos complejos o técnicas invasivas se requiere información escrita',
          'Los documentos han de ser personalizados añadiendo texto libre según las circunstancias específicas'
        ]
      },
      {
        id: 'sec-2-menores',
        title: 'Consentimiento en Menores',
        level: 3,
        bullets: [
          'Menores de 12 años: el consentimiento ha de ser otorgado por los padres',
          'Entre 12 y 16 años: el paciente debe ser informado y escuchado, evaluándose su capacidad; en caso de inmadurez, consentimiento por los padres',
          'Mayores de 16 años: el propio paciente da su consentimiento si tiene capacidad para comprender',
          'Excepciones: interrupción voluntaria del embarazo, participación en ensayos clínicos y técnicas de reproducción'
        ]
      },
      {
        id: 'sec-2-responsabilidad',
        title: 'Responsabilidad Clínica',
        level: 2,
        content: 'La responsabilidad médica se define como la obligación del médico de reparar y satisfacer las consecuencias de sus actos, omisiones y errores, voluntarios e involuntarios, cometidos en el ejercicio de su profesión.',
        numberedList: [
          'Acción u omisión en el deber de asistencia o infracción de la lex artis ad hoc',
          'Generación de un daño',
          'Existencia de relación de causalidad entre el daño y la asistencia u omisión de asistencia'
        ]
      },
      {
        id: 'sec-2-tipos-responsabilidad',
        title: 'Tipos de Responsabilidad',
        level: 3,
        bullets: [
          'Penal: daño ocasionado por actos u omisiones tipificados como delito grave, menos grave o leve en el Código Penal. Puede ser dolosa (voluntaria) o imprudente',
          'Civil: daño ocasionado que puede ser indemnizado económicamente y no es punible penalmente. Se deriva de impericia o negligencia profesional',
          'Disciplinaria: se deriva de una situación de dependencia jerárquica en un contexto laboral',
          'Deontológica: se deriva de pertenecer a un colegio profesional, obligando a observar las normas del mismo'
        ]
      },
      {
        id: 'sec-2-alta',
        title: 'Fin de la Asistencia. Alta Hospitalaria',
        level: 1,
        content: ''
      },
      {
        id: 'sec-2-alta-voluntaria',
        title: 'Alta Voluntaria',
        level: 2,
        content: 'Desde el momento en que un ciudadano es admitido como paciente en el SU se inicia un procedimiento diagnóstico y terapéutico que el propio paciente puede interrumpir de forma voluntaria en cualquier momento. Como única excepción se encuentra aquella situación en la que el paciente se encuentra privado de su capacidad de decisión coherente y razonada por motivos neurológicos o psiquiátricos.',
        bullets: [
          'La evaluación de la capacidad de elección depende de los facultativos del SU',
          'Se recomienda evaluación colegiada y en colaboración con Psiquiatría',
          'En el documento de alta voluntaria deben especificarse las causas por las que se recomienda permanencia',
          'El paciente debe abandonar el hospital con el Informe de alta con hipótesis diagnósticas y tratamientos'
        ]
      },
      {
        id: 'sec-2-parte-judicial',
        title: 'Parte Judicial. Parte de Lesiones',
        level: 2,
        content: 'Es la notificación escrita que debe realizar el médico a la autoridad judicial para ponerle en conocimiento de la existencia de unas lesiones, en caso de que se sospeche la existencia de que han podido derivarse de la comisión de un delito (Ley de Enjuiciamiento Criminal, art. 355).',
        bullets: [
          'Maltrato a pacientes menores o incapaces, a mujeres',
          'Abortos no incluidos en los supuestos legales',
          'Agresiones sexuales',
          'Heridas por arma blanca o de fuego',
          'Envenenamiento o intoxicación',
          'Agresiones o peleas',
          'Auxilio o cooperación en el suicidio',
          'Muertes de causa no natural',
          'Accidente de tráfico o accidente laboral'
        ]
      },
      {
        id: 'sec-2-gravedad-lesiones',
        title: 'Clasificación de Gravedad de Lesiones',
        level: 3,
        table: {
          headers: ['Tipo', 'Tiempo de Curación'],
          rows: [
            ['Leves', 'Hasta 15 días'],
            ['Menos graves', 'Entre 15 y 30 días'],
            ['Graves', 'Más de 30 días'],
            ['Reservado', 'Cuando no es posible calificar la gravedad']
          ],
          caption: 'Clasificación médico-legal de lesiones por tiempo de curación'
        }
      }
    ],
    keyPointsRemember: [
      'Es necesario para los profesionales del SU un conocimiento básico de las normas y leyes que regulan su actividad habitual',
      'Los facultativos del SU deben plantearse si puede existir repercusión médico-legal en determinadas atenciones (intoxicaciones, accidentes, agresiones, suicidios...)',
      'La historia clínica constituye un elemento susceptible de ser analizado desde el punto de vista jurídico',
      'Un paciente puede interrumpir el procedimiento diagnóstico o terapéutico voluntariamente en cualquier momento, excepto por razones de salud pública o si está privado de su capacidad de decisión'
    ]
  }
]

export function getChapterContent(chapterId: string): ChapterContent | undefined {
  return chaptersContent.find(c => c.id === chapterId)
}

export function getChapterByNumber(number: number): ChapterContent | undefined {
  return chaptersContent.find(c => c.number === number)
}

export function getAllChapters(): ChapterContent[] {
  return chaptersContent
}
