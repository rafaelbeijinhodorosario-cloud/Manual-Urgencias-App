'use client'

import { ArrowLeft, BookOpen, Users, Lightbulb, ChevronRight, Share2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useFavorites } from '@/hooks/use-favorites'
import { getSectionByChapterId } from '@/lib/manual-index'
import type { ChapterContent, ContentSection } from '@/lib/chapters-content'

interface ChapterViewerProps {
  chapter: ChapterContent
  onBack: () => void
}

function SectionContent({ section }: { section: ContentSection }) {
  const HeadingTag = section.level === 1 ? 'h2' : section.level === 2 ? 'h3' : 'h4'
  const headingStyles = {
    1: 'text-xl font-bold text-foreground mt-8 mb-4 pb-2 border-b border-border',
    2: 'text-lg font-semibold text-foreground mt-6 mb-3',
    3: 'text-base font-semibold text-foreground/90 mt-4 mb-2'
  }
  
  return (
    <div className="chapter-section">
      <HeadingTag className={headingStyles[section.level]}>
        {section.title}
      </HeadingTag>
      
      {section.content && (
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
          {section.content}
        </p>
      )}
      
      {section.bullets && (
        <ul className="space-y-2 mb-4 ml-1">
          {section.bullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
              <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      
      {section.numberedList && (
        <ol className="space-y-2 mb-4 ml-1 list-decimal list-inside">
          {section.numberedList.map((item, idx) => (
            <li key={idx} className="text-sm text-foreground/80 leading-relaxed pl-2">
              {item}
            </li>
          ))}
        </ol>
      )}
      
      {section.table && (
        <div className="my-4 overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-primary/10">
                {section.table.headers.map((header, idx) => (
                  <th 
                    key={idx} 
                    className="px-3 py-2 text-left font-semibold text-foreground border-b border-border"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, rowIdx) => (
                <tr 
                  key={rowIdx} 
                  className={rowIdx % 2 === 0 ? 'bg-card' : 'bg-muted/30'}
                >
                  {row.map((cell, cellIdx) => (
                    <td 
                      key={cellIdx} 
                      className="px-3 py-2 text-foreground/80 border-b border-border/50"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {section.table.caption && (
            <p className="text-xs text-muted-foreground mt-2 text-center italic">
              {section.table.caption}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export function ChapterViewer({ chapter, onBack }: ChapterViewerProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const section = getSectionByChapterId(`cap-${chapter.number}`)
  const sectionTitle = section?.title || 'Manual de Urgencias'
  const chapterId = `cap-${chapter.number}`
  const isFav = isFavorite(chapterId)

  const handleToggleFavorite = () => {
    toggleFavorite({
      id: chapterId,
      number: chapter.number,
      title: chapter.title,
      sectionTitle
    })
  }

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
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-xs shrink-0">
                Capítulo {chapter.number}
              </Badge>
            </div>
            <h1 className="text-base font-semibold text-foreground line-clamp-2 leading-tight">
              {chapter.title}
            </h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggleFavorite}
            className={`shrink-0 rounded-xl ${
              isFav 
                ? 'text-amber-500 hover:text-amber-600 hover:bg-amber-500/10' 
                : 'text-muted-foreground hover:text-amber-500 hover:bg-amber-500/10'
            }`}
          >
            <Star className={`h-5 w-5 ${isFav ? 'fill-current' : ''}`} />
            <span className="sr-only">{isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}</span>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-4 space-y-4 max-w-3xl mx-auto w-full">
        {/* Chapter Info Card */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 shrink-0">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-foreground mb-1">
                  Capítulo {chapter.number}
                </h2>
                <p className="text-sm text-foreground/80 leading-snug">
                  {chapter.title}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authors */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <CardTitle className="text-sm font-semibold text-foreground">
                Autores
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {chapter.authors.map((author, idx) => (
                <Badge key={idx} variant="outline" className="text-xs font-normal">
                  {author}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chapter Content */}
        <Card>
          <CardContent className="pt-6 pb-8">
            {chapter.sections.map((section) => (
              <SectionContent key={section.id} section={section} />
            ))}
          </CardContent>
        </Card>

        {/* Key Points / Remember */}
        {chapter.keyPointsRemember && chapter.keyPointsRemember.length > 0 && (
          <Card className="bg-amber-500/5 border-amber-500/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15">
                  <Lightbulb className="h-4 w-4 text-amber-600" />
                </div>
                <CardTitle className="text-sm font-semibold text-amber-700">
                  Puntos Clave / Recuerda
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {chapter.keyPointsRemember.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-700 text-xs font-semibold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Bottom Actions */}
      <footer className="sticky bottom-0 bg-card border-t border-border p-4 pb-safe">
        <div className="flex gap-3 max-w-3xl mx-auto">
          <Button 
            variant={isFav ? "default" : "outline"} 
            onClick={handleToggleFavorite}
            className={`flex-1 gap-2 h-12 rounded-xl ${isFav ? 'bg-amber-500 hover:bg-amber-600 text-white' : ''}`}
          >
            <Star className={`h-4 w-4 ${isFav ? 'fill-current' : ''}`} />
            {isFav ? 'En Favoritos' : 'Agregar a Favoritos'}
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
