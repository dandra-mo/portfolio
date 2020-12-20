
  import React from 'react'
  import Head from 'next/head'
  import dynamic from 'next/dynamic'
  import { WithTipePage, typography } from '@tipe/react-editor'
  import Link from 'next/link'
  import Router from 'next/router'
  import { createTipeClient } from '@tipe/js'
  import { TypographyStyle } from 'react-typography'

  let schema = require('../../tipe/schema')
  let customFields = require('../../tipe/fields')

  if (customFields.default) {
    customFields = customFields.default
  }

  if (schema.default) {
    schema = schema.default
  }

  const TipePage = dynamic(() => import('@tipe/react-editor').then(mod => mod.TypePage), { ssr: false })
  const TypePage = props => <TipePage {...props} />
  
  const client = createTipeClient({
    environment: 'Production',
    projectId: '5f5e5208268d62002c492675',
    key: process.env.TIPE_API_KEY,
    adminHost: 'https://api.admin.tipe.io',
    contentHost: 'https://content.tipe.io',
    assetHost: 'https://upload.tipe.io'
  })
  
  const Page = WithTipePage(TypePage, {
    client,
    schema,
    customFields,
    mountPath: 'cms',
    project: '5f5e5208268d62002c492675',
    previewSecret: process.env.NEXT_PUBLIC_TIPE_PREVIEW_SECRET,
    contentHost: client.__config.contentHost,
    assetHost: client.__config.assetHost,
    adminHost: client.__config.adminHost,
    Link: ({ to, children, styles }) => (
      <Link href={to} passHref>
        <a sx={styles}>{children}</a>
      </Link>
    ),
    onNavigate: (to) => {
      let path = to
      if (path[0] !== '/') {
        path = '/' + path
      }
      Router.push(path)
    },
  })

  export default Page
