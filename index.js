const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require("path");
var morgan = require('morgan')
var cookieParser = require('cookie-parser');

var flash    = require('connect-flash');
var methodOverride = require('method-override')
const helmet = require('helmet')


const app = express();
app.use(
  cors({
    // origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true
  })
);


app.use(express.json());

// mongoose uri

// Connect to mongoose

// mongoose
//   .connect(db, 
//     {
//       useNewUrlParser : true,
//       useCreateIndex : true,
//       useUnifiedTopology: true 

//     })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch(err => console.log(err));



app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); //
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
    limit : "50mb"
  }));
  /** VIEWS CONFIGURATION */
  /** SERVING PUBLIC FILES */
  app.use(express.static(path.join(__dirname, "public")));
  /** SERVING PUBLIC FILES */
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
  /** VIEWS CONFIGURATION */
  
  app.use(flash()); // use connect-flash for flash messages stored in session
 
  /** END PASPORT */
// Use Routes

// app.use('/', require('./routes/index'))
// app.use('/', require('./routes/user'))


/*** AUTH ROUTE */

app.use(methodOverride('_method'))



// app.use(helmet())


/** END AUTH ROUTE */
app.use('/', require('./routes/index'))










app.locals.title="Agro"
app.locals.notifications = []
// app.localsauthenticated = !req.user.anonymous


app.set("port", process.env.PORT || 3333);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

