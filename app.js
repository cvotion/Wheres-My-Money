const express = require('express');
const app = express();
const helmet = require('helmet');
const passport = require('passport');
require('./public/chartjs/index');
const Chart = require('chart.js');
require('./auth/passport-config')(passport);
const cookieSession = require('cookie-session');
const port = 3000;

const db = require('./models');

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

//**  Routes  **/

app.use(require('./routes/api.js'))
app.use(require('./routes/login.js'))
app.use(require('./routes/index.js'))
app.use(require('./routes/register.js'))
app.use(require('./routes/transaction-form.js'))


app.listen(port, () => {
    console.log(`port running on port ${port}`);
})