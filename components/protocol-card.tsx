'use client'

import { ChevronRight, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Protocol } from '@/lib/protocols'

interface ProtocolCardProps {
  protocol: Protocol
  onClick: () => void
}

export function ProtocolCard({ protocol, onClick }: ProtocolCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary/40 active:scale-[0.98] bg-card group"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base font-semibold text-foreground leading-tight">
            {protocol.title}
          </CardTitle>
          <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5" />
        </div>
        <Badge variant="secondary" className="w-fit text-xs font-medium">
          {protocol.specialty}
        </Badge>
      </CardHeader>
      <CardContent className="pt-1">
        <div className="flex items-start gap-2.5">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 mt-0.5">
            <Sparkles className="h-3 w-3 text-accent" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {protocol.summary}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
