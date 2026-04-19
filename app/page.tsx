'use client'

import { useState, useCallback, useMemo } from 'react'
import { AppHeader } from '@/components/app-header'
import { SearchBar } from '@/components/search-bar'
import { Favorites } from '@/components/favorites'
import { SearchResults } from '@/components/search-results'
import { SideMenu } from '@/components/side-menu'
import { ProtocolDetail } from '@/components/protocol-detail'
import { ChapterViewer } from '@/components/chapter-viewer'
import { HuilModule } from '@/components/huil-module'
import { CalculatorsModule } from '@/components/calculators-module'
import { searchProtocols, getProtocolById } from '@/lib/protocols'
import { getChapterByNumber, type ChapterContent } from '@/lib/chapters-content'
import { Activity, ChevronRight, BookOpen, Building2, Calculator } from 'lucide-react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProtocolId, setSelectedProtocolId] = useState<string | null>(null)
  const [selectedChapter, setSelectedChapter] = useState<ChapterContent | null>(null)
  const [showHuilModule, setShowHuilModule] = useState(false)
  const [showCalculators, setShowCalculators] = useState(false)

  const searchResults = useMemo(() => {
    return searchProtocols(searchQuery)
  }, [searchQuery])

  const selectedProtocol = useMemo(() => {
    if (!selectedProtocolId) return null
    return getProtocolById(selectedProtocolId)
  }, [selectedProtocolId])

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value)
  }, [])

  const handleClearSearch = useCallback(() => {
    setSearchQuery('')
  }, [])

  const handleSelectProtocol = useCallback((protocolId: string) => {
    setSelectedProtocolId(protocolId)
    setSearchQuery('')
  }, [])

  const handleBackFromProtocol = useCallback(() => {
    setSelectedProtocolId(null)
  }, [])

  const handleSelectChapter = useCallback((chapterNumber: number) => {
    const chapter = getChapterByNumber(chapterNumber)
    if (chapter) {
      setSelectedChapter(chapter)
      setIsMenuOpen(false)
    }
  }, [])

  const handleBackFromChapter = useCallback(() => {
    setSelectedChapter(null)
  }, [])

  const handleOpenHuil = useCallback(() => {
    setShowHuilModule(true)
  }, [])

  const handleBackFromHuil = useCallback(() => {
    setShowHuilModule(false)
  }, [])

  const handleOpenCalculators = useCallback(() => {
    setShowCalculators(true)
  }, [])

  const handleBackFromCalculators = useCallback(() => {
    setShowCalculators(false)
  }, [])

  const handleNavigateToChapterFromCalculator = useCallback((chapterNumber: number) => {
    const chapter = getChapterByNumber(chapterNumber)
    if (chapter) {
      setSelectedChapter(chapter)
      setShowCalculators(false)
    }
  }, [])

  // Show HUIL Module
  if (showHuilModule) {
    return <HuilModule onBack={handleBackFromHuil} />
  }

  // Show Calculators Module
  if (showCalculators) {
    return (
      <CalculatorsModule
        onBack={handleBackFromCalculators}
        onNavigateToChapter={handleNavigateToChapterFromCalculator}
      />
    )
  }

  // Show chapter viewer
  if (selectedChapter) {
    return (
      <ChapterViewer
        chapter={selectedChapter}
        onBack={handleBackFromChapter}
      />
    )
  }

  // Show protocol detail view
  if (selectedProtocol) {
    return (
      <ProtocolDetail
        protocol={selectedProtocol}
        onBack={handleBackFromProtocol}
      />
    )
  }

  const isSearching = searchQuery.trim().length > 0

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header with menu trigger and calculator */}
      <AppHeader 
        onMenuClick={() => setIsMenuOpen(true)} 
        onCalculatorClick={handleOpenCalculators}
      />

      {/* Side Menu */}
      <SideMenu
        isOpen={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        onSelectProtocol={handleSelectProtocol}
        onSelectChapter={handleSelectChapter}
        onOpenHuil={handleOpenHuil}
        onOpenCalculators={handleOpenCalculators}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section with Search */}
        <section className="bg-primary px-4 pb-10 pt-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/15 rounded-2xl mb-4 shadow-sm">
              <Activity className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-primary-foreground mb-1.5 text-balance">
              Protocolos de Urgencias
            </h2>
            <p className="text-primary-foreground/75 text-sm">
              Acceso rápido a guías clínicas actualizadas
            </p>
          </div>
          <SearchBar
            value={searchQuery}
            onChange={handleSearch}
            onClear={handleClearSearch}
          />
        </section>

        {/* Content Area */}
        <section className="flex-1 px-4 py-6 -mt-2">
          {isSearching ? (
            <SearchResults
              results={searchResults}
              query={searchQuery}
              onSelectProtocol={handleSelectProtocol}
            />
          ) : (
            <div className="space-y-8">
              {/* Hospital & Tools Section */}
              <section>
                <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10">
                    <Building2 className="h-3 w-3 text-primary" />
                  </span>
                  Herramientas
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleOpenHuil}
                    className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border text-center hover:shadow-sm hover:border-primary/30 transition-all active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm">Mi Hospital</h3>
                      <p className="text-xs text-muted-foreground">HUIL</p>
                    </div>
                  </button>
                  <button
                    onClick={handleOpenCalculators}
                    className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border text-center hover:shadow-sm hover:border-primary/30 transition-all active:scale-[0.98]"
                  >
                    <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center">
                      <Calculator className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm">Calculadoras</h3>
                      <p className="text-xs text-muted-foreground">Escalas clínicas</p>
                    </div>
                  </button>
                </div>
              </section>

              <Favorites 
                onSelectChapter={handleSelectChapter}
                onAddFavorite={() => setIsMenuOpen(true)}
              />

              {/* Available Chapters Section */}
              <section>
                <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500/10">
                    <BookOpen className="h-3 w-3 text-emerald-600" />
                  </span>
                  Capítulos disponibles
                </h2>
                <div className="grid gap-2.5">
                  <button
                    onClick={() => handleSelectChapter(1)}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border text-left hover:shadow-sm hover:border-primary/30 transition-all active:scale-[0.98] group"
                  >
                    <div className="w-11 h-11 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-emerald-600">01</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-sm line-clamp-2">
                        Servicio de Urgencias. Estructura y Organización
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        Introducción
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </button>
                  <button
                    onClick={() => handleSelectChapter(2)}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border text-left hover:shadow-sm hover:border-primary/30 transition-all active:scale-[0.98] group"
                  >
                    <div className="w-11 h-11 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-emerald-600">02</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-sm line-clamp-2">
                        Aspectos Médico-Legales en Urgencias
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        Introducción
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </button>
                </div>
              </section>
              
              {/* Featured Protocols Section */}
              <section>
                <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-accent/10">
                    <Activity className="h-3 w-3 text-accent" />
                  </span>
                  Protocolos destacados
                </h2>
                <div className="grid gap-2.5">
                  <button
                    onClick={() => handleSelectProtocol('intubacion')}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border text-left hover:shadow-sm hover:border-primary/30 transition-all active:scale-[0.98] group"
                  >
                    <div className="w-11 h-11 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-lg">🫁</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-sm truncate">
                        Intubación de Secuencia Rápida
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        Medicina de Urgencias
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleSelectProtocol('hemorragia-digestiva')}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border text-left hover:shadow-sm hover:border-primary/30 transition-all active:scale-[0.98] group"
                  >
                    <div className="w-11 h-11 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-lg">🩸</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-sm truncate">
                        Hemorragia Digestiva Alta
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        Aparato Digestivo
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleSelectProtocol('crisis-epilepticas')}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border text-left hover:shadow-sm hover:border-primary/30 transition-all active:scale-[0.98] group"
                  >
                    <div className="w-11 h-11 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-sm truncate">
                        Crisis Epilépticas y Status
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        Neurología
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </section>
            </div>
          )}
        </section>
      </main>

      {/* Bottom safe area for mobile */}
      <div className="h-safe-area-inset-bottom" />
    </div>
  )
}
