# express-locallibrary-tutorial

## Deploy on Heroku

on the root of hte project open the terminal
- create an app in heroku
```
heroku create my-app-name
```
- set the herokuapp as remote
```
heroku git:remote -a my-app-name
```
- push to heroku
```
git push heroku main
```

## Set configuration variables

this will improve our performance and generate less-verbose error messages
```
heroku config:set NODE_ENV='production'
```

We should also use a separate database for production, so we set the new URI in the MONGODB_URI 
```
heroku config:set MONGODB_URI=mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true
```

## Access the Heroku congig

```
heroku config
```

## Debugin in Heroku client

```
heroku logs  # Show current logs
heroku logs --tail # Show current logs and keep updating with any new results
heroku ps   #Display dyno status
```