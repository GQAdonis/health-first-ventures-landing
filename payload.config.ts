import sharp from 'sharp'
import { slateEditor } from '@payloadcms/richtext-slate'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { fileURLToPath } from 'node:url'
import path from 'path'
import { buildConfig } from 'payload'

import { Pages } from '@/collections/pages'
import { Users } from '@/collections/users'
import { MediaCollection } from '@/collections/media'
import { MainMenu } from '@/globals/main-menu'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  cors: '*',
  admin: {
    livePreview: {
      breakpoints: [
        {
          name: 'mobile',
          height: 667,
          label: 'Mobile',
          width: 375,
        },
      ],
      url: ({ data, collectionConfig, locale }) => {
        if (!collectionConfig) return ''
        
        const slug = data.slug === 'home' ? '' : `/${data.slug}`
        const localeQuery = locale ? `?locale=${locale.code}` : ''
        
        return `${data.tenant?.url}${slug}${localeQuery}`
      },
      collections: ['pages', 'users', 'media'],
    },
  },
  // Configure the Postgres adapter here
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  // If you'd like to use Rich Text, pass your editor here
  editor: slateEditor({}),
  globals: [MainMenu],

  // Define and configure your collections in this array
  collections: [Pages, Users, MediaCollection],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
