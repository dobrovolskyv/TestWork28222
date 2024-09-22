"use client"
import BookmarkList from '@/app/components/BookmarkList/BookmarkList'
import Header from '@/app/components/Header/Header'
import React from 'react'

export default function FavoritesPage
  () {
  return (
    <div className='container'>
      <Header />

      <BookmarkList />
    </div>
  )
}
