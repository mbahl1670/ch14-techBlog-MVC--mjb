# Tech Blog (MVC) - Challenge #14 in the U of MN Bootcamp

## Built With
* Express
* Sequelize
* Mysql2
* dotenv
* express-handlebars
* express-session
* connect-session-sequelize

## Description
This is a CMS-style blog site similiar to a Wordpress site, built from the back end to the front end using the Handelbars Template Engine

## Table of Contents
* [Installation](#installation)
* [Acceptance Criteria](#acceptance-criteria)
* [Heroku Link](#heroku-link)
* [Screenshot of the Application](#screenshot-of-the-application)
* [Git Repository](#git-repository)
* [How this was accomplished](#how-this-was-accomplished)

## Installation
* npm init -y
* npm install express sequelize mysql2 dotenv express-handlebars express-session connect-session-sequelize


## Acceptance Criteria
* WHEN I visit the site for the first time
  * THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option t login
* WHEN I click on the homepage option
  * THEN I am taken to the homepage
* WHEN I click on any other links in the navigation
  * THEN I am prompted to either sign up or sign in
* WHEN I choose to sign up
  * THEN I am prompted to create a username and password
* WHEN I click on the sign-up button
  * THEN my user credentials are saved and I am logged into the site
* WHEN I revisit the site at a later time and choose to sign in
  * THEN I am prompted to enter my username and password
* WHEN I am signed in to the site
  * THEN I see navigation links for the homepage, the dashboard, and the option to log out
* WHEN I click on the homepage option in the navigation
  * THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
* WHEN I click on an existing blog post
  * THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
* WHEN I enter a comment and click on the submit button while signed in
  * THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
* WHEN I click on the dashboard option in the navigation
  * THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
* WHEN I click on the button to add a new blog post
  * THEN I am prompted to enter both a title and contents for my blog post
* WHEN I click on the button to create a new blog post
  * THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
* WHEN I click on one of my existing posts in the dashboard
  * THEN I am able to delete or update my post and taken back to an updated dashboard
* WHEN I click on the logout option in the navigation
  * THEN I am signed out of the site
* WHEN I am idle on the page for more than a set time
  * THEN I am automatically signed out of the site

## Heroku Link
https://nameless-gorge-60773.herokuapp.com/

## Screenshot of the Application


## Git Repository
https://github.com/mbahl1670/ch14-techBlogMVC-mjb


## How this was accomplished
* Started with creating the models thent he API routes
* This was a difficult assignment, had difficulty figuring out Handlebars and how to use it correctly, there was a lot of borrowing from async module 14 material
* Tried to add styling to match the mock-up, gave up due to lack of time.  Used the styling sheet from Module 14 async material and some bootstrap to style the challenge
