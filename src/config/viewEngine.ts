import express from 'express'

let configViewEngine = (app: any) => {
  app.use(express.static('./src/public'))
  app.set('view engine', 'ejs')
  app.set('view', './src/views')
}
export { configViewEngine }
