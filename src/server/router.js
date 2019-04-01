import path from 'path'
import express from 'express'
import fs from 'fs'

const router = express.Router(),
               app = express(),
               DIST_DIR = __dirname,
               HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

// Markdown docs
router.get('/api/posts/:postId', (req, res) => {
  console.log('\n-->> 1.', req.params)
  const content = fs.readFileSync(`./src/content/${req.params.postId}.md`, 'utf8')

  res.setHeader('Content-Type', 'application/json')
  res.json(content)
})

// Home page
router.get('/', (req, res) => { res.sendFile(HTML_FILE) })


// Assets from the Dist folder
router.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, req.params[0].slice(1)))
})

app.use(express.static(DIST_DIR))


export default router