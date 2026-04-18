'use client'

import { ArrowLeft, Phone, MapPin, GitBranch, Clock, AlertTriangle, Check, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  getPhoneExtensions,
  getEmergencyKits,
  getInternalReferrals,
  type PhoneExtension,
  type EmergencyKit,
  type InternalReferral,
} from '@/lib/huil-data'

interface HuilModuleProps {
  onBack: () => void
}

export function HuilModule({ onBack }: HuilModuleProps) {
  const phoneExtensions = getPhoneExtensions()
  const emergencyKits = getEmergencyKits()
  const internalReferrals = getInternalReferrals()

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
              <Building2 className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <h1 className="font-semibold text-base truncate">Mi Hospital (HUIL)</h1>
              <p className="text-xs text-primary-foreground/70 truncate">Hospital Universitario Infanta Leonor</p>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Content */}
      <Tabs defaultValue="phones" className="flex-1 flex flex-col">
        <div className="bg-card border-b border-border px-2">
          <TabsList className="w-full h-auto p-1 bg-transparent gap-1">
            <TabsTrigger 
              value="phones" 
              className="flex-1 text-xs py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
            >
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              Teléfonos
            </TabsTrigger>
            <TabsTrigger 
              value="kits" 
              className="flex-1 text-xs py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
            >
              <MapPin className="h-3.5 w-3.5 mr-1.5" />
              Kits
            </TabsTrigger>
            <TabsTrigger 
              value="referrals" 
              className="flex-1 text-xs py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
            >
              <GitBranch className="h-3.5 w-3.5 mr-1.5" />
              Derivación
            </TabsTrigger>
          </TabsList>
        </div>

        <ScrollArea className="flex-1">
          {/* Phones Tab */}
          <TabsContent value="phones" className="m-0 p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="h-4 w-4 text-primary" />
                <h2 className="font-semibold text-sm">Teléfonos de Interconsulta</h2>
              </div>
              {phoneExtensions.map((phone) => (
                <PhoneCard key={phone.id} phone={phone} />
              ))}
            </div>
          </TabsContent>

          {/* Kits Tab */}
          <TabsContent value="kits" className="m-0 p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-primary" />
                <h2 className="font-semibold text-sm">Kits de Emergencia</h2>
              </div>
              {emergencyKits.map((kit) => (
                <KitCard key={kit.id} kit={kit} />
              ))}
            </div>
          </TabsContent>

          {/* Referrals Tab */}
          <TabsContent value="referrals" className="m-0 p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="h-4 w-4 text-primary" />
                <h2 className="font-semibold text-sm">Derivación Interna</h2>
              </div>
              {internalReferrals.map((referral) => (
                <ReferralCard key={referral.id} referral={referral} />
              ))}
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  )
}

function PhoneCard({ phone }: { phone: PhoneExtension }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-sm">{phone.service}</h3>
              {phone.available24h && (
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-emerald-500/10 text-emerald-600 border-0">
                  <Clock className="h-2.5 w-2.5 mr-0.5" />
                  24h
                </Badge>
              )}
            </div>
            {phone.notes && (
              <p className="text-xs text-muted-foreground">{phone.notes}</p>
            )}
          </div>
          <a
            href={`tel:${phone.extension}`}
            className="flex items-center gap-1.5 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium shrink-0 hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            {phone.extension}
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

function KitCard({ kit }: { kit: EmergencyKit }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-sm font-medium flex items-start gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10 shrink-0 mt-0.5">
            <MapPin className="h-4 w-4 text-rose-600" />
          </div>
          <div>
            <span className="block">{kit.name}</span>
            <span className="text-xs font-normal text-muted-foreground">{kit.floor}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 pl-14">
        <div className="text-xs text-foreground mb-2">
          <span className="font-medium">Ubicación:</span> {kit.location}
        </div>
        {kit.contents && kit.contents.length > 0 && (
          <div className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">Contenido:</span>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5">
              {kit.contents.map((item, index) => (
                <li key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                  <Check className="h-3 w-3 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function ReferralCard({ referral }: { referral: InternalReferral }) {
  const urgencyColors = {
    alta: 'bg-rose-500/10 text-rose-600 border-rose-200',
    media: 'bg-amber-500/10 text-amber-600 border-amber-200',
    baja: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
  }

  const urgencyLabels = {
    alta: 'Urgencia alta',
    media: 'Urgencia media',
    baja: 'Urgencia baja',
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-medium">{referral.service}</CardTitle>
          <Badge 
            variant="outline" 
            className={`text-[10px] px-1.5 py-0 shrink-0 ${urgencyColors[referral.urgencyLevel]}`}
          >
            {urgencyLabels[referral.urgencyLevel]}
          </Badge>
        </div>
        {referral.contactExtension && (
          <CardDescription className="text-xs flex items-center gap-1">
            <Phone className="h-3 w-3" />
            Ext: {referral.contactExtension}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <div>
          <h4 className="text-xs font-medium text-foreground mb-1.5 flex items-center gap-1">
            <AlertTriangle className="h-3 w-3 text-amber-500" />
            Criterios de derivación:
          </h4>
          <ul className="space-y-0.5">
            {referral.criteria.map((criterion, index) => (
              <li key={index} className="text-xs text-muted-foreground flex items-start gap-1.5">
                <span className="text-primary mt-1">•</span>
                {criterion}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-muted/50 rounded-lg p-2.5">
          <h4 className="text-xs font-medium text-foreground mb-1">Procedimiento:</h4>
          <p className="text-xs text-muted-foreground">{referral.procedure}</p>
        </div>
      </CardContent>
    </Card>
  )
}
