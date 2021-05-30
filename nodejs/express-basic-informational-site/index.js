const express = require('express');
const app = express();
const path = require('path')
const exphbs = require('express-handlebars')
const members = require('./data')

const logger = require('./middleware/logger')

// Init middleware
// app.use(logger)

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})