'use client'

import { useState, useEffect, useCallback } from 'react'

const FAVORITES_STORAGE_KEY = 'manual-urgencias-favorites'

export interface FavoriteChapter {
  id: string
  number: number
  title: string
  sectionTitle: string
  addedAt: number
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteChapter[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setFavorites(Array.isArray(parsed) ? parsed : [])
      }
    } catch (error) {
      console.error('Error loading favorites:', error)
      setFavorites([])
    }
    setIsLoaded(true)
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
      } catch (error) {
        console.error('Error saving favorites:', error)
      }
    }
  }, [favorites, isLoaded])

  const addFavorite = useCallback((chapter: Omit<FavoriteChapter, 'addedAt'>) => {
    setFavorites(prev => {
      // Check if already exists
      if (prev.some(fav => fav.id === chapter.id)) {
        return prev
      }
      return [...prev, { ...chapter, addedAt: Date.now() }]
    })
  }, [])

  const removeFavorite = useCallback((chapterId: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== chapterId))
  }, [])

  const toggleFavorite = useCallback((chapter: Omit<FavoriteChapter, 'addedAt'>) => {
    setFavorites(prev => {
      const exists = prev.some(fav => fav.id === chapter.id)
      if (exists) {
        return prev.filter(fav => fav.id !== chapter.id)
      }
      return [...prev, { ...chapter, addedAt: Date.now() }]
    })
  }, [])

  const isFavorite = useCallback((chapterId: string) => {
    return favorites.some(fav => fav.id === chapterId)
  }, [favorites])

  const clearAllFavorites = useCallback(() => {
    setFavorites([])
  }, [])

  // Sort favorites by most recently added
  const sortedFavorites = [...favorites].sort((a, b) => b.addedAt - a.addedAt)

  return {
    favorites: sortedFavorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearAllFavorites,
    isLoaded,
    count: favorites.length
  }
}
