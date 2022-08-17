const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));



// index page
app.get('/', (req, res) => {
  var title = 'About Me'
  var heading = 'Tadesse Adhanom Year Up student'
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})
// about page
app.get('/practices', (req, res) => {
  var title = 'Skills'
  var heading = 'During L&D'
  res.render('pages/practices',{
    'title':title,
    'heading':heading
  })
})

app.get('/about', (req, res) => {
  var title = 'Coding Practice';
  var heading = 'JavaScript and ReactJs'
  res.render('pages/about',{
    'title':title,
    'heading':heading
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
