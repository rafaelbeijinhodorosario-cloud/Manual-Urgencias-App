'use client'

import { ChevronRight, BookOpen, Activity, Building2, Calculator, Star } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { manualSections } from '@/lib/manual-index'
import { useFavorites } from '@/hooks/use-favorites'

interface SideMenuProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onSelectProtocol: (protocolId: string) => void
  onSelectChapter?: (chapterNumber: number) => void
  onOpenHuil?: () => void
  onOpenCalculators?: () => void
  trigger?: React.ReactNode
}

export function SideMenu({ isOpen, onOpenChange, onSelectProtocol, onSelectChapter, onOpenHuil, onOpenCalculators, trigger }: SideMenuProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  
  const handleSelectProtocol = (protocolId: string) => {
    onSelectProtocol(protocolId)
    onOpenChange(false)
  }
  
  const handleSelectChapter = (chapterNumber: number) => {
    if (onSelectChapter) {
      onSelectChapter(chapterNumber)
    }
    onOpenChange(false)
  }
  
  const handleToggleFavorite = (chapter: { id: string; number: number; title: string }, sectionTitle: string) => {
    toggleFavorite({
      id: chapter.id,
      number: chapter.number,
      title: chapter.title,
      sectionTitle
    })
  }

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}
      <SheetContent side="left" className="w-[85vw] sm:max-w-sm p-0 bg-sidebar text-sidebar-foreground">
        <SheetHeader className="p-4 border-b border-sidebar-border">
          <SheetTitle className="flex items-center gap-3 text-sidebar-foreground">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sidebar-primary/20">
              <BookOpen className="h-4.5 w-4.5 text-sidebar-primary" />
            </div>
            <div>
              <span className="block text-base">Índice del Manual</span>
              <span className="text-xs font-normal text-sidebar-foreground/60">
                Protocolos por especialidad
              </span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-5.5rem)]">
          <div className="p-4">
            {/* Hospital & Tools Section */}
            {(onOpenHuil || onOpenCalculators) && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-3 px-1">
                  Herramientas
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {onOpenHuil && (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        onOpenHuil()
                        onOpenChange(false)
                      }}
                      className="flex flex-col items-center gap-2 h-auto py-4 px-3 hover:bg-sidebar-accent rounded-xl transition-colors border border-sidebar-border/50"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/15">
                        <Building2 className="h-5 w-5 text-sky-500" />
                      </div>
                      <span className="text-xs text-sidebar-foreground">Mi Hospital</span>
                    </Button>
                  )}
                  {onOpenCalculators && (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        onOpenCalculators()
                        onOpenChange(false)
                      }}
                      className="flex flex-col items-center gap-2 h-auto py-4 px-3 hover:bg-sidebar-accent rounded-xl transition-colors border border-sidebar-border/50"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15">
                        <Calculator className="h-5 w-5 text-violet-500" />
                      </div>
                      <span className="text-xs text-sidebar-foreground">Calculadoras</span>
                    </Button>
                  )}
                </div>
              </div>
            )}
            
            {/* Manual Index by Sections */}
            <h3 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-3 px-1">
              Índice del Manual
            </h3>
            <Accordion type="multiple" className="space-y-2">
              {manualSections.map((section) => (
                <AccordionItem
                  key={section.id}
                  value={section.id}
                  className="border border-sidebar-border rounded-xl bg-sidebar-accent/30 px-1 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-3 px-3">
                    <span className="flex items-center gap-3 text-left">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary text-xs font-bold shrink-0">
                        {section.chapters.length}
                      </span>
                      <span className="flex-1">
                        <span className="font-medium text-sm text-sidebar-foreground block">
                          {section.title}
                        </span>
                        <span className="text-xs text-sidebar-foreground/50">
                          Cap. {section.chapters[0]?.number}-{section.chapters[section.chapters.length - 1]?.number}
                        </span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 px-1">
                    <div className="space-y-1">
                      {section.chapters.map((chapter) => {
                        const isFav = isFavorite(chapter.id)
                        return (
                          <div key={chapter.id} className="flex items-center gap-1 group">
                            <Button
                              variant="ghost"
                              onClick={() => handleSelectChapter(chapter.number)}
                              className="flex-1 justify-start h-auto py-2.5 px-3 text-left text-sm font-normal text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
                            >
                              <span className="flex items-center gap-3 w-full">
                                <span className="flex h-6 w-6 items-center justify-center rounded bg-sidebar-accent text-sidebar-foreground/60 text-xs font-medium shrink-0">
                                  {chapter.number}
                                </span>
                                <span className="flex-1 truncate pr-1">
                                  {chapter.title}
                                </span>
                              </span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleToggleFavorite(chapter, section.title)
                              }}
                              className={`h-8 w-8 shrink-0 ${
                                isFav 
                                  ? 'text-amber-500 hover:text-amber-600' 
                                  : 'text-sidebar-foreground/30 hover:text-amber-500 opacity-0 group-hover:opacity-100'
                              } transition-all`}
                            >
                              <Star className={`h-4 w-4 ${isFav ? 'fill-current' : ''}`} />
                            </Button>
                          </div>
                        )
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Footer info */}
          <div className="p-4 border-t border-sidebar-border mt-4">
            <div className="flex items-center gap-2 text-sidebar-foreground/50 text-xs">
              <Activity className="h-3.5 w-3.5" />
              <span>Manual de Urgencias v1.0</span>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
