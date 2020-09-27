const { createSchema } = require('@tipe/js')

module.exports = createSchema([
  {
    id: 'landingPage',
    type: 'document',
    label: 'Landing Page',
    previewPath: '/',
    fields: [
      {
        id: 'title',
        type: 'string',
        label: 'Title',
      },
      {
        id: 'description',
        type: 'string',
        label: 'Description',
      },
      {
        id: 'mainImg',
        type: 'image',
        label: 'Main Image',
      },
      {
        id: 'mainImg1',
        type: 'image',
        label: 'Main Image',
      },
      {
        id: 'mainImg2',
        type: 'image',
        label: 'Main Image',
      },
      {
        id: 'contact',
        type: 'string',
        label: 'Contact',
      },
      {
        id: 'research',
        type: 'section',
        label: 'Research Section',
      },
      {
        id: 'projects',
        type: 'section',
        label: 'Projects Section',
      },
      {
        id: 'blog',
        type: 'section',
        label: 'Blog Section',
      },
    ],
  },
  {
    id: 'section',
    type: 'object',
    label: 'Section',
    fields: [
      {
        id: 'title',
        type: 'string',
        label: 'Title',
      },
      {
        id: 'description',
        type: 'string',
        label: 'Description',
      },
      {
        id: 'items',
        type: 'sectionItems',
        label: 'Items',
      },
    ],
  },
  {
    id: 'sectionItems',
    type: 'array',
    label: 'section Items',
    contains: [{ type: 'sectionItem', label: 'Section Item' }],
  },
  {
    id: 'sectionItem',
    type: 'object',
    label: 'Section Item',
    fields: [
      {
        id: 'title',
        type: 'string',
        label: 'Title',
      },
      {
        id: 'subTitle',
        type: 'string',
        label: 'Sub Title',
      },
      {
        id: 'description',
        type: 'string',
        label: 'Description',
      },
      {
        id: 'link',
        type: 'string',
        label: 'Link',
      },
      {
        id: 'image',
        type: 'image',
        label: 'Image',
      },
    ],
  },
])
