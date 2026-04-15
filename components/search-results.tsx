'use client'

import { ProtocolCard } from '@/components/protocol-card'
import { Empty } from '@/components/ui/empty'
import { SearchX, Sparkles } from 'lucide-react'
import type { Protocol } from '@/lib/protocols'

interface SearchResultsProps {
  results: Protocol[]
  query: string
  onSelectProtocol: (protocolId: string) => void
}

export function SearchResults({ results, query, onSelectProtocol }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <Empty
        icon={SearchX}
        title="Sin resultados"
        description={`No se encontraron protocolos para "${query}"`}
        className="py-12"
      />
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10">
            <Sparkles className="h-3 w-3 text-primary" />
          </span>
          {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
        </h2>
      </div>
      <div className="space-y-3">
        {results.map((protocol) => (
          <ProtocolCard
            key={protocol.id}
            protocol={protocol}
            onClick={() => onSelectProtocol(protocol.id)}
          />
        ))}
      </div>
    </div>
  )
}
