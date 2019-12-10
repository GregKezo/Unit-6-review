require('dotenv').config();

const express = require('express')
const app = express()
const gs = require('gradient-string')  
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env  
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./authController')
const postCtrl = require('./controller')

app.use(express.json());
app.use(session({
  resave: false
  ,saveUninitialized: true
  ,cookie: {maxAge: 1000 * 60 * 60}
  ,secret: SESSION_SECRET
}))


massive(CONNECTION_STRING).then( db => {
  app.set('db', db)
  console.log(gs.summer(`DB is connected. Let's do this.`))
})


//auth endpoints
app.post('/api/login', authCtrl.login)
app.post('/api/register', authCtrl.register)
app.post('/api/logout', authCtrl.logout)
app.get('/api/user', authCtrl.getUser)

app.get('/api/posts/:id', postCtrl.getPosts)

const port = SERVER_PORT;
app.listen(port, () => console.log(gs.pastel(`Server running on ${port}`)));