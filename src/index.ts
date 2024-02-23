import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { configViewEngine } from './config/viewEngine'
import { initWebRouter } from './router/web'

dotenv.config()

// const app: Express = express()
// const port = process.env.PORT || 3000

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server')
// })

let app: Express = express()
// config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

configViewEngine(app)
initWebRouter(app)

let port = process.env.PORT || 6969
// port === undefined => port = 6969
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
