# Simple CI/CD demo with CircleCI and Heroku

This repository contains the code for a little workshop to create a CI/CD pipeline.
The application used for this workshop is a simple Hello World app, written in Nodejs, that exposes a Http endpoint. 
This will be deployed to Heroku with CircleCI.

You can decide on your own if you want to follow all steps.

## Repository content
```
.
├── __tests__               # Unit test files
├── .circleci               # Directory with CircleCI configuration
├── build                   # Compiled files (generated code)
├── images                  # Images for documentation
├── node_modules            # Directory with dependencies (auto generated)
├── index.js                # Main entry point of the application
├── package.json            # The package.json contains all dependencies of this project and defines scripts to build and test the project
├── Procfile                # The Procfile is used by Heroku to determine the startup command for this application
├── randomNumber.js         # Dummy code to generate a random number
├── rollup.config.js        # Build configuration file
├── yarn.lock               # Lock file for nodejs dependencies
├── LICENSE
└── README.md
```

## Prerequisites
* [Github account](https://github.com/join)
* [CircleCI](https://circleci.com/signup/) access (via Github Single Sign on)
* (optional) [Heroku](https://signup.heroku.com/login) a free Heroku developer account.

## Steps
### Fork this repository
You can create your own fork of this repository by clicking the fork button at the top of this page. Make sure you are signed in to github.com!

Clone the forked git repository by clicking the "Code" dropdown button and follow the steps.

### CircleCI
* Sign in to [CircleCI](https://circleci.com/signup/).
* Open the Projects tab
* You will see your forked github repository
* Click "setup project"
* You will see CircleCI trying to help us with a basic template. We'll use our own ;)
TODO -as- add config.yml hints...
* Click Use existing config once you commited the .circleci/config.yml file
* You'll that see circleci created a pipeline
* It will start the workflow with all jobs every time you commit!


### Heroku
Sign up to [Heroku](https://signup.heroku.com/login). Create your account.

Once you signed up, click create app
* Give your app a unique name
* Create app (without pipeline since we use circleci)
* Nice, you have your app configured in Heroku.

Now get your api key from Heroku:
* Go to your account tab
* Scroll down to the Api Key section and save your api key which we will use later


Now switch back to circleci and configure Heroku secrets (secrets are one of the common exceptions to the everything in sourcecontrol paradigm, although it is not impossible to also have secrets encrypted in sourcecontrol).

Go to the Project Settings in CircleCI and click the tab Environment Variables
* Click Add Environment Variable
* Configure the HEROKU_APP_NAME variable and configure the Heroku App name which you created before.
* Next, configure the HEROKU_API_KEY which you obtained before.

You have configured the Heroku application. You can click on a failed deploy step in CircleCI and hit the Rerun button to start the deployment again.

Now go back to Heroku and open your app.
You'll see that Heroku received a deploy from CircleCI.
* Click the open app button