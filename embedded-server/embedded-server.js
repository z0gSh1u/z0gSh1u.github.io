const express = require('express')
const app = express()
app.use(
  express.static('/var/www/zxuuu.tech/dist')
)
app.listen(3000)
console.log('Listening 3000 port.')
