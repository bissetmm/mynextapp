import { https, logger } from 'firebase-functions'
import { default as next } from 'next'

import { distDir as nextjsDistDir } from '../next.config.js'

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: nextjsDistDir,
  },
})
const nextjsHandle = nextjsServer.getRequestHandler()

export const nextApp = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => {
    logger.info(req.path, req.query)
    return nextjsHandle(req, res)
  })
})
