# Authentication using passportJS

## STEPS

- create our app.js:

```
/////// app.js

const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongoDb = "YOUR MONGO URL HERE";
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
  })
);

const app = express();
app.set("views", __dirname);
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("index"));

app.listen(3000, () => console.log("app listening on port 3000!"));
```

- create our view template (index.ejs):

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <h1>hello world!</h1>
</body>
</html>
```

- Create a new template for creating a user (sign-up-form) *Don’t forget to include sanitation and validation:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <h1>Sign Up</h1>
  <form action="" method="POST">
    <label for="username">Username</label>
    <input name="username" placeholder="username" type="text" />
    <label for="password">Password</label>
    <input name="password" type="password" />
    <button>Sign Up</button>
  </form>
</body>
</html>
```

- and a route for /sign-up in the app.js:

```
//// app.js

app.get("/sign-up", (req, res) => res.render("sign-up-form"));
```

- Create a post for the sign-in form:

```
app.post("/sign-up", (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  }).save(err => {
    if (err) { 
      return next(err);
    }
    res.redirect("/");
  });
});
```

* now you can create users in you database running:
  
```
node app.js
```
and accessing : http://localhost:3000/sign-up

- Create authentication with passportJS localStrategy:
  - setting up the LocalStrategy

    ```
    app.use(
        new LocalStrategy((username, password, done) => {
            User.findOne({ username: username }, (err, user) => {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false, { message: "Incorrect username" })
                }
                if (user.password !== password) {
                    return done(null, false, { message: "Incorrect password" })
                }
                return done(null, user)
            })
        })
    )
    ```
  - creating the information passportJS requires for creating a cookie (they’re used in the background by passport)

    ```
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    ```

- Add the login to the index page:

```
<h1>please log in</h1>
<form action="/log-in" method="POST">
  <label for="username">Username</label>
  <input name="username" placeholder="username" type="text" />
  <label for="password">Password</label>
  <input name="password" type="password" />
  <button>Log In</button>
</form>
```

- Create a post for the login with authentication (passport.authenticate() middleware):

```
app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);
```

- if the cookie returned in the req object says the user is logged in, it also returns the username, so:

```
app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});
```

- and change the index to use the user data if exists:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <% if (user) {%>
    <h1>WELCOME BACK <%= user.username %></h1>
    <a href="/log-out">LOG OUT</a>
  <% } else { %>
    <h1>please log in</h1>
    <form action="/log-in" method="POST">
      <label for="username">Username</label>
      <input name="username" placeholder="username" type="text" />
      <label for="password">Password</label>
      <input name="password" type="password" />
      <button>Log In</button>
    </form>
  <%}%>
</body>
</html>
```

- Add logout post (passport does it for us)

```
app.get("/log-out", (req, res) => {
  req.logout();
  res.redirect("/");
});
```

- Write a custom middleware for getting the local variables from passport locals object
  
```
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
```

- Secure passwords with bcrypt:

```
npm install bcrypt
```

- Update the sign-up POST using bcrypt:

```
bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        // if err, do something
        if (err) return next(err);

        // otherwise, store hashedPassword in DB
        const user = new User({
            username: req.body.username,
            password: hashedPassword
        }).save(err => {
            if (err) { 
              return next(err);
            }
            res.redirect("/");
          });
    }) 
```

- Update the password confirmation in the LocalStrategy for using bcrypt

```
bcrypt.compare(password, user.password, (err, res) => {
    if (res) {
        // passwords match! log user in
        return done(null, user)
    } else {
        // passwords do not match!
        return done(null, false, { message: "Incorrect password" })
    }
})
```