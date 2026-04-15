'use client'

import { ArrowLeft, Sparkles, Share2, Bookmark, AlertCircle, Pill, ListChecks } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Protocol } from '@/lib/protocols'

interface ProtocolDetailProps {
  protocol: Protocol
  onBack: () => void
}

export function ProtocolDetail({ protocol, onBack }: ProtocolDetailProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border shadow-sm">
        <div className="flex items-center gap-3 p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="shrink-0 text-foreground hover:bg-muted rounded-xl"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-semibold text-foreground truncate leading-tight">
              {protocol.title}
            </h1>
            <Badge variant="secondary" className="mt-1.5 text-xs">
              {protocol.specialty}
            </Badge>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-4 space-y-4">
        {/* AI Summary Card */}
        <Card className="bg-primary/5 border-primary/20 overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <CardTitle className="text-sm font-semibold text-primary">
                Resumen generado por IA
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground leading-relaxed">
              {protocol.summary}
            </p>
          </CardContent>
        </Card>

        {/* Diagnostic Criteria */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10">
                <AlertCircle className="h-4 w-4 text-amber-600" />
              </div>
              <CardTitle className="text-sm font-semibold text-foreground">
                Criterios diagnósticos
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Contenido del protocolo disponible próximamente. Este espacio contendrá
              los criterios diagnósticos, algoritmos de actuación y puntos clave para
              el diagnóstico diferencial.
            </p>
          </CardContent>
        </Card>

        {/* Treatment */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10">
                <Pill className="h-4 w-4 text-emerald-600" />
              </div>
              <CardTitle className="text-sm font-semibold text-foreground">
                Tratamiento
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Las indicaciones de tratamiento, dosis y vías de administración se
              mostrarán en esta sección con formato claro y fácil de consultar en
              situaciones de urgencia.
            </p>
          </CardContent>
        </Card>

        {/* Action Steps */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10">
                <ListChecks className="h-4 w-4 text-blue-600" />
              </div>
              <CardTitle className="text-sm font-semibold text-foreground">
                Pasos de actuación
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Aquí encontrarás un checklist ordenado con los pasos a seguir
              en la atención del paciente según este protocolo.
            </p>
          </CardContent>
        </Card>

        {/* Keywords */}
        <div className="pt-2">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Palabras clave
          </h3>
          <div className="flex flex-wrap gap-2">
            {protocol.keywords.map((keyword) => (
              <Badge key={keyword} variant="outline" className="text-xs font-normal">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Actions */}
      <footer className="sticky bottom-0 bg-card border-t border-border p-4 pb-safe">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 gap-2 h-12 rounded-xl">
            <Bookmark className="h-4 w-4" />
            Guardar
          </Button>
          <Button variant="outline" className="flex-1 gap-2 h-12 rounded-xl">
            <Share2 className="h-4 w-4" />
            Compartir
          </Button>
        </div>
      </footer>
    </div>
  )
}
