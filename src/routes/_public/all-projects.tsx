import { createFileRoute } from '@tanstack/react-router'
import { AllProjectsPage } from '@/components/portfolio/all-projects'

export const Route = createFileRoute('/_public/all-projects')({
  component: AllProjectsPage,
})
