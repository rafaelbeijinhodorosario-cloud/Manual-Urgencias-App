// ============================================
// DATOS DEL HOSPITAL UNIVERSITARIO INFANTA LEONOR (HUIL)
// ============================================
// Este archivo contiene información específica del hospital.
// Puedes editar los números de extensión, ubicaciones y protocolos
// según las necesidades del servicio.

export interface PhoneExtension {
  id: string
  service: string
  extension: string
  notes?: string
  available24h?: boolean
}

export interface EmergencyKit {
  id: string
  name: string
  location: string
  floor: string
  contents?: string[]
  lastChecked?: string
}

export interface InternalReferral {
  id: string
  service: string
  criteria: string[]
  procedure: string
  contactExtension?: string
  urgencyLevel: 'alta' | 'media' | 'baja'
}

// ============================================
// TELÉFONOS DE INTERCONSULTA
// ============================================
// Añade o modifica las extensiones según el directorio del HUIL

export const phoneExtensions: PhoneExtension[] = [
  {
    id: 'uci',
    service: 'UCI',
    extension: 'XXXX',
    notes: 'Intensivista de guardia',
    available24h: true,
  },
  {
    id: 'cardiologia',
    service: 'Cardiología',
    extension: 'XXXX',
    notes: 'Cardiólogo de guardia',
    available24h: true,
  },
  {
    id: 'neurologia',
    service: 'Neurología (Código Ictus)',
    extension: 'XXXX',
    notes: 'Neurólogo de guardia',
    available24h: true,
  },
  {
    id: 'cirugia',
    service: 'Cirugía General',
    extension: 'XXXX',
    notes: 'Cirujano de guardia',
    available24h: true,
  },
  {
    id: 'traumatologia',
    service: 'Traumatología',
    extension: 'XXXX',
    notes: 'Traumatólogo de guardia',
    available24h: true,
  },
  {
    id: 'pediatria',
    service: 'Pediatría',
    extension: 'XXXX',
    notes: 'Pediatra de guardia',
    available24h: true,
  },
  {
    id: 'ginecologia',
    service: 'Ginecología/Obstetricia',
    extension: 'XXXX',
    notes: 'Ginecólogo de guardia',
    available24h: true,
  },
  {
    id: 'psiquiatria',
    service: 'Psiquiatría',
    extension: 'XXXX',
    notes: 'Psiquiatra de guardia',
    available24h: true,
  },
  {
    id: 'radiologia',
    service: 'Radiología',
    extension: 'XXXX',
    notes: 'Radiólogo de guardia / TAC urgente',
    available24h: true,
  },
  {
    id: 'laboratorio',
    service: 'Laboratorio Urgencias',
    extension: 'XXXX',
    notes: 'Analíticas urgentes',
    available24h: true,
  },
  {
    id: 'farmacia',
    service: 'Farmacia',
    extension: 'XXXX',
    notes: 'Farmacéutico de guardia',
    available24h: true,
  },
  {
    id: 'banco-sangre',
    service: 'Banco de Sangre',
    extension: 'XXXX',
    notes: 'Hemoderivados urgentes',
    available24h: true,
  },
  {
    id: 'medicina-interna',
    service: 'Medicina Interna',
    extension: 'XXXX',
    notes: 'Internista de guardia',
    available24h: true,
  },
  {
    id: 'nefrologia',
    service: 'Nefrología',
    extension: 'XXXX',
    notes: 'Nefrólogo / Diálisis urgente',
    available24h: false,
  },
  {
    id: 'digestivo',
    service: 'Digestivo (Endoscopia)',
    extension: 'XXXX',
    notes: 'Endoscopista de guardia',
    available24h: true,
  },
  {
    id: 'neumologia',
    service: 'Neumología',
    extension: 'XXXX',
    notes: 'Neumólogo de guardia',
    available24h: false,
  },
  {
    id: 'admision',
    service: 'Admisión de Urgencias',
    extension: 'XXXX',
    notes: 'Gestión administrativa',
    available24h: true,
  },
  {
    id: 'celadores',
    service: 'Celadores',
    extension: 'XXXX',
    notes: 'Traslado de pacientes',
    available24h: true,
  },
  {
    id: 'seguridad',
    service: 'Seguridad',
    extension: 'XXXX',
    notes: 'Emergencias y contención',
    available24h: true,
  },
  {
    id: 'trabajo-social',
    service: 'Trabajo Social',
    extension: 'XXXX',
    notes: 'Casos sociales',
    available24h: false,
  },
]

// ============================================
// KITS DE EMERGENCIA - UBICACIONES
// ============================================
// Actualiza las ubicaciones según la distribución real del HUIL

export const emergencyKits: EmergencyKit[] = [
  {
    id: 'carro-paradas-box1',
    name: 'Carro de Paradas - Box Críticos 1',
    location: 'Box de Críticos 1, junto a cabecero',
    floor: 'Planta Baja - Urgencias',
    contents: [
      'Desfibrilador',
      'Material de intubación',
      'Fármacos de RCP',
      'Ambú adulto',
      'Laringoscopio',
    ],
    lastChecked: 'Verificar según protocolo',
  },
  {
    id: 'carro-paradas-box2',
    name: 'Carro de Paradas - Box Críticos 2',
    location: 'Box de Críticos 2, junto a cabecero',
    floor: 'Planta Baja - Urgencias',
    contents: [
      'Desfibrilador',
      'Material de intubación',
      'Fármacos de RCP',
      'Ambú adulto',
      'Laringoscopio',
    ],
    lastChecked: 'Verificar según protocolo',
  },
  {
    id: 'carro-paradas-observacion',
    name: 'Carro de Paradas - Observación',
    location: 'Zona de Observación, pasillo central',
    floor: 'Planta Baja - Urgencias',
    contents: [
      'Desfibrilador',
      'Material de intubación',
      'Fármacos de RCP',
      'Ambú adulto',
    ],
    lastChecked: 'Verificar según protocolo',
  },
  {
    id: 'kit-via-aerea-dificil',
    name: 'Kit de Vía Aérea Difícil',
    location: 'Box de Críticos 1, armario lateral derecho',
    floor: 'Planta Baja - Urgencias',
    contents: [
      'Videolaringoscopio',
      'Mascarillas laríngeas (varios tamaños)',
      'Fiador Bougie',
      'Set de cricotiroidotomía',
      'Guías de intubación',
      'Tubos endotraqueales especiales',
    ],
    lastChecked: 'Verificar según protocolo',
  },
  {
    id: 'kit-toracotomia',
    name: 'Kit de Toracotomía/Drenaje Torácico',
    location: 'Box de Críticos 1, armario de procedimientos',
    floor: 'Planta Baja - Urgencias',
    contents: [
      'Tubos de drenaje torácico',
      'Pleur-evac',
      'Material de sutura',
      'Pinzas de Kocher',
    ],
    lastChecked: 'Verificar según protocolo',
  },
  {
    id: 'kit-pediatrico',
    name: 'Carro de Emergencias Pediátricas',
    location: 'Consulta de Pediatría de Urgencias',
    floor: 'Planta Baja - Urgencias',
    contents: [
      'Material pediátrico por tallas',
      'Cinta de Broselow',
      'Ambú pediátrico y neonatal',
      'Desfibrilador con palas pediátricas',
    ],
    lastChecked: 'Verificar según protocolo',
  },
  {
    id: 'maletin-portatil',
    name: 'Maletín de Emergencias Portátil',
    location: 'Control de Enfermería principal',
    floor: 'Planta Baja - Urgencias',
    contents: [
      'DEA portátil',
      'Ambú',
      'Material básico de vía aérea',
      'Fármacos de primera línea',
    ],
    lastChecked: 'Verificar según protocolo',
  },
]

// ============================================
// PROTOCOLOS DE DERIVACIÓN INTERNA
// ============================================
// Criterios y procedimientos para derivar pacientes entre servicios

export const internalReferrals: InternalReferral[] = [
  {
    id: 'derivacion-uci',
    service: 'UCI',
    criteria: [
      'Inestabilidad hemodinámica que no responde a tratamiento',
      'Insuficiencia respiratoria que requiere IOT',
      'Shock de cualquier etiología',
      'Arritmias graves con compromiso hemodinámico',
      'Postoperatorio de alto riesgo',
      'TCE grave (GCS ≤8)',
      'Estatus epiléptico refractario',
    ],
    procedure: 'Contactar con intensivista de guardia. Preparar informe de derivación con constantes, tratamiento actual y evolución.',
    contactExtension: 'XXXX',
    urgencyLevel: 'alta',
  },
  {
    id: 'derivacion-cardiologia',
    service: 'Cardiología (Código Infarto)',
    criteria: [
      'SCACEST: Elevación de ST en ≥2 derivaciones contiguas',
      'Bloqueo de rama izquierda de nueva aparición con clínica',
      'Shock cardiogénico',
      'Arritmias ventriculares sostenidas',
    ],
    procedure: 'Activar Código Infarto. ECG a Cardiología vía WhatsApp/fax. Carga de antiagregación según protocolo.',
    contactExtension: 'XXXX',
    urgencyLevel: 'alta',
  },
  {
    id: 'derivacion-neurologia',
    service: 'Neurología (Código Ictus)',
    criteria: [
      'Déficit neurológico focal de inicio agudo (<6h o de hora desconocida)',
      'Alteración del lenguaje de inicio brusco',
      'Pérdida de fuerza hemicorporal',
      'Alteración de la marcha de inicio súbito',
    ],
    procedure: 'Activar Código Ictus. TAC craneal urgente. Glucemia capilar. Contactar con neurólogo de guardia.',
    contactExtension: 'XXXX',
    urgencyLevel: 'alta',
  },
  {
    id: 'derivacion-cirugia',
    service: 'Cirugía General',
    criteria: [
      'Abdomen agudo quirúrgico',
      'Apendicitis aguda',
      'Colecistitis aguda',
      'Obstrucción intestinal',
      'Perforación de víscera hueca',
      'Hemorragia digestiva con inestabilidad',
    ],
    procedure: 'Solicitar valoración quirúrgica. Preparar analítica con coagulación, pruebas cruzadas si sangrado. Ayunas.',
    contactExtension: 'XXXX',
    urgencyLevel: 'alta',
  },
  {
    id: 'derivacion-traumatologia',
    service: 'Traumatología',
    criteria: [
      'Fracturas que requieren reducción/inmovilización',
      'Luxaciones',
      'Fracturas abiertas',
      'Síndrome compartimental',
      'Amputaciones traumáticas',
    ],
    procedure: 'Radiografía previa. Analgesia. Inmovilización provisional. Valoración de pulsos distales.',
    contactExtension: 'XXXX',
    urgencyLevel: 'media',
  },
  {
    id: 'derivacion-psiquiatria',
    service: 'Psiquiatría',
    criteria: [
      'Ideación autolítica activa',
      'Intento de suicidio',
      'Episodio psicótico agudo',
      'Agitación psicomotriz',
      'Trastorno de conducta que no cede con contención verbal',
    ],
    procedure: 'Contención verbal inicial. Entorno seguro. Vigilancia continua. Llamar a psiquiatra de guardia.',
    contactExtension: 'XXXX',
    urgencyLevel: 'alta',
  },
  {
    id: 'derivacion-digestivo',
    service: 'Digestivo (Endoscopia Urgente)',
    criteria: [
      'Hemorragia digestiva alta activa',
      'Sospecha de varices esofágicas sangrantes',
      'Ingesta de cuerpo extraño impactado',
      'Hemorragia digestiva baja con inestabilidad',
    ],
    procedure: 'Estabilización hemodinámica. Reservar sangre. Contactar con endoscopista de guardia.',
    contactExtension: 'XXXX',
    urgencyLevel: 'alta',
  },
  {
    id: 'derivacion-medicina-interna',
    service: 'Medicina Interna',
    criteria: [
      'Paciente pluripatológico para ingreso',
      'Patología médica que requiere hospitalización',
      'Descompensación de enfermedad crónica',
      'Estudio diagnóstico complejo',
    ],
    procedure: 'Preparar informe completo. Analítica básica. Radiografía de tórax si procede.',
    contactExtension: 'XXXX',
    urgencyLevel: 'media',
  },
]

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

export function getPhoneExtensions() {
  return phoneExtensions
}

export function getEmergencyKits() {
  return emergencyKits
}

export function getInternalReferrals() {
  return internalReferrals
}

export function getPhoneExtensionById(id: string) {
  return phoneExtensions.find((ext) => ext.id === id)
}

export function getEmergencyKitById(id: string) {
  return emergencyKits.find((kit) => kit.id === id)
}

export function getReferralByService(service: string) {
  return internalReferrals.find((ref) => 
    ref.service.toLowerCase().includes(service.toLowerCase())
  )
}

export function getAvailable24hExtensions() {
  return phoneExtensions.filter((ext) => ext.available24h)
}

export function getHighUrgencyReferrals() {
  return internalReferrals.filter((ref) => ref.urgencyLevel === 'alta')
}
