'use client'

import { useState } from 'react'
import { ArrowLeft, Calculator, ChevronRight, AlertTriangle, CheckCircle2, AlertCircle, XCircle, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  availableCalculators,
  calculateQSofa,
  calculateNews2,
  calculateCrb65,
  calculateWellsTep,
  calculateGlasgow,
  type CalculatorResult,
  type QSofaInputs,
  type News2Inputs,
  type Crb65Inputs,
  type WellsTepInputs,
  type GlasgowInputs,
} from '@/lib/calculators'

interface CalculatorsModuleProps {
  onBack: () => void
  onNavigateToChapter?: (chapterNumber: number) => void
}

type CalculatorId = 'qsofa' | 'news2' | 'crb65' | 'wells-tep' | 'glasgow' | null

export function CalculatorsModule({ onBack, onNavigateToChapter }: CalculatorsModuleProps) {
  const [selectedCalculator, setSelectedCalculator] = useState<CalculatorId>(null)

  if (selectedCalculator) {
    return (
      <CalculatorView
        calculatorId={selectedCalculator}
        onBack={() => setSelectedCalculator(null)}
        onNavigateToChapter={onNavigateToChapter}
      />
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground shadow-sm">
        <div className="flex items-center gap-3 px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10 transition-colors shrink-0"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Button>
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/15 shrink-0">
              <Calculator className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <h1 className="font-semibold text-base truncate">Calculadoras Clínicas</h1>
              <p className="text-xs text-primary-foreground/70 truncate">Escalas y scores de uso frecuente</p>
            </div>
          </div>
        </div>
      </header>

      {/* Calculator List */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {availableCalculators.map((calc) => (
            <button
              key={calc.id}
              onClick={() => setSelectedCalculator(calc.id as CalculatorId)}
              className="w-full text-left"
            >
              <Card className="overflow-hidden hover:shadow-md hover:border-primary/30 transition-all active:scale-[0.99]">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                      <span className="text-sm font-bold text-primary">{calc.shortName}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-foreground">{calc.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{calc.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground/50 shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

interface CalculatorViewProps {
  calculatorId: CalculatorId
  onBack: () => void
  onNavigateToChapter?: (chapterNumber: number) => void
}

function CalculatorView({ calculatorId, onBack, onNavigateToChapter }: CalculatorViewProps) {
  const calculator = availableCalculators.find((c) => c.id === calculatorId)

  if (!calculator) return null

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground shadow-sm">
        <div className="flex items-center gap-3 px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10 transition-colors shrink-0"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Button>
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/15 shrink-0">
              <Calculator className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <h1 className="font-semibold text-base truncate">{calculator.shortName}</h1>
              <p className="text-xs text-primary-foreground/70 truncate">{calculator.name}</p>
            </div>
          </div>
        </div>
      </header>

      <ScrollArea className="flex-1">
        <div className="p-4">
          {calculatorId === 'qsofa' && <QSofaCalculator onNavigateToChapter={onNavigateToChapter} />}
          {calculatorId === 'news2' && <News2Calculator onNavigateToChapter={onNavigateToChapter} />}
          {calculatorId === 'crb65' && <Crb65Calculator onNavigateToChapter={onNavigateToChapter} />}
          {calculatorId === 'wells-tep' && <WellsTepCalculator onNavigateToChapter={onNavigateToChapter} />}
          {calculatorId === 'glasgow' && <GlasgowCalculator onNavigateToChapter={onNavigateToChapter} />}
        </div>
      </ScrollArea>
    </div>
  )
}

// Result Display Component
function ResultDisplay({ result, onNavigateToChapter }: { result: CalculatorResult | null; onNavigateToChapter?: (chapter: number) => void }) {
  if (!result) return null

  const severityConfig = {
    low: { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-500/10', border: 'border-emerald-200' },
    medium: { icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-500/10', border: 'border-amber-200' },
    high: { icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-500/10', border: 'border-orange-200' },
    critical: { icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-500/10', border: 'border-rose-200' },
  }

  const config = severityConfig[result.severity]
  const Icon = config.icon

  return (
    <Card className={`mt-4 border-2 ${config.border}`}>
      <CardHeader className={`${config.bg} p-4 pb-3`}>
        <div className="flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${config.bg}`}>
            <span className={`text-xl font-bold ${config.color}`}>{result.score}</span>
          </div>
          <div className="flex-1">
            <CardTitle className={`text-sm font-semibold ${config.color} flex items-center gap-2`}>
              <Icon className="h-4 w-4" />
              {result.interpretation}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <div>
          <h4 className="text-xs font-semibold text-foreground mb-1.5">Recomendación:</h4>
          <p className="text-sm text-muted-foreground">{result.recommendation}</p>
        </div>
        {result.relatedChapter && onNavigateToChapter && (
          <Button
            variant="outline"
            className="w-full justify-between"
            onClick={() => onNavigateToChapter(result.relatedChapter!)}
          >
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm">Cap. {result.relatedChapter}: {result.relatedChapterTitle}</span>
            </span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

// Individual Calculator Components
function QSofaCalculator({ onNavigateToChapter }: { onNavigateToChapter?: (chapter: number) => void }) {
  const [inputs, setInputs] = useState<QSofaInputs>({
    respiratoryRate22OrMore: false,
    alteredMentalStatus: false,
    systolicBP100OrLess: false,
  })

  const result = calculateQSofa(inputs)

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Marque los criterios presentes:</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-2 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="qsofa-rr"
              checked={inputs.respiratoryRate22OrMore}
              onCheckedChange={(checked) => setInputs({ ...inputs, respiratoryRate22OrMore: checked as boolean })}
            />
            <Label htmlFor="qsofa-rr" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Frecuencia respiratoria ≥ 22 rpm</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Taquipnea</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="qsofa-mental"
              checked={inputs.alteredMentalStatus}
              onCheckedChange={(checked) => setInputs({ ...inputs, alteredMentalStatus: checked as boolean })}
            />
            <Label htmlFor="qsofa-mental" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Alteración del nivel de conciencia</span>
              <span className="block text-xs text-muted-foreground mt-0.5">GCS &lt; 15</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="qsofa-bp"
              checked={inputs.systolicBP100OrLess}
              onCheckedChange={(checked) => setInputs({ ...inputs, systolicBP100OrLess: checked as boolean })}
            />
            <Label htmlFor="qsofa-bp" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Tensión arterial sistólica ≤ 100 mmHg</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Hipotensión</span>
            </Label>
          </div>
        </CardContent>
      </Card>
      <ResultDisplay result={result} onNavigateToChapter={onNavigateToChapter} />
    </div>
  )
}

function Crb65Calculator({ onNavigateToChapter }: { onNavigateToChapter?: (chapter: number) => void }) {
  const [inputs, setInputs] = useState<Crb65Inputs>({
    confusion: false,
    respiratoryRate30OrMore: false,
    lowBloodPressure: false,
    age65OrMore: false,
  })

  const result = calculateCrb65(inputs)

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Marque los criterios presentes:</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-2 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="crb65-c"
              checked={inputs.confusion}
              onCheckedChange={(checked) => setInputs({ ...inputs, confusion: checked as boolean })}
            />
            <Label htmlFor="crb65-c" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Confusión</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Desorientación de nueva aparición</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="crb65-r"
              checked={inputs.respiratoryRate30OrMore}
              onCheckedChange={(checked) => setInputs({ ...inputs, respiratoryRate30OrMore: checked as boolean })}
            />
            <Label htmlFor="crb65-r" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Frecuencia respiratoria ≥ 30 rpm</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Taquipnea severa</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="crb65-b"
              checked={inputs.lowBloodPressure}
              onCheckedChange={(checked) => setInputs({ ...inputs, lowBloodPressure: checked as boolean })}
            />
            <Label htmlFor="crb65-b" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Tensión arterial baja</span>
              <span className="block text-xs text-muted-foreground mt-0.5">TAS &lt; 90 mmHg o TAD ≤ 60 mmHg</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="crb65-65"
              checked={inputs.age65OrMore}
              onCheckedChange={(checked) => setInputs({ ...inputs, age65OrMore: checked as boolean })}
            />
            <Label htmlFor="crb65-65" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Edad ≥ 65 años</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Factor de riesgo por edad</span>
            </Label>
          </div>
        </CardContent>
      </Card>
      <ResultDisplay result={result} onNavigateToChapter={onNavigateToChapter} />
    </div>
  )
}

function WellsTepCalculator({ onNavigateToChapter }: { onNavigateToChapter?: (chapter: number) => void }) {
  const [inputs, setInputs] = useState<WellsTepInputs>({
    clinicalSignsDVT: false,
    alternativeDiagnosisLessLikely: false,
    heartRateOver100: false,
    immobilizationOrSurgery: false,
    previousDVTorPE: false,
    hemoptysis: false,
    malignancy: false,
  })

  const result = calculateWellsTep(inputs)

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Marque los criterios presentes:</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-2 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="wells-dvt"
              checked={inputs.clinicalSignsDVT}
              onCheckedChange={(checked) => setInputs({ ...inputs, clinicalSignsDVT: checked as boolean })}
            />
            <Label htmlFor="wells-dvt" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Signos clínicos de TVP (+3)</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Edema, dolor en pantorrilla</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="wells-alt"
              checked={inputs.alternativeDiagnosisLessLikely}
              onCheckedChange={(checked) => setInputs({ ...inputs, alternativeDiagnosisLessLikely: checked as boolean })}
            />
            <Label htmlFor="wells-alt" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Diagnóstico alternativo menos probable (+3)</span>
              <span className="block text-xs text-muted-foreground mt-0.5">TEP es el diagnóstico más probable</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="wells-hr"
              checked={inputs.heartRateOver100}
              onCheckedChange={(checked) => setInputs({ ...inputs, heartRateOver100: checked as boolean })}
            />
            <Label htmlFor="wells-hr" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Frecuencia cardíaca &gt; 100 lpm (+1.5)</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Taquicardia</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="wells-immob"
              checked={inputs.immobilizationOrSurgery}
              onCheckedChange={(checked) => setInputs({ ...inputs, immobilizationOrSurgery: checked as boolean })}
            />
            <Label htmlFor="wells-immob" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Inmovilización/Cirugía reciente (+1.5)</span>
              <span className="block text-xs text-muted-foreground mt-0.5">&gt;3 días o cirugía en últimas 4 semanas</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="wells-prev"
              checked={inputs.previousDVTorPE}
              onCheckedChange={(checked) => setInputs({ ...inputs, previousDVTorPE: checked as boolean })}
            />
            <Label htmlFor="wells-prev" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">TVP o TEP previo (+1.5)</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Antecedente personal</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="wells-hemo"
              checked={inputs.hemoptysis}
              onCheckedChange={(checked) => setInputs({ ...inputs, hemoptysis: checked as boolean })}
            />
            <Label htmlFor="wells-hemo" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Hemoptisis (+1)</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Tos con sangre</span>
            </Label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="wells-cancer"
              checked={inputs.malignancy}
              onCheckedChange={(checked) => setInputs({ ...inputs, malignancy: checked as boolean })}
            />
            <Label htmlFor="wells-cancer" className="text-sm leading-tight cursor-pointer">
              <span className="font-medium">Malignidad (+1)</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Tratamiento en 6 meses o paliativo</span>
            </Label>
          </div>
        </CardContent>
      </Card>
      <ResultDisplay result={result} onNavigateToChapter={onNavigateToChapter} />
    </div>
  )
}

function News2Calculator({ onNavigateToChapter }: { onNavigateToChapter?: (chapter: number) => void }) {
  const [inputs, setInputs] = useState<News2Inputs>({
    respiratoryRate: 16,
    spo2: 96,
    isOnSupplementalO2: false,
    temperature: 36.5,
    systolicBP: 120,
    heartRate: 75,
    consciousness: 'alert',
  })

  const result = calculateNews2(inputs)

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Ingrese los valores del paciente:</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="news-rr" className="text-xs">FR (rpm)</Label>
              <Input
                id="news-rr"
                type="number"
                value={inputs.respiratoryRate}
                onChange={(e) => setInputs({ ...inputs, respiratoryRate: parseInt(e.target.value) || 0 })}
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="news-spo2" className="text-xs">SpO2 (%)</Label>
              <Input
                id="news-spo2"
                type="number"
                value={inputs.spo2}
                onChange={(e) => setInputs({ ...inputs, spo2: parseInt(e.target.value) || 0 })}
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="news-temp" className="text-xs">Temperatura (°C)</Label>
              <Input
                id="news-temp"
                type="number"
                step="0.1"
                value={inputs.temperature}
                onChange={(e) => setInputs({ ...inputs, temperature: parseFloat(e.target.value) || 0 })}
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="news-sbp" className="text-xs">TAS (mmHg)</Label>
              <Input
                id="news-sbp"
                type="number"
                value={inputs.systolicBP}
                onChange={(e) => setInputs({ ...inputs, systolicBP: parseInt(e.target.value) || 0 })}
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="news-hr" className="text-xs">FC (lpm)</Label>
              <Input
                id="news-hr"
                type="number"
                value={inputs.heartRate}
                onChange={(e) => setInputs({ ...inputs, heartRate: parseInt(e.target.value) || 0 })}
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="news-cons" className="text-xs">Conciencia</Label>
              <Select
                value={inputs.consciousness}
                onValueChange={(value) => setInputs({ ...inputs, consciousness: value as News2Inputs['consciousness'] })}
              >
                <SelectTrigger id="news-cons" className="h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alert">Alerta</SelectItem>
                  <SelectItem value="confused">Confuso</SelectItem>
                  <SelectItem value="voice">Responde a voz</SelectItem>
                  <SelectItem value="pain">Responde a dolor</SelectItem>
                  <SelectItem value="unresponsive">No responde</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-3 pt-2">
            <Checkbox
              id="news-o2"
              checked={inputs.isOnSupplementalO2}
              onCheckedChange={(checked) => setInputs({ ...inputs, isOnSupplementalO2: checked as boolean })}
            />
            <Label htmlFor="news-o2" className="text-sm cursor-pointer">
              Oxígeno suplementario
            </Label>
          </div>
        </CardContent>
      </Card>
      <ResultDisplay result={result} onNavigateToChapter={onNavigateToChapter} />
    </div>
  )
}

function GlasgowCalculator({ onNavigateToChapter }: { onNavigateToChapter?: (chapter: number) => void }) {
  const [inputs, setInputs] = useState<GlasgowInputs>({
    eyeResponse: 4,
    verbalResponse: 5,
    motorResponse: 6,
  })

  const result = calculateGlasgow(inputs)

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Seleccione la mejor respuesta en cada categoría:</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-2 space-y-4">
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Apertura ocular (E)</Label>
            <Select
              value={String(inputs.eyeResponse)}
              onValueChange={(value) => setInputs({ ...inputs, eyeResponse: parseInt(value) as GlasgowInputs['eyeResponse'] })}
            >
              <SelectTrigger className="h-auto py-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4">4 - Espontánea</SelectItem>
                <SelectItem value="3">3 - A la orden verbal</SelectItem>
                <SelectItem value="2">2 - Al dolor</SelectItem>
                <SelectItem value="1">1 - Sin respuesta</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Respuesta verbal (V)</Label>
            <Select
              value={String(inputs.verbalResponse)}
              onValueChange={(value) => setInputs({ ...inputs, verbalResponse: parseInt(value) as GlasgowInputs['verbalResponse'] })}
            >
              <SelectTrigger className="h-auto py-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 - Orientado</SelectItem>
                <SelectItem value="4">4 - Confuso</SelectItem>
                <SelectItem value="3">3 - Palabras inapropiadas</SelectItem>
                <SelectItem value="2">2 - Sonidos incomprensibles</SelectItem>
                <SelectItem value="1">1 - Sin respuesta</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-medium">Respuesta motora (M)</Label>
            <Select
              value={String(inputs.motorResponse)}
              onValueChange={(value) => setInputs({ ...inputs, motorResponse: parseInt(value) as GlasgowInputs['motorResponse'] })}
            >
              <SelectTrigger className="h-auto py-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">6 - Obedece órdenes</SelectItem>
                <SelectItem value="5">5 - Localiza dolor</SelectItem>
                <SelectItem value="4">4 - Retira al dolor</SelectItem>
                <SelectItem value="3">3 - Flexión anormal (decorticación)</SelectItem>
                <SelectItem value="2">2 - Extensión (descerebración)</SelectItem>
                <SelectItem value="1">1 - Sin respuesta</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      <ResultDisplay result={result} onNavigateToChapter={onNavigateToChapter} />
    </div>
  )
}
