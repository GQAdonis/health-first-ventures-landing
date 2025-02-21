import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url({ data }) {
        return `/${data?.slug}`
      },
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'Slug',
    },
    {
      name: 'richText',
      type: 'richText',
    },
    {
      name: 'hero_heading',
      type: 'text',
      required: true,
    },
    {
      name: 'hero_subheading',
      type: 'text',
    },
    {
      name: 'hero_ctatext',
      type: 'text',
    },
    {
      name: 'hero_ctalink',
      type: 'text',
    },
    {
      name: 'mission_heading',
      type: 'text',
      required: true,
    },
    {
      name: 'mission_content',
      type: 'richText',
    },
    {
      name: 'portfolio',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'team',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
        },
        {
          name: 'bio',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
};
