export interface Protocol {
  id: string
  title: string
  specialty: string
  summary: string
  keywords: string[]
}

export interface Specialty {
  id: string
  name: string
  icon: string
  protocols: Protocol[]
}

export const specialties: Specialty[] = [
  {
    id: 'cardiologia',
    name: 'Cardiología',
    icon: '❤️',
    protocols: [
      {
        id: 'codigo-infarto',
        title: 'Código Infarto (IAMCEST)',
        specialty: 'Cardiología',
        summary: 'Protocolo de activación y manejo del síndrome coronario agudo con elevación del ST. Incluye criterios de activación, tiempos objetivo y tratamiento inicial.',
        keywords: ['infarto', 'iamcest', 'coronario', 'reperfusión', 'troponinas']
      },
      {
        id: 'fibrilacion-auricular',
        title: 'Fibrilación Auricular',
        specialty: 'Cardiología',
        summary: 'Manejo de la FA de novo y descompensada. Control de frecuencia vs ritmo, anticoagulación y criterios de cardioversión.',
        keywords: ['fibrilación', 'auricular', 'anticoagulación', 'cardioversión']
      },
      {
        id: 'insuficiencia-cardiaca',
        title: 'Insuficiencia Cardíaca Aguda',
        specialty: 'Cardiología',
        summary: 'Evaluación y tratamiento de la IC aguda. Clasificación de Stevenson, diuréticos, vasodilatadores y soporte inotrópico.',
        keywords: ['insuficiencia', 'cardíaca', 'edema', 'pulmonar', 'diuréticos']
      }
    ]
  },
  {
    id: 'neurologia',
    name: 'Neurología',
    icon: '🧠',
    protocols: [
      {
        id: 'ictus',
        title: 'Código Ictus',
        specialty: 'Neurología',
        summary: 'Protocolo de atención al ictus agudo. Escalas NIHSS, criterios de fibrinólisis, trombectomía mecánica y manejo de complicaciones.',
        keywords: ['ictus', 'stroke', 'fibrinólisis', 'trombectomía', 'nihss']
      },
      {
        id: 'crisis-epilepticas',
        title: 'Crisis Epilépticas y Status',
        specialty: 'Neurología',
        summary: 'Manejo de crisis epilépticas aisladas y status epilepticus. Fármacos antiepilépticos de primera y segunda línea.',
        keywords: ['epilepsia', 'crisis', 'convulsión', 'status', 'antiepilépticos']
      },
      {
        id: 'cefalea',
        title: 'Cefalea en Urgencias',
        specialty: 'Neurología',
        summary: 'Diagnóstico diferencial de cefaleas. Signos de alarma, indicaciones de neuroimagen y tratamiento sintomático.',
        keywords: ['cefalea', 'migraña', 'hemorragia', 'subaracnoidea']
      }
    ]
  },
  {
    id: 'infecciosas',
    name: 'Enfermedades Infecciosas',
    icon: '🦠',
    protocols: [
      {
        id: 'sepsis',
        title: 'Sepsis y Shock Séptico',
        specialty: 'Enfermedades Infecciosas',
        summary: 'Criterios qSOFA y SOFA. Bundles de resucitación, antibioterapia empírica y objetivos de reanimación en las primeras 3-6 horas.',
        keywords: ['sepsis', 'shock', 'séptico', 'qsofa', 'lactato', 'antibióticos']
      },
      {
        id: 'neumonia',
        title: 'Neumonía Adquirida en la Comunidad',
        specialty: 'Enfermedades Infecciosas',
        summary: 'Clasificación PSI/CURB-65, indicaciones de ingreso y antibioterapia empírica según gravedad y factores de riesgo.',
        keywords: ['neumonía', 'nac', 'curb65', 'antibióticos', 'respiratorio']
      },
      {
        id: 'meningitis',
        title: 'Meningitis Bacteriana',
        specialty: 'Enfermedades Infecciosas',
        summary: 'Diagnóstico urgente, indicaciones de punción lumbar, dexametasona y antibioterapia empírica según edad.',
        keywords: ['meningitis', 'punción', 'lumbar', 'dexametasona']
      }
    ]
  },
  {
    id: 'urgencias',
    name: 'Medicina de Urgencias',
    icon: '🚑',
    protocols: [
      {
        id: 'sedoanalgesia',
        title: 'Sedoanalgesia Procedural',
        specialty: 'Medicina de Urgencias',
        summary: 'Fármacos, dosis y monitorización para procedimientos dolorosos. Ketamina, propofol, fentanilo y combinaciones seguras.',
        keywords: ['sedación', 'analgesia', 'ketamina', 'propofol', 'fentanilo']
      },
      {
        id: 'intubacion',
        title: 'Intubación de Secuencia Rápida',
        specialty: 'Medicina de Urgencias',
        summary: 'Preparación, premedicación, inducción y parálisis. Manejo de vía aérea difícil y algoritmo de fallback.',
        keywords: ['intubación', 'rsi', 'vía aérea', 'laringoscopia']
      },
      {
        id: 'politrauma',
        title: 'Atención Inicial al Politrauma',
        specialty: 'Medicina de Urgencias',
        summary: 'Protocolo ABCDE, control de hemorragia, resucitación con hemoderivados y criterios de activación de código trauma.',
        keywords: ['trauma', 'politrauma', 'hemorragia', 'resucitación']
      }
    ]
  },
  {
    id: 'digestivo',
    name: 'Aparato Digestivo',
    icon: '🫁',
    protocols: [
      {
        id: 'hemorragia-digestiva',
        title: 'Hemorragia Digestiva Alta',
        specialty: 'Aparato Digestivo',
        summary: 'Escalas de riesgo Glasgow-Blatchford, manejo inicial, IBP, transfusión y criterios de endoscopia urgente.',
        keywords: ['hemorragia', 'digestiva', 'melenas', 'hematemesis', 'endoscopia']
      },
      {
        id: 'pancreatitis',
        title: 'Pancreatitis Aguda',
        specialty: 'Aparato Digestivo',
        summary: 'Diagnóstico, pronóstico con BISAP/Ranson, fluidoterapia agresiva, nutrición y manejo de complicaciones.',
        keywords: ['pancreatitis', 'lipasa', 'amilasa', 'biliar']
      }
    ]
  },
  {
    id: 'toxicologia',
    name: 'Toxicología',
    icon: '☠️',
    protocols: [
      {
        id: 'intoxicacion-paracetamol',
        title: 'Intoxicación por Paracetamol',
        specialty: 'Toxicología',
        summary: 'Nomograma de Rumack-Matthew, N-acetilcisteína y criterios de trasplante hepático urgente.',
        keywords: ['paracetamol', 'acetaminofén', 'nac', 'hepatotoxicidad']
      },
      {
        id: 'intoxicacion-benzodiacepinas',
        title: 'Intoxicación por Benzodiacepinas',
        specialty: 'Toxicología',
        summary: 'Manejo de soporte, indicaciones de flumazenilo y precauciones en intoxicaciones mixtas.',
        keywords: ['benzodiacepinas', 'flumazenilo', 'sobredosis', 'sedantes']
      }
    ]
  }
]

export function searchProtocols(query: string): Protocol[] {
  const normalizedQuery = query.toLowerCase().trim()
  if (!normalizedQuery) return []
  
  const results: Protocol[] = []
  
  for (const specialty of specialties) {
    for (const protocol of specialty.protocols) {
      const matchesTitle = protocol.title.toLowerCase().includes(normalizedQuery)
      const matchesSummary = protocol.summary.toLowerCase().includes(normalizedQuery)
      const matchesKeywords = protocol.keywords.some(k => k.toLowerCase().includes(normalizedQuery))
      
      if (matchesTitle || matchesSummary || matchesKeywords) {
        results.push(protocol)
      }
    }
  }
  
  return results
}

export function getProtocolById(id: string): Protocol | undefined {
  for (const specialty of specialties) {
    const protocol = specialty.protocols.find(p => p.id === id)
    if (protocol) return protocol
  }
  return undefined
}
