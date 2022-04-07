// npm
const config = require('./config/config')
const express = require('express')

// routers
const error404 = require('./middlewares/404')
const mainRouter = require('./routes/views/main.route')
const formRouter = require('./routes/views/form.route')
const profileRouter = require('./routes/views/profile.route')
const adminRouter = require('./routes/views/admin.route')

// app && PORT
const app = express()
const PORT = process.env.PORT ?? 3000

// config
config(app)

// routes
app.use('/', mainRouter)
app.use('/form', formRouter)
app.use('/profile', profileRouter)
app.use('/admin', adminRouter)
app.use(error404)

// listen
app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`)})
