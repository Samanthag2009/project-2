const express = require("express");
const path = require("path");
// Import express-session
const session = require("express-session");
const exphbs = require("express-handlebars");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 8080;

// Set up sessions
const sess = {
  secret: "Super secret secret",
  cookie: {
    // keeps your session for 1 hour.
    maxAge: 60 * 60 * 1000,
    // tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
    httpOnly: true,
    // tells expess-session to use cookies only when the protocall is HTTPS.
    secure: false,
    // only use session cookies if you are on the same domain
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));


const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
