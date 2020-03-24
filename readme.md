# MERN stack

### Project created based on tutorial

https://www.udemy.com/course/mern-stack-front-to-back/

## 1. Basic server setup (006)

> Run inside project's folder

`git init`<br>
`touch .gitignore`<br>
`echo node_modules > .gitignore`<br>
`touch readme.md`<br>
`npm init`<br>
`npm install express`<br>
`npm install mongoose`<br>
`npm install passport`<br>
`npm install passport-jwt`<br>
`npm install jsonwebtoken`<br>
`npm install body-parser`<br>
`npm install bcryptjs`<br>
`npm install validator`<br>
`npm install --save-dev nodemon`<br>

> Add scripts in package.json file

`"start": "node server.js"`<br>
`"server": "nodemon server.js"`<br>

> Run server on localhost:5000

`npm run server`<br>

## 2. Connect to MongoDB (007)

> Add connection to MongoDB using mongoose

## 3. Add routes with express router (008)

> Add routes/api files and use express router

## 4. Create User model (009)

> Create User Schema for MongoDB

## 5. Add user registration (010)

> Create user registration logic

## 6. Email password login (011)

> Add user email and password check

## 7. Create the JWT (012)

> Create the JWT (JSON Web Token)

## 8. JWT authentication (013)

> Add JWT authentication with passport strategy

## 9. Username validation (014)

> Add validation of username when registering

## 10. Login/registration validation (015)

> Add further validation of registration and login information

## 11. Create Profile model (017)

> Create Profile Schema for MongoDB

## 12. Current user profile route (018)

> Create current user profile route

## 13. Create or update profile (019)

> Add create or update profile routes

## 14. Profile validation (020)

> Add validation of profile fields

## 15. More profile API routes (021)

> Create API routes to get profile info (all profiles, by handle, by ID)

## 16. Experience and education routes (022)

> Create experience and education API routes with validation

## 17. DELETE routes (023)

> Create user/profile/experience/education DELETE routes

## 18. Create Post model (024)

> Create PostSchema for posts

## 19. Add post API route (025)

> Create POST route for post creation with validation

## 20. Add more post routes (026)

> Create GET, DELETE routes for posts

## 21. Add post like/unlike routes (027)

> Create POST routes for liking/unliking post

## 22. Add comment routes (028)

> Create POST and DELETE routes for post comments

## 23. Implementing React, setting up assets (030/031)

> Run inside project's folder

`npm i -g create-react-app`<br>
`npm i create-react-app`<br>
`npm i --save-dev concurrently`<br>

> Add proxy in client/package.json

`"proxy": "http://localhost:5000"`

> Add scripts in package.json

`"client-install": "npm install --prefix client"`<br>
`"client": "npm start --prefix client"`<br>
`"dev": "concurrently \"npm run server\" \"npm run client\""`<br>

> Add bootstrap, fontawesome and setup assets

## 24. Add basic layout (032)

> Create Navbar, Landing and Footer components
