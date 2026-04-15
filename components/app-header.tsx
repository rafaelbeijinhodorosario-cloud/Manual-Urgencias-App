'use client'

import { Menu, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AppHeaderProps {
  onMenuClick: () => void
}

export function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-primary text-primary-foreground shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/15">
            <Activity className="h-4.5 w-4.5" />
          </div>
          <h1 className="font-semibold text-lg tracking-tight">Manual de Urgencias</h1>
        </div>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>
    </header>
  )
}
