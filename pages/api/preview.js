import { previewHandler } from '@tipe/next'

const clientOptions = {
  projectId: process.env.TIPE_PROJECT_ID,
  environment: process.env.TIPE_ENVIRONMENT,
  assetHost: process.env.TIPE_ASSET_HOST || '',
  contentHost: process.env.TIPE_CONTENT_HOST || '',
  adminHost: process.env.TIPE_ADMIN_HOST || '',
  key: process.env.TIPE_API_KEY || '',
}

export default async (req, res) => {
  previewHandler(req, res, clientOptions)
}