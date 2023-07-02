const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

const swaggerjsdoc = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

//SWAGGER
const swaggerConfig = swaggerjsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Article Service API Documentation',
      description: 'Dokumentasi ini berkenaan dengan API - API untuk service Article',
      version: '0.5.0',
      contact: {
        email: 'bambang@gmail.com',
        name: 'bambang',
        url: 'bambang.github.io'
      }
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Local Server'
      }
    ]
  },
  apis: ['./server/routes/*.js']
})
app.use('/docs', swaggerui.serve, swaggerui.setup(swaggerConfig))

/**
 * @Routes /api
 * entrypoint for all API routes
 */

app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})