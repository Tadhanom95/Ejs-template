const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');

app.set('view engine','ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));



// index page
app.get('/', (req, res) => {
  var title = 'About Me'
  var heading = 'Tadesse Adhanom'
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})
// about page
app.get('/practices', (req, res) => {
  var title = 'Coding Practice'
  var heading = 'During L&D'
  res.render('pages/practices',{
    'title':title,
    'heading':heading
  })
})

app.get('/about', (req, res) => {
  var title = 'Skills';
  var heading = 'Links'
  res.render('pages/about',{
    'title':title,
    'heading':heading,
  })
})

app.get('/users', (req, res) => {
  var title = 'My Users Page';
  var heading = 'My Website'
  res.render('users/index',{
    'title':title,
    'heading':heading,
    'users':data
  })
})

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
  var heading ="My Website";
 res.render('users/view', {
     title: title,
   'heading':heading,
     user: data[--id]
 })
})


app.listen(port, () => {
  console. log(`Example app listening on port ${port}`)
  console.log(data);
})
