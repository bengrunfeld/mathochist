import path from 'path'
import express from 'express'
import router from './router'

const app = express()

app.use('', router)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})