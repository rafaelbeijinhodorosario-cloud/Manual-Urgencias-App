'use client'

import { Star, ChevronRight, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useFavorites, type FavoriteChapter } from '@/hooks/use-favorites'

interface FavoritesProps {
  onSelectChapter: (chapterNumber: number) => void
  onAddFavorite?: () => void
}

export function Favorites({ onSelectChapter, onAddFavorite }: FavoritesProps) {
  const { favorites, removeFavorite, isLoaded } = useFavorites()

  if (!isLoaded) {
    return (
      <section className="w-full">
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-500/10">
            <Star className="h-3 w-3 text-amber-500" />
          </span>
          Favoritos
        </h2>
        <div className="animate-pulse space-y-2">
          <div className="h-16 bg-muted rounded-xl" />
          <div className="h-16 bg-muted rounded-xl" />
        </div>
      </section>
    )
  }

  if (favorites.length === 0) {
    return (
      <section className="w-full">
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-500/10">
            <Star className="h-3 w-3 text-amber-500" />
          </span>
          Favoritos
        </h2>
        <div className="bg-card rounded-xl border border-dashed border-border p-6 text-center">
          <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-3">
            <Star className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Aun no tienes capítulos favoritos
          </p>
          <p className="text-xs text-muted-foreground/70 mb-4">
            Marca capítulos con la estrella para acceder rapidamente
          </p>
          {onAddFavorite && (
            <Button
              variant="outline"
              size="sm"
              onClick={onAddFavorite}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Explorar capítulos
            </Button>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-500/10">
            <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
          </span>
          Favoritos
          <span className="text-xs font-normal text-muted-foreground">
            ({favorites.length})
          </span>
        </h2>
      </div>
      <div className="grid gap-2.5">
        {favorites.map((chapter) => (
          <FavoriteCard
            key={chapter.id}
            chapter={chapter}
            onSelect={() => onSelectChapter(chapter.number)}
            onRemove={() => removeFavorite(chapter.id)}
          />
        ))}
      </div>
    </section>
  )
}

interface FavoriteCardProps {
  chapter: FavoriteChapter
  onSelect: () => void
  onRemove: () => void
}

function FavoriteCard({ chapter, onSelect, onRemove }: FavoriteCardProps) {
  return (
    <div className="flex items-center gap-2 group">
      <button
        onClick={onSelect}
        className="flex-1 flex items-center gap-4 p-4 bg-card rounded-xl border border-border text-left hover:shadow-sm hover:border-amber-500/30 transition-all active:scale-[0.98]"
      >
        <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
          <span className="text-sm font-bold text-amber-600">
            {String(chapter.number).padStart(2, '0')}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground text-sm line-clamp-2">
            {chapter.title}
          </h3>
          <p className="text-xs text-muted-foreground truncate">
            {chapter.sectionTitle}
          </p>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:translate-x-0.5 transition-transform shrink-0" />
      </button>
      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
        className="h-10 w-10 shrink-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">Quitar de favoritos</span>
      </Button>
    </div>
  )
}

// Export a smaller inline favorite button for use in chapter lists
interface FavoriteButtonProps {
  chapterId: string
  chapterNumber: number
  chapterTitle: string
  sectionTitle: string
  size?: 'sm' | 'md'
}

export function FavoriteButton({ 
  chapterId, 
  chapterNumber, 
  chapterTitle, 
  sectionTitle,
  size = 'md' 
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites()
  
  if (!isLoaded) {
    return null
  }

  const isFav = isFavorite(chapterId)
  const sizeClasses = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'
  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.stopPropagation()
        toggleFavorite({
          id: chapterId,
          number: chapterNumber,
          title: chapterTitle,
          sectionTitle
        })
      }}
      className={`${sizeClasses} shrink-0 ${
        isFav 
          ? 'text-amber-500 hover:text-amber-600 hover:bg-amber-500/10' 
          : 'text-muted-foreground hover:text-amber-500 hover:bg-amber-500/10'
      }`}
    >
      <Star className={`${iconSize} ${isFav ? 'fill-current' : ''}`} />
      <span className="sr-only">
        {isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </span>
    </Button>
  )
}
