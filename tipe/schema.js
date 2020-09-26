const { createSchema } = require('@tipe/js')

module.exports = createSchema([
  /**
   * Modify and add your schema here
   * */
  // {
  //   id: 'homePage',
  //   type: 'document',
  //   label: 'Home Page',
  //   previewPath: '/',
  //   fields: [
  //     {
  //       id: 'title',
  //       type: 'string',
  //       label: 'Title'
  //     },
  //     {
  //       id: 'bio',
  //       type: 'string',
  //       label: 'Bio'
  //     },
  //     {
  //       id: 'profilepic',
  //       type: 'image',
  //       label: 'Profile Pic'
  //     },
  //     {
  //       id: 'projects',
  //       type: 'string',
  //       label: 'Projects'
  //     },
  //     {
  //       id: 'cliTitle',
  //       type: 'string',
  //       label: 'CLI Title'
  //     },
  //     {
  //       id: 'cliDesc',
  //       type: 'string',
  //       label: 'CLI Description'
  //     },
  //     {
  //       id: 'cliInst',
  //       type: 'string',
  //       label: 'CLI Instructions'
  //     },
  //     {
  //       id: 'resTitle',
  //       type: 'string',
  //       label: 'Reseach Title'
  //     },
  //     {
  //       id: 'keyProbTitle',
  //       type: 'string',
  //       label: 'Key Problem Section Title'
  //     },
  //     {
  //       id: 'keyProb',
  //       type: 'string',
  //       label: 'Key Problem'
  //     },
  //      {
  //       id: 'keyProb1',
  //       type: 'string',
  //       label: 'Key Problem'
  //     },
  //     {
  //       id: 'storyboard',
  //       type: 'image',
  //       label: 'Storyboard Pic'
  //     },
  //     {
  //       id: 'method',
  //       type: 'string',
  //       label: 'Methodology Section Title'
  //     },
  //     {
  //       id: 'methods1',
  //       type: 'string',
  //       label: 'Methodology 1'
  //     },
  //     {
  //       id: 'methods2',
  //       type: 'string',
  //       label: 'Methodology 2'
  //     },
  //     {
  //       id: 'methods3',
  //       type: 'string',
  //       label: 'Methodology 3'
  //     },
  //     {
  //       id: 'prototype',
  //       type: 'string',
  //       label: 'Prototype Section Title'
  //     },
  //     {
  //       id: 'androidImg',
  //       type: 'image',
  //       label: 'Android Prototype Image'
  //     },
  //     {
  //       id: 'iPhoneImg',
  //       type: 'image',
  //       label: 'iPhone Prototype Image'
  //     },
  //     {
  //       id: 'keyFindings',
  //       type: 'string',
  //       label: 'Key Findings Section Title'
  //     },
  //     {
  //       id: 'results1',
  //       type: 'string',
  //       label: 'Key Findings'
  //     },
  //     {
  //       id: 'results2',
  //       type: 'string',
  //       label: 'Key Findings'
  //     },
  //     {
  //       id: 'results3',
  //       type: 'string',
  //       label: 'Key Findings'
  //     },
  //     {
  //       id: 'feedback',
  //       type: 'string',
  //       label: 'Feedback Title'
  //     },
  //     {
  //       id: 'feedback1',
  //       type: 'string',
  //       label: 'Feedback Quote 1'
  //     },
  //     {
  //       id: 'feedback2',
  //       type: 'string',
  //       label: 'Feedback Quote 2'
  //     },
  //     {
  //       id: 'feedback3',
  //       type: 'string',
  //       label: 'Feedback Quote 3'
  //     },
  //     {
  //       id: 'feedback4',
  //       type: 'string',
  //       label: 'Feedback Quote 4'
  //     }
  //   ]
  // },
  {
    id: 'landingPage',
    type: "document",
    label: "Landing Page",
    previewPath: "/",
    fields: [
      {
        id: "title",
        type: "string",
        label: "Title"
      },
      {
        id: "description",
        type: "string",
        label: "Description"
      },
      {
        id: "mainImg",
        type: "image",
        label: "Main Image"
      },
      {
        id: "contact",
        type: "string",
        label: "Contact"
      },
      {
        id: "research",
        type: "section",
        label: "Research Section"
      },
      {
        id: "projects",
        type: "section",
        label: "Projects Section"
      },
      {
        id: "blog",
        type: "section",
        label: "Blog Section"
      }
    ]
  },
  {
    id: "section",
    type: "object",
    label: "Section",
    fields: [
      {
        id: "title",
        type: "string",
        label: "Title"
      },
      {
        id: "description",
        type: "string",
        label: "Description"
      },
      {
        id: "items",
        type: "sectionItems",
        label: "Items"
      }
    ]
  },
  {
    id: "sectionItems",
    type: "array",
    label: "section Items",
    contains: [{type: "sectionItem", label: "Section Item"}]
  },
  {
    id: "sectionItem",
    type: "object",
    label: "Section Item",
    fields: [
      {
        id: "title",
        type: "string",
        label: "Title"
      },
      {
        id: "subTitle",
        type: "string",
        label: "Sub Title"
      },
      {
        id: "description",
        type: "string",
        label: "Description"
      },
      {
        id: "link",
        type: "string",
        label: "Link"
      },
      {
        id: "image",
        type: "image",
        label: "Image"
      }
    ]
  }
])
  