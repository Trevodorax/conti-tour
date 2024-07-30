import { createLazyFileRoute } from '@tanstack/react-router'
import { Continent } from '../pages/continent/Continent'

export const Route = createLazyFileRoute('/continent')({
  component: Continent
})