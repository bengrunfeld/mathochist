import path from 'path'
import express from 'express'
import fs from 'fs'

const router = express.Router(),
               app = express(),
               DIST_DIR = __dirname,
               HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

router.get('/api/posts/:postId', (req, res) => {
  const content = fs.readFileSync(`./src/content/${req.params.postId}.md`, 'utf8')

  res.setHeader('Content-Type', 'application/json')
  res.json(content)
})

router.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})

app.use(express.static(DIST_DIR))


export default router