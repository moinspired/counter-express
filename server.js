//require my npm modules
let express = require('express');
let bodyParser = require('body-parser')
let session = require('express-session')
const port = 8000

let app = express();
//set up the middleware
//view
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

//Static content
app.use(express.static(__dirname + '/static'));

///POST request helper
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  resave: false,
  secret: 'lotoilkjlasjdfaldsfaidsfoasdofaflajsd;laf',
  saveUninitialized: true,
}))


app.get('/', (req, res) => {
  if('count' in req.session){
    req.session.count++;
  }
  else {
    req.session.count = 1;
  }
  res.render('index', {count: req.session.count})
})


//must be at the bottom of the document
app.listen(port, () => console.log(`listening on port ${port}...`));
