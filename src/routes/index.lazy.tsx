import { createLazyFileRoute } from '@tanstack/react-router'
import { Landing } from '../pages/landing/Landing'

export const Route = createLazyFileRoute('/')({
  component: Landing,
})
