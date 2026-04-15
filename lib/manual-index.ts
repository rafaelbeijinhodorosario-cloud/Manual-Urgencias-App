// Manual de Urgencias 3ra Edición - Índice Completo Estructurado
// Este archivo contiene la estructura jerárquica completa del manual para la navegación de la app

export interface Chapter {
  id: string
  number: number
  title: string
  page: number
  keywords?: string[]
}

export interface Section {
  id: string
  title: string
  chapters: Chapter[]
}

export const manualIndex: Section[] = [
  {
    id: "introduccion",
    title: "Introducción",
    chapters: [
      { id: "cap-1", number: 1, title: "Servicio de urgencias. Estructura y organización. Aspectos generales", page: 21 },
      { id: "cap-2", number: 2, title: "Aspectos médico-legales en urgencias", page: 26 },
    ]
  },
  {
    id: "generalidades",
    title: "Generalidades de la Atención al Paciente Urgente",
    chapters: [
      { id: "cap-3", number: 3, title: "Radiología en urgencias", page: 35 },
      { id: "cap-4", number: 4, title: "Procedimientos de enfermería en urgencias", page: 48 },
      { id: "cap-5", number: 5, title: "Técnicas en urgencias", page: 53 },
      { id: "cap-6", number: 6, title: "Ecografía en urgencias", page: 64 },
      { id: "cap-7", number: 7, title: "Interpretación del electrocardiograma en urgencias", page: 79 },
      { id: "cap-8", number: 8, title: "Analgesia en el servicio de urgencias", page: 92 },
      { id: "cap-9", number: 9, title: "Ventilación mecánica no invasiva en urgencias", page: 102 },
    ]
  },
  {
    id: "abordaje-sintomas",
    title: "Abordaje por Síntomas/Síndromes",
    chapters: [
      { id: "cap-10", number: 10, title: "Alteración del nivel de conciencia", page: 117 },
      { id: "cap-11", number: 11, title: "Dolor torácico agudo", page: 122 },
      { id: "cap-12", number: 12, title: "Síncope", page: 127 },
      { id: "cap-13", number: 13, title: "Fiebre", page: 130 },
      { id: "cap-14", number: 14, title: "Dolor abdominal agudo", page: 134 },
      { id: "cap-15", number: 15, title: "Náuseas y vómitos", page: 139 },
      { id: "cap-16", number: 16, title: "Diarrea aguda", page: 144 },
      { id: "cap-17", number: 17, title: "Disnea", page: 147 },
      { id: "cap-18", number: 18, title: "Tos aguda", page: 152 },
    ]
  },
  {
    id: "anciano",
    title: "Anciano en Urgencias",
    chapters: [
      { id: "cap-19", number: 19, title: "Valoración geriátrica abreviada adaptada a urgencias", page: 163 },
      { id: "cap-20", number: 20, title: "Síndrome confusional agudo en el anciano", page: 172 },
      { id: "cap-21", number: 21, title: "Caídas en el paciente anciano", page: 181 },
      { id: "cap-22", number: 22, title: "Principios de la prescripción farmacológica en el anciano", page: 186 },
    ]
  },
  {
    id: "violencia",
    title: "Violencia en Urgencias",
    chapters: [
      { id: "cap-23", number: 23, title: "Violencia de pareja hacia la mujer", page: 199 },
      { id: "cap-24", number: 24, title: "Violencia sexual contra las mujeres", page: 208 },
      { id: "cap-25", number: 25, title: "Violencia contra las personas mayores", page: 220 },
      { id: "cap-26", number: 26, title: "Sospecha de maltrato infantil", page: 230 },
      { id: "cap-27", number: 27, title: "Violencia contra profesionales sanitarios", page: 242 },
    ]
  },
  {
    id: "urgencia-vital",
    title: "Urgencia Vital",
    chapters: [
      { id: "cap-28", number: 28, title: "Soporte vital básico o reanimación cardiopulmonar básica en el adulto", page: 253 },
      { id: "cap-29", number: 29, title: "Soporte vital avanzado en el adulto o reanimación cardiopulmonar avanzada", page: 260 },
      { id: "cap-30", number: 30, title: "Atención inicial al paciente con trauma grave", page: 268 },
      { id: "cap-31", number: 31, title: "Coma", page: 277 },
      { id: "cap-32", number: 32, title: "Shock", page: 285 },
      { id: "cap-33", number: 33, title: "Sedoanalgesia para procedimientos en urgencias. Secuencia rápida de intubación", page: 293, keywords: ["sedoanalgesia", "intubación", "SRI"] },
      { id: "cap-34", number: 34, title: "Fármacos en la urgencia vital", page: 307 },
    ]
  },
  {
    id: "cardiologia",
    title: "Cardiología",
    chapters: [
      { id: "cap-35", number: 35, title: "Síndrome coronario agudo", page: 319, keywords: ["infarto", "código infarto", "SCA", "SCACEST", "SCASEST"] },
      { id: "cap-36", number: 36, title: "Insuficiencia cardíaca aguda. Edema agudo de pulmón", page: 331, keywords: ["EAP", "ICC"] },
      { id: "cap-37", number: 37, title: "Urgencia y emergencia hipertensiva", page: 339, keywords: ["crisis hipertensiva", "HTA"] },
      { id: "cap-38", number: 38, title: "Bradiarritmias", page: 347 },
      { id: "cap-39", number: 39, title: "Taquiarritmias", page: 354 },
      { id: "cap-40", number: 40, title: "Fibrilación auricular", page: 364, keywords: ["FA", "ACxFA"] },
      { id: "cap-41", number: 41, title: "Síndrome aórtico agudo", page: 373, keywords: ["disección aórtica", "aneurisma"] },
      { id: "cap-42", number: 42, title: "Isquemia arterial periférica aguda", page: 381 },
      { id: "cap-43", number: 43, title: "Disfunción valvular aguda", page: 386 },
      { id: "cap-44", number: 44, title: "Pericarditis, derrame pericárdico y taponamiento cardíaco", page: 394 },
    ]
  },
  {
    id: "neumologia",
    title: "Neumología",
    chapters: [
      { id: "cap-45", number: 45, title: "Hemoptisis", page: 409 },
      { id: "cap-46", number: 46, title: "Insuficiencia respiratoria aguda", page: 417, keywords: ["IRA"] },
      { id: "cap-47", number: 47, title: "Agudización de la enfermedad pulmonar obstructiva crónica", page: 424, keywords: ["EPOC", "exacerbación EPOC"] },
      { id: "cap-48", number: 48, title: "Crisis asmática", page: 431, keywords: ["asma", "broncoespasmo"] },
      { id: "cap-49", number: 49, title: "Enfermedad tromboembólica venosa", page: 438, keywords: ["TEP", "TVP", "tromboembolismo pulmonar"] },
      { id: "cap-50", number: 50, title: "Manejo del derrame pleural en urgencias. Empiema", page: 453 },
      { id: "cap-51", number: 51, title: "Síndrome de embolia grasa", page: 458 },
      { id: "cap-52", number: 52, title: "Neumotórax y neumomediastino", page: 462 },
    ]
  },
  {
    id: "digestivo",
    title: "Digestivo",
    chapters: [
      { id: "cap-53", number: 53, title: "Estreñimiento. Obstrucción intestinal", page: 475 },
      { id: "cap-54", number: 54, title: "Hemorragia digestiva aguda", page: 484, keywords: ["HDA", "HDB", "melenas", "hematemesis"] },
      { id: "cap-55", number: 55, title: "Ictericia", page: 492 },
      { id: "cap-56", number: 56, title: "Hepatitis aguda. Insuficiencia hepática aguda grave", page: 498, keywords: ["fallo hepático"] },
      { id: "cap-57", number: 57, title: "Ascitis y encefalopatía hepática", page: 510 },
      { id: "cap-58", number: 58, title: "Patología biliar aguda", page: 522, keywords: ["colecistitis", "cólico biliar", "colangitis"] },
      { id: "cap-59", number: 59, title: "Pancreatitis aguda", page: 530 },
      { id: "cap-60", number: 60, title: "Diverticulitis aguda", page: 539 },
      { id: "cap-61", number: 61, title: "Apendicitis aguda", page: 544 },
      { id: "cap-62", number: 62, title: "Isquemia mesentérica aguda", page: 550 },
      { id: "cap-63", number: 63, title: "Enfermedad inflamatoria intestinal", page: 556, keywords: ["EII", "Crohn", "colitis ulcerosa"] },
      { id: "cap-64", number: 64, title: "Urgencias esofágicas", page: 567 },
      { id: "cap-65", number: 65, title: "Hernias abdominales en urgencias", page: 576 },
      { id: "cap-66", number: 66, title: "Patología anal urgente", page: 581 },
    ]
  },
  {
    id: "nefrologia-urologia",
    title: "Nefrología y Urología",
    chapters: [
      { id: "cap-67", number: 67, title: "Fracaso renal agudo", page: 595, keywords: ["FRA", "IRA", "insuficiencia renal"] },
      { id: "cap-68", number: 68, title: "Interpretación del análisis de orina", page: 603 },
      { id: "cap-69", number: 69, title: "Cólico renoureteral y uropatía obstructiva", page: 606, keywords: ["cólico nefrítico", "litiasis"] },
      { id: "cap-70", number: 70, title: "Hematuria", page: 613 },
      { id: "cap-71", number: 71, title: "Síndrome escrotal agudo", page: 620, keywords: ["torsión testicular"] },
      { id: "cap-72", number: 72, title: "Rabdomiólisis", page: 626 },
      { id: "cap-73", number: 73, title: "Traumatismos urológicos. Priapismo", page: 633 },
    ]
  },
  {
    id: "hidroelectroliticos",
    title: "Trastornos Hidroelectrolíticos",
    chapters: [
      { id: "cap-74", number: 74, title: "Alteración del equilibrio ácido-base. Interpretación de la gasometría arterial y venosa", page: 647, keywords: ["gasometría", "acidosis", "alcalosis"] },
      { id: "cap-75", number: 75, title: "Alteraciones del sodio", page: 658, keywords: ["hiponatremia", "hipernatremia"] },
      { id: "cap-76", number: 76, title: "Alteraciones del potasio. Hiperpotasemia e hipopotasemia", page: 666, keywords: ["hiperkaliemia", "hipokaliemia"] },
      { id: "cap-77", number: 77, title: "Alteraciones del calcio y del magnesio", page: 674, keywords: ["hipocalcemia", "hipercalcemia", "hipomagnesemia"] },
      { id: "cap-78", number: 78, title: "Fluidoterapia en urgencias", page: 683, keywords: ["sueroterapia", "cristaloides", "coloides"] },
    ]
  },
  {
    id: "neurologia",
    title: "Neurología",
    chapters: [
      { id: "cap-79", number: 79, title: "Patología cerebrovascular aguda", page: 695, keywords: ["ictus", "código ictus", "ACV", "AIT", "stroke"] },
      { id: "cap-80", number: 80, title: "Hemorragia subaracnoidea espontánea", page: 706, keywords: ["HSA"] },
      { id: "cap-81", number: 81, title: "Síndrome confusional agudo", page: 713, keywords: ["delirium"] },
      { id: "cap-82", number: 82, title: "Crisis comiciales. Estatus epiléptico", page: 721, keywords: ["convulsiones", "epilepsia", "status epilepticus"] },
      { id: "cap-83", number: 83, title: "Cefaleas y algias craneales. Neuralgia del trigémino", page: 732, keywords: ["migraña", "cefalea tensional"] },
      { id: "cap-84", number: 84, title: "Mareo y vértigo", page: 740, keywords: ["vértigo periférico", "vértigo central"] },
      { id: "cap-85", number: 85, title: "Distonías agudas", page: 747 },
      { id: "cap-86", number: 86, title: "Ataxia y trastornos de la marcha", page: 753 },
      { id: "cap-87", number: 87, title: "Neuropatías periféricas agudas. Síndrome de Guillain-Barré", page: 759, keywords: ["SGB", "polirradiculoneuropatía"] },
      { id: "cap-88", number: 88, title: "Otras urgencias neurológicas. Miastenia gravis. Esclerosis múltiple. Mielitis transversa aguda. Amnesia global transitoria", page: 765 },
    ]
  },
  {
    id: "infecciosas",
    title: "Infecciosas",
    chapters: [
      { id: "cap-89", number: 89, title: "Consideraciones generales sobre patología infecciosa", page: 781 },
      { id: "cap-90", number: 90, title: "Profilaxis de infección en urgencias. Medidas de aislamiento", page: 792 },
      { id: "cap-91", number: 91, title: "Sepsis: atención en urgencias", page: 800, keywords: ["sepsis", "shock séptico", "código sepsis"] },
      { id: "cap-92", number: 92, title: "Infecciones vías respiratorias altas y ORL", page: 813, keywords: ["faringitis", "amigdalitis", "otitis", "sinusitis"] },
      { id: "cap-93", number: 93, title: "Gripe", page: 832, keywords: ["influenza"] },
      { id: "cap-94", number: 94, title: "Neumonía adquirida en la comunidad", page: 839, keywords: ["NAC"] },
      { id: "cap-95", number: 95, title: "Neumonía en situaciones especiales. Neumonía nosocomial, riesgo de patógeno no habitual/multirresistencia, necrotizante, aspirativa", page: 851 },
      { id: "cap-96", number: 96, title: "Tuberculosis pulmonar", page: 860, keywords: ["TBC", "TB"] },
      { id: "cap-97", number: 97, title: "Infecciones del tracto urinario", page: 868, keywords: ["ITU", "cistitis", "pielonefritis"] },
      { id: "cap-98", number: 98, title: "Infección intraabdominal", page: 874 },
      { id: "cap-99", number: 99, title: "Gastroenteritis aguda", page: 881, keywords: ["GEA"] },
      { id: "cap-100", number: 100, title: "Infección de piel y partes blandas. Herida quirúrgica", page: 889, keywords: ["celulitis", "erisipela", "fascitis necrotizante"] },
      { id: "cap-101", number: 101, title: "Infecciones del sistema nervioso central. Meningitis, encefalitis y absceso cerebral", page: 897, keywords: ["meningitis bacteriana", "meningoencefalitis"] },
      { id: "cap-102", number: 102, title: "Endocarditis infecciosa y bacteriemia asociada a catéter", page: 907 },
      { id: "cap-103", number: 103, title: "Infecciones osteoarticulares", page: 913, keywords: ["artritis séptica", "osteomielitis"] },
      { id: "cap-104", number: 104, title: "Infecciones oftalmológicas", page: 923, keywords: ["conjuntivitis", "queratitis"] },
      { id: "cap-105", number: 105, title: "Infecciones ginecológicas", page: 929, keywords: ["EPI", "enfermedad pélvica inflamatoria"] },
      { id: "cap-106", number: 106, title: "Enfermedades de transmisión sexual", page: 938, keywords: ["ETS", "ITS"] },
      { id: "cap-107", number: 107, title: "Fiebre en el viajero e infecciones en la globalización", page: 946, keywords: ["malaria", "dengue"] },
      { id: "cap-108", number: 108, title: "Infección en el paciente neutropénico", page: 953, keywords: ["neutropenia febril"] },
      { id: "cap-109", number: 109, title: "Paciente con VIH en urgencias", page: 960, keywords: ["SIDA"] },
      { id: "cap-110", number: 110, title: "Infección en el paciente inmunodeprimido: esplenectomizado, trasplantado o con fármacos inmunosupresores", page: 968 },
      { id: "cap-111", number: 111, title: "Botulismo, tétanos y rabia", page: 977 },
      { id: "cap-112", number: 112, title: "Profilaxis post-exposición en relación con el VIH, VHB y VHC", page: 982, keywords: ["PPE", "accidente biológico"] },
    ]
  },
  {
    id: "endocrinologia",
    title: "Endocrinología",
    chapters: [
      { id: "cap-113", number: 113, title: "Manejo del paciente diabético en urgencias", page: 1005, keywords: ["diabetes", "DM"] },
      { id: "cap-114", number: 114, title: "Hipoglucemia", page: 1013 },
      { id: "cap-115", number: 115, title: "Cetoacidosis diabética e hiperglucemia hiperosmolar. Hiperglucemia simple", page: 1019, keywords: ["CAD", "EHH"] },
      { id: "cap-116", number: 116, title: "Otras urgencias endocrinológicas", page: 1029, keywords: ["crisis tiroidea", "insuficiencia suprarrenal", "crisis adrenal"] },
    ]
  },
  {
    id: "ginecologia-obstetricia",
    title: "Ginecología y Obstetricia",
    chapters: [
      { id: "cap-117", number: 117, title: "Asistencia al parto extrahospitalario", page: 1041 },
      { id: "cap-118", number: 118, title: "Urgencias ginecológicas", page: 1049 },
      { id: "cap-119", number: 119, title: "Urgencias en la mujer embarazada", page: 1059, keywords: ["preeclampsia", "eclampsia", "embarazo ectópico"] },
      { id: "cap-120", number: 120, title: "Fármacos y vacunas en la gestación", page: 1067 },
    ]
  },
  {
    id: "hematologia",
    title: "Hematología",
    chapters: [
      { id: "cap-121", number: 121, title: "Anemia", page: 1079 },
      { id: "cap-122", number: 122, title: "Leucemia aguda", page: 1085 },
      { id: "cap-123", number: 123, title: "Trombocitopenia. Leucopenia. Pancitopenia", page: 1093, keywords: ["PTI"] },
      { id: "cap-124", number: 124, title: "Diátesis hemorrágica", page: 1102, keywords: ["coagulopatía", "CID"] },
      { id: "cap-125", number: 125, title: "Anticoagulación y tromboprofilaxis en urgencias", page: 1109, keywords: ["ACO", "HBPM", "anticoagulantes"] },
      { id: "cap-126", number: 126, title: "Hemoterapia", page: 1122, keywords: ["transfusión", "hemoderivados"] },
      { id: "cap-127", number: 127, title: "Urgencias oncológicas", page: 1129, keywords: ["síndrome de lisis tumoral", "compresión medular"] },
    ]
  },
  {
    id: "orl-ofg",
    title: "ORL-OFG",
    chapters: [
      { id: "cap-128", number: 128, title: "Ojo rojo y traumatismos oculares", page: 1141 },
      { id: "cap-129", number: 129, title: "Pérdida de visión brusca. Diplopía", page: 1148, keywords: ["amaurosis", "OACR", "OVCR"] },
      { id: "cap-130", number: 130, title: "Otalgia aguda", page: 1158 },
      { id: "cap-131", number: 131, title: "Parálisis facial periférica", page: 1162, keywords: ["parálisis de Bell"] },
      { id: "cap-132", number: 132, title: "Traumatismo nasal y epistaxis", page: 1167 },
      { id: "cap-133", number: 133, title: "Obstrucción aguda de la vía aérea superior. Cuerpos extraños", page: 1172 },
    ]
  },
  {
    id: "traumatologia",
    title: "Traumatología",
    chapters: [
      { id: "cap-134", number: 134, title: "Traumatismo craneoencefálico", page: 1183, keywords: ["TCE"] },
      { id: "cap-135", number: 135, title: "Traumatismo maxilofacial", page: 1192 },
      { id: "cap-136", number: 136, title: "Traumatismo torácico", page: 1199 },
      { id: "cap-137", number: 137, title: "Traumatismo abdominal", page: 1207 },
      { id: "cap-138", number: 138, title: "Traumatismo de columna vertebral", page: 1213 },
      { id: "cap-139", number: 139, title: "Lumbalgia y cervicalgia", page: 1221 },
      { id: "cap-140", number: 140, title: "Traumatismos de miembro superior y cintura escapular", page: 1230 },
      { id: "cap-141", number: 141, title: "Traumatismo miembro inferior y pelvis", page: 1240 },
      { id: "cap-142", number: 142, title: "Lesiones nerviosas periféricas", page: 1248 },
      { id: "cap-143", number: 143, title: "Tratamiento de las heridas y drenaje de abscesos", page: 1254 },
      { id: "cap-144", number: 144, title: "Síndrome compartimental agudo", page: 1262 },
    ]
  },
  {
    id: "reumatologia",
    title: "Reumatología",
    chapters: [
      { id: "cap-145", number: 145, title: "Monoartritis y poliartritis", page: 1277, keywords: ["gota", "artritis gotosa"] },
      { id: "cap-146", number: 146, title: "Polimialgia reumática y arteritis de células gigantes", page: 1286, keywords: ["arteritis temporal"] },
    ]
  },
  {
    id: "psiquiatria",
    title: "Psiquiatría",
    chapters: [
      { id: "cap-147", number: 147, title: "Agitación psicomotriz", page: 1295 },
      { id: "cap-148", number: 148, title: "Ansiedad y crisis de angustia", page: 1301, keywords: ["ataque de pánico"] },
      { id: "cap-149", number: 149, title: "Abordaje del paciente con intención suicida", page: 1307 },
    ]
  },
  {
    id: "alcohol",
    title: "Problemas Relacionados con el Consumo de Alcohol",
    chapters: [
      { id: "cap-150", number: 150, title: "Intoxicación etílica aguda", page: 1317 },
      { id: "cap-151", number: 151, title: "Síndrome de abstinencia alcohólica", page: 1322, keywords: ["delirium tremens"] },
      { id: "cap-152", number: 152, title: "Otras urgencias relacionadas con el alcohol: encefalopatía de Wernicke", page: 1327, keywords: ["Wernicke-Korsakoff"] },
    ]
  },
  {
    id: "toxicologia",
    title: "Toxicología",
    chapters: [
      { id: "cap-153", number: 153, title: "Atención inicial en las intoxicaciones agudas. Tratamiento y manejo general", page: 1333, keywords: ["intoxicación", "lavado gástrico", "carbón activado"] },
      { id: "cap-154", number: 154, title: "Intoxicaciones por fármacos", page: 1342, keywords: ["paracetamol", "benzodiacepinas", "opioides"] },
      { id: "cap-155", number: 155, title: "Intoxicaciones por drogas de abuso", page: 1354, keywords: ["cocaína", "heroína", "cannabis", "MDMA"] },
      { id: "cap-156", number: 156, title: "Intoxicación por agentes naturales: plantas, setas y animales", page: 1362, keywords: ["setas", "mordeduras", "picaduras"] },
      { id: "cap-157", number: 157, title: "Intoxicación por gases", page: 1371, keywords: ["CO", "monóxido de carbono", "humo"] },
      { id: "cap-158", number: 158, title: "Otras intoxicaciones: alcoholes, cáusticos y pesticidas", page: 1378, keywords: ["metanol", "etilenglicol", "lejía"] },
      { id: "cap-159", number: 159, title: "Actuación ante la sospecha de sumisión química", page: 1385 },
      { id: "cap-160", number: 160, title: "Índice de antídotos y antagonistas en el paciente adulto", page: 1395 },
    ]
  },
  {
    id: "paliativos",
    title: "Paliativos",
    chapters: [
      { id: "cap-161", number: 161, title: "Sedación paliativa en urgencias", page: 1407 },
      { id: "cap-162", number: 162, title: "Control de síntomas en el paciente paliativo en urgencias", page: 1412 },
    ]
  },
  {
    id: "miscelanea",
    title: "Miscelánea",
    chapters: [
      { id: "cap-163", number: 163, title: "Anafilaxia", page: 1423, keywords: ["shock anafiláctico", "reacción alérgica grave"] },
      { id: "cap-164", number: 164, title: "Urgencias dermatológicas", page: 1431, keywords: ["urticaria", "angioedema", "Stevens-Johnson"] },
      { id: "cap-165", number: 165, title: "Urgencias por frío", page: 1438, keywords: ["hipotermia", "congelación"] },
      { id: "cap-166", number: 166, title: "Urgencias por calor. Hipertermia", page: 1444, keywords: ["golpe de calor"] },
      { id: "cap-167", number: 167, title: "Ahogamiento", page: 1451 },
      { id: "cap-168", number: 168, title: "Quemaduras", page: 1456 },
      { id: "cap-169", number: 169, title: "Lesiones por electricidad", page: 1462, keywords: ["electrocución", "fulguración"] },
    ]
  },
  {
    id: "pediatria",
    title: "Pediatría",
    chapters: [
      { id: "cap-170", number: 170, title: "Triángulo de evaluación pediátrica", page: 1475, keywords: ["TEP"] },
      { id: "cap-171", number: 171, title: "Soporte vital pediátrico", page: 1478, keywords: ["RCP pediátrica"] },
      { id: "cap-172", number: 172, title: "Fiebre sin foco. Fiebre y petequias", page: 1487 },
      { id: "cap-173", number: 173, title: "Infección del tracto urinario", page: 1495 },
      { id: "cap-174", number: 174, title: "Intoxicaciones en pediatría", page: 1500 },
      { id: "cap-175", number: 175, title: "Urgencias neurológicas en la infancia", page: 1508, keywords: ["convulsión febril"] },
      { id: "cap-176", number: 176, title: "Patología respiratoria I: bronquiolitis. Laringitis/crup", page: 1517 },
      { id: "cap-177", number: 177, title: "Patología respiratoria II: neumonía adquirida en la comunidad y asma", page: 1524 },
      { id: "cap-178", number: 178, title: "Deshidratación. Rehidratación intravenosa", page: 1532 },
      { id: "cap-179", number: 179, title: "Patología digestiva I. Dolor abdominal. Vómitos", page: 1540 },
      { id: "cap-180", number: 180, title: "Patología digestiva II. Diarrea. Hemorragia digestiva", page: 1547 },
      { id: "cap-181", number: 181, title: "Urgencias en el lactante menor de 3 meses", page: 1556 },
      { id: "cap-182", number: 182, title: "Enfermedades exantemáticas", page: 1564 },
      { id: "cap-183", number: 183, title: "Pseudoanalgesia en pediatría", page: 1571 },
      { id: "cap-184", number: 184, title: "Fármacos en la urgencia pediátrica", page: 1580 },
      { id: "cap-185", number: 185, title: "Politraumatismos en pediatría", page: 1590 },
    ]
  },
  {
    id: "apendice",
    title: "Apéndice",
    chapters: [
      { id: "laboratorio", number: 0, title: "Laboratorio en urgencias", page: 1611 },
    ]
  },
  {
    id: "anexos",
    title: "Anexos",
    chapters: [
      { id: "anexo-1", number: 0, title: "Abreviaturas", page: 1625 },
      { id: "anexo-2", number: 0, title: "Palabras clave", page: 1634 },
      { id: "anexo-3", number: 0, title: "Índice de autores", page: 1644 },
    ]
  }
]

// Función auxiliar para buscar capítulos
export function searchChapters(query: string): { section: Section; chapter: Chapter }[] {
  const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const results: { section: Section; chapter: Chapter }[] = []
  
  for (const section of manualIndex) {
    for (const chapter of section.chapters) {
      const titleNormalized = chapter.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      const keywordsMatch = chapter.keywords?.some(kw => 
        kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedQuery)
      )
      
      if (titleNormalized.includes(normalizedQuery) || keywordsMatch) {
        results.push({ section, chapter })
      }
    }
  }
  
  return results
}

// Función para obtener todas las secciones (para el menú lateral)
export function getAllSections(): Section[] {
  return manualIndex
}

// Función para obtener un capítulo por ID
export function getChapterById(id: string): { section: Section; chapter: Chapter } | null {
  for (const section of manualIndex) {
    const chapter = section.chapters.find(ch => ch.id === id)
    if (chapter) {
      return { section, chapter }
    }
  }
  return null
}

// Estadísticas del manual
export const manualStats = {
  totalSections: manualIndex.length,
  totalChapters: manualIndex.reduce((acc, section) => acc + section.chapters.length, 0),
  totalPages: 1644 // Última página del índice de autores
}
