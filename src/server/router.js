import path from 'path'
import express from 'express'
import fs from 'fs'

const router = express.Router(),
  app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

router.get('*', (req, res) => {
  if (req.params['0'] === '/' || req.params['0'].slice(0, 2) === '..') {
    res.sendFile(HTML_FILE)
    return
  }

  res.sendFile(path.join(DIST_DIR, req.params[0].slice(1)))
})

export default router
