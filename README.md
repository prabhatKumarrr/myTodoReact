myTodoApp

It is a Full Stack Web application built using:


Frontend - ReactJs/HTML/CSS/JS

Backend - NodeJs/Express

DB - mongoDB

some other libraries for validation and authentication like JWT, Zod, Bcrypt,etc

Functionalities:


Signup/Login

Add Todo


Delete Todo

Mark as Done/Unmark a Todo

Clear all todos

I have used token based authentication for login Functionalities also i am storing the hashed password value generated using Bcrypt instead of the plain password into the database for user

Demo: To check run the app in your machine just pull the code :


create the .env file and configure it according to example

hit npm install in terminal

(~for both client as well as server folders separately)
then on separate teriminals start both servers:
  -for Client - npm run dev (--localhost:5173)
  -for Server - npm start
(--localhost:5000)
just goto: https://localhost:5173/ on any browser

There is a tool to start both servers concurrently with a single command i havent set it up yet though!
