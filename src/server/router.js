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

// Main pages - e.g. /about
router.get('/page/:page', (req, res) => { 
  console.log('\n-->> 2.', req.params)
  res.sendFile(HTML_FILE) 
})

// Post pages - e.g. /posts/redux
router.get('/posts/:post', (req, res) => { 
  console.log('\n-->> 3.', req.params)
  res.sendFile(HTML_FILE) 
})

// Assets from the Dist folder - e.g. font files
router.get('*', (req, res) => {
  console.log('-->> 4.', req.params)

  if (req.params['0'] === '/' || req.params['0'].slice(0, 2) === '..')
    return res.sendFile(HTML_FILE)
  
  res.sendFile(path.join(DIST_DIR, req.params[0].slice(1)))
})

export default router