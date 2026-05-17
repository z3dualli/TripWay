const jsonServer = require('json-server')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

app.db = router.db

app.use(cors())
app.use(jsonServer.bodyParser)

const SECRET = 'tripway-secret'

app.post('/register', (req, res) => {
  const { email, password } = req.body
  const db = router.db.getState()
  const users = db.users

  const exists = users.find(u => u.email === email)
  if (exists) {
    return res.status(400).json({ message: 'Email already exists' })
  }

  const id = Date.now().toString()
  const newUser = { id, email, password }
  router.db.get('users').push(newUser).write()

  const token = jwt.sign({ email, sub: id }, SECRET)
  res.json({ accessToken: token, user: newUser })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const db = router.db.getState()
  const users = db.users

  const user = users.find(u => u.email === email)
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  if (user.password !== password) {
    return res.status(400).json({ message: 'Wrong password' })
  }

  const token = jwt.sign({ email, sub: user.id }, SECRET)
  res.json({ accessToken: token, user })
})

app.use(jsonServer.defaults())
app.use(router)

app.listen(8080, () => {
  console.log('JSON Server is running on port 8080')
})