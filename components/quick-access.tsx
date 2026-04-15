'use client'

import { Heart, Brain, Siren, Pill } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface QuickAccessProps {
  onSelect: (protocolId: string) => void
}

const quickAccessItems = [
  {
    id: 'sepsis',
    label: 'Sepsis',
    icon: Siren,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-500',
    borderColor: 'border-red-100',
    hoverBg: 'hover:bg-red-100/70',
  },
  {
    id: 'ictus',
    label: 'Ictus',
    icon: Brain,
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-500',
    borderColor: 'border-violet-100',
    hoverBg: 'hover:bg-violet-100/70',
  },
  {
    id: 'codigo-infarto',
    label: 'Código Infarto',
    icon: Heart,
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-500',
    borderColor: 'border-rose-100',
    hoverBg: 'hover:bg-rose-100/70',
  },
  {
    id: 'sedoanalgesia',
    label: 'Sedoanalgesia',
    icon: Pill,
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    borderColor: 'border-emerald-100',
    hoverBg: 'hover:bg-emerald-100/70',
  },
]

export function QuickAccess({ onSelect }: QuickAccessProps) {
  return (
    <section className="w-full">
      <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10">
          <Siren className="h-3 w-3 text-primary" />
        </span>
        Accesos rápidos
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {quickAccessItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant="outline"
              onClick={() => onSelect(item.id)}
              className={`h-auto py-5 px-4 flex flex-col items-center gap-2.5 rounded-2xl border-2 transition-all active:scale-[0.97] ${item.bgColor} ${item.borderColor} ${item.hoverBg}`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconColor} bg-white/80 shadow-sm`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className={`text-sm font-medium ${item.iconColor}`}>{item.label}</span>
            </Button>
          )
        })}
      </div>
    </section>
  )
}
