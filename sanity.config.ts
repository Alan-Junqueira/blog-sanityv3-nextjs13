import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { myTheme } from './theme'
import StudioNavbar from '@/components/StudioNavbar'
import { schemaTypes } from '@/schemas'
import Logo from '@/components/Logo'
import { gedDefaultDocumentNode } from 'structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  basePath: '/studio',
  name: 'PAPAFAM_CONTENT_Studio',
  title: 'PAPAFAM Content Studio',
  projectId: projectId as string,
  dataset: dataset as string,
  plugins: [deskTool({
    defaultDocumentNode: gedDefaultDocumentNode 
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
