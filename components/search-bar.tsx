'use client'

import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onClear: () => void
}

export function SearchBar({ value, onChange, onClear }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="¿Qué protocolo buscas?"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-12 pr-12 h-14 text-base bg-card border-0 shadow-lg rounded-2xl focus-visible:ring-2 focus-visible:ring-primary-foreground/30 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
        />
        {value && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Limpiar búsqueda</span>
          </Button>
        )}
      </div>
    </div>
  )
}
