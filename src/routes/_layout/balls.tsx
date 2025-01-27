import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/balls')({
  component: Home,
})

function Home() {
  return <div>Balls</div>
}
