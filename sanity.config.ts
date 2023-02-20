import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"

export default defineConfig({
  basePath: '/studio',
  name: 'PAPAFARM_CONTENT_Studio',
  title: 'PAPAFARM Content Studio',

  projectId: projectId as string,
  dataset: dataset as string,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})