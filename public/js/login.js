const app = express();
app.use(passport.initialize());
app.use(passport.session());

module.exports = app;