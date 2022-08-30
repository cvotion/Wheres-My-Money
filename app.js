const express = require('express');
const app = express();
const helmet = require('helmet');
const passport = require('passport');
require('./auth/passport-config')(passport);
const cookieSession = require('cookie-session');
const port = 3000;


app.use(express.static('public'));
app.use(helmet());
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cookieSession({
    name: "session",
    keys: ['j;fkajsd;fhiasgdssjakld'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

app.use(passport.initialize())
app.use(passport.session())

app.listen(port, () => {
    console.log(`port running on port ${port}`);
})