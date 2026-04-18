// ============================================
// CALCULADORAS CLÍNICAS
// ============================================

export interface CalculatorResult {
  score: number
  interpretation: string
  recommendation: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  relatedChapter?: number
  relatedChapterTitle?: string
}

// ============================================
// qSOFA (Quick SOFA) - Sepsis
// ============================================
export interface QSofaInputs {
  respiratoryRate22OrMore: boolean // FR ≥ 22 rpm
  alteredMentalStatus: boolean // Alteración del nivel de conciencia (GCS < 15)
  systolicBP100OrLess: boolean // TAS ≤ 100 mmHg
}

export function calculateQSofa(inputs: QSofaInputs): CalculatorResult {
  let score = 0
  if (inputs.respiratoryRate22OrMore) score += 1
  if (inputs.alteredMentalStatus) score += 1
  if (inputs.systolicBP100OrLess) score += 1

  let interpretation: string
  let recommendation: string
  let severity: CalculatorResult['severity']

  if (score >= 2) {
    interpretation = 'Alto riesgo de sepsis'
    recommendation = 'Sospecha de sepsis. Iniciar protocolo Sepsis: hemocultivos, lactato, antibioterapia empírica precoz. Valorar ingreso en UCI.'
    severity = 'critical'
  } else if (score === 1) {
    interpretation = 'Riesgo intermedio'
    recommendation = 'Monitorización estrecha. Reevaluar en 1 hora. Considerar SOFA completo si hay sospecha de infección.'
    severity = 'medium'
  } else {
    interpretation = 'Bajo riesgo de sepsis'
    recommendation = 'Continuar evaluación clínica habitual. Bajo riesgo actual de disfunción orgánica por sepsis.'
    severity = 'low'
  }

  return {
    score,
    interpretation,
    recommendation,
    severity,
    relatedChapter: 89,
    relatedChapterTitle: 'Sepsis y Shock Séptico',
  }
}

// ============================================
// NEWS2 (National Early Warning Score 2)
// ============================================
export interface News2Inputs {
  respiratoryRate: number // rpm
  spo2: number // %
  isOnSupplementalO2: boolean
  temperature: number // °C
  systolicBP: number // mmHg
  heartRate: number // lpm
  consciousness: 'alert' | 'confused' | 'voice' | 'pain' | 'unresponsive' // ACVPU
}

function getRespiratoryRateScore(rate: number): number {
  if (rate <= 8) return 3
  if (rate <= 11) return 1
  if (rate <= 20) return 0
  if (rate <= 24) return 2
  return 3
}

function getSpO2Score(spo2: number, onO2: boolean): number {
  // Scale 1 (for patients not at risk of hypercapnic respiratory failure)
  if (spo2 <= 91) return 3
  if (spo2 <= 93) return 2
  if (spo2 <= 95) return 1
  return 0
}

function getSupplementalO2Score(onO2: boolean): number {
  return onO2 ? 2 : 0
}

function getTemperatureScore(temp: number): number {
  if (temp <= 35.0) return 3
  if (temp <= 36.0) return 1
  if (temp <= 38.0) return 0
  if (temp <= 39.0) return 1
  return 2
}

function getSystolicBPScore(sbp: number): number {
  if (sbp <= 90) return 3
  if (sbp <= 100) return 2
  if (sbp <= 110) return 1
  if (sbp <= 219) return 0
  return 3
}

function getHeartRateScore(hr: number): number {
  if (hr <= 40) return 3
  if (hr <= 50) return 1
  if (hr <= 90) return 0
  if (hr <= 110) return 1
  if (hr <= 130) return 2
  return 3
}

function getConsciousnessScore(consciousness: News2Inputs['consciousness']): number {
  return consciousness === 'alert' ? 0 : 3
}

export function calculateNews2(inputs: News2Inputs): CalculatorResult {
  const scores = {
    respiratoryRate: getRespiratoryRateScore(inputs.respiratoryRate),
    spo2: getSpO2Score(inputs.spo2, inputs.isOnSupplementalO2),
    supplementalO2: getSupplementalO2Score(inputs.isOnSupplementalO2),
    temperature: getTemperatureScore(inputs.temperature),
    systolicBP: getSystolicBPScore(inputs.systolicBP),
    heartRate: getHeartRateScore(inputs.heartRate),
    consciousness: getConsciousnessScore(inputs.consciousness),
  }

  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0)
  const hasAnyScore3 = Object.values(scores).some(score => score === 3)

  let interpretation: string
  let recommendation: string
  let severity: CalculatorResult['severity']

  if (totalScore >= 7 || hasAnyScore3) {
    interpretation = 'Puntuación alta - Emergencia clínica'
    recommendation = 'Respuesta inmediata del equipo de emergencias. Valoración por médico senior. Considerar traslado a UCI/Unidad de Críticos.'
    severity = 'critical'
  } else if (totalScore >= 5) {
    interpretation = 'Puntuación media-alta - Respuesta urgente'
    recommendation = 'Valoración urgente por equipo médico. Aumentar frecuencia de monitorización. Considerar escalamiento de cuidados.'
    severity = 'high'
  } else if (totalScore >= 1 && totalScore <= 4) {
    interpretation = 'Puntuación baja-media'
    recommendation = 'Continuar monitorización según protocolo. Valoración por enfermería cada 4-6 horas. Avisar si empeoramiento.'
    severity = 'medium'
  } else {
    interpretation = 'Puntuación baja - Estable'
    recommendation = 'Monitorización rutinaria. Paciente estable.'
    severity = 'low'
  }

  return {
    score: totalScore,
    interpretation,
    recommendation,
    severity,
    relatedChapter: 6,
    relatedChapterTitle: 'Monitorización del Paciente en Urgencias',
  }
}

// ============================================
// CRB-65 - Neumonía Adquirida en la Comunidad
// ============================================
export interface Crb65Inputs {
  confusion: boolean // Confusión de nueva aparición
  respiratoryRate30OrMore: boolean // FR ≥ 30 rpm
  lowBloodPressure: boolean // TAS < 90 mmHg o TAD ≤ 60 mmHg
  age65OrMore: boolean // Edad ≥ 65 años
}

export function calculateCrb65(inputs: Crb65Inputs): CalculatorResult {
  let score = 0
  if (inputs.confusion) score += 1
  if (inputs.respiratoryRate30OrMore) score += 1
  if (inputs.lowBloodPressure) score += 1
  if (inputs.age65OrMore) score += 1

  let interpretation: string
  let recommendation: string
  let severity: CalculatorResult['severity']

  if (score >= 3) {
    interpretation = 'Neumonía grave - Alto riesgo de mortalidad'
    recommendation = 'Ingreso hospitalario urgente. Considerar UCI. Antibioterapia IV de amplio espectro. Hemocultivos y antigenuria.'
    severity = 'critical'
  } else if (score === 2) {
    interpretation = 'Neumonía moderada - Riesgo intermedio'
    recommendation = 'Hospitalización recomendada. Considerar ingreso en observación mínimo. Antibioterapia IV. Oxigenoterapia según SatO2.'
    severity = 'high'
  } else if (score === 1) {
    interpretation = 'Neumonía leve-moderada'
    recommendation = 'Valorar hospitalización según comorbilidades y soporte social. Posible alta con tratamiento oral y seguimiento precoz.'
    severity = 'medium'
  } else {
    interpretation = 'Neumonía leve - Bajo riesgo'
    recommendation = 'Candidato a tratamiento ambulatorio con antibiótico oral. Alta con instrucciones de alarma y seguimiento en 48-72h.'
    severity = 'low'
  }

  return {
    score,
    interpretation,
    recommendation,
    severity,
    relatedChapter: 94,
    relatedChapterTitle: 'Neumonía Adquirida en la Comunidad',
  }
}

// ============================================
// WELLS SCORE - TEP (Tromboembolismo Pulmonar)
// ============================================
export interface WellsTepInputs {
  clinicalSignsDVT: boolean // Signos clínicos de TVP (3 puntos)
  alternativeDiagnosisLessLikely: boolean // Diagnóstico alternativo menos probable que TEP (3 puntos)
  heartRateOver100: boolean // FC > 100 lpm (1.5 puntos)
  immobilizationOrSurgery: boolean // Inmovilización >3 días o cirugía en 4 semanas previas (1.5 puntos)
  previousDVTorPE: boolean // TVP o TEP previo (1.5 puntos)
  hemoptysis: boolean // Hemoptisis (1 punto)
  malignancy: boolean // Malignidad (tratamiento en 6 meses o paliativo) (1 punto)
}

export function calculateWellsTep(inputs: WellsTepInputs): CalculatorResult {
  let score = 0
  if (inputs.clinicalSignsDVT) score += 3
  if (inputs.alternativeDiagnosisLessLikely) score += 3
  if (inputs.heartRateOver100) score += 1.5
  if (inputs.immobilizationOrSurgery) score += 1.5
  if (inputs.previousDVTorPE) score += 1.5
  if (inputs.hemoptysis) score += 1
  if (inputs.malignancy) score += 1

  let interpretation: string
  let recommendation: string
  let severity: CalculatorResult['severity']

  if (score > 6) {
    interpretation = 'Alta probabilidad clínica de TEP'
    recommendation = 'Iniciar anticoagulación si no hay contraindicación. AngioTAC urgente. Si inestable, considerar fibrinolisis.'
    severity = 'critical'
  } else if (score >= 2 && score <= 6) {
    interpretation = 'Probabilidad intermedia de TEP'
    recommendation = 'Realizar D-Dímero. Si positivo o alta sospecha: AngioTAC. Considerar inicio de anticoagulación empírica.'
    severity = 'high'
  } else {
    interpretation = 'Baja probabilidad de TEP'
    recommendation = 'Realizar D-Dímero ajustado a edad. Si negativo, descarta TEP. Si positivo, AngioTAC.'
    severity = 'medium'
  }

  return {
    score,
    interpretation,
    recommendation,
    severity,
    relatedChapter: 49,
    relatedChapterTitle: 'Tromboembolismo Pulmonar',
  }
}

// ============================================
// ESCALA DE GLASGOW (GCS)
// ============================================
export interface GlasgowInputs {
  eyeResponse: 1 | 2 | 3 | 4 // Apertura ocular: 1-4
  verbalResponse: 1 | 2 | 3 | 4 | 5 // Respuesta verbal: 1-5
  motorResponse: 1 | 2 | 3 | 4 | 5 | 6 // Respuesta motora: 1-6
}

export function calculateGlasgow(inputs: GlasgowInputs): CalculatorResult {
  const score = inputs.eyeResponse + inputs.verbalResponse + inputs.motorResponse

  let interpretation: string
  let recommendation: string
  let severity: CalculatorResult['severity']

  if (score <= 8) {
    interpretation = 'TCE Grave / Coma'
    recommendation = 'Proteger vía aérea (IOT si GCS ≤8). TAC craneal urgente. Valoración neuroquirúrgica. Monitorización en UCI.'
    severity = 'critical'
  } else if (score >= 9 && score <= 12) {
    interpretation = 'TCE Moderado'
    recommendation = 'TAC craneal. Observación neurológica estrecha. Valorar ingreso. Reevaluar frecuentemente.'
    severity = 'high'
  } else if (score >= 13 && score <= 14) {
    interpretation = 'TCE Leve'
    recommendation = 'Valorar TAC según criterios (Canadian CT Head Rule). Observación mínima 6h. Instrucciones de alarma al alta.'
    severity = 'medium'
  } else {
    interpretation = 'Normal'
    recommendation = 'Paciente alerta y orientado. Evaluación clínica según contexto.'
    severity = 'low'
  }

  return {
    score,
    interpretation,
    recommendation,
    severity,
    relatedChapter: 134,
    relatedChapterTitle: 'Traumatismo Craneoencefálico',
  }
}

// ============================================
// Lista de calculadoras disponibles
// ============================================
export interface CalculatorInfo {
  id: string
  name: string
  shortName: string
  description: string
  relatedChapter?: number
}

export const availableCalculators: CalculatorInfo[] = [
  {
    id: 'qsofa',
    name: 'qSOFA (Quick SOFA)',
    shortName: 'qSOFA',
    description: 'Detección rápida de sepsis en pacientes con sospecha de infección',
    relatedChapter: 89,
  },
  {
    id: 'news2',
    name: 'NEWS2 (National Early Warning Score)',
    shortName: 'NEWS2',
    description: 'Escala de alerta temprana para detección de deterioro clínico',
    relatedChapter: 6,
  },
  {
    id: 'crb65',
    name: 'CRB-65',
    shortName: 'CRB-65',
    description: 'Gravedad y manejo de neumonía adquirida en la comunidad',
    relatedChapter: 94,
  },
  {
    id: 'wells-tep',
    name: 'Wells TEP',
    shortName: 'Wells',
    description: 'Probabilidad clínica de tromboembolismo pulmonar',
    relatedChapter: 49,
  },
  {
    id: 'glasgow',
    name: 'Escala de Glasgow (GCS)',
    shortName: 'Glasgow',
    description: 'Evaluación del nivel de conciencia',
    relatedChapter: 134,
  },
]
