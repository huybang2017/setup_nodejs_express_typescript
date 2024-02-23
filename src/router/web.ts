import express from 'express'
let router = express.Router()
let initWebRouter = (app: any) => {
  router.get('/', (req, res) => {
    return res.send('hello world huybang2017')
  })

  return app.use('/', router)
}

export { initWebRouter }
